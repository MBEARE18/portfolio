import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="container relative py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold gradient-text inline-block">Manjunatha B R</h3>
            <p className="text-muted-foreground max-w-xs">
              Building scalable solutions with modern technologies. Focused on creating efficient, user-friendly experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {["Profile", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/MBEARE18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/manjunatha-b-r/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:manjunathbr536@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Manjunatha B R. All rights reserved.</p>
          <p>Designed with Glassmorphism 2.0</p>
        </div>
      </div>
    </footer>
  );
}
