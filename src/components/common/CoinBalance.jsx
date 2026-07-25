import { Link } from 'react-router-dom'
import { useSettings } from '../../context/SettingsContext'

export default function CoinBalance({ amount = 5 }) {
  const { settings } = useSettings()

  return (
    <Link to="/estudos" className="coin-balance" title="Saldo de Estudos">
      <div className="coin-count">
        <strong>{settings.hideBalance ? '••' : amount}</strong>
        <span>Std</span>
      </div>

      <div className="coin-icon">
        <span>STD</span>
      </div>
    </Link>
  )
}
