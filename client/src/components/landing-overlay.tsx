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
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
      style={{
        backgroundColor: 'hsl(270, 20%, 3%)',
        opacity: isClicked ? 0 : 1,
        pointerEvents: isClicked ? 'none' : 'auto'
      }}
    >
      {/* Enhanced background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, hsla(270, 75%, 65%, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsla(285, 85%, 70%, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, hsl(270, 25%, 6%) 0%, hsl(270, 20%, 3%) 50%, hsl(270, 30%, 8%) 100%)
          `
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse-slow"
              style={{
                backgroundColor: 'hsl(270, 75%, 65%)',
                boxShadow: '0 0 10px hsla(270, 75%, 65%, 0.4)',
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 
          className="text-5xl sm:text-7xl font-light mb-6 animate-glow"
          style={{ 
            color: 'hsl(270, 8%, 95%)',
            textShadow: `
              0 0 30px hsla(270, 75%, 65%, 0.4),
              0 0 60px hsla(285, 85%, 70%, 0.2),
              0 0 100px hsla(270, 75%, 65%, 0.1)
            `,
            background: 'linear-gradient(135deg, hsl(270, 8%, 95%), hsl(270, 75%, 65%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          penomovu
        </h1>
        
        <p 
          className="text-base sm:text-lg mb-10 transition-all duration-300"
          style={{ 
            color: 'hsl(270, 8%, 75%)',
            textShadow: '0 0 20px hsla(270, 75%, 65%, 0.2)'
          }}
        >
          C++, Python & Web Developer
        </p>
        
        <button
          onClick={handleClick}
          className="group relative px-10 py-5 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          style={{
            backgroundColor: 'hsla(270, 75%, 65%, 0.15)',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'hsla(270, 75%, 65%, 0.4)',
            color: 'hsl(270, 8%, 95%)',
            boxShadow: `
              0 0 40px hsla(270, 75%, 65%, 0.3),
              inset 0 1px 0 hsla(270, 75%, 65%, 0.2)
            `,
            backdropFilter: 'blur(8px) saturate(180%)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'hsla(270, 75%, 65%, 0.25)';
            e.currentTarget.style.borderColor = 'hsla(270, 75%, 65%, 0.6)';
            e.currentTarget.style.boxShadow = `
              0 0 60px hsla(270, 75%, 65%, 0.5),
              inset 0 1px 0 hsla(270, 75%, 65%, 0.3)
            `;
            e.currentTarget.style.textShadow = '0 0 20px hsla(270, 75%, 65%, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'hsla(270, 75%, 65%, 0.15)';
            e.currentTarget.style.borderColor = 'hsla(270, 75%, 65%, 0.4)';
            e.currentTarget.style.boxShadow = `
              0 0 40px hsla(270, 75%, 65%, 0.3),
              inset 0 1px 0 hsla(270, 75%, 65%, 0.2)
            `;
            e.currentTarget.style.textShadow = 'none';
          }}
        >
          Enter Experience
          
          {/* Animated gradient overlay */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, hsla(270, 75%, 65%, 0.2), hsla(285, 85%, 70%, 0.1))'
            }}
          />
          
          {/* Shine effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, hsla(270, 75%, 65%, 0.3) 50%, transparent 70%)',
              transform: 'translateX(-100%)',
              animation: 'shimmer 2s ease-out infinite'
            }}
          />
        </button>
        
        <p 
          className="text-sm mt-6 opacity-60 transition-opacity duration-300 hover:opacity-80"
          style={{ 
            color: 'hsl(270, 8%, 70%)',
            textShadow: '0 0 10px hsla(270, 75%, 65%, 0.1)'
          }}
        >
          Click to enable audio & begin
        </p>
      </div>
    </div>
  );
}