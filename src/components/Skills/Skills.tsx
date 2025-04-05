import React from 'react'
import { Data } from './Data'
import SkillCard from './SkillCard';
import './../Skills/Skill.css'
import SpotlightCard from '../ui/SpotlightCard';
import { Element } from 'react-scroll';

const Skills = () => {

  const skills = [
    { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", level: 95, color: "rgba(255, 87, 51, 0.7)" }, // Vivid Orange
    { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", level: 93, color: "rgba(0, 120, 255, 0.7)" }, // Bright Blue
    { name: "Javascript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", level: 90, color: "rgba(255, 223, 0, 0.7)" },  // Bright Yellow
    { name: "Typescript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", level: 85, color: "rgba(30, 144, 255, 0.7)" }, // Brighter Blue
    { name: "Tailwind", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", level: 92, color: "rgba(0, 200, 255, 0.7)" }, // Cyan
    { name: "React.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", level: 88, color: "rgba(0, 216, 255, 0.7)" }, // Neon Blue
    { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", level: 85, color: "rgba(255, 87, 51, 0.7)" }, // Brighter Blue
    { name: "Firebase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg", level: 85, color: "rgba(255, 223, 0, 0.7)" }, // Brighter Blue
    { name: "GSAP", icon: "https://imgs.search.brave.com/SUA8P6JGROd5IApaOwMulfUWI20MXvrIUcOiq4cJtWI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9nc2FwLWdyZWVu/c29jay5zdmc", level: 85, color: "rgba(60, 180, 75, 0.7)" }, // Brighter Blue
    { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", level: 85, color: "rgba(191, 64, 191, 1)" }, // Brighter Blue
    { name: "Github", icon: "https://imgs.search.brave.com/8l5PYSD5tmQ_w6xAPJPHZ3U_DnQoBcHJdf7080H6JAA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvZ2l0aHViLnBu/Zw", level: 85, color: "rgba(255, 255, 255, 1)" }, // Brighter Blue
    // { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", level: 80, color: "rgba(60, 180, 75, 0.7)" },  // Brighter Green
];








  return (
    <Element name='skills'    className='max-h-max w-screen bg-[#01040b] flex flex-col gap-6'>
<div className=" flex items-center gap-[12px] pt-[2rem] pl-[2rem] sm:pl-[8rem]">
<div className="w-[65px] sm:w-[115px] h-[4px] bg-[#cb72ff]"></div>
<h1 className="text-[32px] sm:text-[48px] text-white font-semibold whitespace-nowrap"> Skills</h1>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  items-center justify-center mx-[2rem] sm:mx-[20rem]">
        {skills.map((skill, index) => (
          <SpotlightCard  className="custom-spotlight-card w-[150px] sm:w-[200px]" spotlightColor={skill.color}>
            <SkillCard  key={index} {...skill} />

          </SpotlightCard>
        ))}
      </div>
    </Element>
  )
}

export default Skills