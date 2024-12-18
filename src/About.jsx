import React from "react";

const About = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <div className="wrapper-about w-100">
        <div className="img-about">
          <img src="./assets/images/man.png" />
        </div>

        <div className="text-about">
          <h1>About Me</h1>
          <div className="detail-about">
            <h1>Ram Kumar Dhimal</h1>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum
              dolore accusantium laboriosam soluta commodi consectetur totam.
              Reprehenderit inventore aut eos et ab similique ipsum rerum
              recusandae ad vero! Neque obcaecati quidem culpa sapiente.
            </p>
            <h2>Sydney, Australia</h2>
          </div>
          <div className="interest">
            <h1>Interest</h1>
            <ul>
              <li>Coding</li>
              <li>Football</li>
              <li>Singing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
