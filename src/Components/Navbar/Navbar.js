import React from "react";
import { useRef } from "react";
import "./Navbar.css";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <h3 className="navbar-logo-h3">Anna.</h3>
        <nav ref={navRef}>
          <LinkR to="/" className="nav-link">
            Home
          </LinkR>
          <LinkR to="/techstack" className="nav-link">
            Tech stack
          </LinkR>
          <a className="nav-link" href="/#">
            Portfolio
          </a>
          <a className="nav-link" href="/#">
            About me
          </a>

          <a className="nav-link nav-contact-btn" href="/#">
            Contact
          </a>
          {/* <button className="nav-contact-btn">Contact</button>*/}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <MdClose />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <IoMdMenu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
