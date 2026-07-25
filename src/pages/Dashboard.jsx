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

  // Dados de estatísticas gerais
  const stats = {
    cursosAtivos: 8,
    progressoGeral: 72,
    taxaPresenca: 91,
    mediaNotas: 78,
    horasEstudo: 46,
    sequenciaEstudo: 12,
  }

  return (
    <div className="shell">
      
      {/* Cabeçalho de boas-vindas */}
      <div className="dashboard-welcome glass">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1>Bem-vindo de volta, Estudante</h1>
            <p>2º Trimestre 2026 • Ensino Secundário</p>
          </div>
          <div className="welcome-actions">
            <button className="btn btn-primary">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Continuar a Aprender
            </button>
          </div>
        </div>
      </div>

      {/* Estatísticas principais */}
      <div className="dashboard-stats">
        <div className="stat-card glass">
          <div className="stat-icon-box tint-primary">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.cursosAtivos}</div>
            <div className="stat-label">Cursos Ativos</div>
          </div>
        </div>

        <div className="stat-card glass">
          <div className="stat-icon-box tint-success">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.progressoGeral}%</div>
            <div className="stat-label">Progresso Geral</div>
          </div>
        </div>

        <div className="stat-card glass">
          <div className="stat-icon-box tint-accent">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.taxaPresenca}%</div>
            <div className="stat-label">Taxa de Presença</div>
          </div>
        </div>

        <div className="stat-card glass">
          <div className="stat-icon-box tint-warning">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.mediaNotas}%</div>
            <div className="stat-label">Média de Notas</div>
          </div>
        </div>
      </div>

      {/* Métricas adicionais */}
      <div className="dashboard-metrics">
        <div className="metric-card glass">
          <div className="metric-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="metric-info">
            <strong>{stats.horasEstudo}h</strong>
            <span>Horas de Estudo</span>
          </div>
        </div>

        <div className="metric-card glass">
          <div className="metric-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div className="metric-info">
            <strong>{stats.sequenciaEstudo} dias</strong>
            <span>Sequência de Estudo</span>
          </div>
        </div>

        <div className="metric-card glass">
          <div className="metric-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="metric-info">
            <strong>{saldo} Std</strong>
            <span>Saldo Disponível</span>
          </div>
        </div>
      </div>

      {/* Ações principais */}
      <div className="dashboard-actions">
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

      {/* Faixa de apoio */}
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
