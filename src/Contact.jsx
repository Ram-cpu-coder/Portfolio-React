import React, { useState } from "react";
import { FloatingLabel, Button, Modal, Label, TextInput } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoPhonePortrait } from "react-icons/io5";
import { LiaGithub } from "react-icons/lia";
import { IoChatbubblesOutline } from "react-icons/io5";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  // console.log("Before", formData);

  const onCloseModal = () => {
    setOpenModal(false);
    setEmail("");
  };
  const handleSubmit = () => {
    const newData = { firstName: firstName, lastName: lastName, email: email };
    setFormData((prev) => [...prev, newData]);

    setFirstName("");
    setLastName("");
    setEmail("");
  };
  // console.log("After", formData);
  return (
    <div id="contact" className="block min-h-[95vh] h-[auto]">
      <div className="flex flex-col contact items-center justify-center w-[95%] relative h-[80vh]">
        <div className="flex flex-col justify-center items-center min-h-[30vh] w-[100%]">
          <h1 className="text-5xl font-bold mb-5 text-center">Lets Connect</h1>
          <div className="contact-icons text-5xl">
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
          <div className="flex justify-between items-center gap-2 mt-5 font-bold text-4xl">
            <a href="mailto:ramkumardhimal2057@icloud.com">
              <MdEmail />
            </a>
            <a href="tel: 043278872983" target="_blank">
              <IoPhonePortrait />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[100%] min-h-[auto]">
          <h2 className="text-5xl font-bold mb-5 text-center">Address</h2>
          <p className="text-center text-xl w-[60%]">Strathfield, NSW 2135</p>
        </div>
        <Button
          className="absolute bottom-5 right-0"
          onClick={() => setOpenModal(true)}
        >
          <IoChatbubblesOutline className=" text-3xl" />
        </Button>
      </div>
      <div
        className={`flex flex-col justify-center items-center w-[auto] h-[auto]`}
      >
        <Modal
          show={openModal}
          size="md"
          onClose={onCloseModal}
          popup
          className=""
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Stay in Touch
              </h3>
              <div>
                <div className="mb-2">
                  <Label htmlFor="name" value="Your Name" />
                </div>
                <TextInput id="name" type="text" required />
              </div>
              <div>
                <div className="mb-2">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="w-full">
                <Button>Submit</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
