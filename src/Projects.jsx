import React from "react";
import Cards from "./Cards";

const Projects = () => {
  return (
    <section id="projects" className="min-h-[100vh]">
      {/* <!-- projects --> */}
      <div className="projects my-5 w-[85%]">
        <div className=" d-flex justify-content-end w-100 block"></div>
        {/* <!-- header-projects --> */}
        <div className="header-projects block">
          <h1 className="text-5xl font-bold">My Projects</h1>
        </div>

        <div className="images-description-projects">
          <Cards
            article={{
              title: "PORTFOLIO",
              type: "Portfolio Website",
              grid: "grid-area-one",
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
              grid: "grid-area-two",
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
              grid: "grid-area-three",
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
              grid: "grid-area-four",
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
              grid: "grid-area-five",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum quam non et fugiat sit. Fugit magnam dolore velit quae.",
            }}
            img={<img src="./assets/images/projects/signin.png" />}
            imgGithub={<img src="./assets/images/projects/github.png" />}
            imgBrowser={<img src="./assets/images/projects/browser.png" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
