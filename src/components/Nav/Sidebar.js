import React from "react";
import { NavLink, Nav } from "reactstrap";
import Logo from '../../assets/audio_wizard_logo.png';
import "../../styles/Nav.scss";

const SidebarComponent = (props) => {
  return (
    <div className={`sidebar ${props.isOpen ? "sidebar-visible" : ""}`}>
      <img className="logo" src={Logo} alt="Logo de l'application"/>
      <div className="sidebar__menu">
        <Nav vertical className="sidebar_top list-unstyled pb-3">
              <NavLink className="sidebar_list active" href="#">Première viste</NavLink>
              <NavLink className="sidebar_list" href="#">Adaptation</NavLink>
              <NavLink className="sidebar_list" href="#">Lorem Ipsum</NavLink>
              <NavLink className="sidebar_list" href="#">Lorem Ipsum</NavLink>
        </Nav>
        <Nav vertical className="sidebar_bottom list-unstyled pb-3">
              <NavLink className="sidebar_list" href="#">LoremIpsum</NavLink>
              <NavLink className="sidebar_list" href="#">Lorem Ipsum</NavLink>
        </Nav>
      </div>
    </div>
  );
};

export default SidebarComponent;
