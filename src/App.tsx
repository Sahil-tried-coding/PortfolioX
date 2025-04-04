import React, { useState } from 'react'
import Welcome from './components/Welcome';
import Home from './components/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';

function App() {
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  return (
    <div className="relative bg-black overflow-x-hidden">
      {!animationCompleted && (
        <div className="h-screen flex justify-center items-center">
          <Welcome
            animationCompleted={animationCompleted}
            setAnimationCompleted={setAnimationCompleted}
          />
        </div>
      )}

      {animationCompleted && (
        <div className="w-full min-h-screen">
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App