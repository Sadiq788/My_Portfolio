import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import cyberHeroBg from "@/assets/cyber-hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cyberHeroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 cyber-grid"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 animate-slide-up">
          {/* Terminal-style intro */}
          <div className="terminal-text text-sm font-mono mb-4">
            $ whoami
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent animate-glow-pulse">
            Mohammed Sadiq
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
            Aspiring Cybersecurity Analyst | Ethical Hacker
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Entry-level cybersecurity professional passionate about threat detection, vulnerability assessment, 
            and digital security. Seeking opportunities to apply my skills in a professional environment.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="cyber-glow" size="lg" className="group">
              <span>Open to Work</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="cyber-matrix" size="lg">
              <Download size={20} />
              <span>Download Resume</span>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8">
            <Button variant="ghost" size="icon" className="hover:text-cyber-blue transition-colors">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-cyber-blue transition-colors">
              <Linkedin size={24} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-cyber-blue rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-cyber-green rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-cyber-purple rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};