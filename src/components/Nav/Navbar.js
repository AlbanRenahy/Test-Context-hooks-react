import React from "react";
import "../../styles/Nav.scss";
import { Navbar, NavbarBrand } from 'reactstrap';

const SidebarComponent = (props) => {
  return (
    <Navbar className="nav-bar">
      <NavbarBrand href="#" />
      <a href="#" className="topnav_title">
        Mon compte ⬇
      </a>
    </Navbar>
  );
};

export default SidebarComponent;
