import { useNavigate } from 'react-router-dom'

const conquistasExemplo = [
  { id: 1, nome: 'Primeira Dúvida', data: '12 mar' },
  { id: 2, nome: 'Semana Completa', data: '19 mar' },
  { id: 3, nome: 'Explicação Compreendida', data: '26 mar' },
]

const icon = (paths, size = 20) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
)

export default function Perfil() {
  const navigate = useNavigate()

  return (
    <div className="shell">

      <div className="settings-topbar">
        <h1>Perfil</h1>

        <button
          className="notif-close"
          aria-label="Fechar perfil"
          type="button"
          onClick={() => navigate('/dashboard')}
        >
          {icon(
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          )}
        </button>
      </div>

      <div className="perfil-container">

        <div className="glass perfil-card perfil-head">
          <div className="perfil-avatar-large">J</div>

          <div className="perfil-user-data">
            <strong>Juvêncio Penga</strong>
            <span>@juvencio_dev</span>
            <span className="perfil-email">juvencio@email.com</span>
          </div>

          <button className="btn btn-primary" type="button">
            Editar Perfil
          </button>
        </div>

        <div className="perfil-stats">
          <div className="perfil-stat">
            <span className="perfil-stat-value">12º</span>
            <span className="perfil-stat-label">no Quadro de Honra</span>
          </div>

          <div className="perfil-stat">
            <span className="perfil-stat-value">7</span>
            <span className="perfil-stat-label">dias de sequência</span>
          </div>

          <div className="perfil-stat">
            <span className="perfil-stat-value">3</span>
            <span className="perfil-stat-label">conquistas</span>
          </div>

          <div className="perfil-stat">
            <span className="perfil-stat-value">24</span>
            <span className="perfil-stat-label">explicações pedidas</span>
          </div>
        </div>

        <div className="glass info-card settings-card">
          <strong className="settings-card-head">Conquistas Desbloqueadas</strong>

          <div className="perfil-conquistas">
            {conquistasExemplo.map((conquista) => (
              <div className="perfil-conquista-badge" key={conquista.id}>
                <span className="perfil-conquista-icon">
                  {icon(<><circle cx="12" cy="12" r="9" /><polyline points="8 12 12 16 16 12" /></>, 16)}
                </span>
                <div className="perfil-conquista-text">
                  <strong>{conquista.nome}</strong>
                  <span>{conquista.data}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="perfil-obsolete">
          <button className="btn btn-danger" type="button" disabled>
            Eliminar conta
          </button>
          <span className="settings-badge-soon">obsolete</span>
        </div>

      </div>

    </div>
  )
}
