import React from "react";
import "../../styles/Nav.scss";

const SidebarComponent = (props) => {
  return (
    <nav className="navbar p-0 py-4">
      <a className="navbar-brand align-bottom" href="#">
        <img
          src="assets/navbar_brand.svg"
          className="d-inline-block align-top"
          alt=""
        />
      </a>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src="assets/notification_icon.svg" alt="" />
          </a>
        </li>
        <li className="nav-item">
          <a className=" topnav_title nav-link" href="#">
            Mon compte ⬇
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarComponent;
