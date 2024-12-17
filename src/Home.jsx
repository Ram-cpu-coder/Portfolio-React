import React from "react";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="left-hero-container">
          <div className="hero-container">
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

              <div className="button">
                <button className="download-CV">
                  <a href="" download>
                    Download CV <i className="fa-solid fa-download"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <img src="./assets/images/man.png" />
        </div>
        <div className="achievement-container">
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
    </div>
  );
};

export default Home;
