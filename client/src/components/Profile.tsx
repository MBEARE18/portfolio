import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Profile() {
  const skills = [
    { category: "Backend", items: ["Java", "Spring Boot", "J2EE", "REST APIs"] },
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"] },
    { category: "Database", items: ["MySQL", "PostgreSQL", "SQL Optimization"] },
    { category: "Tools", items: ["Git", "Maven", "Docker", "Eclipse", "VS Code"] },
  ];

  return (
    <section id="profile" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Profile Image & Bio */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative glass-card rounded-2xl p-2">
                <img 
                  src="/images/profile-placeholder.png" 
                  alt="Manjunatha B R" 
                  className="w-full aspect-square object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
            
            <div className="glass-panel rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-heading font-bold text-white">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am an experienced Java Developer with a passion for building scalable, high-performance web applications. 
                My journey involves deep diving into J2EE technologies and modern frontend frameworks to create seamless user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive on solving complex problems and optimizing systems for efficiency. Whether it's architecting a backend 
                service or polishing a user interface, I bring dedication and technical expertise to every project.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="glass-card border-0 bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xl font-heading font-bold text-primary group-hover:text-glow transition-all">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-white/5 hover:bg-primary/20 text-white border border-white/10 px-3 py-1 text-sm font-medium transition-all hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Stats / Additional Info */}
            <div className="sm:col-span-2 glass-panel rounded-2xl p-8 mt-4 flex flex-wrap justify-around gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
