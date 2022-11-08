import React from "react";
import "./Home.css";
import HomeImg from "../../img/portfolio-image-sample.png";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import TechStack from "../TechStack/TechStack";

const Home = () => {
  return (
    <>
      <section className="homepage__container" id="home">
        <div className="homepage__wrapper">
          <div className="homepage__columns homepage__text-area">
            <div className="homepage__divider-line"></div>
            <h1 className="homepage__intro-title">
              I'm Anna, <br />a front-end developer.
            </h1>
            <div className="homepage__intro-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              deserunt <br /> vero officia distinctio neque minima quasi
              quisquam qui voluptatem <br /> iusto corrupti.
            </div>
            <button className="homepage__follow-btn">Let's talk</button>
            <div className="homepage__follow-links">
              <p className="homepage__follow-title">Follow me</p>
              <div className="homepage__sns-icons-wrapper">
                <FaGithub className="homepage__sns-icons" />
                <FaLinkedin className="homepage__sns-icons" />
                <FaTwitterSquare className="homepage__sns-icons" />
                <RiInstagramFill className="homepage__sns-icons" />
              </div>
            </div>
          </div>
          <div className="homepage__columns homepage__img-area">
            <img className="homepage__img" src={HomeImg} alt="profile" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
