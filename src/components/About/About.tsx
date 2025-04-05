import { Element } from "react-scroll";
import Left from "./Left";
import Right from "./Right";

const About = () => {
  return (
    <Element name="about" className="max-h-max w-screen bg-[#121212]">
      <div className=" flex items-center gap-[12px] sm:pt-[2rem] pl-[2rem] sm:pl-[8rem]">
        <div className="w-[65px] sm:w-[115px] h-[4px] bg-[#cb72ff]"></div>
        <h1 className="text-[32px] sm:text-[48px] text-white font-semibold whitespace-nowrap"> About Me</h1>
      </div>
      <div className=" flex flex-col sm:grid sm:grid-cols-2 sm:px-[10rem] sm:gap-[8rem] ">
        <Left />
        <Right />
      </div>
    </Element>
  );
};

export default About;
