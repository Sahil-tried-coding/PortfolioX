import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import shayar from "../../Assets/Images/c64a452174da4b1cb676d7249ee0afa8_18.webp";
import dog from "../../Assets/Images/chill-guy.png";
import js from "../../Assets/Images/ChatGPT Image Apr 2, 2025, 08_10_20 AM.png";
import { SlOptions } from "react-icons/sl";

const Right = () => {
  const [overlay, setOverlay] = useState(false);

  const onHover = () => setOverlay(true);
  const offHover = () => setOverlay(false);

  return (
    <div className="sm:mt-[8rem] sm:my-0 my-12">
      <AnimatePresence>
        {overlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[100vw] h-[100vh] fixed bg-black z-[100]"
          />
        )}
      </AnimatePresence>

      {/* Container: static on mobile, relative on desktop */}
      <div className="relative z-[150] max-md:flex max-md:flex-col max-md:items-center max-md:gap-6 max-md:mt-8">

        {/* Card 1 */}

        <div
          onMouseOver={onHover}
          onMouseLeave={offHover}
          className="cursor-pointer bg-white text-black flex gap-0 items-center w-[32rem] rounded-2xl py-2 sm:p-3 transition-all duration-500 
          max-md:w-[340px] max-md:static
          absolute top-0 left-0 hover:translate-y-[-20px] hover:z-[101]"
        >
          <div className="w-32 shrink-0">
            <img src={shayar} alt="Shayar" className="w-full h-auto object-cover" />
          </div>
          <div className="text-xl sm:text-3xl sm:ml-3 whitespace-nowrap">Poetry is Escape</div>
          <div className="ml-auto hidden sm:block sm:mr-5 sm:text-3xl text-black">
            <SlOptions />
          </div>
        </div>
        {/* Card 2 */}
        <div
          onMouseOver={onHover}
          onMouseLeave={offHover}
          className="cursor-pointer bg-[#cb72ff] text-white flex items-center w-[32rem] rounded-2xl p-3 transition-all duration-500 
          max-md:w-[340px] 
          absolute top-[65px] right-[10px] sm:top-[90px] sm:left-[55px] rotate-6 hover:rotate-0 hover:translate-y-[-50px] hover:z-[101]"
        >
          <div className="w-20 sm:w-32 shrink-0">
            <img src={dog} alt="Meme Dog" className="w-full h-auto object-cover" />
          </div>
          <div className="text-xl sm:text-3xl sm:ml-3 whitespace-nowrap">Memes {'>'} Therapy</div>
          <div className="hidden sm:block ml-auto mr-5 text-3xl text-white">
            <SlOptions />
          </div>
        </div>

        {/* Card 3 */}
        <div
          onMouseOver={onHover}
          onMouseLeave={offHover}
          className="cursor-pointer bg-[#F4B400] text-black flex items-center w-[32rem] rounded-2xl p-3 transition-all duration-500 
          max-md:w-[340px] max-md:static
          absolute top-[150px] left-[70px] -rotate-6 hover:rotate-0 hover:translate-y-[-50px] hover:z-[101]"
        >
          <div className="w-20 sm:w-24 shrink-0">
            <img src={js} alt="JS Meme" className="w-full h-auto object-cover" />
          </div>
          <div className="text-xl sm:text-3xl sm:ml-1 whitespace-nowrap">Converts Air into Code</div>
          <div className="hidden sm:block ml-2 mr-5 text-3xl text-black">
            <SlOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
