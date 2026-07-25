export default function SettingsSection({ icon, tint, title, children }) {
  return (
    <div className="glass info-card settings-card">
      <div className="settings-card-head">
        <div className={`card-icon-box${tint ? ` tint-${tint}` : ''}`}>{icon}</div>
        <strong>{title}</strong>
      </div>

      <div className="settings-card-body">
        {children}
      </div>
    </div>
  )
}
