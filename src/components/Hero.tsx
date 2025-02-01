import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Python Backend Developer";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-sm font-mono text-primary mb-4">Hi, I'm</h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Om Soni</h2>
          <div className="typing-container">
            <span className="typing-text text-xl md:text-2xl text-muted-foreground">
              {text}
            </span>
          </div>
          <p className="mt-8 max-w-lg text-muted-foreground">
            Specializing in AI/ML integration, database optimization, and scalable system architecture
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <Avatar className="w-64 h-64 border-4 border-primary">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>OS</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;