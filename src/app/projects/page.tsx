import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <section id="project" className="scroll-mt-20 mb-20 grid gap-6 lg:gap-3">
      {/* <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h1 className="lg:sr-only text-gray-300 font-bold">PROJECTS</h1>
      </div> */}

      {/* Project 1 */}
      <Link href="https://f-mart.vercel.app/" passHref>
        <div className="group flex flex-col-reverse md:grid md:grid-cols-4 gap-4 md:hover:bg-slate-400/[.06] md:px-4 py-2 rounded-md transition-all cursor-pointer">
          <p className="transition-all text-gray-400 font-semibold text-sm py-2">
            <img
              src="fmart.jpg"
              className="w-44 h-22 md:w-full rounded-xl"
              alt="F.mart Market"
            />
          </p>
          <div className="grid col-span-3 gap-3">
            <h2 className="relative flex flex-wrap items-center gap-1 font-semibold text-lg group-hover:text-teal-400 transition-all">
              <span className="flex">F.mart</span>
              <span className="inline-block bg-white w-[4px] h-[4px] rounded-full group-hover:bg-teal-400 transition-all"></span>
              <span>Market</span>
              <FaExternalLinkAlt className="transition-all pt-1 group-hover:pl-1 group-hover:absolute bottom-1 right-1" />
            </h2>
            <p className="transition-all text-gray-400 font-bold text-sm">
              Bringing you the freshest harvest, handpicked directly from local
              farms and delivered to your doorstep, 24/7.
            </p>
            <ul className="flex flex-wrap gap-2 text-teal-400 transition-all">
              {["E-commerce", "React.js", "Ant.d", "TailwindCSS", "MongoDB"].map(
                (tech) => (
                  <li
                    key={tech}
                    className="bg-teal-950/[.6] rounded-full px-4 pb-[0.3rem] text-sm font-bold"
                  >
                    {tech}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Link>

      {/* Project 2 */}
      <Link href="https://eduazn.com/" passHref>
        <div className="group flex flex-col-reverse md:grid md:grid-cols-4 gap-4 md:hover:bg-slate-400/[.06] md:px-4 py-2 rounded-md transition-all cursor-pointer">
          <p className="transition-all text-gray-400 font-semibold text-sm py-2">
            <img
              src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-44 h-22 md:w-full rounded-xl"
              alt=""
            />
          </p>
          <div className="grid col-span-3 gap-3">
            <h2 className="relative flex flex-wrap items-center gap-1 font-semibold text-lg group-hover:text-teal-400 transition-all">
              <span className="flex">FullStack Developer</span>
              <span className="inline-block bg-white w-[4px] h-[4px] rounded-full group-hover:bg-teal-400 transition-all"></span>
              <span>Eduazn</span>
              <FaExternalLinkAlt className="transition-all pt-1 group-hover:pl-1 group-hover:absolute bottom-1 right-1" />
            </h2>
            <p className="transition-all text-gray-400 font-bold text-sm">
              Build and maintain critical components and functions used to
              construct Eduazn frontend and backend. Work closely with the CEO
              to actualize and implement all of the company ideas and advocate
              for best practices in web accessibility.
            </p>
            <ul className="flex flex-wrap gap-2 text-teal-400 transition-all">
              {["JavaScript", "Php", "MySql", "Html/Css"].map((skill) => (
                <li
                  key={skill}
                  className="bg-teal-950/[.6] rounded-full px-4 pb-[0.3rem] text-sm font-bold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>

      {/* Project 3 */}
      <Link href="https://ember-oak.vercel.app/" passHref>
        <div className="group flex flex-col-reverse md:grid md:grid-cols-4 gap-4 md:hover:bg-slate-400/[.06] md:px-4 py-2 rounded-md transition-all cursor-pointer">
          <p className="transition-all text-gray-400 font-semibold text-sm py-2">
            <img
              src="/embber.PNG"
              className="w-44 h-22 md:w-full rounded-xl"
              alt=""
            />
          </p>
          <div className="grid col-span-3 gap-3">
            <h2 className="relative flex flex-wrap items-center gap-1 font-semibold text-lg group-hover:text-teal-400 transition-all">
              <span className="flex">FrontEnd Developer</span>
              <span className="inline-block bg-white w-[4px] h-[4px] rounded-full group-hover:bg-teal-400 transition-all"></span>
              <span>Ember-Oak</span>
              <FaExternalLinkAlt className="transition-all pt-1 group-hover:pl-1 group-hover:absolute bottom-1 right-1" />
            </h2>
            <p className="transition-all text-gray-400 font-bold text-sm">
              A simplified FrontEnd design for a restaurant website.
            </p>
            <ul className="flex flex-wrap gap-2 text-teal-400 transition-all">
              {["JavaScript", "Bootstrap", "Html/Css"].map((skill) => (
                <li
                  key={skill}
                  className="bg-teal-950/[.6] rounded-full px-4 pb-[0.3rem] text-sm font-bold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>

      {/* Project 4 */}
      <Link href="https://geoboek-properties.vercel.app/" passHref>
        <div className="group flex flex-col-reverse md:grid md:grid-cols-4 gap-4 md:hover:bg-slate-400/[.06] md:px-4 py-2 rounded-md transition-all cursor-pointer">
          <p className="transition-all text-gray-400 font-semibold text-sm py-2">
            <img
              src="/Geoboek.PNG"
              className="w-44 h-22 md:w-full rounded-xl opacity-50"
              alt=""
            />
          </p>
          <div className="grid col-span-3 gap-3">
            <h2 className="relative flex flex-wrap items-center gap-1 font-semibold text-lg group-hover:text-teal-400 transition-all">
              <span className="flex">FrontEnd Developer</span>
              <span className="inline-block bg-white w-[4px] h-[4px] rounded-full group-hover:bg-teal-400 transition-all"></span>
              <span>Geoboek-Properties</span>
              <FaExternalLinkAlt className="transition-all pt-1 group-hover:pl-1 group-hover:absolute bottom-1 right-1" />
            </h2>
            <p className="transition-all text-gray-400 font-bold text-sm">
              A simple FrontEnd design for a real-estate Website.
            </p>
            <ul className="flex flex-wrap gap-2 text-teal-400 transition-all">
              {["JavaScript", "TailwindCss", "Html/Css"].map((skill) => (
                <li
                  key={skill}
                  className="bg-teal-950/[.6] rounded-full px-4 pb-[0.3rem] text-sm font-bold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>

      {/* Project 5 */}
      <Link href="https://todo-list-js-puce-ten.vercel.app/" passHref>
        <div className="group flex flex-col-reverse md:grid md:grid-cols-4 gap-4 md:hover:bg-slate-400/[.06] md:px-4 py-2 rounded-md transition-all cursor-pointer">
          <p className="transition-all text-gray-400 font-semibold text-sm py-2">
            <img
              src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-44 h-22 md:w-full rounded-xl opacity-20"
              alt=""
            />
          </p>
          <div className="grid col-span-3 gap-3">
            <h2 className="relative flex flex-wrap items-center gap-1 font-semibold text-lg group-hover:text-teal-400 transition-all">
              <span className="flex">JavaScript Developer</span>
              <span className="inline-block bg-white w-[4px] h-[4px] rounded-full group-hover:bg-teal-400 transition-all"></span>
              <span>A ToDo App</span>
              <FaExternalLinkAlt className="transition-all pt-1 group-hover:pl-1 group-hover:absolute bottom-1 right-1" />
            </h2>
            <p className="transition-all text-gray-400 font-bold text-sm">
              A JavaScript ToDo list app where you can add and delete tasks.
            </p>
            <ul className="flex flex-wrap gap-2 text-teal-400 transition-all">
              {["JavaScript", "TailwindCss", "Html/Css"].map((skill) => (
                <li
                  key={skill}
                  className="bg-teal-950/[.6] rounded-full px-4 pb-[0.3rem] text-sm font-bold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>

      {/* View Full Project Archive */}
      <Link href="https://github.com/Goldmyn" passHref>
        <div className="group mt-8 cursor-pointer">
          <h2 className="relative flex text-gray-300 group-hover:text-teal-400">
            <span className="transition-all text-lg font-bold">
              View Full Project Archive
            </span>
            <FaExternalLinkAlt className="transition-all pt-1 group-hover:pl-1 group-hover:absolute bottom-1 right-32" />
          </h2>
        </div>
      </Link>
    </section>
  );
};

export default Projects;
