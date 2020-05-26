import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import { FaTimesCircle } from "react-icons/fa";
import Logo from '../../assets/audio_wizard_logo.png';
import "../../styles/LeftNav.css";

const sideBarTop = [
  { link: "#", menu: "Première visite" },
  { link: "#", menu: "Adaptation" },
  { link: "#", menu: "Lorem Ipsum" },
  { link: "#", menu: "Lorem Ipsum" },
];

const sideBarBottom = [
  { link: "#", menu: "Lorem Ipsum" },
  { link: "#", menu: "Lorem Ipsum" },
];

const SidebarComponent = (props) => {
  return (
    <div className={`sidebar ${props.isOpen ? "sidebar-visible" : ""}`}>
      <FaTimesCircle className="sidebar__close" onClick={props.toggle} />
      <img className="logo" src={Logo} alt="Alban Renahy"/>
      <div className="sidebar__menu">
        <Nav vertical className="sidebar_top list-unstyled pb-3">
          {sideBarTop.map((nav, i) => (
            <NavItem key={i}>
              <NavLink href={nav.link}>{nav.menu}</NavLink>
            </NavItem>
          ))}
        </Nav>
        <Nav vertical className="sidebar_bottom list-unstyled pb-3">
          {sideBarBottom.map((nav, i) => (
            <NavItem key={i}>
              <NavLink href={nav.link}>{nav.menu}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default SidebarComponent;
