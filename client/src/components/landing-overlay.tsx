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
          className="text-4xl sm:text-6xl font-light mb-4 animate-pulse"
          style={{ 
            color: 'hsl(270, 5%, 90%)',
            textShadow: '0 0 20px hsla(270, 60%, 55%, 0.3)'
          }}
        >
          penomovu
        </h1>
        
        <p 
          className="text-sm sm:text-base mb-8 opacity-70"
          style={{ color: 'hsl(270, 5%, 65%)' }}
        >
          C++ & Python Developer
        </p>
        
        <button
          onClick={handleClick}
          className="group relative px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: 'hsla(270, 60%, 55%, 0.1)',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'hsla(270, 60%, 55%, 0.3)',
            color: 'hsl(270, 5%, 90%)',
            boxShadow: '0 0 30px hsla(270, 60%, 55%, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'hsla(270, 60%, 55%, 0.2)';
            e.currentTarget.style.borderColor = 'hsla(270, 60%, 55%, 0.5)';
            e.currentTarget.style.boxShadow = '0 0 40px hsla(270, 60%, 55%, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'hsla(270, 60%, 55%, 0.1)';
            e.currentTarget.style.borderColor = 'hsla(270, 60%, 55%, 0.3)';
            e.currentTarget.style.boxShadow = '0 0 30px hsla(270, 60%, 55%, 0.2)';
          }}
        >
          Click Me
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, hsla(270, 60%, 55%, 0.3) 0%, transparent 70%)'
            }}
          />
        </button>
        
        <p 
          className="text-xs mt-4 opacity-50"
          style={{ color: 'hsl(270, 5%, 55%)' }}
        >
          Click to enable sound and enter
        </p>
      </div>
    </div>
  );
}