import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navBar">
      <div className="navTextFont" href="#">
        <NavLink className="navTextFont navLinkBtnActive" to="/">
          To-Do List App!
        </NavLink>
        <a
          href="https://www.linkedin.com/in/fatih-can-ata-9792b11ba/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
            className="d-inline-block align-top nbLinkedlnLogo"
            alt="linkedln-logo"
          ></img>
        </a>
        <a href="https://github.com/trainerdev" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className="d-inline-block align-top nbGithubLogo"
            alt="github-logo"
          ></img>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
