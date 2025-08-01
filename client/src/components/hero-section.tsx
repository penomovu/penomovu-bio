import { useState, useEffect } from "react";
import { Code2, Zap, Database, Globe } from "lucide-react";

const specialties = [
  { icon: Code2, text: "C++ & Python Expert", delay: "0.1s" },
  { icon: Database, text: "Backend Architecture", delay: "0.2s" },
  { icon: Globe, text: "Full-Stack Development", delay: "0.3s" },
  { icon: Zap, text: "Performance Optimization", delay: "0.4s" }
];

export default function HeroSection() {
  const [currentSpecialty, setCurrentSpecialty] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-8 animate-fade-in">
      {/* Main Title */}
      <h1 className="text-5xl md:text-6xl font-light mb-4 text-gradient animate-slide-down">
        penomovu
      </h1>
      
      {/* Animated Subtitle */}
      <div className="h-16 mb-6 flex items-center justify-center">
        <div className="text-xl md:text-2xl font-medium text-muted-foreground animate-slide-up">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className={`flex items-center justify-center gap-3 transition-all duration-500 ${
                  currentSpecialty === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4 absolute'
                }`}
                style={{ 
                  animationDelay: specialty.delay,
                  color: currentSpecialty === index ? 'hsl(270, 85%, 60%)' : 'hsl(270, 6%, 65%)'
                }}
              >
                <Icon className="w-6 h-6" />
                <span>{specialty.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Professional Tagline */}
      <p 
        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up"
        style={{ animationDelay: "0.5s" }}
      >
        Building high-performance applications with clean, scalable code.
        <br />
        <span className="text-primary font-medium">From concept to deployment.</span>
      </p>
    </div>
  );
}