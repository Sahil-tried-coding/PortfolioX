// impor {Data}
import ProjectCard from "./ProjectCard";
import { Data } from "./Data";
import { Button } from "../ui/button";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";
const Project = () => {


  const [project_index, setProject_index] = useState(0)
  


  const handleNextProject = () =>{
    setProject_index((prev)=>(prev+1) % Data.length)
  }


  const handlePrev = () => {
    setProject_index((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  };
  
  



  return (
    <div className="h-screen w-screen bg-black ">
      <div className=" flex items-center gap-[12px] pt-[2rem] pl-[8rem]">
        <div className="w-[115px] h-[4px] bg-[#cb72ff]"></div>
        <h1 className="text-[48px] text-white font-semibold"> Projects{project_index}</h1>
      </div>
      <div className="flex items-center gap-3">
      <Button onClick={handlePrev}><BiLeftArrow className="text-white"/></Button>
      {Data.map((project, index) => (
          <ProjectCard project_index={project_index} key={index} {...project} />
        ))}
        <Button onClick={handleNextProject}><BiRightArrow className="text-white"/></Button>
      </div>
    </div>
  );
};

export default Project;
/////////////////////////////////////////////////
























// /* eslint-disable react/prop-types */
// import { Swiper, SwiperSlide } from 'swiper/react'
// import '../../../node_modules/swiper/swiper.css'
// // import 'swiper/css/effect-coverflow'
// import '../../../node_modules/swiper/swiper-bundle.css'
// import '../../../node_modules/swiper/swiper-element.css'
// import '../../../node_modules/swiper/modules/navigation/navigation-element.min.css'
// import '../../../node_modules/swiper/modules/pagination/pagination-element.min.css'
// // import 'swiper/css/pagination'
// // import '../../styles/gridBackground.css'
// import './ProjectSection.css'
// import { EffectCoverflow, Navigation, Pagination } from '../../../node_modules/swiper'
// import ProjectCard from './ProjectCard'
// import {Data} from './Data'
// import { useRef, useEffect } from 'react'

// export default function ProjectsSection({ projectsRef }) {
//     const swiperElRef = useRef(null)

//     useEffect(() => {
//         const swiperInstance = swiperElRef.current.swiper
//         swiperInstance.navigation.init()
//         swiperInstance.navigation.update()
//     }, [])

//     // Determine number of slides per view based on screen width
//     const slidesPerView = window.innerWidth >= 768 ? 2 : 1

//     return (
//         <section
//             id='project'
//             className='background-grid mb-8 min-h-[100dvh]'
//             ref={projectsRef}>
//             <div className='mx-auto'>
//                 <h2 className='z-1 relative text-center text-6xl font-semibold text-black dark:text-white'>
//                     Projects
//                 </h2>
//                 <div className='mt-4 '>
//                     <div className='w-full '>
//                         <div className='m-auto'>
//                             <Swiper
//                                 ref={swiperElRef}
//                                 effect='coverflow'
//                                 slidesPerView={slidesPerView}
//                                 speed={500}
//                                 loop={true}
//                                 spaceBetween={50}
//                                 centeredSlides={true}
//                                 grabCursor={true}
//                                 coverflowEffect={{
//                                     rotate: 0,
//                                     stretch: 0,
//                                     depth: 200,
//                                     modifier: 1,
//                                     slideShadows: false,
//                                 }}
//                                 pagination={{ clickable: true }}
//                                 navigation={{
//                                     nextEl: '.swiper-button-next',
//                                     prevEl: '.swiper-button-prev',
//                                 }}
//                                 modules={[
//                                     EffectCoverflow,
//                                     Navigation,
//                                     Pagination,
//                                 ]}
//                                 className='swiper-container'>
//                                 {Data.map((project, index) => (
//                                     <SwiperSlide key={index}>
//                                         <ProjectCard key={index} {...project} />
//                                     </SwiperSlide>
//                                 ))}
//                             </Swiper>
//                             <div className='slider-controller'>
//                                 <div className='swiper-button-prev slide-arrow'></div>
//                                 <div className='swiper-button-next slide-arrow'></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }