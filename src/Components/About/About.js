import React from "react";
import "./About.css";
import HomeImg from "../../img/portfolio-image-sample.png";

const About = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__wrapper">
        <div className="about__columns about__text-area">
          <div className="about__divider-line"></div>
          <h1 className="about__intro-title">
            I'm Anna, <br />a front-end developer.
          </h1>
          <div className="about__intro-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            deserunt <br /> vero officia distinctio neque minima quasi quisquam
            qui voluptatem <br /> iusto corrupti.
          </div>
          <button className="about__follow-btn">Let's talk</button>
        </div>
        <div className="about__columns about__img-area">
          <img className="about__img" src={HomeImg} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
