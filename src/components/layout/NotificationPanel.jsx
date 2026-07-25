import { useEffect } from 'react'

const notificacoesExemplo = [
  {
    id: 1,
    titulo: 'A tua explicação de Matemática está pronta',
    tempo: 'há 12 minutos',
  },
  {
    id: 2,
    titulo: 'Saldo baixo, restam 2 Std',
    tempo: 'há 3 horas',
  },
  {
    id: 3,
    titulo: 'Um amigo aceitou o teu convite, ganhaste 3 Std',
    tempo: 'ontem',
  },
]

export default function NotificationPanel() {
  useEffect(() => {
    const body = document.body
    const notifIcon = document.getElementById('notifIcon')
    const notifOverlay = document.getElementById('notifOverlay')
    const notifClose = document.getElementById('notifClose')

    function toggleNotif() {
      body.classList.toggle('notif-open')
    }

    function closeNotif() {
      body.classList.remove('notif-open')
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') closeNotif()
    }

    notifIcon?.addEventListener('click', toggleNotif)
    notifOverlay?.addEventListener('click', closeNotif)
    notifClose?.addEventListener('click', closeNotif)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      notifIcon?.removeEventListener('click', toggleNotif)
      notifOverlay?.removeEventListener('click', closeNotif)
      notifClose?.removeEventListener('click', closeNotif)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const temNotificacoes = notificacoesExemplo.length > 0

  return (
    <>
      <div className="notif-overlay" id="notifOverlay"></div>

      <aside className="notif-panel" id="notifPanel">

        <div className="notif-panel-head">
          <strong>Notificações</strong>

          <button className="notif-close" id="notifClose" aria-label="Fechar notificações" type="button">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="notif-list">
          {temNotificacoes ? (
            notificacoesExemplo.map((notificacao) => (
              <div className="notif-item" key={notificacao.id}>
                <span className="notif-dot"></span>

                <div className="notif-item-body">
                  <strong>{notificacao.titulo}</strong>
                  <span>{notificacao.tempo}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <strong>Sem notificações novas</strong>
              <span>Assim que algo acontecer, aparece aqui.</span>
            </div>
          )}
        </div>

      </aside>
    </>
  )
}
