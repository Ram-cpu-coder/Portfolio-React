import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ img, article, imgBrowser, imgGithub }) => {
  return (
    <div className="card-projects grid-area-one">
      {/* // <!-- img-description --> */}
      <div className="img-description">
        {img}
        <div className="description-hovering">
          {/* <!-- link-description --> */}
          <div className="link-description">
            <div className="para-description">
              <p>{article?.description}</p>
            </div>
          </div>

          <div className="link-icon">
            <a
              href="https://github.com/Ram-cpu-coder/E-Commerce-HTML-CSS.git"
              target="_blank"
            >
              {imgBrowser}
            </a>
            <a
              href="https://ram-cpu-coder.github.io/E-Commerce-HTML-CSS/"
              target="_blank"
            >
              {imgGithub}
            </a>
          </div>
        </div>
      </div>
      <div className="brief-description">
        <h3>
          {article.title} | {article?.type}
        </h3>
      </div>
    </div>
  );
};

export default Cards;
