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
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 scanlines circuit-pattern holo-distortion"
      style={{
        backgroundColor: 'hsl(207, 100%, 3%)',
        opacity: isClicked ? 0 : 1,
        pointerEvents: isClicked ? 'none' : 'auto'
      }}
    >
      {/* Detroit: Become Human background with cyan orbs */}
      <div 
        className="absolute inset-0 cyber-grid"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(207, 100%, 8%) 0%, hsl(207, 90%, 4%) 40%, hsl(207, 100%, 2%) 100%)'
        }}
      >
        {/* Cyan floating orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--android-led) 0%, transparent 70%)',
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
        
        {/* Hexagonal decorations */}
        <div 
          className="absolute hexagon"
          style={{
            top: '20%',
            right: '20%',
            opacity: 0.1,
            transform: 'scale(1.5)',
            animation: 'geometric-float 15s infinite ease-in-out'
          }}
        />
        <div 
          className="absolute hexagon"
          style={{
            bottom: '25%',
            left: '15%',
            opacity: 0.1,
            transform: 'scale(1.2)',
            animation: 'geometric-float 20s infinite ease-in-out',
            animationDelay: '-5s'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Android LED Indicator */}
        <div className="flex justify-center mb-6">
          <div className="android-led" style={{ width: '16px', height: '16px' }} />
        </div>
        
        <div className="system-text text-xs mb-4" style={{ opacity: 0.7 }}>
          ANDROID INTERFACE v8.42
        </div>
        
        <h1 
          className="text-5xl sm:text-7xl font-light mb-3 chromatic-text cyber-glow holo-flicker"
          data-text="penomovu"
          style={{ 
            color: 'var(--primary)',
            letterSpacing: '0.05em'
          }}
        >
          penomovu
        </h1>
        
        <div className="system-text text-xs mb-2" style={{ opacity: 0.6 }}>
          MODEL RK800 | SERIAL# 313-248-317
        </div>
        
        <p 
          className="text-base sm:text-lg mb-12 font-mono"
          style={{ 
            color: 'var(--foreground)',
            textShadow: '0 0 20px var(--glow-secondary)',
            opacity: 0.9
          }}
        >
          C++, Python & Web Developer
        </p>
        
        <button
          onClick={handleClick}
          className="group relative px-10 py-5 text-xl font-medium transition-all duration-500 hover:scale-110 active:scale-95 diagnostic-panel hud-border system-text"
          style={{
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'rgba(0, 217, 255, 0.4)',
            color: 'var(--foreground)',
            boxShadow: '0 8px 32px hsla(0, 0%, 0%, 0.5), 0 0 40px var(--android-led)',
            fontSize: '16px',
            letterSpacing: '0.15em'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.8)';
            e.currentTarget.style.boxShadow = '0 12px 48px hsla(0, 0%, 0%, 0.6), 0 0 60px var(--android-led), inset 0 0 20px rgba(0, 217, 255, 0.2)';
            e.currentTarget.style.color = 'var(--primary)';
            e.currentTarget.style.background = 'rgba(0, 217, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
            e.currentTarget.style.boxShadow = '0 8px 32px hsla(0, 0%, 0%, 0.5), 0 0 40px var(--android-led)';
            e.currentTarget.style.color = 'var(--foreground)';
            e.currentTarget.style.background = '';
          }}
        >
          &gt; INITIALIZE INTERFACE
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500"
            style={{
              background: 'radial-gradient(circle, var(--android-led) 0%, transparent 70%)',
              transform: 'scale(0.8)',
              filter: 'blur(10px)'
            }}
          />
        </button>
        
        <p 
          className="system-text text-xs mt-6 opacity-60"
          style={{ 
            color: 'var(--muted-foreground)',
            textShadow: '0 0 10px var(--glow-secondary)',
            fontSize: '11px'
          }}
        >
          &gt; CLICK TO ENABLE AUDIO INTERFACE
        </p>
      </div>
    </div>
  );
}