import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<>Sign In</>} />
        <Route path="/signup" element={<>Sign Up</>} />
        <Route path="/home" element={<>Home</>} />
        <Route path="/leads" element={<>Leads</>} />
        <Route path="/profile" element={<>Profile</>} />
      </Routes>
    </Router>
  )
}

export default App
