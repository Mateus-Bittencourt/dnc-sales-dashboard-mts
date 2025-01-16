import Cookies from 'js-cookie'

export function logout() {
  if (confirm('Are you sure you want to log out?')) {
    Cookies.remove('Authorization')
    window.location.href = '/'
  }
}
