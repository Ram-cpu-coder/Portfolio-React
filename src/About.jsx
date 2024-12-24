import React from "react";

const About = () => {
  return (
    <div className="wrapper-about w-[100%]">
      <div className="w-[85%] flex justify-center items-center bg-opacity-30 bg-white rounded-3xl p-2 custom-css-col">
        <div className="w-[45%] left-hero-container img-about">
          <img src="./assets/images/man.png" />
        </div>

        <div className="text-about">
          <div className="detail-about">
            <h1 className="text-5xl text-center">Ram Kumar Dhimal</h1>
            <p className="w-[80%] text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum
              dolore accusantium laboriosam soluta commodi consectetur totam.
              Reprehenderit inventore aut eos et ab similique ipsum rerum
              recusandae ad vero! Neque obcaecati quidem culpa sapiente.
            </p>
            <h2 className="text-5xl text-center">Sydney, Australia</h2>
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
