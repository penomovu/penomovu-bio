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

interface SocialLinksProps {
  parentHovered?: boolean;
}

export default function SocialLinks({ parentHovered = false }: SocialLinksProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        const isHovered = hoveredLink === link.name;
        
        return (
          <button
            key={link.name}
            onClick={() => handleSocialClick(link.url)}
            className="group rounded-md p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 transition-all duration-500"
            style={{
              backgroundColor: isHovered || parentHovered ? 'hsla(270, 60%, 55%, 0.1)' : 'hsla(270, 10%, 12%, 0.2)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: isHovered ? 'rgba(255, 255, 255, 0.6)' : parentHovered ? 'hsl(270, 60%, 55%)' : 'hsla(270, 10%, 15%, 0.2)',
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
              boxShadow: isHovered 
                ? '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' 
                : parentHovered 
                  ? '0 0 20px hsl(270, 60%, 55%), 0 0 40px hsla(270, 60%, 55%, 0.3)' 
                  : 'none'
            }}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div
              className="text-base sm:text-lg transition-all duration-500"
              style={{
                color: isHovered ? '#ffffff' : parentHovered ? 'hsl(270, 60%, 55%)' : 'hsl(270, 5%, 55%)',
                filter: isHovered 
                  ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))' 
                  : parentHovered 
                    ? 'drop-shadow(0 0 8px hsl(270, 60%, 55%))' 
                    : 'none'
              }}
            >
              <IconComponent />
            </div>
            <span 
              className="text-xs sm:text-sm font-normal transition-all duration-500"
              style={{
                color: isHovered ? '#ffffff' : parentHovered ? 'hsl(270, 60%, 55%)' : 'hsl(270, 5%, 55%)',
                textShadow: isHovered 
                  ? '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5)' 
                  : parentHovered 
                    ? '0 0 15px hsl(270, 60%, 55%), 0 0 30px hsla(270, 60%, 55%, 0.4)' 
                    : 'none'
              }}
            >
              {link.name}
            </span>
            <ExternalLink 
              className="h-3 w-3 ml-auto transition-all duration-500" 
              style={{
                opacity: isHovered ? 0.7 : parentHovered ? 0.4 : 0,
                color: isHovered ? '#ffffff' : parentHovered ? 'hsl(270, 60%, 55%)' : 'hsl(270, 5%, 55%)',
                filter: isHovered 
                  ? 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))' 
                  : parentHovered 
                    ? 'drop-shadow(0 0 6px hsl(270, 60%, 55%))' 
                    : 'none'
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
