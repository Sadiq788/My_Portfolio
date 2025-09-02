import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:mohammed@securityanalyst.dev", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
              Mohammed Sadiq
            </h3>
            <p className="text-muted-foreground">
              Aspiring Red Team Security Analyst seeking entry-level opportunities in penetration testing, adversary simulation, and offensive security operations. Open to internships and graduate trainee programs focused on ethical hacking and red team engagements.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-cyber-blue/20 hover:text-cyber-blue transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-cyber-blue">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-cyber-green transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-cyber-green">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>mohammed@securityanalyst.dev</p>
              <p>Open to entry-level positions</p>
              <p>Available for interviews</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mohammed Sadiq. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Cybersecurity Enthusiast <Heart size={14} className="text-cyber-blue" /> Open to Entry-Level Roles
          </p>
        </div>
      </div>
    </footer>
  );
};