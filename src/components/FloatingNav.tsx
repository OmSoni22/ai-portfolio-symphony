import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="bg-card border shadow-lg rounded-lg p-2">
        <div className="flex flex-col items-center space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-1 rounded-md hover:bg-accent"
            >
              {section.label}
            </button>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-primary hover:text-primary/80 transition-colors p-1 rounded-full hover:bg-accent"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingNav;