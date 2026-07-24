import { useState } from 'react'
import Button from '../components/common/Button.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: ligar isso na autenticação real (ver src/services/api.js)
    console.log('login attempt', { email })
  }

  return (
    <section className="page">
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          E-mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <Button type="submit">Entrar</Button>
      </form>
    </section>
  )
}
