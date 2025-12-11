export default function HexagonalBackground() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-1" style={{ opacity: 0.06 }}>
        {/* Hexagonal grid pattern */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="hexagon absolute holo-flicker"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animation: `geometric-float ${15 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${-Math.random() * 10}s`,
              transform: `scale(${0.8 + Math.random() * 0.4})`,
              filter: 'drop-shadow(0 0 10px var(--android-led))',
            }}
          />
        ))}
        
        {/* Floating LED indicators */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`led-${i}`}
            className="absolute android-led pulse-ring"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              animation: `enhanced-led-pulse ${2 + Math.random()}s ease-in-out infinite`,
              animationDelay: `${-Math.random() * 2}s`,
              opacity: 0.4,
            }}
          />
        ))}
        
        {/* Cyber scan lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`scan-${i}`}
            className="absolute"
            style={{
              left: 0,
              right: 0,
              height: '1px',
              top: `${i * 20}%`,
              background: 'linear-gradient(90deg, transparent, var(--android-led), transparent)',
              boxShadow: '0 0 10px var(--android-led)',
              opacity: 0.2,
              animation: `scan-sweep-anim ${4 + i}s ease-in-out infinite`,
              animationDelay: `${-i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
