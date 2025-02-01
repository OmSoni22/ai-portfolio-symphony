import { motion } from "framer-motion";
import { Database, Brain, Server, Container } from "lucide-react";

const skillCategories = [
  {
    title: "Python Frameworks",
    icon: <Server className="w-6 h-6" />,
    skills: ["Flask", "FastAPI", "SQLAlchemy", "Pydantic"],
  },
  {
    title: "AI/ML Integration",
    icon: <Brain className="w-6 h-6" />,
    skills: ["OpenAI API", "Ollama", "Vector Embeddings", "LLM Integration"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "Redis", "PostGIS", "Vector Databases"],
  },
  {
    title: "DevOps",
    icon: <Container className="w-6 h-6" />,
    skills: ["Docker", "Git", "RabbitMQ", "API Testing"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Technical Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover bg-card p-6 rounded-lg border"
            >
              <div className="flex items-center mb-4 text-primary">
                {category.icon}
                <h3 className="ml-2 font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;