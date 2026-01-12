export function getItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setItem(key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function removeToken(key) {
  return localStorage.removeItem(key)
}
export function removeAll() {
  return localStorage.clear()
}