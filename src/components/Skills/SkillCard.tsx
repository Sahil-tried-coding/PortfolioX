import React from "react";

interface SkillProps {
  name: string;
  icon: string;
  level: number;
  color: string;
}

const SkillCard: React.FC<SkillProps> = ({ name, icon, level, color }) => {
  return (
    <div
      className="relative  flex flex-col p-4 gap-3 items-center justify-between w-full h-[150px] rounded-xl  transition-all duration-300 "
      style={{
        // border:2,
        // borderColor:color,
        // background: color,  // Make it more transparent
        backdropFilter: "blur(25px)",  // More blur for strong glass effect
        WebkitBackdropFilter: "blur(25px)",
        borderRadius: "15px",
        border: `2px solid ${color}`,  // Thin white border
        // boxShadow: `0px 8px 20px rgba(255, 255, 255, 0.2), 
        //             inset 0px 4px 8px rgba(0, 0, 0, 0.2)`,  // Stronger glow
      }}
    >
      {/* Skill Icon */}
      <img src={icon} alt={name} className="w-[5rem] h-[5rem]" />

      {/* Skill Name */}
      <h3 className="text-white text-lg font-semibold">{name}</h3>

      {/* Progress Bar with Glow */}
      {/* <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden relative">
        <div
          className="h-2 rounded-full transition-all duration-500 absolute"
          style={{
            width: `${level}%`,
            backgroundColor: color,
            boxShadow: `0px 0px 12px ${color}`,  // Neon Glow effect
          }}
        ></div>
      </div> */}
    </div>
  );
};

export default SkillCard;
