import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Styles } from '../Utils/Style';
import { technologies, services, projects } from '../Constants';
import { motion } from 'framer-motion';
import "./style.css"
const Overview = () => {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='Overview'>
        <span className={Styles.sectionHeadText} >Introduction</span>
        <hr className='w-[35%]' />
        <div className={Styles.sectionText}>
         <p className=' font-serif'>
         I'm a skilled web developer with hands-on experience in frontend technologies and expertise in frameworks like React and Node.js. I'm a quick learner and collaborate to create scalable and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
         </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        {services.map((service) => (
          <div key={service.icon}>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareColor="fed7aa"
              glareEnable={true}
              glarMaxOpacity={0.50}
              scale={1.02}
              gyroscope={true}
            >
              <div className='p-3 m-3 flex-col justify-evenly items-center'>
                <img className="h-[100px] w-[100px] font" src={service.icon} alt={service.title} />
                <div className='m-2 pt-3 text-violet-500 font-serif'>
                  {service.title}
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>

<div className=' flex flex-wrap justify-center items-center'>
{
    technologies.map((technology)=>(
        <div   key={technology.name}
        className=" m-4 mt-5 h-[100px] w-[100px] rounded-3x1 shadow-2xl border-[1px] border-violet-400 hover:shadow-orange-300 rounded-lg  ">
            <img className=' p-2' src={technology.icon}  alt={technology.name} />
            <div className=' text-violet-600 justify-center flex font-serif '>
        {technology.name}
            </div>
          
        </div>
    ))
}
</div>

    </div>
  );
}

export default Overview;
