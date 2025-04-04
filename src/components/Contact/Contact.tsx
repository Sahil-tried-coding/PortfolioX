import { XIcon } from "lucide-react"
import { FaInstagramSquare } from "react-icons/fa"
import { LiaLinkedin } from "react-icons/lia"
import { RiGithubFill } from "react-icons/ri"
import downarrow from "../../Assets/Images/down-op.png"

import insta from "../../Assets/Images/insta.webp"
import linkdin from "../../Assets/Images/LinkedIn_logo_initials.webp"
import x from "../../Assets/Images/x-opp.png"
import github from "../../Assets/Images/github.webp"


const Contact = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-[4rem]">
        {/* <div className=" flex items-center gap-[12px] pt-[2rem] pl-[8rem]">
        <div className="w-[115px] h-[4px] bg-[#cb72ff]"></div>
        <h1 className="text-[48px] text-white font-semibold"> Contact Me</h1>
      </div> */}
        {/* <h1></h1> */}

        <div className="flex ">
        <h1 className="font-semibold text-xl relative">hi, drop a mail at sahiltriedcoding@gmail.com or reach out here
            
            </h1>
            <br/>

            <img className="h-[130px] absolute botom-0 right-[25rem] rotate-12  " src={downarrow}/>
        </div>

        <div className="flex w-[50px] justify-evenly gap-7 ">
            <img src={x}/>
            <img src={linkdin}/>
            <img src={github}/>
            <img  src={insta}/>
        </div>
    </div>
  )
}

export default Contact