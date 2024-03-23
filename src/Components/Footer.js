import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="w-[screen] md:w-[] bg-black flex flex-wrap justify-evenly   ">
        <div className="flex flex-row p-2 flex-wrap justify-around">
          <a
            href="https://www.linkedin.com/in/shivam032/"
            target="blank"
            className=" text-lg flex flex-row text-violet-400"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-100 ">
              <GrLinkedin />
            </div>
            <span className=" text-white ml-1 mt-[0.1rem]">Shivam Verma</span>
          </a>
        </div>
        <div className="flex flex-row p-2 flex-wrap justify-around">
          <a
            href=""
            target="blank"
            className=" text-lg flex flex-row text-violet-400"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-100 ">
              <MdOutlineMailOutline />
            </div>
            <span className=" text-white ml-1 mt-[0.1rem]">
              vshivam2024@gmail.com
            </span>
          </a>
        </div>
        <div className="flex flex-row p-2 flex-wrap justify-around">
          <a
            href=""
            target="blank"
            className=" text-lg flex flex-row text-violet-400"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-100 ">
              <FaPhone />
            </div>
            <span className=" text-white ml-1 mt-[0.1rem]">9793736695</span>
          </a>
        </div>
        <div className="flex flex-row p-2 flex-wrap justify-around">
          <a
            href="https://github.com/striver2001"
            target="blank"
            className=" text-lg flex flex-row text-violet-400"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-100 ">
              <FaGithub />
            </div>
            <span className=" text-white ml-1 mt-[0.1rem]">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
