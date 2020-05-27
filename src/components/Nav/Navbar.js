import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import '../../styles/Nav.scss';


const SidebarComponent = (props) => {
  return (
    <Navbar className="nav-bar navbar navbar-expand-sm mb-3 py-0">
      <NavbarBrand href="#" />
      <a href="#" className="topnav_title">
        Mon compte ⬇
      </a>
    </Navbar>
  );
};

export default SidebarComponent;
