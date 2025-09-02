import { Target, Users, TrendingUp, Award } from "lucide-react";

export const CareerGoalsSection = () => {
  const goals = [
    {
      icon: Target,
      title: "Entry-Level Position",
      description: "Seeking junior Security analyst or Jr Penetration tester to begin professional career"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Eager to work with experienced professionals and contribute to security operations"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Committed to obtaining industry certifications and staying current with threat landscape"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Aspiring to advance into specialized roles in penetration testing"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-cyber-blue/5 to-cyber-green/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
            Career Goals & Aspirations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This portfolio showcases my readiness for entry-level cybersecurity positions, 
            internships, and graduate trainee programs in the information security field.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-lg border border-border/50 hover:border-cyber-blue/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <goal.icon className="w-8 h-8 text-cyber-blue group-hover:text-cyber-green transition-colors flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cyber-blue transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center p-8 bg-card rounded-lg border border-cyber-blue/20 shadow-[0_0_30px_hsl(var(--cyber-blue)/0.1)]">
          <h3 className="text-2xl font-bold mb-4 text-cyber-blue">Ready to Start My Cybersecurity Career</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I am actively seeking entry-level cybersecurity positions where I can apply my technical skills, 
            contribute to organizational security, and grow under the mentorship of experienced professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-cyber-blue text-background font-medium hover:bg-cyber-blue/90 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-background transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};