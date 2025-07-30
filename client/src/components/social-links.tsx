import { ExternalLink } from "lucide-react";
import { 
  SiGithub, 
  SiLinkedin, 
  SiX, 
  SiStackoverflow
} from "react-icons/si";

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
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <button
            key={link.name}
            onClick={() => handleSocialClick(link.url)}
            className="group bg-slate-800/20 border border-slate-700/20 rounded-md p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'hsla(270, 10%, 12%, 0.2)',
              borderColor: 'hsla(270, 10%, 15%, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'hsla(270, 60%, 55%, 0.1)';
              e.currentTarget.style.borderColor = 'hsla(270, 60%, 55%, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'hsla(270, 10%, 12%, 0.2)';
              e.currentTarget.style.borderColor = 'hsla(270, 10%, 15%, 0.2)';
            }}
          >
            <IconComponent 
              className="text-base sm:text-lg transition-colors" 
              style={{ color: 'hsl(270, 5%, 55%)' }}
            />
            <span 
              className="text-xs sm:text-sm font-normal transition-colors"
              style={{ color: 'hsl(270, 5%, 55%)' }}
            >
              {link.name}
            </span>
            <ExternalLink 
              className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-40 transition-opacity" 
              style={{ color: 'hsl(270, 5%, 55%)' }}
            />
          </button>
        );
      })}
    </div>
  );
}
