import { useState } from "react";
import { Link } from "react-router-dom";
import GrowthReveal from "../components/home/GrowthReveal";
import HeroIllustration from "../components/home/HeroIllustration";
import FeatureCard from "../components/home/FeatureCard";
import BottomNav from "../components/home/BottomNav";
import MenuDrawer from "../components/home/MenuDrawer";
import "../style/home.css";

const FUNCIONALIDADES = [
  {
    tone: "forest",
    title: "Explicação",
    description: "Pergunta o que não entendeste e recebe uma explicação passo a passo, na hora.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4v-10Z" />
        <path d="M10 10c0-1.1.9-1.8 1.9-1.8 1 0 1.8.6 1.8 1.5 0 .9-.7 1.2-1.3 1.6-.5.3-.7.6-.7 1.1" />
      </svg>
    ),
  },
  {
    tone: "forest",
    title: "Avaliação",
    description: "Simulados e exames por disciplina, no teu ritmo, com correção imediata.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
        <path d="M8.5 12.5 11 15l4.5-5" />
      </svg>
    ),
  },
  {
    tone: "gold",
    title: "Estudos",
    description: "A moeda da plataforma. Usas só o que precisares, sem mensalidade fixa.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="7" rx="6.5" ry="3" />
        <path d="M5.5 7v10c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3V7" />
      </svg>
    ),
  },
  {
    tone: "clay",
    title: "Ferramentas",
    description: "Calculadora e resolução de equações passo a passo, sempre à mão.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a3.5 3.5 0 0 0-4.6 4.1L4.5 16v3h3l5.6-5.6a3.5 3.5 0 0 0 4.1-4.6l-2.3 2.3-2-2 2.3-2.3Z" />
      </svg>
    ),
  },
  {
    tone: "forest",
    title: "Material",
    description: "Guarda cada explicação e revê sempre que precisares, sem gastar Estudos outra vez.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7.5c0-.83.67-1.5 1.5-1.5H10l1.5 2h7c.83 0 1.5.67 1.5 1.5v.5H4v-2.5Z" />
        <path d="M4 10h17.2a1 1 0 0 1 .97 1.24l-1.4 5.6a1.5 1.5 0 0 1-1.46 1.16H5.7a1.5 1.5 0 0 1-1.46-1.16L3 11.4A1 1 0 0 1 4 10Z" />
      </svg>
    ),
  },
];

const PASSOS = [
  {
    numero: "01",
    titulo: "Pergunta",
    texto: "Escreve a tua dúvida como falarias com um colega. Sem termos técnicos obrigatórios.",
  },
  {
    numero: "02",
    titulo: "Aprende",
    texto: "Recebe a explicação passo a passo e pratica com exercícios da tua disciplina.",
  },
  {
    numero: "03",
    titulo: "Evolui",
    texto: "Acompanha o teu progresso e revê o que já estudaste, sem perder o que aprendeste.",
  },
];

