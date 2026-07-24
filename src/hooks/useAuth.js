import { useState } from 'react'

// Placeholder — troque pela lógica real de autenticação
// (normalmente chamando funções de src/services/api.js)
export function useAuth() {
  const [user, setUser] = useState(null)

  function login(email, _password) {
    // TODO: chamada real de login
    setUser({ email })
  }

  function logout() {
    setUser(null)
  }

  return { user, login, logout }
}
