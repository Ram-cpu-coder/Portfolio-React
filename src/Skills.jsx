import React, { useEffect, useState } from "react";

import { Carousel } from "flowbite-react";
const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 790px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    //clean up the lsitener on component unamount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);
  return (
    <div className="block wrapper-skills-projects min-h-[92.35vh] h-[auto] ">
      <div className="header-projects">
        <h1 className="text-5xl font-bold">Skills</h1>
      </div>
      <div className="h-[400px] w-[85%]">
        {isMobile ? (
          <Carousel className="bg-black rounded-3xl">
            <div className="min-h[auto] h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/html.png"
                className="h-[115px] w-[100px]"
              />
            </div>
            <div className="min-h[auto] h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/css.png"
                className="h-[115px] w-[100px] "
              />
            </div>
            <div className="min-h[auto] h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/js.png"
                className="h-[110px] w-[105px]"
              />
            </div>
            <div className="h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/react.png"
                className="h-[120px] w-[120px] "
              />
            </div>
            <div className="min-h[auto] h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/node.png"
                className="h-[120px] w-[120px] "
              />
            </div>
            <div className="min-h[auto] h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/mongodb.png"
                className="h-[120px] w-[120px] "
              />
            </div>
            <div className="h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/github.png"
                className="h-[100px] w-[100px] invert"
              />
            </div>
            <div className="min-h[auto] h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/figma.png"
                className="h-[100px] w-[100px] "
              />
            </div>
          </Carousel>
        ) : (
          <Carousel className="bg-black rounded-3xl">
            <div className="min-h[auto] h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/html.png"
                className="h-[115px] w-[100px]"
              />

              <img
                src="./assets/images/css.png"
                className="h-[115px] w-[100px] "
              />

              <img
                src="./assets/images/js.png"
                className="h-[110px] w-[105px]"
              />
            </div>
            <div className="h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/react.png"
                className="h-[120px] w-[120px] "
              />
              <img
                src="./assets/images/node.png"
                className="h-[120px] w-[120px] "
              />
              <img
                src="./assets/images/mongodb.png"
                className="h-[120px] w-[120px] "
              />
            </div>
            <div className="h-[500px] w-[100%] flex justify-around items-center">
              <img
                src="./assets/images/github.png"
                className="h-[100px] w-[100px] invert"
              />

              <img
                src="./assets/images/figma.png"
                className="h-[100px] w-[100px] "
              />
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Skills;
