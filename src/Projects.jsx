import React from "react";
import Cards from "./Cards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="d-flex justify-content-center align-items-center w-100"
    >
      {/* <!-- projects --> */}
      <div className="projects">
        {/* <!-- header-projects --> */}
        <div className="header-projects">
          <h1>My Projects</h1>
          <hr />
        </div>

        <div className="images-description-projects">
          <Cards
            article={{
              title: "PORTFOLIO",
              type: "Portfolio Website",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum quam non et fugiat sit. Fugit magnam dolore velit quae.",
            }}
            img={<img src="./assets/images/projects/portfolio.png" />}
            imgGithub={<img src="./assets/images/projects/github.png" />}
            imgBrowser={<img src="./assets/images/projects/browser.png" />}
          />

          <Cards
            article={{
              title: "NEPA STORE",
              type: "Ecommerce Website",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum quam non et fugiat sit. Fugit magnam dolore velit quae.",
            }}
            img={<img src="./assets/images/projects/e-commerce.png" />}
            imgGithub={<img src="./assets/images/projects/github.png" />}
            imgBrowser={<img src="./assets/images/projects/browser.png" />}
          />
          <Cards
            article={{
              title: "CLONE PORTFOLIO",
              type: "Cloned Portfolio",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum quam non et fugiat sit. Fugit magnam dolore velit quae.",
            }}
            img={<img src="./assets/images/projects/clone-portfolio.png" />}
            imgGithub={<img src="./assets/images/projects/github.png" />}
            imgBrowser={<img src="./assets/images/projects/browser.png" />}
          />
          <Cards
            article={{
              title: "RESUME",
              type: "Resume Website",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum quam non et fugiat sit. Fugit magnam dolore velit quae.",
            }}
            img={<img src="./assets/images/projects/resume.png" />}
            imgGithub={<img src="./assets/images/projects/github.png" />}
            imgBrowser={<img src="./assets/images/projects/browser.png" />}
          />
          <Cards
            article={{
              title: "SIGN IN",
              type: "Sign in Page",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum quam non et fugiat sit. Fugit magnam dolore velit quae.",
            }}
            img={<img src="./assets/images/projects/signin.png" />}
            imgGithub={<img src="./assets/images/projects/github.png" />}
            imgBrowser={<img src="./assets/images/projects/browser.png" />}
          />
          <Cards
            article={{
              title: "NEPA STORE",
              type: "Ecommerce Website",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum quam non et fugiat sit. Fugit magnam dolore velit quae.",
            }}
            img={<img src="./assets/images/projects/e-commerce.png" />}
            imgGithub={<img src="./assets/images/projects/github.png" />}
            imgBrowser={<img src="./assets/images/projects/browser.png" />}
          />
          <Cards
            article={{
              title: "NEPA STORE",
              type: "Ecommerce Website",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum quam non et fugiat sit. Fugit magnam dolore velit quae.",
            }}
            img={<img src="./assets/images/projects/e-commerce.png" />}
            imgGithub={<img src="./assets/images/projects/github.png" />}
            imgBrowser={<img src="./assets/images/projects/browser.png" />}
          />

          {/* <!-- card-2 --> */}
          <div className="card-projects style=" grid-area:two>
            {/* // <!-- img-description --> */}
            <div className="img-description">
              <img src="./images/projects/clone-portfolio.png" />
              <div className="description-hovering">
                {/* <!-- link-description --> */}
                <div className="link-description">
                  <div className="para-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis earum quam
                  </div>
                </div>

                <div className="link-icon">
                  <a
                    href="https://github.com/Ram-cpu-coder/Portfolio.git"
                    target="_blank"
                  >
                    <img src="./images/github.png" />
                  </a>
                  <a
                    href="https://ram-cpu-coder.github.io/Portfolio/"
                    target="_blank"
                  >
                    <img src="./images/browser.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="brief-description">
              <h3>CLONE PORTFOLIO | Cloned Portfolio</h3>
            </div>
          </div>

          {/* <!-- card-3 --> */}
          <div className="card-projects style=" grid-area:three>
            // -- img-description
            <div className="img-description">
              {/* <img src="./images/projects/portfolio.png"> */}
              <div className="description-hovering">
                {/* <!-- link-description --> */}
                <div className="link-description">
                  <div className="para-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis earum quam non et fugiat sit. Fugit magnam dolore velit
                    quae.
                  </div>
                </div>

                <div className="link-icon">
                  <a
                    href="https://github.com/Ram-cpu-coder/Dented-Code-Challenge1-Portfolio.git"
                    target="_blank"
                  >
                    <img src="./images/github.png" />
                  </a>
                  <a
                    href="https://ram-cpu-coder.github.io/Dented-Code-Challenge1-Portfolio/"
                    target="_blank"
                  >
                    <img src="./images/browser.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="brief-description">
              <h3>PORTFOLIO | Portfolio Website</h3>
            </div>
          </div>

          {/* <!-- card-4 --> */}
          <div className="card-projects style=" grid-area:four>
            {/* <!-- img-description --> */}
            <div className="img-description">
              <img src="./images/projects/resume.png" />
              <div className="description-hovering">
                {/* <!-- link-description --> */}
                <div className="link-description">
                  <div className="para-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis earum quam non et fugiat sit. Fugit magnam dolore velit
                    quae.
                  </div>
                </div>

                <div className="link-icon">
                  <a
                    href="https://github.com/Ram-cpu-coder/Resume-Sample.git"
                    target="_blank"
                  >
                    <img src="./images/github.png" />
                  </a>
                  <a
                    href="https://ram-cpu-coder.github.io/Resume-Sample/"
                    target="_blank"
                  >
                    <img src="./images/browser.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="brief-description">
              <h3>RESUME | Resume Website</h3>
            </div>
          </div>

          {/* <!-- card-5 --> */}
          <div className="card-projects style=" grid-area:five>
            {/* // <!-- img-description --> */}
            <div className="img-description">
              <img src="./images/projects/signin.png" />
              <div className="description-hovering">
                {/* <!-- link-description --> */}
                <div className="link-description">
                  <div className="para-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis earum quam non et fugiat sit. Fugit magnam dolore velit
                    quae.
                  </div>
                </div>

                <div className="link-icon">
                  <a
                    href="https://github.com/Ram-cpu-coder/Sign-Up-page.git"
                    target="_blank"
                  >
                    <img src="./images/github.png" />
                  </a>
                  <a
                    href="https://ram-cpu-coder.github.io/Sign-Up-page/"
                    target="_blank"
                  >
                    <img src="./images/browser.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="brief-description">
              <h3>SIGN IN | Sign in Page</h3>
            </div>
          </div>

          {/* <!-- card-6 --> */}
          <div className="card-projects style=" grid-area:six>
            {/* <!-- img-description --> */}
            <div className="img-description">
              <img src="./images/projects/signup.png" />
              <div className="description-hovering">
                {/* <!-- link-description --> */}
                <div className="link-description">
                  <div className="para-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis earum quam non et fugiat sit. Fugit magnam dolore velit
                    quae.
                  </div>
                </div>

                <div className="link-icon">
                  <a
                    href="https://github.com/Ram-cpu-coder/Sign-Up-page.git"
                    target="_blank"
                  >
                    <img src="./images/github.png" />
                  </a>
                  <a
                    href="https://ram-cpu-coder.github.io/Sign-Up-page/"
                    target="_blank"
                  >
                    <img src="./images/browser.png" />
                  </a>
                </div>
              </div>
            </div>

            <div className="brief-description">
              <h3>SIGN UP | Sign up Page</h3>
            </div>
          </div>

          {/* <!-- card-7 --> */}
          <div className="card-projects style=" grid-area:seven>
            {/* // <!-- img-description --> */}
            <div className="img-description">
              <img src="./images/projects/simple-portfolio.png" />
              <div className="description-hovering">
                {/* <!-- link-description --> */}
                <div className="link-description">
                  <div className="para-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis earum quam non et fugiat sit. Fugit magnam dolore velit
                    quae.
                  </div>
                </div>

                <div className="link-icon">
                  <a
                    href="https://github.com/Ram-cpu-coder/Dented-code-portfolio.git"
                    target="_blank"
                  >
                    <img src="./images/github.png" />
                  </a>
                  <a
                    href="https://https://ram-cpu-coder.github.io/Dented-code-portfolio/"
                    target="_blank"
                  >
                    <img src="./images/browser.png" />
                  </a>
                </div>
              </div>
            </div>

            <div className="brief-description">
              <h3>Portfolio | Portfolio Website</h3>
            </div>
          </div>

          {/* <!-- card-8 --> */}
          <div className="card-projects style=" grid-area:eight>
            {/* <!-- img-description --> */}
            <div className="img-description">
              <img src="./images/projects/travel-blog.png" />
              <div className="description-hovering">
                {/* <!-- link-description --> */}
                <div className="link-description">
                  <div className="para-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis earum quam non et fugiat sit. Fugit magnam dolore velit
                    quae.
                  </div>
                </div>

                <div className="link-icon">
                  <a
                    href="https://github.com/Ram-cpu-coder/Travel-Blog-Challenge-DentedCode.git"
                    target="_blank"
                  >
                    <img src="./images/github.png" />
                  </a>
                  <a
                    href="https://ram-cpu-coder.github.io/Travel-Blog-Challenge-DentedCode/"
                    target="_blank"
                  >
                    <img src="./images/browser.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="brief-description">
              <h3>TRAVEL BLOG | TravelBlog Website</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
