import { Link } from "react-router-dom";

const LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#diferencial", label: "Porquê o Mindset" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#planos", label: "Planos" },
];

export default function MenuDrawer({ open, onClose }) {
  return (
    <div className={`menu-drawer ${open ? "is-open" : ""}`}>
      <div className="menu-drawer-backdrop" onClick={onClose} />
      <div className="menu-drawer-panel">
        <button className="menu-drawer-close" onClick={onClose} aria-label="Fechar menu">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <nav className="menu-drawer-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>

        <Link to="/login" className="btn btn-primary menu-drawer-cta" onClick={onClose}>
          Criar conta grátis
        </Link>
      </div>
    </div>
  );
}
