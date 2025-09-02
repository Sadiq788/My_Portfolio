import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Monitor, Bug, Target } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Malware Detection System",
      description: "Developed a Python-based malware detection system using machine learning algorithms to identify suspicious files. Implemented static analysis techniques and trained models on malware datasets.",
      icon: Shield,
      tech: ["Python", "Scikit-learn", "YARA Rules", "PE Analysis"],
      github: "#",
      demo: "#",
      status: "completed",
      myContribution: "Built the entire detection engine and trained ML models"
    },
    {
      title: "Sentiment Analysis for Security",
      description: "Created a sentiment analysis tool to monitor social media for potential security threats and data breaches. Helps identify negative sentiment that could indicate security incidents.",
      icon: Monitor,
      tech: ["Python", "NLTK", "Twitter API", "Flask"],
      github: "#",
      demo: "#",
      status: "completed",
      myContribution: "Designed algorithm and implemented threat detection logic"
    },
    {
      title: "Network Packet Monitoring System",
      description: "Built a real-time network packet monitoring tool using Python and Wireshark to analyze network traffic, detect anomalies, and identify potential security threats.",
      icon: Target,
      tech: ["Python", "Wireshark", "Scapy", "Socket Programming"],
      github: "#",
      demo: "#",
      status: "completed",
      myContribution: "Developed packet capture and analysis modules"
    },
    {
      title: "Bug Bounty Research & Reports",
      description: "Conducted ethical hacking research on web applications, identified vulnerabilities, and submitted detailed reports. Focused on OWASP Top 10 vulnerabilities and secure coding practices.",
      icon: Bug,
      tech: ["Burp Suite", "OWASP ZAP", "Manual Testing", "Report Writing"],
      github: "#",
      demo: "#",
      status: "ongoing",
      myContribution: "Performed vulnerability research and documented findings"
    },
    {
      title: "CTF Challenge Solutions",
      description: "Participated in Capture The Flag competitions, solving challenges in cryptography, web security, forensics, and reverse engineering. Documented solutions for learning purposes.",
      icon: Target,
      tech: ["Kali Linux", "John the Ripper", "Hashcat", "Ghidra"],
      github: "#",
      demo: "#",
      status: "ongoing",
      myContribution: "Solved 50+ CTF challenges across multiple categories"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
            Projects & Practical Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world cybersecurity projects demonstrating practical skills and hands-on experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-lg border border-border/50 hover:border-cyber-blue/50 transition-all duration-300 animate-slide-up hover:shadow-[0_8px_30px_hsl(var(--cyber-blue)/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <project.icon className="w-8 h-8 text-cyber-blue group-hover:text-cyber-green transition-colors" />
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-cyber-blue transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full border ${
                      project.status === 'completed' ? 'border-cyber-green text-cyber-green' :
                      project.status === 'in-progress' ? 'border-cyber-blue text-cyber-blue' :
                      'border-cyber-purple text-cyber-purple'
                    }`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* My Contribution */}
              <div className="mb-4 p-3 bg-muted/30 rounded-lg border-l-4 border-cyber-green">
                <p className="text-sm text-cyber-green font-medium mb-1">My Contribution:</p>
                <p className="text-sm text-muted-foreground">{project.myContribution}</p>
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-muted rounded-full border border-border/50 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="cyber-glow" size="sm">
                  <Github size={16} />
                  <span>GitHub</span>
                </Button>
                <Button variant="outline" size="sm" className="hover:border-cyber-green hover:text-cyber-green">
                  <ExternalLink size={16} />
                  <span>Details</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};