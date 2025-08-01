import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, MessageCircle, Copy } from "lucide-react";
import SocialLinks from "./social-links";
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
      {/* Profile Card */}
      <Card 
        className="glass-card animate-slide-up transition-all duration-500 relative overflow-hidden" 
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
          {/* Profile Image */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div 
              className="relative cursor-pointer"
              onMouseEnter={() => {
                setIsImageHovered(true);
                setShowDiscordTooltip(true);
              }}
              onMouseLeave={() => {
                setIsImageHovered(false);
                setShowDiscordTooltip(false);
                setDiscordCopied(false);
              }}
            >
              <img
                src="/profile-picture.png"
                alt="penomovu profile picture"
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full transition-all duration-500 relative z-10"
                style={{
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderColor: isImageHovered ? 'var(--primary)' : 'var(--glass-border)',
                  boxShadow: isImageHovered 
                    ? '0 20px 40px hsla(0, 0%, 0%, 0.3), 0 0 40px var(--glow-primary)' 
                    : '0 8px 25px hsla(0, 0%, 0%, 0.2)',
                  transform: isImageHovered ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              
              {/* Animated ring around profile image */}
              <div 
                className="absolute inset-0 rounded-full transition-all duration-500"
                style={{
                  background: `conic-gradient(from 0deg, var(--primary), var(--glow-secondary), var(--primary))`,
                  padding: '2px',
                  opacity: isImageHovered ? 0.6 : 0,
                  transform: isImageHovered ? 'scale(1.1) rotate(180deg)' : 'scale(1.05) rotate(0deg)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor'
                }}
              />

              {/* Discord Contact Overlay - Inside Profile Picture */}
              <div 
                className="absolute inset-0 rounded-full flex items-center justify-center transition-all duration-300 pointer-events-none cursor-pointer"
                style={{
                  background: showDiscordTooltip 
                    ? 'hsla(0, 0%, 0%, 0.8)' 
                    : 'transparent',
                  backdropFilter: showDiscordTooltip ? 'blur(8px)' : 'none',
                  opacity: showDiscordTooltip ? 1 : 0,
                  zIndex: 20
                }}
                onClick={showDiscordTooltip ? handleDiscordCopy : undefined}
              >
                <div 
                  className="text-center transition-all duration-300"
                  style={{
                    transform: showDiscordTooltip ? 'scale(1)' : 'scale(0.8)',
                    pointerEvents: showDiscordTooltip ? 'auto' : 'none'
                  }}
                >
                  <MessageCircle 
                    className="h-6 w-6 mx-auto mb-1" 
                    style={{ 
                      color: '#5865F2',
                      filter: 'drop-shadow(0 0 8px #5865F2)'
                    }}
                  />
                  <div 
                    className="text-xs font-medium mb-1"
                    style={{ 
                      color: 'var(--foreground)',
                      textShadow: '0 0 10px var(--glow-primary)'
                    }}
                  >
                    {discordCopied ? 'Copied!' : 'Discord'}
                  </div>
                  <div 
                    className="text-xs font-mono flex items-center gap-1"
                    style={{ 
                      color: '#5865F2',
                      textShadow: '0 0 8px #5865F2'
                    }}
                  >
                    ronioza
                    <Copy 
                      className="h-2 w-2 opacity-70" 
                      style={{ color: 'var(--muted-foreground)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 
              className="text-3xl sm:text-4xl font-light mb-2 sm:mb-3 transition-all duration-500 relative"
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
