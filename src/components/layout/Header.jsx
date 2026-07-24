import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">mindset-v1</Link>
      <nav>
        <Link to="/login">Entrar</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  )
}
