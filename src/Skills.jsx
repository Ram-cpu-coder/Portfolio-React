import React from "react";

const Skills = () => {
  return (
    <div className="wrapper-skills-projects">
      {/* <!-- skills --> */}
      <div className="skills">
        {/* <!-- header-skills --> */}
        <div className="header-skills">
          <h1>Skills</h1>
          <hr />
        </div>

        {/* <!-- images-skills --> */}
        <div className="images-skills">
          <img src="./assets/images/html.png" />
          <img src="./assets/images/css.png" />
          <img src="./assets/images/js.png" />
          <img src="./assets/images/github.png" />
          <img src="./assets/images/figma.png" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
