import  { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingBar from "react-top-loading-bar";

interface WelcomeProps {
  animationCompleted: boolean;
  setAnimationCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Welcome: React.FC<WelcomeProps> = ({
  animationCompleted,
  setAnimationCompleted,
}) => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const ref = useRef<any>(null); // Reference for the loading bar

  const languages: string[] = [
    "Hello",
    "السلام عليكم",
    "Bonjour",
    "Ciao",
    "Hallo",
    "你好",
    "こんにちは",
    "Hola",
    "नमस्ते",
    "I am Sahil",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < languages.length) {
        setWelcomeMessage(languages[index]);
        setIndex((prevIndex) => prevIndex + 1);
        ref.current.continuousStart();
      } else {
        ref.current.complete();
        setAnimationCompleted(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div>
      <LoadingBar color="#B56FFA" ref={ref} />
      <AnimatePresence>
        {!animationCompleted && (
          <motion.div
            key="shutter"
            className="shutter absolute top-0 left-0 w-full h-full flex justify-center items-center bg-primaryBlack z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center text-white text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              &#8226; {welcomeMessage}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Welcome;
