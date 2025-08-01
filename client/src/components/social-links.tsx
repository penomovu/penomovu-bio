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
            className="group relative rounded-lg p-3 sm:p-4 flex items-center gap-3 transition-all duration-500 overflow-hidden"
            style={{
              background: isHovered ? 'var(--glass-hover-bg)' : 'var(--glass-bg)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: isHovered ? 'var(--glass-hover-border)' : 'var(--glass-border)',
              backdropFilter: 'blur(16px) saturate(150%)',
              transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: isHovered 
                ? '0 8px 32px hsla(0, 0%, 0%, 0.3), 0 0 20px var(--glow-primary), inset 0 1px 0 var(--glass-hover-border)' 
                : '0 4px 16px hsla(0, 0%, 0%, 0.2), inset 0 1px 0 var(--glass-border)'
            }}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {/* Animated background shimmer */}
            <div 
              className="absolute inset-0 opacity-0 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, var(--glow-secondary) 50%, transparent 70%)',
                opacity: isHovered ? 0.1 : 0,
                transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                transition: 'all 0.6s ease-in-out'
              }}
            />

            <div
              className="text-lg sm:text-xl transition-all duration-300 relative z-10"
              style={{
                color: isHovered ? 'var(--primary)' : 'var(--muted-foreground)',
                filter: isHovered ? 'drop-shadow(0 0 8px var(--glow-primary))' : 'none',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <IconComponent />
            </div>
            <span 
              className="text-sm sm:text-base font-medium transition-all duration-300 relative z-10"
              style={{
                color: isHovered ? 'var(--foreground)' : 'var(--muted-foreground)',
                textShadow: isHovered ? '0 0 10px var(--glow-secondary)' : 'none'
              }}
            >
              {link.name}
            </span>
            <ExternalLink 
              className="h-3 w-3 ml-auto transition-all duration-300 relative z-10" 
              style={{
                opacity: isHovered ? 0.6 : 0,
                color: 'var(--primary)',
                transform: isHovered ? 'translateX(2px) scale(1.1)' : 'translateX(0) scale(1)',
                filter: isHovered ? 'drop-shadow(0 0 4px var(--glow-primary))' : 'none'
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
