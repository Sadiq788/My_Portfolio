import { Building, Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Cybersecurity Intern",
      company: "Pratinik Infotech",
      location: "Remote",
      period: "Jun 2024 - Aug 2024",
      type: "Internship",
      achievements: [
        "Gained hands-on experience with vulnerability assessment tools and methodologies",
        "Assisted senior analysts in conducting security audits and penetration testing",
        "Learned industry best practices for incident response and threat analysis",
        "Contributed to security documentation and policy development"
      ]
    },
    {
      role: "Cybersecurity Training Program",
      company: "Various Online Platforms",
      location: "Self-Paced Learning",
      period: "Jan 2024 - Present",
      type: "Training",
      achievements: [
        "Completed ethical hacking and penetration testing courses on platforms like TryHackMe and Hack The Box",
        "Obtained knowledge in network security, web application security, and digital forensics",
        "Participated in virtual labs and simulated security scenarios",
        "Built practical skills through guided cybersecurity projects and challenges"
      ]
    },
    {
      role: "Independent Security Research",
      company: "Personal Projects",
      location: "Self-Directed",
      period: "Sep 2024 - Present",
      type: "Research",
      achievements: [
        "Conducted security research on emerging threats and vulnerabilities",
        "Developed proof-of-concept security tools and scripts for learning purposes",
        "Participated in online cybersecurity communities and forums",
        "Documented findings and shared knowledge through project repositories"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
            Experience & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical experience gained through internships, training programs, and self-directed learning
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue to-cyber-green"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-20 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-cyber-blue rounded-full border-4 border-background shadow-[0_0_10px_hsl(var(--cyber-blue)/0.5)]"></div>
                
                {/* Content Card */}
                <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-cyber-blue/50 transition-all duration-300 group hover:shadow-[0_8px_30px_hsl(var(--cyber-blue)/0.1)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-cyber-blue group-hover:text-cyber-green transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 mt-2 sm:mt-0">
                      <span className={`px-3 py-1 text-xs rounded-full border ${
                        exp.type === 'Internship' ? 'border-cyber-blue text-cyber-blue' :
                        exp.type === 'Training' ? 'border-cyber-green text-cyber-green' :
                        'border-cyber-purple text-cyber-purple'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};