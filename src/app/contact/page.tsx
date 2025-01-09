import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl uppercase font-bold mb-4 text-center">
        Connect With Me
      </h2>
      <ul className="grid gap-7 mt-8 lg:mt-24">
        <li>
          <a
            href="https://x.com/marius_nmc"
            aria-label="Twitter"
            className="flex gap-6 items-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
            <span className="text-2xl font-bold">React Me On Twitter </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Goldmyn"
            aria-label="GitHub"
            className="flex gap-6 items-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
            <span className="text-2xl font-bold">View My GitHub </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/marius-nwokolo-gymcode/"
            aria-label="LinkedIn"
            className="flex gap-6 items-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
            <span className="text-2xl font-bold">
              Connect With Me On Linkedin{" "}
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/goldmyn"
            aria-label="CodePen"
            className="flex gap-6 items-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen size={30} />
            <span className="text-2xl font-bold">View my CodePen</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+2348103736627"
            aria-label="Twitter"
            className="flex gap-6 items-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} />
            <span className="text-2xl font-bold">Contact Me On WhatsApp</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
