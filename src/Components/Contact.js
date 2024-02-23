import React from "react";
import { Styles } from "../Utils/Style";
import cont from "../Assets/contact.png";
const Contact = () => {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Contact"
      >
        <span className={Styles.sectionHeadText}>Contact</span>
        <hr className="w-[35%]" />
      </div>
      <div className=" mt-5">
        <div className=" flex flex-wrap flex-row justify-around">
          <div className=" lg:w-[40%]">

          <form className=" m-5 flex flex-col gap-3" action="">
            <label className=" flex flex-col gap-3">
              <span className=" text-violet-700 font-medium mb-2">
                Your Name
              </span>
              <input
                type="text"
                name="Name"
                placeholder="What is your name ?"
                className=" bg-orange-200 py-4 placeholder:text-secondary text-orange-800 rounded-lg outline-none border-none font-medium text-center "
              />
            </label>
            <label className=" flex flex-col gap-3">
              <span className=" text-violet-700 font-medium mb-2">
                Email Address
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className=" bg-orange-200 py-4 placeholder:text-secondary text-orange-800 rounded-lg outline-none border-none font-medium text-center "
              />
            </label>

            <label className=" flex flex-col gap-3">
              <span className=" text-violet-700 font-medium mb-2">
                Your Message
              </span>
              <textarea
                rows={5}
                name="text"
                placeholder="Enter Your Message"
                className=" bg-orange-200 py-4 placeholder:text-secondary text-orange-800 rounded-lg outline-none border-none font-medium text-center "
              />
            </label>

            <button
              type="submit"
              className=" bg-slate-300 hover:shadow-orange-300 py-3 px-8 mb-4 rounded-xl outline-xl outline-none w-fit text-black font-bold shadow-md shadow-primary "
            >
              Submit
            </button>
          </form>
          </div>
        <div className=" lg-w-[40%] h-[40%] w-[40%]">
          <img src={cont} alt=" A image" />
        </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
