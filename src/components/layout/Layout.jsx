import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />

      <div className="app-body">
        <Sidebar />

        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}