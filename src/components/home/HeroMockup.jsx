function FloatingIcon({ tint, className, children }) {
  return (
    <div className={`hero-float-icon ${tint} ${className}`}>
      {children}
    </div>
  );
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function ExplicacaoSvg() {
  return (
    <svg {...iconProps}>
      <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4v-10Z" />
      <path d="M10 10c0-1.1.9-1.8 1.9-1.8 1 0 1.8.6 1.8 1.5 0 .9-.7 1.2-1.3 1.6-.5.3-.7.6-.7 1.1" />
      <circle cx="12" cy="14.6" r="0.15" fill="currentColor" />
    </svg>
  );
}

function AvaliacaoSvg() {
  return (
    <svg {...iconProps}>
      <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
      <path d="M9 4.5V3.8c0-.7.6-1.3 1.3-1.3h3.4c.7 0 1.3.6 1.3 1.3v.7" />
      <path d="M8.5 12.5 11 15l4.5-5" />
    </svg>
  );
}

function EstudosSvg() {
  return (
    <svg {...iconProps}>
      <ellipse cx="12" cy="7" rx="6.5" ry="3" />
      <path d="M5.5 7v4c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3V7" />
      <path d="M5.5 11v4c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3v-4" />
    </svg>
  );
}

function FerramentasSvg() {
  return (
    <svg {...iconProps}>
      <path d="M14.7 6.3a3.5 3.5 0 0 0-4.6 4.1L4.5 16v3h3l5.6-5.6a3.5 3.5 0 0 0 4.1-4.6l-2.3 2.3-2-2 2.3-2.3Z" />
    </svg>
  );
}

function MaterialSvg() {
  return (
    <svg {...iconProps}>
      <path d="M4 7.5c0-.83.67-1.5 1.5-1.5H10l1.5 2h7c.83 0 1.5.67 1.5 1.5v.5H4v-2.5Z" />
      <path d="M4 10h17.2a1 1 0 0 1 .97 1.24l-1.4 5.6a1.5 1.5 0 0 1-1.46 1.16H5.7a1.5 1.5 0 0 1-1.46-1.16L3 11.4A1 1 0 0 1 4 10Z" />
    </svg>
  );
}

export default function HeroMockup() {
  return (
    <div className="hero-mockup">
      <div className="hero-mockup-back-card">
        <div className="notif-item hero-notif-preview">
          <span className="notif-dot" />
          <div className="notif-item-body">
            <strong>Explicação pronta:</strong>
            <span>Funções do 2º grau.</span>
          </div>
        </div>
      </div>

      <div className="hero-mockup-frame">
        <div className="hero-mockup-screen">
          <div className="mini-card mini-card-featured hero-mockup-card">
            <div className="mini-card-live-row">
              <span className="mini-card-live" />
              <span className="mini-card-live-label">Ao vivo</span>
            </div>
            <div className="card-icon-box tint-accent">
              <ExplicacaoSvg />
            </div>
            <strong>Explicação</strong>
          </div>

          <div className="mini-card mini-card-avaliacao hero-mockup-card-peek">
            <div className="card-icon-box tint-accent">
              <AvaliacaoSvg />
            </div>
            <strong>Avaliação</strong>
          </div>

          <div className="mini-card mini-card-gold hero-mockup-card-peek">
            <div className="card-icon-box tint-gold">
              <EstudosSvg />
            </div>
            <strong>Estudos</strong>
          </div>
        </div>
      </div>

      <FloatingIcon tint="tint-accent" className="pos-1">
        <ExplicacaoSvg />
      </FloatingIcon>
      <FloatingIcon tint="tint-accent" className="pos-2">
        <AvaliacaoSvg />
      </FloatingIcon>
      <FloatingIcon tint="tint-gold" className="pos-3">
        <EstudosSvg />
      </FloatingIcon>
      <FloatingIcon tint="tint-warning" className="pos-4">
        <FerramentasSvg />
      </FloatingIcon>
      <FloatingIcon tint="tint-warning" className="pos-5">
        <MaterialSvg />
      </FloatingIcon>
    </div>
  );
}
