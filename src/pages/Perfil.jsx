import { useEffect, useRef, useState } from 'react'
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
  const fileInputRef = useRef(null)
  const menuRef = useRef(null)

  const [avatarUrl, setAvatarUrl] = useState(null)
  const [menuAberto, setMenuAberto] = useState(false)

  const [nome, setNome] = useState('Juvêncio Penga')
  const [nickname, setNickname] = useState('juvencio_dev')
  const [telefone, setTelefone] = useState('84 123 4567')
  const email = 'juvencio@email.com'

  useEffect(() => {
    function handleClickFora(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false)
      }
    }

    document.addEventListener('mousedown', handleClickFora)
    return () => document.removeEventListener('mousedown', handleClickFora)
  }, [])

  function handleEscolherFicheiro() {
    fileInputRef.current?.click()
    setMenuAberto(false)
  }

  function handleFicheiroSelecionado(event) {
    const ficheiro = event.target.files?.[0]
    if (!ficheiro) return

    const leitor = new FileReader()
    leitor.onload = () => setAvatarUrl(leitor.result)
    leitor.readAsDataURL(ficheiro)
  }

  function handleRemoverFoto() {
    setAvatarUrl(null)
    setMenuAberto(false)
  }

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

        <div className="glass info-card identity-card">

          <div className="identity-avatar-block" ref={menuRef}>
            <button
              type="button"
              className="avatar avatar-lg avatar-editable"
              onClick={() => setMenuAberto((atual) => !atual)}
              aria-label="Alterar foto de perfil"
            >
              {avatarUrl ? <img src={avatarUrl} alt="Foto de perfil" /> : 'J'}

              <span className="avatar-edit-badge">
                {icon(<><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" /></>, 12)}
              </span>
            </button>

            {menuAberto && (
              <div className="menu-popover">
                <button className="menu-popover-item" type="button" onClick={handleEscolherFicheiro}>
                  {icon(<><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></>, 16)}
                  Carregar foto
                </button>

                {avatarUrl && (
                  <button className="menu-popover-item danger" type="button" onClick={handleRemoverFoto}>
                    {icon(<><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /></>, 16)}
                    Remover foto
                  </button>
                )}
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFicheiroSelecionado}
              style={{ display: 'none' }}
            />
          </div>

          <div className="field-grid">
            <div className="field">
              <label htmlFor="campo-nome">Nome</label>
              <input id="campo-nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>

            <div className="field">
              <label htmlFor="campo-nickname">Nickname</label>
              <input id="campo-nickname" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </div>

            <div className="field">
              <label htmlFor="campo-telefone">Número de telefone</label>
              <input id="campo-telefone" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            </div>

            <div className="field">
              <label htmlFor="campo-email">Email</label>
              <input id="campo-email" type="email" value={email} disabled />
            </div>
          </div>

          <button className="btn btn-primary" type="button">
            Guardar alterações
          </button>

        </div>

        <div className="stat-grid">
          <div className="stat-block">
            <span className="stat-block-value">12º</span>
            <span className="stat-block-label">no Quadro de Honra</span>
          </div>

          <div className="stat-block">
            <span className="stat-block-value">7</span>
            <span className="stat-block-label">dias de sequência</span>
          </div>

          <div className="stat-block">
            <span className="stat-block-value">3</span>
            <span className="stat-block-label">conquistas</span>
          </div>

          <div className="stat-block">
            <span className="stat-block-value">24</span>
            <span className="stat-block-label">explicações pedidas</span>
          </div>
        </div>

        <div className="glass info-card settings-card">
          <strong className="settings-card-head">Conquistas Desbloqueadas</strong>

          <div className="badge-list">
            {conquistasExemplo.map((conquista) => (
              <div className="badge-item" key={conquista.id}>
                <span className="badge-icon">
                  {icon(<><circle cx="12" cy="12" r="9" /><polyline points="8 12 12 16 16 12" /></>, 16)}
                </span>
                <div className="badge-text">
                  <strong>{conquista.nome}</strong>
                  <span>{conquista.data}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}
