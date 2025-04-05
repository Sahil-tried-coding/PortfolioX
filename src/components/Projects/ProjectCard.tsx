import {  CircleArrowRight } from "lucide-react";
import { RxLink1 } from "react-icons/rx";

type ProjectProps = {
  index: number;
  name: string;
  img: string;
  techStack: { img: string }[];
  description: string[];
  githubLink:string,
  liveLink:string
};

const ProjectCard: React.FC<ProjectProps> = ({
  name,
  img,
  techStack,
  description,
  liveLink,
  githubLink
}) => {


  
  return (
    <div
      className={`project-card flex flex-col shadow-lg  rounded-xl shadow-white/10 sm:w-[800px] h-[350px] text-white mx-auto border-2 border-sky-500 p-1 `} 
        >
        <div className={` flex items-center justify-center h-full gap-5`}>
        <div className="text-base flex flex-col gap-4 justify-center p-2 sm:w-[60%] h-[200px]">
        <h1 className="text-2xl font-semibold">{name}</h1>
          <h1 className="flex  gap-2">
            
             <CircleArrowRight/>
            {description[0]}
          </h1>
          <h1 className="flex gap-2">
             <CircleArrowRight/>
            {description[1]}
          </h1>
          
        </div>
        
        <div className="px-2">
          <img className=" border-2 border-white -rotate-2 h-[180px]  sm:h-[180px]" src={img} />
        </div>
        
      </div>
      <div className="flex items-center  mt-4 justify-between px-4">
            <div className="flex gap-3">
              {techStack.map((img, index) => (
                <div className="w-[40px] sm:w-[40px] " key={index}>
                  <img src={img.img} />
                </div>
              ))}
            </div>
            <div className="flex  h-[60px] items-center gap-3 cursor-pointer">
              <a href={githubLink}>
              <img
              
              className="w-[40px] h-[40px]"
              src="https://imgs.search.brave.com/8l5PYSD5tmQ_w6xAPJPHZ3U_DnQoBcHJdf7080H6JAA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvZ2l0aHViLnBu/Zw"
            />
              </a>
              <a href={liveLink}><RxLink1  className="w-[40px] h-[60px] text-white" /></a>
            </div>
          </div>
    </div>
);
};

export default ProjectCard;

