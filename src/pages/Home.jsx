import { Link } from "react-router-dom";
import MiniCard from "../components/dashboard/MiniCard";
import HeroMockup from "../components/home/HeroMockup";
import "../style/home.css";

const VANTAGENS = [
  {
    label: "Explicações",
    className: "tint-accent",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: "Exames e simulados",
    className: "tint-accent",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "Material guardado",
    className: "tint-warning",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

const CARDS_PROVA_VALOR = [
  {
    to: "/login",
    label: "Explicação",
    variant: "featured",
    live: true,
    description: "Pergunta agora, entende agora, com explicação passo a passo.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    to: "/login",
    label: "Avaliação",
    variant: "avaliacao",
    description: "Exames e simulados por disciplina, no teu ritmo.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    to: "/login",
    label: "Estudos",
    variant: "gold",
    description: "Paga só pelo que usares, sem mensalidade fixa.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3" />
        <line x1="12" y1="16" x2="12" y2="16.01" />
      </svg>
    ),
  },
  {
    to: "/login",
    label: "Ferramentas",
    variant: "ferramentas",
    description: "Calculadora e equações passo a passo, sempre à mão.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" />
      </svg>
    ),
  },
  {
    to: "/login",
    label: "Meu Material",
    variant: "material",
    description: "Guarda cada explicação, revê sem gastar Estudos outra vez.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

function HeaderVisita() {
  return (
    <header className="header-visita">
      <div className="header-visita-container">
        <Link to="/" className="logo-section">
          <div className="logo-icon">M</div>
          <div className="logo-text">
            <h1>Mindset</h1>
          </div>
        </Link>
        <Link to="/login" className="btn btn-primary">
          Começar
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-visita">
      <div className="bg-grid" />
      <div className="orb-layer">
        <div className="orb one" />
        <div className="orb two" />
        <div className="orb three" />
      </div>

      <div className="hero-visita-container">
        <div className="hero-visita-copy">
          <h2 className="hero-title">
            A tua dúvida,
            <span className="hero-title-gradient">resolvida agora.</span>
          </h2>
          <p className="hero-subtitle">
            A plataforma que junta explicação, avaliação e material de estudo
            num só sítio, feita para estudantes moçambicanos.
          </p>
          <Link to="/login" className="btn btn-primary btn-hero">
            Comece agora
          </Link>

          <ul className="hero-vantagens">
            {VANTAGENS.map(({ label, icon, className }) => (
              <li key={label} className={`hero-vantagem ${className}`}>
                {icon}
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visita-visual">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function ProvaDeValor() {
  return (
    <section className="prova-valor">
      <div className="prova-valor-container">
        <h3 className="prova-valor-title">Tudo o que precisas, num só sítio.</h3>
        <p className="prova-valor-subtitle">
          Cada ferramenta pensada para te levar da dúvida à nota, sem sair da
          plataforma.
        </p>

        <div className="prova-valor-grid">
          {CARDS_PROVA_VALOR.map((card) => (
            <MiniCard
              key={card.label}
              to={card.to}
              label={card.label}
              variant={card.variant}
              icon={card.icon}
              live={card.live}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeaderVisita />
      <Hero />
      <ProvaDeValor />
    </>
  );
}
