import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__sns-icons-wrapper">
          <FaGithub className="footer__sns-icons" />
          <FaLinkedin className="footer__sns-icons" />
          <FaTwitterSquare className="footer__sns-icons" />
          <RiInstagramFill className="footer__sns-icons" />
        </div>
        <div className="footer__contact-me">
          Feel free to contact me for full-time positions or collaboration.
        </div>
        <div className="footer__divider-line"></div>
        <div className="footer__under-the-line">
          {" "}
          <div className="footer__developed-by">
            Developed by Anna Arzumanyan © 2022
          </div>
          <div className="footer__techstack-used">
            Techstack used for this project - ReactJs, CSS3
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
