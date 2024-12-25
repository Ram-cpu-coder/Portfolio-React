import React, { useState } from "react";
import { FloatingLabel, Button } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoPhonePortrait } from "react-icons/io5";
import { LiaGithub } from "react-icons/lia";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState([]);
  console.log("Before", formData);
  const handleSubmit = () => {
    const newData = { firstName: firstName, lastName: lastName, email: email };
    setFormData((prev) => [...prev, newData]);

    setFirstName("");
    setLastName("");
    setEmail("");
  };
  console.log("After", formData);
  return (
    <div id="contact" className="block h-[auto]">
      <div className="wrapper-contact">
        <div className="bg-cover bg-fixed bg-top w-[100%] h-[350px] bg-[url('assets/images/contactBg.jpg')] flex justify-center items-center">
          <h1 className="text-5xl font-bold">Contact</h1>
        </div>
        <div className="flex items-center justify-center gap-10 w-[95%]">
          <div className="left-block flex flex-col justify-center items-center w-[45%] min-h-[60vh]">
            <h1 className="text-4xl mb-5">Lets Connect</h1>
            <p className="text-center w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              eius beatae reprehenderit quisquam fugit amet ullam quia ipsum
              dignissimos, laborum ipsa asperiores rerum eveniet rem provident
              autem eaque! Beatae soluta quos voluptates nostrum distinctio.
            </p>
            <div className="contact-icons text-3xl mt-5">
              <a href="https://github.com/Ram-cpu-coder" target="_blank">
                <LiaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ramkumardhimal/"
                target="_blank"
              >
                <TiSocialLinkedinCircular />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <TiSocialYoutubeCircular />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <TiSocialFacebookCircular />
              </a>
            </div>
            <div className="flex justify-between items-center gap-2 mt-5 font-bold">
              <a href="mailto:ramkumardhimal2057@icloud.com">
                <MdEmail />
              </a>
              <a href="tel: 043278872983" target="_blank">
                <IoPhonePortrait />
              </a>
            </div>
          </div>
          <div className="right-block flex flex-col justify-center items-center w-[auto] min-h-[60vh]">
            <h1 className="text-4xl mb-5">Stay in Touch</h1>
            <form
              className="w-[100%] flex flex-col items-center justify-center"
              onSubmit={(e) => {
                e.preventDefault;
                handleSubmit();
              }}
            >
              <FloatingLabel
                variant="outlined"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FloatingLabel
                variant="outlined"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <FloatingLabel
                variant="outlined"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="w-[95%]">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
