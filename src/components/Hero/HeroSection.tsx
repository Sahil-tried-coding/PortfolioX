import Left from "./Left"
import Right from "./Right"

const HeroSection = () => {
  return (
    <div className="max-h-max flex flex-col gap-12 sm:grid sm:grid-cols-2 h-screen w-screen overflow-x-hidden sm:mb-0 mb-[7rem]">
      <Left/>
      <Right/>
        
    </div>
  )
}

export default HeroSection