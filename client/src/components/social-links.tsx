import { ExternalLink } from "lucide-react";
import { 
  SiGithub, 
  SiLinkedin, 
  SiX, 
  SiStackoverflow, 
  SiDiscord, 
  SiYoutube 
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
    hoverColor: "hover:bg-gray-700/50 hover:border-gray-500"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/penomovu",
    icon: SiLinkedin,
    hoverColor: "hover:bg-blue-600/20 hover:border-blue-500"
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/penomovu",
    icon: SiX,
    hoverColor: "hover:bg-blue-500/20 hover:border-blue-400"
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/penomovu",
    icon: SiStackoverflow,
    hoverColor: "hover:bg-orange-600/20 hover:border-orange-500"
  },
  {
    name: "Discord",
    url: "https://discord.com/users/penomovu",
    icon: SiDiscord,
    hoverColor: "hover:bg-purple-600/20 hover:border-purple-500"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@penomovu",
    icon: SiYoutube,
    hoverColor: "hover:bg-red-600/20 hover:border-red-500"
  }
];

export default function SocialLinks() {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <button
            key={link.name}
            onClick={() => handleSocialClick(link.url)}
            className={`group bg-gray-800/50 border border-gray-600 rounded-lg p-3 flex items-center gap-3 transition-all duration-300 hover:scale-105 ${link.hoverColor}`}
          >
            <IconComponent className="text-xl text-gray-400 group-hover:text-white" />
            <span className="text-sm font-medium">{link.name}</span>
            <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-50 transition-opacity" />
          </button>
        );
      })}
    </div>
  );
}
