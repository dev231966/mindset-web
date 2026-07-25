import { Link } from 'react-router-dom'

export default function MiniCard({ to, label, icon, featured = false, gold = false, value }) {
  const classNames = [
    'mini-card',
    featured ? 'mini-card-featured' : '',
    gold ? 'mini-card-gold' : '',
  ].filter(Boolean).join(' ')

  return (
    <Link to={to} className={classNames}>
      <div className="mini-card-icon">{icon}</div>

      {value !== undefined && (
        <div className="mini-card-gold-value">{value}</div>
      )}

      <div className="mini-card-label">{label}</div>
    </Link>
  )
}
