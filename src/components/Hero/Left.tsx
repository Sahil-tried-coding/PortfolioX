
const Left = () => {
  return (
    // <div className="w-[50%]   border-2 border-white">
      <div className="w-full items-center sm:justify-normal justify-center  sm:w-[716px] px-[16px] sm:py-[64px] flex flex-col gap-6 sm:gap-20">
        <div className="flex gap-6 sm:gap-[11px] items-center">
          <div className="text-[#B56FFA] text-5xl sm:text-[96px]">Virtual</div>
          <div className="text-white text-[12px] sm:text-[20px]">
            //Based in Shirdi , India
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-[#E8B500] sm:text-center text-5xl sm:text-[96px]">Curious</div>
          
        </div>
        <div className="flex gap-[48px] items-center">
          <div className="text-[#6EE7B7]  text-5xl sm:text-[96px]">Designer</div>
          <button
                  className="overflow-hidden relative w-24 whitespace-nowrap sm:w-32 p-2  sm:h-12 bg-gray-600 text-white border-none rounded-md text-sm sm:text-xl font-bold cursor-pointer group"
                  
                >
                  Hover me!
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6">
                    Resume !
                  </span>
                </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-[#FF7A00] text-center text-5xl sm:text-[96px] flex gap-[24px]"><span className="text-white ">&</span>
          Developer
          </div>
          
        </div>
      </div>
  );
};

{/* </div> */}
export default Left;
