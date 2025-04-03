import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaCaretRight } from "react-icons/fa";

const Left = () => {
  const frontendRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      frontendRef.current,
      { backgroundSize: "0% 100%" }, // Start with no highlight
      {
        backgroundSize: "100% 100%", // Expand highlight
        duration: 1.5,
        ease: "power2.inOut",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div>
      
      <div className="border-2 rounded-3xl border-[#a855f7] p-8 text-[#e0e0e0] mt-7">
        <h1 className="text-lg leading-relaxed">
          Hello, I’m <span className="font-semibold">Sahil Shaikh</span> <br />
          I’m a dedicated{" "}
          <span
            ref={frontendRef}
            className="relative inline-block px-2"
            style={{
              backgroundImage: "linear-gradient(90deg, #9b5de5 0%, #9b5de5 100%)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 100%",
              padding: "2px 6px",
              borderRadius: "6px",
              color: "white",
              transition: "background-size 1s ease-in-out",
            }}
          >
            Frontend Developer
          </span>{" "}
          Recent Graduated with The Bacholr's Degree in Computer Science
          focused on creating digital experiences that are both visually
          compelling and functionally robust. <br/>
          ensuring every project I work on is not just a piece of code
         
        </h1><br/><br/><br/>

        <h1 className="text-[#9b5de5] font-semibold text-xl">When I'm not coding or pushing pixels, you'll find me:
        </h1>
        


<div className="flex flex-col gap-4 mt-3 ml-[40px]">
<div className="flex items-center gap-2 ">
        <FaCaretRight className="text-[#cb72ff]" /> 
        <h1>Exploring New Technologies</h1>
        </div>
        <div className="flex items-center gap-2">
        <FaCaretRight className="text-[#cb72ff]" /> 
        <h1>Highly Active in Coding Communities</h1>
        </div>
        <div className="flex items-center gap-2 ">
        <FaCaretRight className="text-[#cb72ff]" /> 
        <h1>Enjoying Memes and Stuff !</h1>
        </div>
</div>

        
      </div>
    </div>
  );
};

export default Left;