const DEPOIMENTOS = [
  {
    nome: "Nélia, 11ª classe",
    texto: "Deixei de esperar até ao dia seguinte para perceber a matéria. Pergunto de noite e já entendo antes do teste.",
  },
  {
    nome: "Edson, 1º ano de Engenharia",
    texto: "Uso os simulados antes de cada avaliação. Sinto que chego mais preparado do que antes.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-page">
      <header className="home-header" id="inicio">
        <div className="home-header-inner">
          <Link to="/" className="home-logo">
            <span className="home-logo-mark">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 17 10 11 14 15 20 7" />
                <path d="M15 7h5v5" />
              </svg>
            </span>
            Mindset
          </Link>

          <div className="home-header-actions">
            <Link to="/login" className="home-header-link">Entrar</Link>
            <Link to="/login" className="btn btn-primary home-header-cta">Começar</Link>
            <button
              className="home-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <span className="home-eyebrow">Mentalidade de crescimento</span>
            <h1 className="home-hero-title">
              <GrowthReveal />
              <span className="home-hero-title-line">é só uma etapa.</span>
            </h1>
            <p className="home-hero-subtitle">
              O Mindset junta explicação, avaliação e material de estudo num
              só sítio, para estudantes moçambicanos que querem entender, não
              só decorar.
            </p>
            <div className="home-hero-actions">
              <Link to="/login" className="btn btn-primary btn-lg">
                Criar conta grátis
              </Link>
              <a href="#como-funciona" className="home-hero-secondary">
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="home-hero-visual">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="home-como-funciona" id="como-funciona">
        <div className="home-section-inner">
          <span className="home-eyebrow">Como funciona</span>
          <h2 className="home-section-title">Três passos, sem complicação.</h2>

          <div className="home-passos">
            {PASSOS.map((passo) => (
              <div className="home-passo" key={passo.numero}>
                <span className="home-passo-numero">{passo.numero}</span>
                <strong>{passo.titulo}</strong>
                <p>{passo.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-diferencial" id="diferencial">
        <div className="home-section-inner">
          <span className="home-eyebrow">Porquê o Mindset</span>
          <h2 className="home-section-title">
            Explicador particular custa caro. Dúvida não escolhe hora.
          </h2>

          <div className="home-comparativo">
            <div className="home-comparativo-card is-muted">
              <strong>Explicador particular</strong>
              <ul>
                <li>Preço fixo por mês, uses ou não</li>
                <li>Só disponível em horário marcado</li>
                <li>Depende de encontrar alguém bom na tua zona</li>
              </ul>
            </div>
            <div className="home-comparativo-card is-highlight">
              <strong>Mindset</strong>
              <ul>
                <li>Pagas só pelo que usares, com Estudos</li>
                <li>Disponível a qualquer hora, todos os dias</li>
                <li>A mesma qualidade em qualquer disciplina</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-funcionalidades" id="funcionalidades">
        <div className="home-section-inner">
          <span className="home-eyebrow">Funcionalidades</span>
          <h2 className="home-section-title">Tudo o que precisas, num só sítio.</h2>

          <div className="home-features-grid">
            {FUNCIONALIDADES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-planos" id="planos">
        <div className="home-section-inner">
          <span className="home-eyebrow">Estudos</span>
          <h2 className="home-section-title">Uma moeda, sem mensalidade.</h2>
          <p className="home-planos-texto">
            Em vez de um plano fixo, usas Estudos: a moeda interna do
            Mindset. Cada explicação, simulado ou ferramenta tem um custo
            claro em Estudos, e só gastas quando usas. Recarregas quando
            precisares, sem compromisso mensal.
          </p>
          <Link to="/login" className="btn btn-secondary">
            Ver como recarregar Estudos
          </Link>
        </div>
      </section>

      <section className="home-depoimentos">
        <div className="home-section-inner">
          <span className="home-eyebrow">Quem já usa</span>
          <h2 className="home-section-title">Contado por quem estuda.</h2>

          <div className="home-depoimentos-grid">
            {DEPOIMENTOS.map((d) => (
              <div className="home-depoimento" key={d.nome}>
                <p>"{d.texto}"</p>
                <strong>{d.nome}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-final">
        <div className="home-section-inner">
          <h2>Ainda não entendeste a matéria de hoje?</h2>
          <p>Cria a tua conta e faz a primeira pergunta agora.</p>
          <Link to="/login" className="btn btn-primary btn-lg">
            Começar agora
          </Link>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-section-inner home-footer-inner">
          <div className="home-footer-brand">
            <span className="home-logo-mark">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 17 10 11 14 15 20 7" />
                <path d="M15 7h5v5" />
              </svg>
            </span>
            Mindset
          </div>

          <nav className="home-footer-links">
            <a href="#como-funciona">Como funciona</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#planos">Estudos</a>
            <Link to="/login">Entrar</Link>
          </nav>

          <span className="home-footer-copy">
            © {new Date().getFullYear()} Mindset. Feito para estudantes moçambicanos.
          </span>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
}
