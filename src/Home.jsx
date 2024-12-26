import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="">
      <div className="main-container">
        <div className="left-hero-container">
          <div className="hero-container left-block">
            <div className="left-top-hero">
              <div className="para-hero">
                <h3>
                  Hi, I am
                  <br />
                  <span className="highlight">Ram Kumar Dhimal</span>
                </h3>
                <h3 className="dynamic-text">
                  <ul>
                    <li>Developer</li>
                    <li>Designer</li>
                  </ul>
                </h3>
                <h3>
                  I love to code and
                  <br />
                  teach what I know
                </h3>
              </div>

              <div className="button flex">
                <button className="download-CV">
                  <a href="/assets/Resume.pdf" download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>

          <img src="./assets/images/man.png" className="right-block" />
        </div>
        <div className="achievement-container bottom-block">
          <div className="achievement">
            <img src="./assets/images/badge.png" />
            <div className="text-achievement">
              <h2>Bachelor's in IT</h2>
              <p id="red">Graduated</p>
            </div>
          </div>
          <hr />
          <div className="achievement">
            <img src="./assets/images/badge.png" />
            <div className="text-achievement">
              <h2>Full Stack Dev</h2>
              <p id="red">In Progress</p>
            </div>
          </div>
          <hr />
          <div className="achievement">
            <img src="./assets/images/badge.png" />
            <div className="text-achievement">
              <h2>5 + Projects</h2>
              <p id="red">Completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="view">
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
