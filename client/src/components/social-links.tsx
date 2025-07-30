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
            className={`group bg-secondary/20 border border-border/20 rounded-md p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-[1.02] ${link.hoverColor}`}
          >
            <IconComponent className="text-base sm:text-lg text-muted-foreground group-hover:text-primary" />
            <span className="text-xs sm:text-sm font-normal text-muted-foreground group-hover:text-foreground">{link.name}</span>
            <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-40 transition-opacity text-muted-foreground" />
          </button>
        );
      })}
    </div>
  );
}
