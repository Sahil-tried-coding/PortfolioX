import { Element } from "react-scroll";
import Left from "./Left";
import Right from "./Right";

const About = () => {
  return (
    <Element name="about" className="h-screen w-screen bg-[#121212]">
      <div className=" flex items-center gap-[12px] pt-[2rem] pl-[8rem]">
        <div className="w-[115px] h-[4px] bg-[#cb72ff]"></div>
        <h1 className="text-[48px] text-white font-semibold whitespace-nowrap"> About Me</h1>
      </div>
      <div className=" flex flex-col sm:grid sm:grid-cols-2 sm:px-[10rem] sm:gap-[8rem] ">
        <Left />
        <Right />
      </div>
    </Element>
  );
};

export default About;
