import { SiGithub } from "react-icons/si";
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
  }
];

export default function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex justify-center">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        const isHovered = hoveredLink === link.name;
        
        return (
          <button
            key={link.name}
            onClick={() => handleSocialClick(link.url)}
            className="group relative transition-all duration-300"
            style={{
              transform: isHovered ? 'scale(1.15) translateY(-2px)' : 'scale(1)',
              filter: isHovered 
                ? 'drop-shadow(0 0 15px var(--android-led)) drop-shadow(0 0 30px var(--android-led))' 
                : 'drop-shadow(0 0 8px var(--android-led))',
            }}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
            title={link.name}
          >
            {/* GitHub Logo */}
            <IconComponent 
              className="transition-all duration-300" 
              style={{ 
                fontSize: '2.5rem',
                color: isHovered ? 'var(--android-led)' : 'rgba(0, 217, 255, 0.7)',
              }} 
            />
          </button>
        );
      })}
    </div>
  );
}
