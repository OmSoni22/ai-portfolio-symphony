import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Backend System",
    description: "Implemented OpenAI API integration with context handling and vector embeddings in PostgreSQL",
    tags: ["Python", "FastAPI", "PostgreSQL", "OpenAI"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Geospatial Data Platform",
    description: "Built with PostGIS and Tile38 for real-time location tracking and spatial queries",
    tags: ["Python", "PostGIS", "Redis", "Tile38"],
    links: {
      github: "#",
      live: "#",
    },
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-secondary" id="projects">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover bg-card p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.links.github}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.links.live}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;