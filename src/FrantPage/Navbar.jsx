import React, { useState } from 'react';
import { Link, useLocation ,NavLink} from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const locationpath = useLocation();
  const pathnamedata = locationpath.pathname;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  
  return (
    <>
      <div className="navbar-container d-lg-flex   w-100" style={{ position: "fixed", top: "70px", zIndex: "800", background: "lightgray",padding:"10px" }}>
        <div className="d-flex justify-content-between align-items-center px-3">
          {/* Toggler for small screen */}
          <button className="custom-toggler d-lg-none" type="button" onClick={toggleSidebar} style={{borderRadius:"5px",padding:'5px'}}>
            <div className="hamburger-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>

        {/* Desktop Nav Items */}
        <nav className="d-none d-lg-flex gap-3 ps-3">
          <NavItem to="/" label="All"  />
          <NavItem to="/study-page" label="Study"  />
          <NavItem to="/news-page" label="News"  />
          <NavItem to="/sports" label="Sports" />
          <NavItem to="/music" label="Music" />
          <NavItem to="/games" label="Gameing"/>
          <NavItem to="/entertainment" label="Entertainment" />
          <NavItem to="/Free-demo" label="Free Video" />
           <NavItem to="/magazine" label="Magazine" />
        </nav>
      </div>

      {/* Overlay and Sidebar Nav for Small Screen */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <div className={`sidebar ${sidebarOpen ? 'show' : ''}`} >
        <span className="close-btn" onClick={closeSidebar}>&times;</span>
        <nav className="d-flex flex-column p-3 gap-3">
          <NavItem to="/" label="All" active={pathnamedata === "/"} onClick={closeSidebar} />
          <NavItem to="/study-page" label="Study" active={pathnamedata === "/study-page"} onClick={closeSidebar} />
          <NavItem to="/news-page" label="News" active={pathnamedata === "/news-page"} onClick={closeSidebar} />
          <NavItem to="/sports" label="Sports" active={pathnamedata === "/sports"} onClick={closeSidebar} />
          <NavItem to="/music" label="Music" active={pathnamedata === "/music"} onClick={closeSidebar} />
          <NavItem to="/games" label="Gameing" active={pathnamedata === "/games"} onClick={closeSidebar} />

          <NavItem to="/entertainment" label="Entertainment" active={pathnamedata === "/entertainment"} onClick={closeSidebar} />
                    <NavItem to="/Free-demo" label="Free Video" active={pathnamedata === "/Free-demo"} onClick={closeSidebar} />
                     <NavItem to="/magazine" label="Magazine" active={pathnamedata === "/magazine"} onClick={closeSidebar} />
                     
        </nav>
      </div>
    </>
  );
}

// Extracted NavItem for DRY code
const NavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) => `nav-link  btn ${isActive ? "nav-active" : "btn-light"}`}
    style={{ padding: "10px 25px" }}
    onClick={onClick}
  >
    {label}
  </NavLink>
);

export default Navbar;
