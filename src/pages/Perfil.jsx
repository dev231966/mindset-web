import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EditableText from '../components/common/EditableText'

const icon = (paths, size = 20) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
)

const dadosOriginais = {
  nome: 'Juvêncio Penga',
  nickname: 'juvencio_dev',
  telefone: '84 123 4567',
}

const email = 'juvencio@email.com'

export default function Perfil() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const menuRef = useRef(null)

  const [avatarUrl, setAvatarUrl] = useState(null)
  const [menuAberto, setMenuAberto] = useState(false)

  const [nome, setNome] = useState(dadosOriginais.nome)
  const [nickname, setNickname] = useState(dadosOriginais.nickname)
  const [telefone, setTelefone] = useState(dadosOriginais.telefone)

  const isDirty =
    nome !== dadosOriginais.nome ||
    nickname !== dadosOriginais.nickname ||
    telefone !== dadosOriginais.telefone

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

  function handleCancelar() {
    setNome(dadosOriginais.nome)
    setNickname(dadosOriginais.nickname)
    setTelefone(dadosOriginais.telefone)
  }

  function handleGuardar() {
    dadosOriginais.nome = nome
    dadosOriginais.nickname = nickname
    dadosOriginais.telefone = telefone
  }

  return (
    <div className="shell perfil-shell">

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
              className="avatar avatar-xl avatar-editable"
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

          <EditableText value={nome} onChange={setNome} className="identity-name" />

          <div className="identity-nickname-row">
            <span>@</span>
            <EditableText value={nickname} onChange={setNickname} className="identity-nickname" />
          </div>

          <div className="identity-divider" />

          <div className="identity-secondary-row">
            <div className="identity-secondary-item">
              {icon(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />, 14)}
              <EditableText value={telefone} onChange={setTelefone} className="identity-secondary-text" />
            </div>

            <div className="identity-secondary-item">
              {icon(<><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>, 14)}
              <span className="identity-secondary-text identity-secondary-disabled">{email}</span>
            </div>
          </div>

          {isDirty && (
            <div className="identity-actions">
              <button className="btn btn-ghost" type="button" onClick={handleCancelar}>Cancelar</button>
              <button className="btn btn-primary" type="button" onClick={handleGuardar}>Guardar alterações</button>
            </div>
          )}

        </div>

        <div className="glass info-card">
          <div className="stat-grid">

            <Link to="/quadro-honra" className="stat-block">
              <span className="card-icon-box tint-warning">
                {icon(<><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></>, 18)}
              </span>
              <span className="stat-block-value">12º</span>
              <span className="stat-block-label">Quadro de Honra</span>
            </Link>

            <Link to="/sequencia-estudo" className="stat-block">
              <span className="card-icon-box tint-danger">
                {icon(<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />, 18)}
              </span>
              <span className="stat-block-value">7</span>
              <span className="stat-block-label">dias seguidos</span>
            </Link>

            <Link to="/conquistas" className="stat-block">
              <span className="card-icon-box tint-success">
                {icon(<><path d="M8 3h8v6a4 4 0 0 1-8 0V3z" /><path d="M8 5H5a3 3 0 0 0 3 3" /><path d="M16 5h3a3 3 0 0 1-3 3" /><path d="M12 13v4" /><path d="M9 21h6" /></>, 18)}
              </span>
              <span className="stat-block-value">3</span>
              <span className="stat-block-label">conquistas</span>
            </Link>

            <Link to="/evolucao" className="stat-block">
              <span className="card-icon-box tint-accent">
                {icon(<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />, 18)}
              </span>
              <span className="stat-block-value">24</span>
              <span className="stat-block-label">explicações</span>
            </Link>

          </div>
        </div>

      </div>

    </div>
  )
}
