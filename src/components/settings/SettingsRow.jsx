export default function SettingsRow({ label, description, control }) {
  return (
    <div className="settings-row">
      <div className="settings-row-copy">
        <strong>{label}</strong>
        {description && <span>{description}</span>}
      </div>

      <div className="settings-row-control">{control}</div>
    </div>
  )
}
