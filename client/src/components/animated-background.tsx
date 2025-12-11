import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Base gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, hsla(285, 40%, 8%, 0.8) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, hsla(265, 30%, 6%, 0.8) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 40%, hsla(260, 25%, 4%, 0.9) 0%, transparent 50%),
            linear-gradient(135deg, hsl(265, 25%, 3%) 0%, hsl(285, 40%, 8%) 100%)
          `,
          zIndex: -2
        }}
      />
      
      {/* Mouse-following gradient */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
              hsla(285, 85%, 65%, 0.15) 0%, 
              transparent 40%
            )
          `,
          transition: 'background 0.3s ease-out',
          zIndex: -1
        }}
      />
      
      {/* Animated aurora effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              hsla(285, 85%, 65%, 0.03) 0deg,
              transparent 60deg,
              hsla(270, 60%, 70%, 0.03) 120deg,
              transparent 180deg,
              hsla(285, 85%, 65%, 0.03) 240deg,
              transparent 300deg,
              hsla(270, 60%, 70%, 0.03) 360deg
            )
          `,
          animation: 'rotate-aurora 30s linear infinite',
          zIndex: -1
        }}
      />
      
      {/* Floating light spots */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `
                radial-gradient(circle, 
                  hsla(${285 + Math.random() * 30}, ${70 + Math.random() * 20}%, ${60 + Math.random() * 20}%, 0.1) 0%, 
                  transparent 70%
                )
              `,
              animation: `
                float-spot ${15 + Math.random() * 10}s ease-in-out infinite,
                pulse-spot ${8 + Math.random() * 4}s ease-in-out infinite
              `,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </>
  );
}