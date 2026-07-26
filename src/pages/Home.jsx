import { Link } from "react-router-dom";
import MiniCard from "../components/dashboard/MiniCard";
import HeroMockup from "../components/home/HeroMockup";
import "../style/home.css";

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

function ExplicacaoIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4v-10Z" />
      <path d="M10 10c0-1.1.9-1.8 1.9-1.8 1 0 1.8.6 1.8 1.5 0 .9-.7 1.2-1.3 1.6-.5.3-.7.6-.7 1.1" />
      <circle cx="12" cy="14.6" r="0.15" fill="currentColor" />
    </svg>
  );
}

function AvaliacaoIcon() {
  return (
    <svg {...iconProps}>
      <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
      <path d="M9 4.5V3.8c0-.7.6-1.3 1.3-1.3h3.4c.7 0 1.3.6 1.3 1.3v.7" />
      <path d="M8.5 12.5 11 15l4.5-5" />
    </svg>
  );
}

function EstudosIcon() {
  return (
    <svg {...iconProps}>
      <ellipse cx="12" cy="7" rx="6.5" ry="3" />
      <path d="M5.5 7v4c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3V7" />
      <path d="M5.5 11v4c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3v-4" />
    </svg>
  );
}

function FerramentasIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14.7 6.3a3.5 3.5 0 0 0-4.6 4.1L4.5 16v3h3l5.6-5.6a3.5 3.5 0 0 0 4.1-4.6l-2.3 2.3-2-2 2.3-2.3Z" />
    </svg>
  );
}

function MaterialIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 7.5c0-.83.67-1.5 1.5-1.5H10l1.5 2h7c.83 0 1.5.67 1.5 1.5v.5H4v-2.5Z" />
      <path d="M4 10h17.2a1 1 0 0 1 .97 1.24l-1.4 5.6a1.5 1.5 0 0 1-1.46 1.16H5.7a1.5 1.5 0 0 1-1.46-1.16L3 11.4A1 1 0 0 1 4 10Z" />
    </svg>
  );
}

const VANTAGENS = [
  { label: "Explicações", icon: ExplicacaoIcon, tint: "tint-accent" },
  { label: "Exames e simulados", icon: AvaliacaoIcon, tint: "tint-accent" },
  { label: "Material guardado", icon: MaterialIcon, tint: "tint-warning" },
];

const CARDS_PROVA_VALOR = [
  {
    to: "/login",
    variant: "mini-card-featured",
    icon: ExplicacaoIcon,
    tint: "tint-accent",
    title: "Explicação",
    description: "Pergunta agora, entende agora, com explicação passo a passo.",
  },
  {
    to: "/login",
    variant: "mini-card-avaliacao",
    icon: AvaliacaoIcon,
    tint: "tint-accent",
    title: "Avaliação",
    description: "Exames e simulados por disciplina, no teu ritmo.",
  },
  {
    to: "/login",
    variant: "mini-card-gold",
    icon: EstudosIcon,
    tint: "tint-gold",
    title: "Estudos",
    description: "Paga só pelo que usares, sem mensalidade fixa.",
  },
  {
    to: "/login",
    variant: "mini-card-ferramentas",
    icon: FerramentasIcon,
    tint: "tint-warning",
    title: "Ferramentas",
    description: "Calculadora e equações passo a passo, sempre à mão.",
  },
  {
    to: "/login",
    variant: "mini-card-material",
    icon: MaterialIcon,
    tint: "tint-warning",
    title: "Material",
    description: "Guarda cada explicação, revê sem gastar Estudos outra vez.",
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
            {VANTAGENS.map(({ label, icon: Icon, tint }) => (
              <li key={label} className={`hero-vantagem ${tint}`}>
                <Icon />
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
              key={card.title}
              to={card.to}
              variant={card.variant}
              tint={card.tint}
              icon={card.icon}
              title={card.title}
              description={card.description}
              className="prova-valor-card"
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
