import { ExternalLink } from "lucide-react";
import { 
  SiGithub, 
  SiLinkedin, 
  SiX, 
  SiStackoverflow
} from "react-icons/si";
import { useState } from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  hoverColor: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/penomovu",
    icon: SiGithub,
    hoverColor: "hover:bg-primary/10 hover:border-primary/30"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/penomovu",
    icon: SiLinkedin,
    hoverColor: "hover:bg-primary/10 hover:border-primary/30"
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/penomovu",
    icon: SiX,
    hoverColor: "hover:bg-primary/10 hover:border-primary/30"
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/penomovu",
    icon: SiStackoverflow,
    hoverColor: "hover:bg-primary/10 hover:border-primary/30"
  }
];

export default function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        const isHovered = hoveredLink === link.name;
        
        return (
          <button
            key={link.name}
            onClick={() => handleSocialClick(link.url)}
            className="group relative rounded-lg p-3 sm:p-4 flex items-center gap-3 sm:gap-4 transition-all duration-300 overflow-hidden"
            style={{
              backgroundColor: isHovered 
                ? 'hsla(270, 75%, 65%, 0.15)' 
                : 'hsla(270, 18%, 6%, 0.4)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: isHovered 
                ? 'hsla(270, 75%, 65%, 0.4)' 
                : 'hsla(270, 25%, 18%, 0.3)',
              transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: isHovered 
                ? `0 8px 32px -8px rgba(0, 0, 0, 0.3), 
                   0 0 20px hsla(270, 75%, 65%, 0.2),
                   inset 0 1px 0 hsla(270, 75%, 65%, 0.1)` 
                : `0 4px 16px -4px rgba(0, 0, 0, 0.1),
                   inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
              backdropFilter: 'blur(8px) saturate(180%)'
            }}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {/* Animated gradient background */}
            <div 
              className="absolute inset-0 opacity-0 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, hsla(270, 75%, 65%, 0.05), hsla(285, 85%, 70%, 0.03))',
                opacity: isHovered ? 1 : 0
              }}
            />
            
            {/* Icon with glow effect */}
            <div
              className="text-lg sm:text-xl transition-all duration-300 relative z-10"
              style={{
                color: isHovered ? 'hsl(270, 75%, 65%)' : 'hsl(270, 8%, 60%)',
                filter: isHovered ? 'drop-shadow(0 0 8px hsla(270, 75%, 65%, 0.4))' : 'none',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <IconComponent />
            </div>
            
            {/* Text with enhanced styling */}
            <span 
              className="text-sm sm:text-base font-medium transition-all duration-300 relative z-10"
              style={{
                color: isHovered ? 'hsl(270, 8%, 95%)' : 'hsl(270, 8%, 70%)',
                textShadow: isHovered ? '0 0 10px hsla(270, 75%, 65%, 0.2)' : 'none'
              }}
            >
              {link.name}
            </span>
            
            {/* External link icon with enhanced animation */}
            <ExternalLink 
              className="h-4 w-4 ml-auto transition-all duration-300 relative z-10" 
              style={{
                opacity: isHovered ? 0.7 : 0,
                color: 'hsl(270, 75%, 65%)',
                transform: isHovered ? 'translateX(0) scale(1)' : 'translateX(-4px) scale(0.8)',
                filter: isHovered ? 'drop-shadow(0 0 4px hsla(270, 75%, 65%, 0.3))' : 'none'
              }}
            />
            
            {/* Shine effect on hover */}
            <div 
              className="absolute inset-0 opacity-0 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, hsla(270, 75%, 65%, 0.1) 50%, transparent 70%)',
                transform: 'translateX(-100%)',
                animation: isHovered ? 'shimmer 1s ease-out' : 'none'
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
