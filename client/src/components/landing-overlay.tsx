import { useState } from "react";

interface LandingOverlayProps {
  onEnter: () => void;
}

export default function LandingOverlay({ onEnter }: LandingOverlayProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onEnter();
    }, 300);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
      style={{
        backgroundColor: 'hsl(270, 15%, 5%)',
        opacity: isClicked ? 0 : 1,
        pointerEvents: isClicked ? 'none' : 'auto'
      }}
    >
      {/* Enhanced background with floating orbs */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(285, 40%, 8%) 0%, hsl(265, 30%, 4%) 40%, hsl(260, 25%, 2%) 100%)'
        }}
      >
        {/* Floating orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            filter: 'blur(40px)',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--glow-secondary) 0%, transparent 70%)',
            bottom: '15%',
            left: '10%',
            filter: 'blur(30px)',
            animationDuration: '3s',
            animationDelay: '1s'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 
          className="text-5xl sm:text-7xl font-light mb-6 animate-pulse glow-text"
          style={{ 
            color: 'var(--foreground)',
            textShadow: '0 0 40px var(--glow-primary), 0 0 80px var(--glow-secondary), 0 4px 8px hsla(0, 0%, 0%, 0.4)',
            background: 'linear-gradient(45deg, var(--primary), var(--glow-secondary), var(--primary))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animationDuration: '3s'
          }}
        >
          penomovu
        </h1>
        
        <p 
          className="text-base sm:text-lg mb-12 font-medium"
          style={{ 
            color: 'var(--muted-foreground)',
            textShadow: '0 0 20px var(--glow-secondary)'
          }}
        >
          C++, Python & Web Developer
        </p>
        
        <button
          onClick={handleClick}
          className="group relative px-10 py-5 text-xl font-medium rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
          style={{
            background: 'var(--glass-bg)',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'var(--glass-border)',
            color: 'var(--foreground)',
            backdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 8px 32px hsla(0, 0%, 0%, 0.3), 0 0 40px var(--glow-primary)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--glass-hover-bg)';
            e.currentTarget.style.borderColor = 'var(--glass-hover-border)';
            e.currentTarget.style.boxShadow = '0 12px 48px hsla(0, 0%, 0%, 0.4), 0 0 60px var(--glow-primary)';
            e.currentTarget.style.color = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--glass-bg)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.boxShadow = '0 8px 32px hsla(0, 0%, 0%, 0.3), 0 0 40px var(--glow-primary)';
            e.currentTarget.style.color = 'var(--foreground)';
          }}
        >
          Enter Experience
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500"
            style={{
              background: 'radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)',
              transform: 'scale(0.8)',
              filter: 'blur(10px)'
            }}
          />
        </button>
        
        <p 
          className="text-sm mt-6 opacity-60 font-light"
          style={{ 
            color: 'var(--muted-foreground)',
            textShadow: '0 0 10px var(--glow-secondary)'
          }}
        >
          Click to enable sound and enter
        </p>
      </div>
    </div>
  );
}