import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useSettings } from '../context/SettingsContext'
import Toggle from '../components/common/Toggle'
import SettingsSection from '../components/settings/SettingsSection'
import SettingsRow from '../components/settings/SettingsRow'
import SettingsSelect from '../components/settings/SettingsSelect'

const icon = (paths, size = 20) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
)

const chevron = icon(<path d="M9 18l6-6-6-6" />, 16)

export default function Configuracoes() {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const { settings, updateSetting } = useSettings()

  function terminarTodasSessoes() {
    logout()
    navigate('/login')
  }

  return (
    <div className="shell">

      <div className="settings-topbar">
        <h1>Configurações</h1>

        <button
          className="notif-close"
          aria-label="Fechar configurações"
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

      <div className="settings-grid">

        <SettingsSection title="Aparência" icon={icon(<><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></>)}>
          <SettingsRow
            label="Ocultar saldo no header"
            description="Mostra •• Std em vez do valor exato"
            control={<Toggle checked={settings.hideBalance} onChange={(v) => updateSetting('hideBalance', v)} label="Ocultar saldo no header" />}
          />
          <div className="settings-divider" />
          <SettingsRow
            label="Desativar animações"
            description="Desliga brilhos e transições em toda a aplicação"
            control={<Toggle checked={settings.disableAnimations} onChange={(v) => updateSetting('disableAnimations', v)} label="Desativar animações" />}
          />
          <div className="settings-divider" />
          <SettingsRow
            label="Modo poupança de dados"
            description="Desliga desfoque, sombras e animações de uma vez"
            control={<Toggle checked={settings.dataSaver} onChange={(v) => updateSetting('dataSaver', v)} label="Modo poupança de dados" />}
          />
        </SettingsSection>

        <SettingsSection tint="accent" title="Notificações" icon={icon(<><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>)}>
          <SettingsRow
            label="Explicação pronta"
            control={<Toggle checked={settings.notifyExplicacaoPronta} onChange={(v) => updateSetting('notifyExplicacaoPronta', v)} label="Explicação pronta" />}
          />
          <div className="settings-divider" />
          <SettingsRow
            label="Saldo baixo"
            control={<Toggle checked={settings.notifySaldoBaixo} onChange={(v) => updateSetting('notifySaldoBaixo', v)} label="Saldo baixo" />}
          />
          <div className="settings-divider" />
          <SettingsRow
            label="Convites aceites"
            control={<Toggle checked={settings.notifyConvites} onChange={(v) => updateSetting('notifyConvites', v)} label="Convites aceites" />}
          />
          <div className="settings-divider" />
          <SettingsRow
            label="Novidades da plataforma"
            control={<Toggle checked={settings.notifyNovidades} onChange={(v) => updateSetting('notifyNovidades', v)} label="Novidades da plataforma" />}
          />
        </SettingsSection>

        <SettingsSection tint="success" title="Privacidade" icon={icon(<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />)}>
          <SettingsRow
            label="Localização"
            description="Permitir que outros estudantes te vejam por perto"
            control={<Toggle checked={settings.locationVisible} onChange={(v) => updateSetting('locationVisible', v)} label="Localização" />}
          />
          <div className="settings-divider" />
          <SettingsRow
            label="Nome real no Quadro de Honra"
            description="Se desligares, aparece o teu apelido"
            control={<Toggle checked={settings.rankingComNomeReal} onChange={(v) => updateSetting('rankingComNomeReal', v)} label="Nome real no Quadro de Honra" />}
          />
          <div className="settings-divider" />
          <SettingsSelect
            label="Quem pode ver o meu perfil"
            value={settings.perfilVisivelPara}
            onChange={(v) => updateSetting('perfilVisivelPara', v)}
            options={[
              { value: 'todos', label: 'Todos' },
              { value: 'convidados', label: 'Só convidados' },
              { value: 'ninguem', label: 'Ninguém' },
            ]}
          />
        </SettingsSection>

        <SettingsSection tint="danger" title="Conta" icon={icon(<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></>)}>
          <SettingsRow
            label="Terminar sessão em todos os dispositivos"
            control={<button className="btn btn-secondary" type="button" onClick={terminarTodasSessoes}>Terminar</button>}
          />
        </SettingsSection>

        <SettingsSection title="Sobre" icon={icon(<><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>)}>
          <SettingsRow label="Versão" control={<span className="settings-static-value">Mindset 1.0.0</span>} />
          <div className="settings-divider" />
          <Link to="/ajuda-suporte" className="settings-link-row">
            <span>Ajuda &amp; Suporte</span>
            {chevron}
          </Link>
          <div className="settings-divider" />
          <div className="settings-link-row settings-link-row-disabled">
            <span>Termos de Serviço e Política de Privacidade</span>
            <span className="settings-badge-soon">brevemente</span>
          </div>
        </SettingsSection>

      </div>

    </div>
  )
}
