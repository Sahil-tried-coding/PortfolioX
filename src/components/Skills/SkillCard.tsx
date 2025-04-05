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
      className="relative   flex flex-col p-3 sm:p-4  sm:gap-3 items-center justify-between w-full h-[150px] rounded-xl overflow-hidden"
      style={{
        border: `2px solid ${color} `,
        borderColor:color,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "15px",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
      }}
    >
      {/* Balanced Radial Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${color} 12%, transparent 60%)`,
          opacity: 0.4,
          filter: `blur(6px)`,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <img src={icon} alt={name} className="hover:scale-105 transition-all ease-in  w-[5rem] h-[5rem]" />
        <h3 className="text-white text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
