import MiniCard from '../components/dashboard/MiniCard'
import DesempenhoCard from '../components/dashboard/DesempenhoCard'
import DuvidasRecentesCard from '../components/dashboard/DuvidasRecentesCard'
import '../style/dashboard.css'

export default function Dashboard() {
  // Dados de exemplo de um estudante no início de percurso, sem histórico ainda.
  // Isto passa a vir da API depois, substitui-se aqui sem tocar nos componentes.
  const saldo = 5

  const desempenho = {
    disciplina: null,
    percentagem: 0,
    topicosCobertos: 0,
    totalTopicos: 0,
  }

  const duvidasRecentes = []

  return (
    <div className="shell">

      <div className="dashboard-grid">

        <MiniCard
          to="/explicacao"
          label="Explicação"
          variant="featured"
          live
          icon={
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          }
        />

        <MiniCard
          to="/avaliacao"
          label="Avaliação"
          variant="avaliacao"
          icon={
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          }
        />

        <MiniCard
          to="/estudos"
          label="Estudos"
          variant="gold"
          value={`${saldo} Std`}
          icon={
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3" />
              <line x1="12" y1="16" x2="12" y2="16.01" />
            </svg>
          }
        />

        <MiniCard
          to="/ferramentas"
          label="Ferramentas"
          variant="ferramentas"
          icon={
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" />
            </svg>
          }
        />

        <MiniCard
          to="/material"
          label="Meu Material"
          variant="material"
          icon={
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          }
        />

      </div>

      <div className="dashboard-support">
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
