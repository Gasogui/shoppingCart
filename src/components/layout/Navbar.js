//Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import '../../styles/layout/Header.css';

const Navbar = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass}
    linkClassName={linkClassName}
  />
);

export const NavComponent = ({ onClick, navClass, linkClassName }) => (
  <nav className={navClass}>
    {["Ensaladas", "Bowls", "Wraps", "Pizzas", "Footer",].map(section =>
      <Link to={section}
        smooth={true}
        className={linkClassName}
        onClick={onClick}>
        {section}
      </Link>
    )}
  </nav>
)
export default Navbar;