import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import shayar from "../../Assets/Images/c64a452174da4b1cb676d7249ee0afa8_18.webp"
import dog from "../../Assets/Images/chill-guy.png"
import js from "../../Assets/Images/ChatGPT Image Apr 2, 2025, 08_10_20 AM.png"
import { SlOptions } from "react-icons/sl";



const Right = () => {
  const [overlay, setOverlay] = useState(false);

  const onHover = () => {
    setOverlay(true);
  };
  
  const offHover = () => {
    setOverlay(false);
  };

  return (
    <div className="sm:mt-[8rem] ">
      <AnimatePresence>
        {overlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[100vw] h-[100vh] fixed bg-black opacity-50 z-[100]"
          ></motion.div>
        )}
      </AnimatePresence>


      <div className="cards-container flex-grow-[1] relative z-[150] max-md:mt-8 max-md:h-[300px]">
      <div
              onMouseOver={onHover}
              onMouseLeave={offHover}
              className="cursor-pointer card bg-[#ffffff] text-black flex  flex-nowrap items-center w-[32rem] rounded-2xl absolute top-0 left-0  hover:translate-y-[-20px] hover:z-[101] transition-all duration-500 max-md:w-[340px] p-3"
            >
              <div className="image w-32">
                <img
                  src={shayar}
                  alt="nusrat fateh ali khan singing qawwali"
                />
              </div>
              <div className="title heading text-3xl ml-3 whitespace-nowrap">
                Poetry is Escapse
              </div>
              <div className="option-dots ml-auto mr-5 text-3xl text-black">
                <SlOptions />
              </div>
            </div>
            <div
              onMouseOver={onHover}
              onMouseLeave={offHover}
              className="cursor-pointer card bg-[#cb72ff] text-white flex  flex-nowrap items-center w-[32rem] rounded-2xl absolute top-[90px] left-[55px] rotate-6 hover:rotate-0  hover:translate-y-[-50px] hover:z-[101] transition-all duration-500 max-md:w-[340px] max-md:left-[20px] "
            >
              <div className="image w-32">
                <img
                  src={dog}
                  alt="nusrat fateh ali khan singing qawwali"
                />
              </div>
              <div className="title heading text-3xl ml-3 flex-nowrap whitespace-nowrap">
              Memes {'>'} Therapy
              </div>
              <div className="option-dots ml-auto mr-5 text-3xl text-[#fffefe]">
                <SlOptions />
              </div>
            </div>
            <div
              onMouseOver={onHover}
              onMouseLeave={offHover}
              className=" cursor-pointer card bg-[#F4B400] text-black flex  flex-nowrap items-center w-[32rem] rounded-2xl absolute top-[150px] left-[70px] -rotate-6 hover:rotate-0  hover:translate-y-[-50px] hover:z-[101] transition-all duration-500 max-md:w-[360px] max-md:left-[0px] gap-3 "
            >
              <div className="image w-32">
                <img src={js} alt="nusrat fateh ali khan singing qawwali" />
              </div>
              <div className="title heading text-3xl ml-3 whitespace-nowrap">
               Converts Air into Code 
              </div>
              <div className="option-dots ml-auto mr-5 text-3xl text-[#000000]">
                <SlOptions />
              </div>
            </div>
            </div>
      </div>
    // </div>
  );
};

export default Right;
