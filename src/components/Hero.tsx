import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-sm font-mono text-primary mb-4">Hi, I'm</h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Om Soni</h2>
        <div className="typing-container">
          <span className="typing-text text-xl md:text-2xl text-muted-foreground">
            {text}
          </span>
        </div>
        <p className="mt-8 max-w-lg mx-auto text-muted-foreground">
          Specializing in AI/ML integration, database optimization, and scalable system architecture
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;