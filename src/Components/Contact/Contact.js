import React from "react";
import "./Contact.css";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact__container" id="contact">
      <div className="contact__wrapper">
        <div className="contact__columns contact__title-area">
          <div className="contact__divider-line"></div>
          <h2 className="contact__title">Get in tuch</h2>
          <p className="contact__subtext">
            I am available for hire and open to any ideas of cooperation.
          </p>
          <ul className="contact__items">
            <li className="contact__email-item">
              <div className="contact__item-name">Email:</div>
              <a
                href="mailto: arzumanyan.an@gmail.com"
                className="contact__items contact__email"
              >
                <MdIcons.MdEmail className="contact__icons" />
                arzumanyan.an@gmail.com
              </a>
            </li>

            <li className="contact__linkedin-item">
              <div className="contact__item-name">LinkedIn:</div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/anna-arzumanyan/"
                className="contact__items contact__linkedin"
              >
                <FaIcons.FaLinkedin className="contact__icons" />
                Anna Arzumanyan
              </a>
            </li>

            <li className="contact__github-item">
              <div className="contact__item-name"> GitHub:</div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AnnaAn01"
                className="contact__items contact__github"
              >
                <FaIcons.FaGithubSquare className="contact__icons" />
                AnnaAn01
              </a>
            </li>
            <li className="contact__twitter-item">
              <div className="contact__item-name"> Twitter:</div>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/AnnaSoftwareDev"
                className="contact__items contact__twitter"
              >
                <FaIcons.FaTwitterSquare className="contact__icons" />
                @AnnaSoftwareDev
              </a>
            </li>
            {/* 
          <li className="contact__youtube-item">
            <div className="contact__item-name"> YouTube:</div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtube.com"
              className="contact__items contact__youtube"
            >
              <FaIcons.FaYoutube className="contact__icons" />
              Anna's youtube
            </a>
          </li> */}
          </ul>
        </div>
        <div className="contact__columns contact__list-area">
          <form className="contact__form">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="contact__form-input"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="contact__form-input"
            />
            <label>Message</label>
            <textarea name="message" />
            <input
              type="submit"
              value="Send"
              className="contact__input-submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
