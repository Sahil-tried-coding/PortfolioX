import { XIcon } from "lucide-react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { RiGithubFill } from "react-icons/ri";
import downarrow from "../../Assets/Images/down-op.png";

import insta from "../../Assets/Images/insta.webp";
import linkdin from "../../Assets/Images/linkdin-op.webp";
import x from "../../Assets/Images/x-opp.png";
import github from "../../Assets/Images/github.webp";
import { IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-[4rem] pb-4 sm:px-0 px-5">
      {/* <div className=" flex items-center gap-[12px] pt-[2rem] pl-[8rem]">
        <div className="w-[115px] h-[4px] bg-[#cb72ff]"></div>
        <h1 className="text-[48px] text-white font-semibold"> Contact Me</h1>
      </div> */}
      {/* <h1></h1> */}

      <div className="flex ">
        <h1 className="font-semibold text-xl relative ">
          Code, collab, or just a convo — I’m in. Hit me up:{" "}
          <a href="mailto:sahiltriedcoding@gmail.com" className="underline text-white hover:text-blue-400 underline-offset-2">
            {" "}
            sahiltriedcoding@gmail.com{" "}
          </a>{" "}
          or reach out here
        </h1>
        {/* <h1 className="font-semibold text-xl relative">hi, drop a mail at sahiltriedcoding@gmail.com or reach out here</h1> */}
        <br />

        <img
          className="sm:h-[130px] right-[4rem]  bottom-[3rem] h-[130px] absolute sm:botom-0 sm:right-[25rem] rotate-[359deg] sm:rotate-12  "
          src={downarrow}
        />
      </div>

      <div className=" relative flex  justify-center  items-center gap-10 w-full ">
        <h1 className="hidden sm:absolute left-1 bottom-1">
          Made with <span className="text-pink-400">{"<"}3 </span>Thank you!
        </h1>
        <div className="flex w-[200px] sm:w-[200px] items-center justify-evenly gap-7 sm:ml-[23rem] ">
          <a href="https://x.com/Sahil18_11" className=""><img src={x} /></a>
         <a href="www.linkedin.com/in/sahil-shaikh-op"><img src={linkdin} /></a>
         <a href="https://github.com/Sahil-tried-coding"><img src={github} /></a> 
        </div>
      </div>
    </div>
  );
};

export default Contact;
