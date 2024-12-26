import React from "react";
import { PiCopyrightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { LiaGithub } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="h-[30vh] text-black flex flex-col justify-center items-center w-full border-t-2">
      <div className="footer flex justify-around items-start w-full min-h-[25vh] h-[auto] mt-3">
        <div className="smallScreen flex justify-around items-start w-[75%]">
          <div className="">
            <h1 className="text-4xl flex flex-col text-left">
              <span
                id="logo"
                className="text-4xl whitespace-nowrap dark:text-white"
              >
                RA<span className="text-[black] font-bold">M</span>.
              </span>
              <span className="text-xl">Software Developer</span>
            </h1>
          </div>

          <div className="flex flex-col ">
            <Link to="/" className={`text-xl`}>
              Home
            </Link>

            <Link to="/skills" className={`text-xl`}>
              Skills
            </Link>
            <Link to="/projects" className={`text-xl`}>
              Projects
            </Link>
            <Link to="/about" className={`text-xl`}>
              About
            </Link>
            <Link to="/contact" className={`text-xl`}>
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[25%]">
          <h1 className="text-3xl">Find Me</h1>
          <div className="after-effect flex justify-center items-center">
            <Link to="https://github.com/Ram-cpu-coder" target="_blank">
              <LiaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ramkumardhimal/"
              target="_blank"
            >
              <TiSocialLinkedinCircular />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <TiSocialYoutubeCircular />
            </Link>
            <Link to="https://www.facebook.com/" target="_blank">
              <TiSocialFacebookCircular />
            </Link>
          </div>
        </div>
      </div>

      <div className="inline-flex items-center justify-center mt-5">
        <PiCopyrightLight /> 2024 Made by Ram Kumar Dhimal. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
