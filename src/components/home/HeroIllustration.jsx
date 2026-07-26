export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 420 380" className="hero-illustration" role="img" aria-label="Percurso de crescimento de um estudante">
      <path
        className="hi-path"
        d="M20 320 C 90 320, 100 250, 150 240 C 210 228, 220 160, 280 140 C 330 124, 340 80, 400 60"
        fill="none"
        stroke="url(#hiGradient)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="hiGradient" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--h-forest)" />
          <stop offset="100%" stopColor="var(--h-gold)" />
        </linearGradient>
      </defs>

      <circle className="hi-node" cx="20" cy="320" r="7" fill="var(--h-forest)" />
      <circle className="hi-node" cx="150" cy="240" r="7" fill="var(--h-forest)" />
      <circle className="hi-node" cx="280" cy="140" r="7" fill="var(--h-gold)" />
      <circle className="hi-node hi-node-end" cx="400" cy="60" r="10" fill="var(--h-clay)" />

      <g className="hi-figure" transform="translate(374, 24)">
        <circle cx="12" cy="8" r="8" fill="var(--h-ink)" />
        <path d="M2 40 C2 26, 22 26, 22 40" fill="var(--h-ink)" />
      </g>

      <g className="hi-card hi-card-1">
        <rect x="30" y="60" width="98" height="52" rx="14" fill="var(--h-paper)" stroke="var(--h-line)" />
        <text x="46" y="92" className="hi-card-text">Explicação</text>
      </g>

      <g className="hi-card hi-card-2">
        <rect x="250" y="230" width="110" height="52" rx="14" fill="var(--h-paper)" stroke="var(--h-line)" />
        <text x="266" y="262" className="hi-card-text">Simulado</text>
      </g>
    </svg>
  );
}
