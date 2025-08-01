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
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(270, 30%, 8%) 0%, hsl(270, 15%, 5%) 50%, hsl(270, 25%, 10%) 100%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 
          className="text-4xl sm:text-6xl font-light mb-4 animate-pulse text-gradient"
          style={{ 
            textShadow: '0 0 30px hsla(270, 85%, 60%, 0.4)'
          }}
        >
          penomovu
        </h1>
        
        <p 
          className="text-sm sm:text-base mb-2 opacity-70"
          style={{ color: 'hsl(270, 8%, 88%)' }}
        >
          Senior Software Developer
        </p>
        
        <p 
          className="text-xs sm:text-sm mb-8 opacity-60"
          style={{ color: 'hsl(270, 6%, 65%)' }}
        >
          Specializing in C++, Python & Full-Stack Development
        </p>
        
        <button
          onClick={handleClick}
          className="group relative px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 gradient-primary text-primary-foreground"
          style={{
            boxShadow: '0 0 30px hsla(270, 85%, 60%, 0.3)'
          }}
        >
          Enter Experience
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, hsla(270, 85%, 60%, 0.4) 0%, transparent 70%)'
            }}
          />
        </button>
        
        <p 
          className="text-xs mt-6 opacity-50"
          style={{ color: 'hsl(270, 6%, 65%)' }}
        >
          Click to enable audio and explore my portfolio
        </p>
      </div>
    </div>
  );
}