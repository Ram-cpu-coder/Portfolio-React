"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("home");
    } else if (location.pathname === "/skills") {
      setActiveLink("skills");
    } else if (location.pathname === "/projects") {
      setActiveLink("projects");
    } else if (location.pathname === "/about") {
      setActiveLink("about");
    } else if (location.pathname === "/contact") {
      setActiveLink("contact");
    }
  }, [location.pathname]);

  return (
    <Navbar rounded className="sticky top-0 h-[50px] z-10 bg-[white] shadow-lg">
      <Navbar.Brand href="/">
        <h1 className="text-2xl">
          <span
            id="logo"
            className="self-center text-2xl whitespace-nowrap dark:text-white"
          >
            RA<span className="text-[black] font-bold">M</span>.
          </span>
        </h1>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="bg-white">
        <Navbar.Link
          className={`text-xl ${activeLink === "home" ? "active" : ""}`}
        >
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link
          className={`text-xl ${activeLink === "skills" ? "active" : ""}`}
        >
          <Link to="/skills">Skills</Link>
        </Navbar.Link>
        <Navbar.Link
          className={`text-xl ${activeLink === "projects" ? "active" : ""}`}
        >
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
        <Navbar.Link
          className={`text-xl ${activeLink === "about" ? "active" : ""}`}
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link
          className={`text-xl ${activeLink === "contact" ? "active" : ""}`}
        >
          <Link to="/contact">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
