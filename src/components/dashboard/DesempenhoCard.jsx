export default function DesempenhoCard({ disciplina, percentagem = 0, topicosCobertos = 0, totalTopicos = 0 }) {
  const temProgresso = Boolean(disciplina) && totalTopicos > 0

  return (
    <div className="glass info-card progress-card">

      <div className="progress-top">
        <div className="progress-title">
          <strong>{temProgresso ? disciplina : "Desempenho"}</strong>
          <span>
            {temProgresso ? "Progresso na disciplina mais estudada" : "Ainda sem disciplina em destaque"}
          </span>
        </div>

        {temProgresso && <span className="progress-percent">{percentagem}%</span>}
      </div>

      {temProgresso ? (
        <>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${percentagem}%` }}></div>
          </div>

          <div className="progress-foot">
            <span>{topicosCobertos} de {totalTopicos} tópicos cobertos</span>
          </div>
        </>
      ) : (
        <div className="empty-state">
          <strong>Ainda sem progresso registado</strong>
          <span>Começa por tirar a tua primeira dúvida numa disciplina.</span>
          <a href="/duvida/nova">Tirar a primeira dúvida</a>
        </div>
      )}

    </div>
  )
}
