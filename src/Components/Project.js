import React from "react";
import { Styles } from "../Utils/Style";
import { projects } from "../Constants";
import Tilt from "react-parallax-tilt";
import { SiGithub, SiNetlify } from "react-icons/si";

const Project = () => {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Projects"
      >
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className="w-[35%]" />
        <div className={Styles.sectionText}>
         <p className=" font-serif">
         Following Projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly explained.
         </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {projects.map((project) => (
          <Tilt
            key={project.name}
            className="w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900"
          >
            <div className="flex justify-center items-center mb-3">
              <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                <a
                  href={project.source_deploy_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiNetlify className="text-3xl font-bold text-violet-600" />
                </a>
              </div>
              <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="text-3xl font-bold text-violet-600" />
                </a>
              </div>
            </div>
            <img
              src={project.image}
              alt={project.name}
              className="h-[200px] w-[250px] self-center border-2 border-pink-200 rounded-2xl"
            />
            <div className="text-2xl text-violet-600 font-extrabold font-serifn">
              {project.name}
            </div>
            <div className="text-center">
              <span className="text-orange-500 font-serif">{project.description}</span>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Project;
