import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-20 mb-20 grid gap-6 lg:gap-3">
      {/* <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h1 className="lg:sr-only text-gray-300 font-bold">EXPERIENCE</h1>
      </div> */}

      {/* Experience 1 */}
      <Link href="https://eduazn.com/">
        <div className="experienceAnchor group grid md:grid-cols-4 gap-2 md:hover:bg-slate-400/[.06] md:px-4 py-2 rounded-md transition-all cursor-pointer">
          <p className="transition-all text-gray-400 font-semibold text-sm py-2">
            2022 - 2023
          </p>
          <div className="grid col-span-3 gap-3">
            <h2 className="h2Anchor relative flex flex-wrap items-center gap-1 font-semibold text-lg group-hover:text-teal-400 transition-all">
              <span className="flex">Senior FullStack Developer</span>
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

      {/* Experience 2 */}
      <Link href="https://stif.netlify.app">
        <div className="experienceAnchor group grid md:grid-cols-4 gap-2 md:hover:bg-indigo-400/[.06] md:px-4 py-2 rounded-md transition-all cursor-pointer">
          <p className="transition-all text-gray-400 font-semibold text-sm py-2">
            2023 - 2023
          </p>
          <div className="grid col-span-3">
            <h2 className="h2Anchor relative flex flex-wrap items-center gap-1 font-semibold text-lg group-hover:text-teal-400 transition-all">
              <span>Senior FrontEnd Developer</span>
              <span className="inline-block bg-white w-[4px] h-[4px] rounded-full group-hover:bg-teal-400 transition-all"></span>
              <span>Stif</span>
              <FaExternalLinkAlt className="transition-all pt-1 group-hover:pl-1 group-hover:absolute bottom-1 right-1" />
            </h2>
            <div className="grid gap-3">
              <p className="flex flex-col text-gray-400 font-semibold">
                <span>Software Engineer</span>
                <span>Engineer</span>
              </p>
              <p className="transition-all text-gray-400 font-bold text-sm">
                Build components and functions used to construct Stif frontend.
                Work closely with the CEO to actualize and implement all of the
                company ideas and advocate for best practices in web
                accessibility.
              </p>
              <ul className="flex">
                <li className="lg:mr-7">
                  <span className="flex items-center gap-1 text-gray-400 cursor-pointer">
                    <FaExternalLinkAlt size={12} />
                    <span className="font-semibold text-gray-300">
                      Stif.com
                    </span>
                  </span>
                </li>
              </ul>
              <ul className="flex flex-wrap gap-2 text-teal-400 transition-all">
                {["JavaScript", "React", "TailwindCss", "Html/Css"].map(
                  (skill) => (
                    <li
                      key={skill}
                      className="bg-teal-950/[.6] rounded-full px-4 pb-[0.3rem] text-sm font-bold"
                    >
                      {skill}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </Link>

      {/* View Full Resume Link */}
      <a href="/Profile.pdf" target="_blank">
        <div className="group mt-8 cursor-pointer">
          <h2 className="relative flex text-gray-300 group-hover:text-teal-400">
            <span className="transition-all text-lg font-bold">
              View Full Resume
            </span>
            <FaExternalLinkAlt className="transition-all pt-2 group-hover:absolute bottom-2 group-hover:pl-2 right-32" />
          </h2>
        </div>
      </a>
    </section>
  );
};

export default Experience;
