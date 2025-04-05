import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Data } from "./Data";
import left from '../../Assets/Images/right-arrow.png'
import right from '../../Assets/Images/left-arrow.png'
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";

const Project = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // for animation direction

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % Data.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + Data.length) % Data.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div id="projects" className="max-h-max w-screen bg-black flex flex-col  ">
      <div className=" flex items-center gap-5 ml-[2rem] sm:ml-[8rem] mt-[4rem]">
      <div className="w-[65px] sm:w-[115px] h-[4px] bg-[#cb72ff]"></div>
      <h1 className="text-[32px] sm:text-[48px] text-white font-semibold whitespace-nowrap"> Project</h1>
      </div>

<div className="flex-col sm:flex-row sm:flex items-center justify-center gap-3 sm:gap-[5rem] mt-[4rem] mx-auto sm:mx-[5rem]">
<button
          onClick={handlePrev}
           className="hidden sm:block bg-black"
        >
          <img className="w-[60px] h-[50px]" src={left}/>
          {/* <BiLeftArrow className="w-[40px] h-[40px] font-extrabold" /> */}
        </button>
      <div className=" w-[100%] relative sm:w-[80%] max-w-[800px] h-[400px] flex items-center justify-center overflow-hidden sm:mb-[6rem]">
        {/* Left Button */}

        {/* Animated ProjectCard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ProjectCard {...Data[index]} />
          </motion.div>
        </AnimatePresence>

        {/* Right Button */}
      </div>


      <div className="flex justify-center gap-12  pb-12">
      <button
          onClick={handlePrev}
           className="sm:hidden block bg-black"
        >
          <img className="w-[60px] h-[50px]" src={left}/>
          {/* <BiLeftArrow className="w-[40px] h-[40px] font-extrabold" /> */}
        </button>
        <button
          onClick={handleNext}
          className="sm:hidden block bg-black"
        >
          {/* <BiRightArrow /> */}
          <img className="w-[60px] h-[50px]" src={right}/>
        </button>
      </div>
        <button
          onClick={handleNext}
          className="hidden sm:block bg-black"
        >
          {/* <BiRightArrow /> */}
          <img className="w-[60px] h-[50px]" src={right}/>
        </button>
</div>
    </div>
  );
};

export default Project;
