import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:-translate-x-1/2" />

          <div className="relative space-y-12">
            {/* Experience Item */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_theme(colors.primary.DEFAULT)] -translate-x-[7px] md:-translate-x-1/2 z-10" />

              {/* Date (Left on Desktop) */}
              <div className="md:text-right pl-8 md:pl-0 md:pr-12">
                <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-primary">
                  Feb 2023 – Feb 2024
                </span>
              </div>

              {/* Content (Right on Desktop) */}
              <div className="pl-8 md:pl-12">
                <div className="glass-card rounded-2xl p-6 relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Transaction Risk Investigator</h3>
                      <p className="text-muted-foreground">Amazon Development Centre</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Analyzed large datasets to identify transaction patterns and prevent risks. 
                    Utilized SQL for complex data querying and automated report generation to enhance operational efficiency.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["SQL", "Data Analysis", "Risk Management", "Reporting"].map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-white/80 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
