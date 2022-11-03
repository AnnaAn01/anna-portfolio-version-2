import React from "react";
import "./About.css";
import HomeImg from "../../img/portfolio-image-sample.png";

const About = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__wrapper">
        <div className="about__columns about__text-area">
          <div className="about__divider-line"></div>
          <h1 className="about__intro-title">About me</h1>
          <div className="about__intro-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odit
            dolor, odio suscipit ratione quas, consectetur a qui ad doloremque
            cumque ducimus tempora adipisci eum, nihil deleniti. Magnam atque
            consequuntur, accusamus tempora nam eos et mollitia quis
            voluptatibus id, facere dolorem, similique vel sit iste cupiditate
            aut. Eveniet voluptatem quibusdam velit nemo asperiores in quos?
            Suscipit esse cupiditate cumque amet! Voluptatum earum natus in cum
            qui quam quis, nostrum culpa soluta beatae dolorum! Officia maiores
            temporibus incidunt aspernatur, aut, ipsa at earum saepe quaerat
            quibusdam natus minus illo voluptate cumque. Doloribus unde amet
            exercitationem quos aut similique incidunt, molestiae nam
            blanditiis! Illo recusandae nulla minus voluptas facere, maxime
            alias consectetur itaque architecto impedit officia veniam
            quibusdam, voluptates inventore ab!
          </div>
          <button className="about__follow-btn">Let's talk</button>
        </div>
        <div className="about__columns about__img-area">
          <img className="about__img" src={HomeImg} alt="about-me" />
        </div>
      </div>
    </section>
  );
};

export default About;
