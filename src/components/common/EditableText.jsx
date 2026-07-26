export default function EditableText({ value, onChange, placeholder, disabled = false, className = '' }) {
  const largura = Math.max(value.length, placeholder?.length || 1) + 1

  return (
    <input
      className={`editable-text ${className}`.trim()}
      style={{ width: `${largura}ch` }}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
