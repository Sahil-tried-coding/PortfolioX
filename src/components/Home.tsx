import HeroSection from "./Hero/HeroSection"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default Home