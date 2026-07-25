import { Link } from 'react-router-dom'
import CoinBalance from '../common/CoinBalance'

export default function Header() {
  return (
   <header className="header">
  <div className="header-container">

    {/* Logo Section */}
    <a href="#" className="logo-section">
      <div className="logo-icon">M</div>

      <div className="logo-text">
        <h1>Mindset</h1>
        <p>DASHBOARD</p>
      </div>
    </a>


    {/* Header Actions */}
    <div className="header-actions">

      {/* Saldo de Estudos */}
      <CoinBalance amount={5} />

      {/* Notifications */}
      <div 
        className="notification-icon" 
        id="notifIcon" 
        title="Notificações"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>

        <span className="notification-badge">
          3
        </span>

      </div>

    </div>


    {/* Botão Abrir/Fechar Sidebar */}
    <button 
      className="sidebar-toggle" 
      id="sidebarToggle"
      aria-label="Abrir/Fechar menu lateral"
    >

      <div className="bar">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </button>


  </div>
</header>
  )
}
