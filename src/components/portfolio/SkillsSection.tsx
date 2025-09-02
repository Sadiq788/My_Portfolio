import { 
  Terminal, 
  Shield, 
  Network, 
  Lock, 
  Cloud, 
  Search,
  Code,
  Server
} from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    {
      category: "Operating Systems",
      icon: Terminal,
      items: [
        { name: "Linux", level: 90 },
        { name: "Windows", level: 85 },
        { name: "macOS", level: 75 }
      ]
    },
    {
      category: "Programming",
      icon: Code,
      items: [
        { name: "Python", level: 95 },
        { name: "Bash/Shell", level: 88 },
        { name: "JavaScript", level: 80 },
        { name: "C/C++", level: 70 }
      ]
    },
    {
      category: "Security Tools",
      icon: Shield,
      items: [
        { name: "Metasploit", level: 90 },
        { name: "Burp Suite", level: 92 },
        { name: "Wireshark", level: 88 },
        { name: "Nmap", level: 95 }
      ]
    },
    {
      category: "Networking",
      icon: Network,
      items: [
        { name: "TCP/IP", level: 90 },
        { name: "Firewall Config", level: 85 },
        { name: "VPN Setup", level: 80 },
        { name: "Network Analysis", level: 88 }
      ]
    },
    {
      category: "Web Security",
      icon: Lock,
      items: [
        { name: "OWASP Top 10", level: 95 },
        { name: "SQL Injection", level: 90 },
        { name: "XSS Prevention", level: 88 },
        { name: "Auth Security", level: 85 }
      ]
    },
    {
      category: "Cloud Security",
      icon: Cloud,
      items: [
        { name: "AWS Security", level: 75 },
        { name: "Azure Security", level: 70 },
        { name: "Container Security", level: 80 },
        { name: "IAM", level: 85 }
      ]
    },
    {
      category: "Threat Analysis",
      icon: Search,
      items: [
        { name: "Malware Analysis", level: 88 },
        { name: "Forensics", level: 82 },
        { name: "Incident Response", level: 85 },
        { name: "Threat Hunting", level: 80 }
      ]
    },
    {
      category: "Infrastructure",
      icon: Server,
      items: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "SIEM Tools", level: 80 },
        { name: "CI/CD Security", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
            Technical Skills & Competencies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical skills developed through hands-on projects, training, and practical experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-lg border border-border/50 hover:border-cyber-blue/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <skillGroup.icon className="w-6 h-6 text-cyber-blue group-hover:text-cyber-green transition-colors" />
                <h3 className="font-semibold text-sm">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};