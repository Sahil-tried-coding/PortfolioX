import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Data } from "./Data";
import right from '../../Assets/Images/right-arrow.png'
import left from '../../Assets/Images/ChatGPT Image Apr 4, 2025, 02_12_19 AM.png'
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
    <div className="h-screen w-screen bg-black flex flex-col  ">
      <div className=" flex items-center gap-5 ml-[8rem] mt-[4rem]">
        <div className="w-[115px] h-[4px] bg-[#cb72ff]"></div>
        <h1 className="text-[48px] text-white font-semibold"> Projects</h1>
      </div>

<div className="flex items-center justify-center gap-[5rem] mt-[4rem] mx-[5rem]">
<button
          onClick={handlePrev}
           className="bg-black"
        >
          <img className="w-[60px] h-[50px]" src={left}/>
          {/* <BiLeftArrow className="w-[40px] h-[40px] font-extrabold" /> */}
        </button>
      <div className="relative w-[80%] max-w-[800px] h-[400px] flex items-center justify-center overflow-hidden">
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
        <button
          onClick={handleNext}
          className="bg-black"
        >
          {/* <BiRightArrow /> */}
          <img className="w-[60px] h-[50px]" src={right}/>
        </button>
</div>
    </div>
  );
};

export default Project;
