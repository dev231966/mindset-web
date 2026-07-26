import { Link } from "react-router-dom";
import {
  MessageCircleQuestion,
  ClipboardCheck,
  Coins,
  Wrench,
  FolderOpen,
} from "lucide-react";
import MiniCard from "../components/dashboard/MiniCard";
import HeroMockup from "../components/home/HeroMockup";
import "../style/home.css";

const VANTAGENS = [
  { label: "Explicações", icon: MessageCircleQuestion, tint: "tint-accent" },
  { label: "Exames e simulados", icon: ClipboardCheck, tint: "tint-accent" },
  { label: "Material guardado", icon: FolderOpen, tint: "tint-warning" },
];

const CARDS_PROVA_VALOR = [
  {
    to: "/login",
    variant: "mini-card-featured",
    icon: MessageCircleQuestion,
    tint: "tint-accent",
    title: "Explicação",
    description: "Pergunta agora, entende agora, com explicação passo a passo.",
  },
  {
    to: "/login",
    variant: "mini-card-avaliacao",
    icon: ClipboardCheck,
    tint: "tint-accent",
    title: "Avaliação",
    description: "Exames e simulados por disciplina, no teu ritmo.",
  },
  {
    to: "/login",
    variant: "mini-card-gold",
    icon: Coins,
    tint: "tint-gold",
    title: "Estudos",
    description: "Paga só pelo que usares, sem mensalidade fixa.",
  },
  {
    to: "/login",
    variant: "mini-card-ferramentas",
    icon: Wrench,
    tint: "tint-warning",
    title: "Ferramentas",
    description: "Calculadora e equações passo a passo, sempre à mão.",
  },
  {
    to: "/login",
    variant: "mini-card-material",
    icon: FolderOpen,
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
                <Icon size={18} />
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
