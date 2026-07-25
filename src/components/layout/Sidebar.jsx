import { useEffect } from "react";

export default function Sidebar() {

  useEffect(() => {
    const body = document.body;
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebarClose = document.getElementById("sidebarClose");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    function isMobileLayout() {
      return window.matchMedia("(max-width: 1080px)").matches;
    }

    function toggleSidebar() {
      if (isMobileLayout()) {
        body.classList.toggle("sidebar-open-mobile");
      } else {
        body.classList.toggle("sidebar-closed");
      }
    }

    function closeSidebar() {
      if (isMobileLayout()) {
        body.classList.remove("sidebar-open-mobile");
      } else {
        body.classList.add("sidebar-closed");
      }
    }

    sidebarToggle?.addEventListener("click", toggleSidebar);
    sidebarClose?.addEventListener("click", closeSidebar);

    sidebarOverlay?.addEventListener("click", () => {
      body.classList.remove("sidebar-open-mobile");
    });

    function handleResize() {
      if (!isMobileLayout()) {
        body.classList.remove("sidebar-open-mobile");
      }
    }

    window.addEventListener("resize", handleResize);


    return () => {
      sidebarToggle?.removeEventListener("click", toggleSidebar);
      sidebarClose?.removeEventListener("click", closeSidebar);
      window.removeEventListener("resize", handleResize);
    };

  }, []);


  return (
  <>
    <div className="sidebar-overlay" id="sidebarOverlay"></div>


  <aside className="sidebar" id="sidebar">

    <div className="sidebar-head">

      <a href="#" className="logo-section">
        <div className="logo-icon">M</div>
        <div className="logo-text">
          <h1>Mindset</h1>
          <p>Painel</p>
        </div>
      </a>

      <button className="sidebar-close" id="sidebarClose" aria-label="Fechar menu" type="button">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 19l-7-7 7-7" />
          <path d="M19 19l-7-7 7-7" />
        </svg>
      </button>

    </div>


    <div className="sidebar-divider"></div>


    <a href="#" className="sidebar-promo">
      <div className="sidebar-promo-icon">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      </div>

      <div className="sidebar-promo-text">
        <strong>Plano Aprendiz</strong>
        <span>Sobe para Estudante e ganha mais Estudos</span>
      </div>

      <span className="sidebar-promo-arrow">
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </span>
    </a>


    <div className="sidebar-divider"></div>


    <div className="sidebar-nav-scroll">

      <div className="sidebar-section">
        <p className="sidebar-label">PRINCIPAL</p>

        <nav className="nav-list">

          <a href="#" className="nav-link active">
            <span className="icon">
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
                <rect x="3" y="3" width="7" height="9" rx="1.5" />
                <rect x="14" y="3" width="7" height="5" rx="1.5" />
                <rect x="14" y="12" width="7" height="9" rx="1.5" />
                <rect x="3" y="16" width="7" height="5" rx="1.5" />
              </svg>
            </span>

            <span className="label">Visão Geral</span>
          </a>


          <a href="#" className="nav-link">
            <span className="icon">
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
                <line x1="3" y1="21" x2="21" y2="21" />
                <rect x="5" y="12" width="3" height="9" rx="0.5" />
                <rect x="11" y="7" width="3" height="14" rx="0.5" />
                <rect x="17" y="3" width="3" height="18" rx="0.5" />
              </svg>
            </span>

            <span className="label">Analytics</span>
          </a>


          <a href="#" className="nav-link">
            <span className="icon">
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
                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
              </svg>
            </span>

            <span className="label">Projetos</span>
            <span className="badge-count">4</span>
          </a>


          <a href="#" className="nav-link">
            <span className="icon">
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>

            <span className="label">Equipa</span>
          </a>

        </nav>
      </div>


      <div className="sidebar-divider"></div>


      <div className="sidebar-section">
        <p className="sidebar-label">GERAL</p>

        <nav className="nav-list">

          <a href="#" className="nav-link">
            <span className="icon">
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
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>

            <span className="label">Configurações</span>
          </a>


          <a href="#" className="nav-link">
            <span className="icon">
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
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>

            <span className="label">Ajuda & Suporte</span>
          </a>

        </nav>
      </div>

    </div>


    <div className="sidebar-divider"></div>


    <div className="sidebar-user-footer">

      <div className="sidebar-user-row">
        <div className="user-avatar-sm">J</div>
        <div className="sidebar-user-info">
          <strong>Juvêncio Penga</strong>
          <span>Plano Aprendiz</span>
        </div>
      </div>

      <a href="#" className="sidebar-footer-link">
        <span className="icon">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </span>
        <span className="label">Configurações</span>
      </a>

      <button className="sidebar-logout-btn" type="button">
        <span className="icon">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </span>
        <span className="label">Terminar sessão</span>
      </button>

    </div>

  </aside>

</>

  );
}
