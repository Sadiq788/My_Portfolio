import { Shield, Terminal, Search, Lock } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Malware Analysis",
      description: "Static and dynamic analysis of malicious software"
    },
    {
      icon: Terminal,
      title: "Penetration Testing",
      description: "Ethical hacking and vulnerability identification"
    },
    {
      icon: Search,
      title: "Threat Detection",
      description: "Identifying and analyzing cybersecurity threats"
    },
    {
      icon: Lock,
      title: "Network Security",
      description: "Securing network infrastructure and monitoring"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <img 
                src={profileAvatar} 
                alt="Mohammed Sadiq - Security Analyst & Penetration Testing Expert"
                className="w-full h-full object-cover rounded-lg glow-border"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/20 to-cyber-green/20 rounded-lg"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyber-blue">
                Cybersecurity Enthusiast Seeking Entry-Level Opportunities
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a dedicated cybersecurity enthusiast with a strong foundation in threat detection, 
                malware analysis, and penetration testing. Through hands-on projects, internships, and 
                continuous learning, I have developed practical skills that I'm eager to apply in a 
                professional cybersecurity role.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My passion for cybersecurity drives me to stay current with emerging threats and 
                security technologies. I am actively seeking entry-level positions where I can 
                contribute to protecting digital assets while growing my expertise under experienced 
                professionals in the field.
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-card rounded-lg border border-border/50 hover:border-cyber-blue/50 transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-cyber-blue mb-3 group-hover:text-cyber-green transition-colors" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};