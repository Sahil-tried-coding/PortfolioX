import React from "react";
import almost from './../../Assets/Project_Images/almost.png'
import ProjectCard from "./ProjectCard";
const Project = () => {


    const project_info =[{name:"Almost Qualified",img:almost,description:[{one:"Ai Powered  Resume Generator"},{two:"Used Gemini and  Strapi as fully fledge Backend to help users create tailored, professional resumes efficiently"}]}]



  return (
    <div className="h-screen w-screen bg-black ">
      <div className=" flex items-center gap-[12px] pt-[2rem] pl-[8rem]">
        <div className="w-[115px] h-[4px] bg-[#cb72ff]"></div>
        <h1 className="text-[48px] text-white font-semibold"> Projects</h1>
      </div>
        <ProjectCard/>
    </div>
  );
};

export default Project;
