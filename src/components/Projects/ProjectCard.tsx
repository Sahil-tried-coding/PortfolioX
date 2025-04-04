import gsap from "gsap";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
// import almost from '../../Assets/Project_Images/almost.png'
import { RxLink1 } from "react-icons/rx";
// import gsap from 'gsap'
// import almost from '../../Assets/Project_Images/Screenshot 2025-04-03 023253.png'

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
  index,
  liveLink,
  githubLink
}) => {


  
  return (
    <div
      className={`project-card shadow-lg  rounded-xl shadow-white/10 w-[800px] h-[350px] text-white mx-auto border-2 border-sky-500 p-1`} 
        >
        <div className={` flex items-center justify-center h-full gap-5`}>
        <div className="text-base flex flex-col gap-4 justify-center p-2 w-[60%]">
        <h1 className="text-2xl font-semibold">{name}</h1>
          <h1 className="flex gap-2">
            <FaCaretRight />
            {description[0]}
          </h1>
          <h1 className="flex gap-2">
          <FaCaretRight />
            {description[1]}
          </h1>
          <div className="flex items-center  mt-4 justify-between px-4">
            <div className="flex gap-3">
              {techStack.map((img, index) => (
                <div className="w-[40px] " key={index}>
                  <img src={img.img} />
                </div>
              ))}
            </div>
            <div className="flex h-[60px] items-center gap-3 cursor-pointer">
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
        
        <div className="px-2">
          <img className=" border-2 border-white -rotate-2 h-[180px]" src={img} />
        </div>
      </div>
    </div>
);
};

export default ProjectCard;

// import { GithubIcon, LinkIcon } from 'lucide-react'
// import { useState } from 'react'
// // import LinkIcon from '../icons/LinkIcon'
// // import GitHubIcon from '../icons/GithubIcon'

// export default function ProjectCard({ project }) {
//     const [isExpanded, setIsExpanded] = useState(false)

//     const handleToggle = () => {
//         setIsExpanded(!isExpanded)
//     }
//     const numberOfTechVisible = 6
//     const visibleTechStack = isExpanded
//         ? project.stack
//         : project.stack.slice(0, numberOfTechVisible)

//     return (
    //         <div className='relative mx-auto h-full w-full min-w-60 max-w-[28rem] p-4 px-4'>
    //             <div className='background-gradient overflow-hidden rounded-lg bg-black p-2 shadow-sm shadow-[#00ffb1]'>
    //                 <div className='mb-1 flex flex-nowrap items-start justify-between p-2'>
    //                     <div>
    //                         <h3 className='text-xl font-bold text-white'>
    //                             {project.title}
    //                         </h3>
    //                         <span className='text-xs text-gray-700'>
    //                             {/* {project.duration} */}
//                         </span>
//                     </div>
//                     <div className='flex items-center justify-center gap-2 rounded'>
//                         <a
//                             // href={project.githubLink}
//                             className='rounded p-1 hover:bg-[#79797920] focus:outline-none focus:ring-2 focus:ring-secondary'
//                             target='_blank'
//                             rel='noopener noreferrer'
//                             aria-label={`GitHub repository for ${project.title}`}>
//                             <GithubIcon className='text-gray-500 hover:text-secondary' />
//                         </a>
//                         <a
//                             // href={project.demoLink}
//                             className='rounded p-1 hover:bg-[#79797920] focus:outline-none focus:ring-2 focus:ring-secondary'
//                             target='_blank'
//                             rel='noopener noreferrer'
//                             aria-label={`Live demo of ${project.title}`}>
//                             <LinkIcon className='text-gray-500 hover:text-secondary' />
//                         </a>
//                     </div>
//                 </div>
//                 <div className='w-full overflow-hidden rounded-md'>
//                     <img
//                         className=' w-full object-cover'
//                         src={project.img}
//                         alt={`Screenshot of ${project.title}`}
//                     />
//                 </div>
//                 <div className='p-2 px-0'>
//                     <p className='text-sm text-gray-500'>
//                         {project.description}
//                     </p>
//                     <div className='mt-3 flex flex-row flex-wrap justify-start gap-2'>
//                         {visibleTechStack.map((tech, index) => (
//                             <img
//                                 key={index}
//                                 src={`/skillsIcons/${tech.toLowerCase()}.svg`}
//                                 alt={tech}
//                                 title={tech}
//                                 className='h-8 w-8 rounded-md bg-[#007aff20] p-1 text-sm font-semibold text-gray-300'
//                                 onError={(e) => {
//                                     e.target.onerror = null
//                                     e.target.src = `/skillsIcons/defaultIcon.svg`
//                                 }}
//                             />
//                         ))}
//                         {project.stack.length > numberOfTechVisible && (
//                             <button
//                                 onClick={handleToggle}
//                                 className='inline-block rounded-full bg-[#80808031] px-3 py-1 text-sm font-semibold text-gray-300 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary'>
//                                 {isExpanded ? 'Less' : 'More'}
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
