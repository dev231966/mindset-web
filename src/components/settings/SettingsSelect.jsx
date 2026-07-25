export default function SettingsSelect({ label, description, options, value, onChange }) {
  return (
    <div className="settings-row settings-row-column">
      <div className="settings-row-copy">
        <strong>{label}</strong>
        {description && <span>{description}</span>}
      </div>

      <div className="settings-select">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`settings-select-option${value === option.value ? ' active' : ''}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
