import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter, Send, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Sadiq788/",
      color: "hover:text-cyber-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "www.linkedin.com/in/mohammed-sadiq-060a2926b",
      color: "hover:text-cyber-blue"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com", 
      color: "hover:text-cyber-green"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact.mohammedsadiq@gmail.com",
      color: "hover:text-cyber-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in my profile for entry-level cybersecurity roles? Let's discuss how I can 
            contribute to your organization's security objectives.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-cyber-blue/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-cyber-blue" />
                <h3 className="text-xl font-semibold">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input 
                      placeholder="Your name"
                      className="bg-muted/50 border-border/50 focus:border-cyber-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="bg-muted/50 border-border/50 focus:border-cyber-blue transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="Entry-level position, internship opportunity, etc."
                    className="bg-muted/50 border-border/50 focus:border-cyber-blue transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about the entry-level opportunity or internship program..."
                    rows={6}
                    className="bg-muted/50 border-border/50 focus:border-cyber-blue transition-colors resize-none"
                  />
                </div>
                
                <Button type="submit" variant="cyber-glow" size="lg" className="w-full">
                  <Send size={20} />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Info */}
            <div className="p-6 bg-card rounded-lg border border-border/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-cyber-green" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:mohammed@securityanalyst.dev" className="text-cyber-blue hover:text-cyber-green transition-colors">
                    mohammed@securityanalyst.dev
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Available for remote work worldwide</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="text-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="p-6 bg-card rounded-lg border border-border/50">
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-cyber-blue/50 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="p-6 bg-gradient-to-r from-cyber-blue/10 to-cyber-green/10 rounded-lg border border-cyber-blue/20">
              <h3 className="text-lg font-semibold mb-2">Ready for Entry-Level Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                I'm actively seeking junior cybersecurity analyst, SOC analyst, or security trainee 
                positions where I can apply my skills and grow professionally.
              </p>
              <Button variant="cyber-matrix" size="lg">
                Schedule an Interview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};