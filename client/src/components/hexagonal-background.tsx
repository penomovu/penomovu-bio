export default function HexagonalBackground() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-1" style={{ opacity: 0.04 }}>
        {/* Hexagonal grid pattern - reduced */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="hexagon absolute holo-flicker"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animation: `geometric-float ${20 + Math.random() * 15}s infinite ease-in-out`,
              animationDelay: `${-Math.random() * 10}s`,
              transform: `scale(${0.7 + Math.random() * 0.3})`,
              filter: 'drop-shadow(0 0 8px var(--android-led))',
            }}
          />
        ))}
        
        {/* Floating LED indicators - reduced and more subtle */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`led-${i}`}
            className="absolute android-led"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              animation: `led-pulse ${3 + Math.random()}s ease-in-out infinite`,
              animationDelay: `${-Math.random() * 2}s`,
              opacity: 0.25,
              width: '8px',
              height: '8px',
            }}
          />
        ))}
        
        {/* Cyber scan lines - more subtle */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`scan-${i}`}
            className="absolute"
            style={{
              left: 0,
              right: 0,
              height: '1px',
              top: `${i * 30 + 15}%`,
              background: 'linear-gradient(90deg, transparent, var(--android-led), transparent)',
              boxShadow: '0 0 8px var(--android-led)',
              opacity: 0.15,
              animation: `scan-sweep-anim ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${-i * 1}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
