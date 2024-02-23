import React from "react";
import Profile from "../Assets/Profile.png";
import { Styles } from "../Utils/Style";
import Resume from "../Assets/Shivam_verma_Off.docx";
import {TiArrowDownOutline} from "react-icons/ti";
import "../App.css"
const About = () => {
  return (
    <div
      className=" flex flex-wrap justify-evenly items-center mt-10  p-10 columns-10"
      id="About"
    >
      <div className="flex-1 py-4 h-[40%] w-[40%]">
        <span className={Styles.heroHeadText}>
          Hi, I'm <span className="text-orange-600">Shivam</span>
          <br />
          <span className={Styles.heroSubtext}>
            I am a MERN Stack Developer &
            <br />
            Web designer
          </span>
        </span>
        <br />
        <div className='w-[14rem]'>
<a href={Resume} download="Resume"
target='blank' rel="noreferrer"
>

<div className='p-4 mt-2 w-[13rem] rounded text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 hover:shadow-pink-500 shadow-lg text-lg '> <TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange-500 ' /> Resume</div>
</a>
        </div>
      </div>

      <div className="flex h-[40%] w-[40%]">
        <img src={Profile} alt="Profile" className="element object-contain p-4  " />
      </div>

    </div>
  );
};

export default About;
