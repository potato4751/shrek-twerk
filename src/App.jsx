import { motion } from "framer-motion";
import { Music } from "lucide-react";
//import "./App.css";
import shrekGif from "./assets/shrek.gif";
import allstar from "./assets/allstar.mp3";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center p-4">
      <motion.img
        src={shrekGif}
        alt="Shrek Twerking"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className="w-96"
      />
      <audio autoPlay loop>
        <source src={allstar} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="mt-4 flex items-center gap-2">
        <Music className="animate-pulse" />
        <p className="text-lg">SomeBODY once told me...</p>
      </div>
    </div>
  );
}

export default App;
