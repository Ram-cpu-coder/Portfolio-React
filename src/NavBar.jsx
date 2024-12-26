"use client";
import React, { useEffect, useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

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
          href="/"
          className={`text-xl ${activeLink === "home" ? "active" : ""}`}
        >
          Home
        </Navbar.Link>

        <Navbar.Link
          href="/skills"
          className={`text-xl ${activeLink === "skills" ? "active" : ""}`}
        >
          Skills
        </Navbar.Link>
        <Navbar.Link
          href="/projects"
          className={`text-xl ${activeLink === "projects" ? "active" : ""}`}
        >
          Projects
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          className={`text-xl ${activeLink === "about" ? "active" : ""}`}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          className={`text-xl ${activeLink === "contact" ? "active" : ""}`}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
