import React from "react";
import "./Portfolio.css";
import ProjectImg from "../../img/portfolio-image-sample-2.png";

const Portfolio = () => {
  return (
    <section className="portfolio__container" id="portfolio">
      <div className="portfolio__divider-line"></div>
      <h1 className="portfolio__intro-title">
        Selected <br />
        projects
      </h1>
      <div className="portfolio__wrapper">
        <div className="portfolio__columns portfolio__col-1-txt">
          <div className="portfolio__project-tite">Project Title Here</div>
          <div className="portfolio__project-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ad
            reiciendis quaerat in autem, voluptatibus, distinctio soluta
            officiis corrupti ab est ullam molestiae, nesciunt vitae ipsa
            perferendis quisquam maxime libero.
          </div>
          <span className="portfolio__proect-techstack">ReactJS</span>
          <span className="portfolio__proect-techstack">CSS</span>
          <button className="portfolio__project-btn">Live</button>
          <button className="portfolio__project-btn">Source</button>
        </div>
        <div className="portfolio__columns portfolio__col-2-img">
          <img
            className="portfolio__project-img"
            src={ProjectImg}
            alt="project"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
