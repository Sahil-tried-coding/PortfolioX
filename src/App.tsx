import React, { useState } from 'react'
import Welcome from './components/Welcome';
import Home from './components/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';


function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false)
  return (
    <div className=" h-screen flex justify-center items-center relative bg-black overflow-x-hidden">
      {/* <Welcome
        animationCompleted={animationCompleted}
        setAnimationCompleted={setAnimationCompleted}
      /> */}
      {!animationCompleted && (
        <div className="w-full h-full">
          <Home />
          <About/>
          <Skills/>
          <Project/>
        </div>
      )}
    </div>
  );
};

export default App