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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        const isHovered = hoveredLink === link.name;
        
        return (
          <button
            key={link.name}
            onClick={() => handleSocialClick(link.url)}
            className="group rounded-md p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 transition-all duration-300"
            style={{
              backgroundColor: isHovered ? 'hsla(270, 60%, 55%, 0.1)' : 'hsla(270, 10%, 12%, 0.2)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: isHovered ? 'hsla(270, 60%, 55%, 0.3)' : 'hsla(270, 10%, 15%, 0.2)',
              transform: isHovered ? 'scale(1.02)' : 'scale(1)'
            }}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div
              className="text-base sm:text-lg transition-colors duration-300"
              style={{
                color: isHovered ? 'hsl(270, 60%, 55%)' : 'hsl(270, 5%, 55%)'
              }}
            >
              <IconComponent />
            </div>
            <span 
              className="text-xs sm:text-sm font-normal transition-colors duration-300"
              style={{
                color: isHovered ? 'hsl(270, 5%, 90%)' : 'hsl(270, 5%, 55%)'
              }}
            >
              {link.name}
            </span>
            <ExternalLink 
              className="h-3 w-3 ml-auto transition-opacity duration-300" 
              style={{
                opacity: isHovered ? 0.4 : 0,
                color: 'hsl(270, 5%, 55%)'
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
