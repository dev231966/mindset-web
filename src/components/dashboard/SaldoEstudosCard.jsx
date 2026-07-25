const CUSTO_EXPLICACAO_SIMPLES = 2

export default function SaldoEstudosCard({ saldo = 0, variacaoSemana = 0 }) {
  const explicacoesDisponiveis = Math.floor(saldo / CUSTO_EXPLICACAO_SIMPLES)
  const subiu = variacaoSemana >= 0

  return (
    <div className="glass info-card stat-card">

      <div className="stat-top">
        <div className="card-icon-box tint-warning">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3" />
            <line x1="12" y1="16" x2="12" y2="16.01" />
          </svg>
        </div>

        <span className={`trend-badge${subiu ? "" : " down"}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {subiu ? <polyline points="18 15 12 9 6 15" /> : <polyline points="6 9 12 15 18 9" />}
          </svg>
          {Math.abs(variacaoSemana)} Std esta semana
        </span>
      </div>

      <div className="stat-body">
        <div className="stat-value">{saldo} Std</div>
        <div className="stat-label">Saldo de Estudos</div>
      </div>

      <div className="stat-caption">
        {explicacoesDisponiveis > 0
          ? `Dá para pedir mais ${explicacoesDisponiveis} explicações simples com este saldo.`
          : "Saldo insuficiente para uma nova explicação simples."}
      </div>

    </div>
  )
}
