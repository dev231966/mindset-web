import ActionBanner from '../components/dashboard/ActionBanner'
import SaldoEstudosCard from '../components/dashboard/SaldoEstudosCard'
import DesempenhoCard from '../components/dashboard/DesempenhoCard'
import DuvidasRecentesCard from '../components/dashboard/DuvidasRecentesCard'

export default function Dashboard() {
  // Dados de exemplo de um estudante no início de percurso, sem histórico ainda.
  // Isto passa a vir da API depois, substitui-se aqui sem tocar nos componentes.
  const saldo = 5
  const variacaoSemana = -2
  const custoExplicacao = 2
  const disciplinaSugerida = null

  const desempenho = {
    disciplina: null,
    percentagem: 0,
    topicosCobertos: 0,
    totalTopicos: 0,
  }

  const duvidasRecentes = []

  return (
    <div className="shell">

      <ActionBanner
        suggestedSubject={disciplinaSugerida}
        cost={custoExplicacao}
        balance={saldo}
      />

      <div className="cards-grid">
        <SaldoEstudosCard saldo={saldo} variacaoSemana={variacaoSemana} />

        <DesempenhoCard
          disciplina={desempenho.disciplina}
          percentagem={desempenho.percentagem}
          topicosCobertos={desempenho.topicosCobertos}
          totalTopicos={desempenho.totalTopicos}
        />

        <DuvidasRecentesCard duvidas={duvidasRecentes} />
      </div>

    </div>
  )
}
