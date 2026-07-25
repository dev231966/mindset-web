import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

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

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function isMobileLayout() {
    return window.matchMedia("(max-width: 1080px)").matches;
  }

  function closeOnNavigate() {
    if (isMobileLayout()) {
      document.body.classList.remove("sidebar-open-mobile");
    }
  }

  useEffect(() => {
    const body = document.body;
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebarClose = document.getElementById("sidebarClose");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

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

  function handleLogout() {
    closeOnNavigate();
    logout();
    navigate("/login");
  }

  const linkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

  return (
    <>
      <div className="sidebar-overlay" id="sidebarOverlay"></div>

      <aside className="sidebar" id="sidebar">

        <div className="sidebar-head">
          <NavLink to="/dashboard" className="logo-section" onClick={closeOnNavigate}>
            <div className="logo-icon">M</div>
            <div className="logo-text">
              <h1>Mindset</h1>
              <p>Painel</p>
            </div>
          </NavLink>

          <button className="sidebar-close" id="sidebarClose" aria-label="Fechar menu" type="button">
            {navIcon(
              <>
                <path d="M11 19l-7-7 7-7" />
                <path d="M19 19l-7-7 7-7" />
              </>
            )}
          </button>
        </div>

        <div className="sidebar-divider"></div>

        <NavLink to="/estudos" className="sidebar-promo" onClick={closeOnNavigate}>
          <div className="sidebar-promo-icon">
            {navIcon(<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />)}
          </div>

          <div className="sidebar-promo-text">
            <strong>Plano Aprendiz</strong>
            <span>Sobe para Estudante e ganha mais Estudos</span>
          </div>

          <span className="sidebar-promo-arrow">
            {navIcon(<path d="M9 18l6-6-6-6" />)}
          </span>
        </NavLink>

        <div className="sidebar-divider"></div>

        <div className="sidebar-nav-scroll">

          <div className="sidebar-section">
            <p className="sidebar-label">PRINCIPAL</p>

            <nav className="nav-list">
              <NavLink to="/dashboard" end className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <rect x="3" y="3" width="7" height="9" rx="1.5" />
                      <rect x="14" y="3" width="7" height="5" rx="1.5" />
                      <rect x="14" y="12" width="7" height="9" rx="1.5" />
                      <rect x="3" y="16" width="7" height="5" rx="1.5" />
                    </>
                  )}
                </span>
                <span className="label">Visão Geral</span>
              </NavLink>

              <NavLink to="/explicacao" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  )}
                </span>
                <span className="label">Explicação</span>
              </NavLink>

              <NavLink to="/avaliacao" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </>
                  )}
                </span>
                <span className="label">Avaliação</span>
              </NavLink>
            </nav>
          </div>

          <div className="sidebar-divider"></div>

          <div className="sidebar-section">
            <p className="sidebar-label">GERAL</p>

            <nav className="nav-list">
              <NavLink to="/evolucao" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <line x1="3" y1="21" x2="21" y2="21" />
                      <rect x="5" y="12" width="3" height="9" rx="0.5" />
                      <rect x="11" y="7" width="3" height="14" rx="0.5" />
                      <rect x="17" y="3" width="3" height="18" rx="0.5" />
                    </>
                  )}
                </span>
                <span className="label">Evolução</span>
              </NavLink>

              <NavLink to="/ferramentas" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" />
                  )}
                </span>
                <span className="label">Ferramentas</span>
              </NavLink>

              <NavLink to="/estudos" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3" />
                      <line x1="12" y1="16" x2="12" y2="16.01" />
                    </>
                  )}
                </span>
                <span className="label">Estudos</span>
              </NavLink>

              <NavLink to="/material" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </>
                  )}
                </span>
                <span className="label">Meu Material</span>
              </NavLink>

              <NavLink to="/ajuda-suporte" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </>
                  )}
                </span>
                <span className="label">Ajuda &amp; Suporte</span>
              </NavLink>
            </nav>
          </div>

          <div className="sidebar-divider"></div>

          <div className="sidebar-section">
            <p className="sidebar-label">RECOMPENSAS</p>

            <nav className="nav-list">
              <NavLink to="/convidar-amigos" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <rect x="3" y="8" width="18" height="4" rx="1" />
                      <path d="M12 8v13" />
                      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8" />
                      <path d="M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8" />
                    </>
                  )}
                </span>
                <span className="label">Convidar Amigos</span>
              </NavLink>

              <NavLink to="/conquistas" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <path d="M8 3h8v6a4 4 0 0 1-8 0V3z" />
                      <path d="M8 5H5a3 3 0 0 0 3 3" />
                      <path d="M16 5h3a3 3 0 0 1-3 3" />
                      <path d="M12 13v4" />
                      <path d="M9 21h6" />
                    </>
                  )}
                </span>
                <span className="label">Conquistas</span>
              </NavLink>

              <NavLink to="/sequencia-estudo" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  )}
                </span>
                <span className="label">Sequência de Estudo</span>
              </NavLink>

              <NavLink to="/quadro-honra" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </>
                  )}
                </span>
                <span className="label">Quadro de Honra</span>
              </NavLink>

              <NavLink to="/loja-recompensas" className={linkClass} onClick={closeOnNavigate}>
                <span className="icon">
                  {navIcon(
                    <>
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </>
                  )}
                </span>
                <span className="label">Loja de Recompensas</span>
              </NavLink>
            </nav>
          </div>

        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-user-footer">

          <NavLink to="/perfil" className="sidebar-user-row" onClick={closeOnNavigate}>
            <div className="user-avatar-sm">J</div>
            <div className="sidebar-user-info">
              <strong>Juvêncio Penga</strong>
              <span>Ver perfil</span>
            </div>
          </NavLink>

          <NavLink to="/configuracoes" className="sidebar-footer-link" onClick={closeOnNavigate}>
            <span className="icon">
              {navIcon(
                <>
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </>
              )}
            </span>
            <span className="label">Configurações</span>
          </NavLink>

          <button className="sidebar-logout-btn" type="button" onClick={handleLogout}>
            <span className="icon">
              {navIcon(
                <>
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </>
              )}
            </span>
            <span className="label">Terminar sessão</span>
          </button>

        </div>

      </aside>
    </>
  );
}
