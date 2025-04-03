import Left from "./Left"
import Right from "./Right"

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-screen overflow-x-hidden">
      <Left/>
      <Right/>
        
    </div>
  )
}

export default HeroSection