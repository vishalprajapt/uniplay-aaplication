import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <div
        className="navbar-container w-100"
        style={{
          position: 'fixed',
          top: '70px',
          zIndex: '800',
          background: 'lightgray',
          padding: '10px',
          overflowX: 'auto',
        }}
      >
        <div className="nav-scroll-container">
          <NavItem to="/" label="All" />
          <NavItem to="/study-page" label="Study" />
          <NavItem to="/news-page" label="News" />
          <NavItem to="/sports" label="Sports" />
          <NavItem to="/music" label="Music" />
          <NavItem to="/games" label="Gaming" />
          <NavItem to="/entertainment" label="Entertainment" />
          <NavItem to="/Free-demo" label="Free Video" />
          <NavItem to="/magazine" label="Magazine" />
          <NavItem to="/upload" label="My Video"/> 
           
           
          
        </div>
      </div>
    </>
  );
}

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `nav-item-btn ${isActive ? 'nav-active' : ''}`
    }
    style={{ whiteSpace: 'nowrap' }}
  >
    {label}
  </NavLink>
);

export default Navbar;
