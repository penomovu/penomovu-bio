import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Terminal, Cpu, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
    color: "hsl(270, 85%, 60%)"
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["PostgreSQL", "Redis", "Docker", "Linux"],
    color: "hsl(142, 76%, 36%)"
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "Vite"],
    color: "hsl(38, 92%, 50%)"
  },
  {
    icon: Terminal,
    title: "Tools",
    skills: ["Git", "VSCode", "Bash", "CI/CD"],
    color: "hsl(200, 85%, 60%)"
  }
];

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <div className="mb-8">
      <h2 
        className="text-2xl font-semibold text-center mb-6 text-gradient animate-slide-up"
        style={{ animationDelay: "0.6s" }}
      >
        Technical Expertise
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const isHovered = hoveredCategory === index;
          
          return (
            <Card
              key={index}
              className="glass-effect transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ 
                animationDelay: `${0.7 + index * 0.1}s`,
                transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                borderColor: isHovered ? category.color : 'hsla(270, 85%, 60%, 0.1)'
              }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardContent className="p-4 text-center">
                <div className="mb-3 flex justify-center">
                  <Icon 
                    className="w-8 h-8 transition-colors duration-300"
                    style={{ 
                      color: isHovered ? category.color : 'hsl(270, 6%, 65%)'
                    }}
                  />
                </div>
                
                <h3 
                  className="font-semibold mb-2 text-sm transition-colors duration-300"
                  style={{ 
                    color: isHovered ? category.color : 'hsl(270, 8%, 95%)'
                  }}
                >
                  {category.title}
                </h3>
                
                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-xs text-muted-foreground transition-colors duration-300"
                      style={{
                        color: isHovered ? 'hsl(270, 8%, 88%)' : 'hsl(270, 6%, 65%)'
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}