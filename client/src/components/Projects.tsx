import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Social Media Application",
      description: "A full-stack social platform featuring real-time user interactions, post creation, and secure authentication. Built with a robust Java backend and responsive frontend.",
      image: "/images/project-social.png",
      tags: ["Java", "Spring Boot", "MySQL", "React", "WebSocket"],
      github: "https://github.com/MBEARE18/social-media-app",
      demo: "#"
    },
    {
      title: "Amazon Clone Website",
      description: "A comprehensive e-commerce replica implementing product listings, shopping cart management, and checkout flows. Demonstrates complex state management and database design.",
      image: "/images/project-amazon.png",
      tags: ["Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "JPA"],
      github: "https://github.com/MBEARE18/amazon-clone-app",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl bg-card border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 p-8 -mt-20">
                <div className="glass-panel rounded-2xl p-6 space-y-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="border-white/10 bg-white/5 text-white/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Button 
                      asChild 
                      variant="default" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 w-4 h-4" /> Code
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-4 h-4" /> Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
