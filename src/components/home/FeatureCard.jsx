export default function FeatureCard({ icon, title, description, tone = "forest" }) {
  return (
    <div className={`feature-card tone-${tone}`}>
      <div className="feature-card-icon">{icon}</div>
      <strong className="feature-card-title">{title}</strong>
      <p className="feature-card-desc">{description}</p>
    </div>
  );
}
