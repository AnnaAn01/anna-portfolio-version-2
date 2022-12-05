import React from "react";
import { useRef, useState } from "react";
import "./NavbarBackup.css";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar-header">
      <div className="navbar-container">
        <LinkS
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={1500}
          className="navbar-logo"
          onClick={closeMenu}
        >
          Anna.
        </LinkS>

        <div className="hamburger" onClick={handleClick}>
          {click ? <MdClose size={30} /> : <IoMdMenu size={30} />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/*<ul className="nav-menu">*/}
          <li className="nav-item ">
            <LinkS
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1500}
              className={click ? "nav-link active" : "nav-link"}
              // className="nav-link"
              onClick={closeMenu}
            >
              Home
            </LinkS>
          </li>
          <li className="nav-item ">
            <LinkS
              to="teckstack"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1500}
              className="nav-link"
              onClick={closeMenu}
            >
              Tech stack
            </LinkS>
          </li>
          <li className="nav-item ">
            <LinkS
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
              className="nav-link"
              onClick={closeMenu}
            >
              Portfolio
            </LinkS>
          </li>
          <li className="nav-item ">
            <LinkS
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
              className="nav-link"
              onClick={closeMenu}
            >
              About Me
            </LinkS>
          </li>

          <LinkS
            to="contact"
            spy={true}
            smooth={true}
            offset={-79}
            duration={1500}
            className="nav-contact"
            onClick={closeMenu}
          >
            <button className="nav-contact-btn">Contact</button>
          </LinkS>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
