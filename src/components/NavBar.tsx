"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const NavBar: React.FC = () => {
  const greetings = [
    "Hi !",
    "I Am Marius Nwokolo.",
    "Explore my projects and ideas!",
  ];

  const [greeting, setGreeting] = useState(greetings[0]);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the index to the next greeting
      setGreetingIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % greetings.length; // Loop back to the start
        setGreeting(greetings[nextIndex]); // Update current greeting
        return nextIndex; // Return next index for proper iteration
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [greetings]);
  return (
    <nav className=" text-white lg:h-screen lg:ml-[5rem] xl:ml-[7rem]">
      <ul className="sm:flex grid grid-cols-2 fixed w-full mx-auto pt-2 sm:w-full sm:justify-center top-0 z-20 mb-4 bg-slate-900/75 px-6 sm:py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        {["about", "projects", "experience", "contact"].map((item) => (
          <li className="mb-3 flex justify-center" key={item}>
            <Link href={`/${item}`} passHref>
              {/* Directly place the inner content without an extra <a> */}
              <div className="group flex items-center gap-2 transition-all">
                <span className="ml-4 transition-all group-hover:ml-6 group-hover:text-gray-200 text-gray-400 font-bold text-sm">
                  {item.toUpperCase()}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <h1 className="text-5xl max-w-[450px] mt-14 sm:mt-10 lg:mt-0 font-bold my-3 text-gray-300 animate-pulse">
        <span className="text-5xl">{greeting}</span>
      </h1>
      <h5 className="text-xl font-semibold mb-5 text-gray-300">
        Software Engineer
      </h5>
      <p className="max-w-[300px] font-semibold text-gray-400">
        I build pixel-perfect engaging and accessible digital experiences
      </p>
      <ul className="hidden lg:block lg:mt-20">
        {["about", "projects", "experience", "contact"].map((item) => (
          <li className="mb-3" key={item}>
            <Link href={`/${item}`} passHref>
              {/* Directly place the inner content without an extra <a> */}
              <div className="group flex items-center gap-2 transition-all">
                <span className="inline-block w-8 h-[1px] bg-gray-400 group-hover:bg-gray-200 group-hover:w-[60px] transition-all"></span>
                <span className="ml-4 transition-all group-hover:ml-6 group-hover:text-gray-200 text-gray-400 font-bold text-sm">
                  {item.toUpperCase()}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-7 mt-8 lg:mt-24">
        <li>
          <a
            href="https://github.com/Goldmyn"
            aria-label="GitHub"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/marius-nwokolo-gymcode/"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/goldmyn"
            aria-label="CodePen"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaCodepen size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/marius_nmc"
            aria-label="Twitter"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaTwitter size={30} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
