import React from "react";
import "./Portfolio.css";
import ProjectImg from "../../img/portfolio-image-sample-2.png";
import RecipeImg from "../../img/recipe-project.png";

const Portfolio = () => {
  return (
    <section className="portfolio__container" id="portfolio">
      <div className="portfolio__wrapper">
        <div className="portfolio__divider-line"></div>
        <h1 className="portfolio__intro-title">
          Selected <br />
          projects
        </h1>
        <div className="portfolio__projects-wrapper">
          <div className="portfolio__columns portfolio__col-2-img">
            <img
              className="portfolio__project-img"
              src={RecipeImg}
              alt="project"
            />
          </div>
          <div className="portfolio__columns portfolio__col-1-txt">
            <div className="portfolio__project-tite">Recipe Website</div>
            <div className="portfolio__project-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ad
              reiciendis quaerat in autem, voluptatibus, distinctio soluta
              officiis corrupti ab est ullam molestiae.
            </div>
            <div className="portfolio__proect-techstack-wrapper">
              <span className="portfolio__project-techstack">ReactJS</span>
              <span className="portfolio__project-techstack">CSS</span>
            </div>
            <div className="portfolio__project-btn-wrapper">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://annaan01.github.io/recipe-website/#/"
                className="portfolio__project-btn"
              >
                Live
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AnnaAn01/recipe-website"
                className="portfolio__project-btn"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio__projects-wrapper">
          <div className="portfolio__columns portfolio__col-1-txt">
            <div className="portfolio__project-tite">Project 2 Title Here</div>
            <div className="portfolio__project-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ad
              reiciendis quaerat in autem, voluptatibus, distinctio soluta
              officiis corrupti ab est ullam molestiae.
            </div>
            <div className="portfolio__proect-techstack-wrapper">
              <span className="portfolio__project-techstack">ReactJS</span>
              <span className="portfolio__project-techstack">CSS</span>
            </div>
            <div className="portfolio__project-btn-wrapper">
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="portfolio__project-btn"
              >
                Live
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="portfolio__project-btn"
              >
                Source
              </a>
            </div>
          </div>
          <div className="portfolio__columns portfolio__col-2-img">
            <img
              className="portfolio__project-img"
              src={ProjectImg}
              alt="project"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
