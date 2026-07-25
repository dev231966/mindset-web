import { Link } from 'react-router-dom'

export default function MiniCard({ to, label, icon, variant, value, live = false }) {
  const classNames = ['mini-card', variant ? `mini-card-${variant}` : '']
    .filter(Boolean)
    .join(' ')

  return (
    <Link to={to} className={classNames}>
      {live && <span className="mini-card-live" />}

      <div className="mini-card-icon">{icon}</div>

      {value !== undefined && (
        <div className="mini-card-gold-value">{value}</div>
      )}

      <div className="mini-card-label">{label}</div>
    </Link>
  )
}
