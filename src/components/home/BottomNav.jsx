import { Link } from "react-router-dom";

const navIcon = (paths) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {paths}
  </svg>
);

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <a className="bottom-nav-item" href="#inicio">
        {navIcon(<path d="M3 11l9-8 9 8M5 10v10h14V10" />)}
        Início
      </a>

      <a className="bottom-nav-item" href="#como-funciona">
        {navIcon(
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3" />
            <line x1="12" y1="16" x2="12" y2="16.01" />
          </>
        )}
        Como funciona
      </a>

      <a className="bottom-nav-item" href="#funcionalidades">
        {navIcon(
          <>
            <rect x="3" y="3" width="7" height="9" rx="1.5" />
            <rect x="14" y="3" width="7" height="5" rx="1.5" />
            <rect x="14" y="12" width="7" height="9" rx="1.5" />
            <rect x="3" y="16" width="7" height="5" rx="1.5" />
          </>
        )}
        Funcionalidades
      </a>

      <Link to="/login" className="bottom-nav-item bottom-nav-cta">
        {navIcon(<path d="M5 12h14M13 5l7 7-7 7" />)}
        Começar
      </Link>
    </nav>
  );
}
