import React from "react";
import { MdOutgoingMail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact">
      <div className="wrapper-contact">
        <h1>Contact</h1>
        <div className="contact-icons">
          <a href="https://github.com/Ram-cpu-coder" target="_blank">
            <img src="./assets/images/contact/github.png" />
          </a>
          <a href="https://www.linkedin.com/in/ramkumardhimal/" target="_blank">
            <img src="./assets/images/contact/linkedin.png" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="./assets/images/contact/youtube.png" />
          </a>
          <a href="tel: 043278872983" target="_blank">
            <img src="./assets/images/contact/phone.png" />
          </a>
        </div>

        <h1>OR</h1>
        <div className="email-input">
          <a href="mailto:ramkumardhimal2057@icloud.com">
            <MdOutgoingMail className="text-5xl text-black hover:scale-125 duration-150" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
