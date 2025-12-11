import { useState } from "react";

interface EnhancedProfileImageProps {
  src: string;
  alt: string;
  onHover: (hovered: boolean) => void;
  onDiscordHover: (show: boolean) => void;
  isHovered: boolean;
  isDiscordHovered: boolean;
  onDiscordClick: () => void;
  discordCopied: boolean;
}

export default function EnhancedProfileImage({
  src,
  alt,
  onHover,
  onDiscordHover,
  isHovered,
  isDiscordHovered,
  onDiscordClick,
  discordCopied
}: EnhancedProfileImageProps) {
  return (
    <div className="relative cursor-pointer group">
      {/* Outer glow rings */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-1000 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `conic-gradient(from 0deg, var(--glow-primary), var(--glow-secondary), var(--glow-primary))`,
          padding: '3px',
          transform: isHovered ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)',
          animation: isHovered ? 'rotate-glow 4s linear infinite' : 'none'
        }}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </div>
      
      {/* Middle glow ring */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-700 ${
          isHovered ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          background: `conic-gradient(from 180deg, var(--glow-secondary), var(--glow-primary), var(--glow-secondary))`,
          padding: '6px',
          transform: isHovered ? 'scale(1.15) rotate(-180deg)' : 'scale(1) rotate(0deg)',
          animation: isHovered ? 'rotate-glow 3s linear infinite reverse' : 'none'
        }}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </div>
      
      {/* Main image container */}
      <div 
        className="relative z-10"
        onMouseEnter={() => {
          onHover(true);
          onDiscordHover(true);
        }}
        onMouseLeave={() => {
          onHover(false);
          onDiscordHover(false);
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full transition-all duration-700 relative z-10"
          style={{
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: isHovered ? 'var(--primary)' : 'var(--glass-border)',
            boxShadow: isHovered 
              ? '0 25px 50px hsla(0, 0%, 0%, 0.4), 0 0 50px var(--glow-primary), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
              : '0 8px 25px hsla(0, 0%, 0%, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            transform: isHovered ? 'scale(1.08) rotate(2deg)' : 'scale(1) rotate(0deg)',
            filter: isHovered 
              ? 'brightness(1.1) contrast(1.1) saturate(1.2)' 
              : 'brightness(1) contrast(1) saturate(1)'
          }}
        />
        
        {/* Inner reflection effect */}
        <div 
          className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
            isHovered ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor',
            padding: '2px'
          }}
        />
      </div>

      {/* Discord Contact Overlay */}
      <div 
        className="absolute inset-0 rounded-full flex items-center justify-center transition-all duration-500 pointer-events-none"
        style={{
          background: isDiscordHovered 
            ? 'hsla(0, 0%, 0%, 0.85)' 
            : 'transparent',
          backdropFilter: isDiscordHovered ? 'blur(12px) saturate(150%)' : 'none',
          opacity: isDiscordHovered ? 1 : 0,
          zIndex: 20,
          transform: isDiscordHovered ? 'scale(1)' : 'scale(0.95)'
        }}
        onClick={isDiscordHovered ? onDiscordClick : undefined}
      >
        <div 
          className="text-center transition-all duration-500"
          style={{
            transform: isDiscordHovered ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-5deg)',
            opacity: isDiscordHovered ? 1 : 0
          }}
        >
          {/* Discord icon with enhanced effects */}
          <div className="relative mb-2">
            <div 
              className="absolute inset-0 rounded-full opacity-30 animate-pulse"
              style={{
                background: 'radial-gradient(circle, #5865F2 0%, transparent 70%)',
                filter: 'blur(8px)'
              }}
            />
            <div className="relative">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="mx-auto relative z-10"
                style={{ color: '#5865F2' }}
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </div>
          </div>
          
          <div 
            className="text-xs font-medium mb-1 transition-all duration-300"
            style={{ 
              color: 'var(--foreground)',
              textShadow: '0 0 15px var(--glow-primary)',
              transform: isDiscordHovered ? 'translateY(0)' : 'translateY(-5px)'
            }}
          >
            {discordCopied ? 'Copied!' : 'Discord'}
          </div>
          
          <div 
            className="text-xs font-mono flex items-center justify-center gap-1 transition-all duration-500"
            style={{ 
              color: '#5865F2',
              textShadow: '0 0 10px #5865F2',
              transform: isDiscordHovered ? 'scale(1)' : 'scale(0.9)'
            }}
          >
            ronioza
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}