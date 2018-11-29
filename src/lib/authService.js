function getToken() {
  return localStorage.getItem('token')
}

function setToken(token) {
  return localStorage.setItem('token', token)
}

function isLoggedIn() {
  return localStorage.getItem('token') ? true : false
}

function logout() {
  return localStorage.removeItem('token')
}

export {
  getToken,
  setToken,
  isLoggedIn,
  logout
}