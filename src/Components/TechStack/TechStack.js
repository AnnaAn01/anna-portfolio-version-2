import React from "react";
import "./TechStack.css";
import { SiStyledcomponents } from "react-icons/si";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoSass,
  IoLogoGithub,
} from "react-icons/io5";

const TechStack = () => {
  return (
    <section className="techstack__container" id="teckstack">
      <div className="techstack__wrapper">
        <div className="techstack__columns techstack__title-area">
          <div className="techstack__divider-line"></div>
          <h2 className="techstack__title">My current tech stack</h2>
          <button className="techstack__follow-btn">Let's talk</button>
        </div>
        <div className="techstack__columns techstack__list-area">
          <div className="techstack__item-wrapper">
            <IoLogoHtml5 className="techstack__icon-html" />
            <div className="techstack__item-title">HTML</div>
          </div>
          <div className="techstack__item-wrapper">
            <IoLogoCss3 className="techstack__icon-css" />
            <div className="techstack__item-title">CSS</div>
          </div>
          <div className="techstack__item-wrapper">
            <IoLogoJavascript className="techstack__icon-js" />
            <div className="techstack__item-title">Javascript</div>
          </div>
          <div className="techstack__item-wrapper">
            <IoLogoReact className="techstack__icon-react" />
            <div className="techstack__item-title">ReactJS</div>
          </div>
          <div className="techstack__item-wrapper">
            <IoLogoNodejs className="techstack__icon-node" />
            <div className="techstack__item-title">NodeJS</div>
          </div>
          <div className="techstack__item-wrapper">
            <IoLogoSass className="techstack__icon-sass" />
            <div className="techstack__item-title">Sass</div>
          </div>
          <div className="techstack__item-wrapper">
            <IoLogoGithub className="techstack__icon-github" />
            <div className="techstack__item-title">GitHub</div>
          </div>
          <div className="techstack__item-wrapper">
            <SiStyledcomponents className="techstack__icon-styled-comp" />
            <div className="techstack__item-title techstack__styled-comp">
              Styled <span className="styled-comp__span">Comp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
