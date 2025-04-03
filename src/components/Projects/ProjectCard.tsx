import { FaCaretRight } from 'react-icons/fa'
import almost from '../../Assets/Project_Images/almost.png'
import { RxLink1 } from 'react-icons/rx'
import gsap from 'gsap'
// import almost from '../../Assets/Project_Images/Screenshot 2025-04-03 023253.png'
const ProjectCard = () => {

    gsap.from(".project-card",{
        opacity: 0,
  y: 200,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
    })

    const techstack = [{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},{img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"},{img:'https://imgs.search.brave.com/O5EXu0N-8DnzTZP59sLBMp52T_l4r9OQsBS2OPddG1k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/My9nZW1pbmlfaWNv/bi1sb2dvX2JyYW5k/bG9nb3MubmV0X2Jx/emV1LTMwMHgzMDAu/cG5n'},{img:"https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/32f3a89c-99c4-466f-8536-dd75f65fa320/Strapi-Monogram/w=256,quality=90,fit=scale-down"}]


  return (
    <div  className="project-card shadow-lg rounded-xl shadow-white/10 w-[800px] h-[250px] text-white mx-auto border-2 border-white p-3">

{/* baaap */}
<div className='flex '>


    <div className='text-base flex flex-col gap-4'>
    <h1 className='text-2xl font-semibold'>Almost Qualified</h1>
        <h1 className='flex gap-2'><FaCaretRight/>Ai Powered  Resume Generator</h1>
        <h1 className='flex gap-2'><FaCaretRight/>Uses Gemini and Strapi as a fully-fledged backend to generate tailored, professional resumes efficiently.</h1>
        <div className='flex items-center  mt-4 justify-between px-4'>
            <div className='flex gap-3'>
            {
                techstack.map((img,index)=>(
                    <div className='w-[40px] ' key={index}>
                        <img  src={img.img}/>
                    </div>
                ))
            }
            </div>
            <div className='flex h-[60px] items-center gap-3 cursor-pointer'>
                <img className='w-[40px] h-[40px]' src='https://imgs.search.brave.com/8l5PYSD5tmQ_w6xAPJPHZ3U_DnQoBcHJdf7080H6JAA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvZ2l0aHViLnBu/Zw'/>
                <RxLink1 className='w-[40px] h-[60px] text-white'/>
            </div>
        </div>
    </div>




    <div className=''>

        <img className=' -rotate-2 h-[200px]' src={almost}/>
    </div>
</div>
    </div>
//     <div className="w-[700px] h-[300px] text-white mx-auto border-2 border-white p-3">

// <div className='flex justify-evenly'>
//     <div className='text-sm'>
//     <h1 className='text-2xl font-semibold'>Almost Qualified</h1>
//         <h1 className='flex gap-2'><FaCaretRight/>Ai Powered  Resume Generator</h1>
//         <h1 className='flex gap-2'><FaCaretRight/>Used Gemini and  Strapi as fully fledge Backend to help users create tailored, professional resumes efficiently</h1>
//     </div>
//     <div className='scale-125'>
//         <div className='max-w-max'>

//         <img className='min-w-full -rotate-2' src={almost}/>
//         </div>
//     </div>
// </div>
//     </div>
  )
}

export default ProjectCard