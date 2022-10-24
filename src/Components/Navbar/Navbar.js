// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// // import logo from "./images/logo.png";

// import "./Navbar.css";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   const closeMenu = () => setClick(false);

//   return (
//     <div className="header">
//       <nav className="navbar"></nav>
//     </div>
//   );
// };

// export default Navbar;

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
          <LinkS
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-link"
          >
            Home
          </LinkS>
          <LinkR
            to="#techstack"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-link"
          >
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
