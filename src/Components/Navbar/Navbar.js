// import React from "react";
// import { useRef, useState } from "react";
// import "./Navbar.css";
// import { IoMdMenu } from "react-icons/io";
// import { MdClose } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

// const Navbar = () => {
//   const navRef = useRef();
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMenu = () => setClick(false);

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };
//   return (
//     <header className="navbar-header">
//       <div className="navbar-container">
//         <h3 className="navbar-logo-h3">Anna.</h3>
//         <nav ref={navRef}>
//           <LinkS
//             to="home"
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={500}
//             className="nav-link"
//           >
//             Home
//           </LinkS>
//           <LinkS
//             to="teckstack"
//             spy={true}
//             smooth={true}
//             offset={50}
//             duration={500}
//             className="nav-link"
//           >
//             Tech stack
//           </LinkS>
//           <LinkS
//             to="portfolio"
//             spy={true}
//             smooth={true}
//             offset={50}
//             duration={500}
//             className="nav-link"
//           >
//             Portfolio
//           </LinkS>
//           <LinkS
//             to="about"
//             spy={true}
//             smooth={true}
//             offset={50}
//             duration={500}
//             className="nav-link"
//           >
//             About me
//           </LinkS>

//           <LinkS
//             to="contact"
//             spy={true}
//             smooth={true}
//             offset={50}
//             duration={500}
//             className="nav-link nav-contact-btn"
//           >
//             Contact
//           </LinkS>
//           {/* <button className="nav-contact-btn">Contact</button>*/}

//           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//             <MdClose />
//           </button>
//         </nav>

//         <button className="nav-btn" onClick={showNavbar}>
//           <IoMdMenu />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React from "react";
// import { useRef, useState } from "react";
// import "./Navbar.css";
// import { IoMdMenu } from "react-icons/io";
// import { MdClose } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

// const Navbar = () => {
//   const navRef = useRef();
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMenu = () => setClick(false);

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };
//   return (
//     <header className="navbar-header">
//       <nav className="navbar-container">
//         <h3 className="navbar-logo-h3">Anna.</h3>
//         {click ? (
//           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//             <MdClose />
//           </button>
//         ) : (
//           <button className="nav-btn" onClick={handleClick}>
//             <IoMdMenu />
//           </button>
//         )}
//         <LinkS
//           to="home"
//           spy={true}
//           smooth={true}
//           offset={-50}
//           duration={500}
//           className="nav-link"
//         >
//           Home
//         </LinkS>
//         <LinkS
//           to="teckstack"
//           spy={true}
//           smooth={true}
//           offset={50}
//           duration={500}
//           className="nav-link"
//         >
//           Tech stack
//         </LinkS>
//         <LinkS
//           to="portfolio"
//           spy={true}
//           smooth={true}
//           offset={50}
//           duration={500}
//           className="nav-link"
//         >
//           Portfolio
//         </LinkS>
//         <LinkS
//           to="about"
//           spy={true}
//           smooth={true}
//           offset={50}
//           duration={500}
//           className="nav-link"
//         >
//           About me
//         </LinkS>

//         <LinkS
//           to="contact"
//           spy={true}
//           smooth={true}
//           offset={50}
//           duration={500}
//           className="nav-link nav-contact-btn"
//         >
//           Contact
//         </LinkS>
//         {/* <button className="nav-contact-btn">Contact</button>*/}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import { useRef, useState } from "react";
import "./Navbar.css";
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
    <div className="navbar-header">
      <nav className="navbar-container">
        <a href="/" className="navbar-logo">
          Anna.
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? <MdClose size={30} /> : <IoMdMenu size={30} />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item ">
            <LinkS
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link"
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
              duration={500}
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
              duration={500}
              className="nav-link"
              onClick={closeMenu}
            >
              Portfolio
            </LinkS>
          </li>

          <LinkS
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-item "
            onClick={closeMenu}
          >
            <button className="nav-contact-btn">Contact </button>
          </LinkS>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
