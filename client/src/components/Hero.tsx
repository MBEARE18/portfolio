import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Database, Layout } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/80">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Building <br />
            <span className="gradient-text text-glow">Scalable Solutions</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Full-Stack Java Developer specializing in J2EE, Spring Boot, and modern frontend technologies. I craft efficient, user-friendly digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 bg-white/5 hover:bg-white/10 text-foreground rounded-full px-8 h-12 backdrop-blur-md transition-all hover:-translate-y-1"
            >
              Download Resume <Download className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">Java & Spring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Layout className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium">React & Modern UI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <Database className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium">SQL & Data</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Glass Cards Floating Composition */}
            <div className="absolute top-0 right-0 w-64 h-80 glass-card rounded-2xl p-6 z-20 animate-float">
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/30">
                    <Code className="text-white w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-20 bg-white/20 rounded-full" />
                    <div className="h-2 w-32 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-24 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/5" />
                  <div className="flex justify-between items-center">
                    <div className="h-2 w-16 bg-white/20 rounded-full" />
                    <div className="h-6 w-6 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-0 w-72 h-64 glass-card rounded-2xl p-6 z-30 animate-float-delayed backdrop-blur-xl bg-background/40">
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-purple-600 flex items-center justify-center shadow-lg shadow-secondary/30">
                    <Database className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="h-2 w-24 bg-white/20 rounded-full mb-2" />
                    <div className="h-2 w-16 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="flex-1 flex items-end gap-2">
                  {[40, 70, 50, 90, 60, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-primary/50 to-secondary/50 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
        </div>
      </div>
    </section>
  );
}
