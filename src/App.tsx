import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { Home, Login, Registration, Leads, Profile } from '@/pages'

function App() {
  const ProtectedRoute = () => {
    const checkAuthCookie = Cookies.get('Authorization')
    if (!checkAuthCookie) {
      alert('Authentication is required')
      return <Navigate to="/" replace />
    }
    return <Outlet />
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
