import { useEffect } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import FloatingNav from "../components/FloatingNav";
import ThemeToggle from "../components/ThemeToggle";

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".section-fade").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <FloatingNav />
    </div>
  );
};

export default Index;