import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to drop a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-8 space-y-8 h-full">
              <h3 className="text-2xl font-heading font-bold text-white">Contact Info</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:manjunathbr536@gmail.com" 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email Me</p>
                    <p className="text-white font-medium group-hover:text-primary transition-colors">manjunathbr536@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+916360179164" 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Call Me</p>
                    <p className="text-white font-medium group-hover:text-secondary transition-colors">+91 6360179164</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-white font-medium">Bengaluru, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-8 md:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="Project Inquiry" 
                    className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 min-h-[150px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg shadow-primary/25 h-12 text-lg font-medium"
                >
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
