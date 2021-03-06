import React from "react";
import Logo from "../../assets/audio_wizard_logo.png";
import "../../styles/Nav.scss";

const SidebarComponent = (props) => {
  return (
    <div className={`sidebar ${props.isOpen ? "sidebar-visible" : ""}`}>
      <img className="logo" src={Logo} alt="Logo de l'application" />
      <div className="sidebar__menu">
        <nav className="navbar p-0 py-4">
          <a className="navbar-brand align-bottom" href="#">
            <img
              src="assets/navbar_brand.svg"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
          <div className="sidebar_top_border">
            <ul className="sidebar_top nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src="assets/notification_icon.svg" alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className=" sidebar_list active nav-link" href="#">
                  LoremIpsum
                </a>
              </li>
              <li className="nav-item">
                <a className=" sidebar_list nav-link" href="#">
                  LoremIpsum
                </a>
              </li>
              <li className="nav-item">
                <a className=" sidebar_list nav-link" href="#">
                  LoremIpsum
                </a>
              </li>
              <li className="nav-item">
                <a className=" sidebar_list nav-link" href="#">
                  LoremIpsum
                </a>
              </li>
            </ul>
          </div>

          <ul className="sidebar_bottom nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="assets/notification_icon.svg" alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className=" sidebar_list nav-link" href="#">
                LoremIpsum
              </a>
            </li>
            <li className="nav-item">
              <a className=" sidebar_list nav-link" href="#">
                LoremIpsum
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarComponent;
