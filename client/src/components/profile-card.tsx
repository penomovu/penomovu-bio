import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, MessageCircle, Copy } from "lucide-react";
import SocialLinks from "./social-links";
import EnhancedProfileImage from "./enhanced-profile-image";
import { useState } from "react";





export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showDiscordTooltip, setShowDiscordTooltip] = useState(false);
  const [discordCopied, setDiscordCopied] = useState(false);

  const handleDiscordCopy = () => {
    navigator.clipboard.writeText('ronioza');
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 2000);
  };

  return (
    <div className="max-w-md w-full mx-auto px-4 animate-fade-in">
      {/* Enhanced Profile Card */}
      <Card 
        className="glass-enhanced animate-slide-up transition-all duration-500 relative overflow-hidden ripple" 
        style={{ 
          animationDelay: "0.2s",
          transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-500"
          style={{
            background: isHovered 
              ? 'linear-gradient(45deg, var(--glow-primary), transparent, var(--glow-secondary))' 
              : 'transparent',
            opacity: isHovered ? 0.1 : 0
          }}
        />
        
        {/* Inner glow border effect */}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: 'linear-gradient(45deg, transparent, var(--glass-hover-border), transparent)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor',
            padding: '2px'
          }}
        />
        <CardContent className="p-6 sm:p-10 relative z-10">
          {/* Enhanced Profile Image */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <EnhancedProfileImage
              src="/profile-picture.png"
              alt="penomovu profile picture"
              isHovered={isImageHovered}
              onHover={setIsImageHovered}
              isDiscordHovered={showDiscordTooltip}
              onDiscordHover={setShowDiscordTooltip}
              onDiscordClick={handleDiscordCopy}
              discordCopied={discordCopied}
            />
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 
              className="text-3xl sm:text-4xl font-light mb-2 sm:mb-3 transition-all duration-500 relative text-gradient-animated"
              style={{ 
                color: isHovered ? 'var(--primary)' : 'var(--foreground)',
                textShadow: isHovered ? '0 0 30px var(--glow-primary), 0 2px 4px hsla(0, 0%, 0%, 0.3)' : '0 2px 4px hsla(0, 0%, 0%, 0.2)',
                transform: isHovered ? 'scale(1.02)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.textShadow = '0 0 30px var(--glow-primary), 0 2px 4px hsla(0, 0%, 0%, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isHovered ? 'var(--primary)' : 'var(--foreground)';
                e.currentTarget.style.textShadow = isHovered ? '0 0 30px var(--glow-primary), 0 2px 4px hsla(0, 0%, 0%, 0.3)' : '0 2px 4px hsla(0, 0%, 0%, 0.2)';
              }}
            >
              penomovu
            </h1>
            <p 
              className="text-sm sm:text-base mb-2 transition-all duration-300 font-medium"
              style={{ 
                color: isHovered ? 'hsl(285, 60%, 75%)' : 'var(--muted-foreground)',
                textShadow: isHovered ? '0 0 15px var(--glow-secondary)' : 'none'
              }}
            >
              C++, Python & Web Developer
            </p>
            <p 
              className="text-xs sm:text-sm flex items-center justify-center gap-1 transition-colors duration-300"
              style={{
                color: 'var(--muted-foreground)',
                opacity: 0.8
              }}
            >
              <MapPin className="h-3 w-3" />
              France
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

          </CardContent>
      </Card>
      {/* Footer */}
      <div className="text-center mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <p 
          className="text-sm flex items-center justify-center gap-2 font-light transition-all duration-300"
          style={{ 
            color: 'var(--muted-foreground)',
            opacity: 0.6
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.textShadow = '0 0 15px var(--glow-secondary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.6';
            e.currentTarget.style.textShadow = 'none';
          }}
        >
          Made with 
          <Heart 
            className="h-3 w-3 transition-all duration-300" 
            style={{ 
              color: 'var(--primary)',
              filter: 'drop-shadow(0 0 6px var(--glow-primary))'
            }}
          />
          by penomovu
        </p>
      </div>
    </div>
  );
}
