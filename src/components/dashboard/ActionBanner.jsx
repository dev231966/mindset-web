export default function ActionBanner({ suggestedSubject, cost = 2, balance = 0 }) {
  const hasSuggestion = Boolean(suggestedSubject)
  const canAfford = balance >= cost
  const missing = cost - balance

  return (
    <div className="glass action-banner">

      <div className="action-banner-copy">
        <p className="action-banner-eyebrow">Precisas de ajuda agora?</p>

        <h2 className="action-banner-title">
          {hasSuggestion
            ? `Continuar a dúvida em ${suggestedSubject}?`
            : "Em que disciplina estás preso agora?"}
        </h2>

        <p className="action-banner-subtitle">
          Explica a tua dúvida e recebe uma explicação passo a passo em minutos.
        </p>
      </div>

      <div className="action-banner-cta">
        <span className="cost-badge">{cost} Std</span>

        {canAfford ? (
          <a href="/duvida/nova" className="btn btn-primary">
            Tirar dúvida agora
          </a>
        ) : (
          <a href="/estudos/comprar" className="btn btn-secondary">
            Comprar Estudos
          </a>
        )}
      </div>

      {!canAfford && (
        <p className="action-banner-warning">
          Saldo insuficiente. Precisas de mais {missing} Std para esta explicação.
        </p>
      )}

    </div>
  )
}
