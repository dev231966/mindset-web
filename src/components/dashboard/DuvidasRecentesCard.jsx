export default function DuvidasRecentesCard({ duvidas = [] }) {
  const temDuvidas = duvidas.length > 0

  return (
    <div className="glass info-card activity-card compact-card">

      <div className="activity-head">
        <strong>Dúvidas Recentes</strong>
        {temDuvidas && <a href="/duvidas">Ver todas</a>}
      </div>

      {temDuvidas ? (
        <div className="activity-list">
          {duvidas.map((duvida) => (
            <div className="activity-item" key={duvida.id}>
              <div className="activity-icon accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>

              <div className="activity-body">
                <strong>{duvida.disciplina}, {duvida.tipo}</strong>
                <span>{duvida.tempo}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <strong>Ainda não tiraste nenhuma dúvida</strong>
          <span>A tua primeira explicação aparece aqui assim que a pedires.</span>
        </div>
      )}

    </div>
  )
}
