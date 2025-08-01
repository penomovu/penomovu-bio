import { useState } from "react";
import { Home, User, Code, Mail, ExternalLink } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" }
];

export default function Navigation() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down"
      style={{ animationDelay: "0.8s" }}
    >
      <div 
        className="glass-effect rounded-full px-6 py-3 transition-all duration-300"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isHovered 
            ? '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 30px hsla(270, 85%, 60%, 0.2)' 
            : '0 4px 15px -3px rgba(0, 0, 0, 0.2)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            
            return (
              <button
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 group"
                style={{
                  backgroundColor: isActive ? 'hsla(270, 85%, 60%, 0.2)' : 'transparent',
                  color: isActive ? 'hsl(270, 85%, 60%)' : 'hsl(270, 6%, 65%)'
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium hidden md:block">
                  {item.label}
                </span>
                {isActive && (
                  <div 
                    className="absolute inset-0 rounded-full animate-glow"
                    style={{ zIndex: -1 }}
                  />
                )}
              </button>
            );
          })}
          
          {/* CTA Button */}
          <div className="border-l border-border/30 pl-4 ml-2">
            <button 
              className="gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
              onClick={() => window.open('mailto:contact@penomovu.dev', '_blank')}
            >
              Hire Me
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}