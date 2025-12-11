export default function HexagonalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-1" style={{ opacity: 0.05 }}>
      {/* Hexagonal grid pattern */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="hexagon absolute"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            animation: `geometric-float ${15 + Math.random() * 10}s infinite ease-in-out`,
            animationDelay: `${-Math.random() * 10}s`,
            transform: `scale(${0.8 + Math.random() * 0.4})`,
          }}
        />
      ))}
      
      {/* Floating LED indicators */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`led-${i}`}
          className="absolute android-led"
          style={{
            left: `${Math.random() * 95}%`,
            top: `${Math.random() * 95}%`,
            animation: `led-pulse ${2 + Math.random()}s ease-in-out infinite`,
            animationDelay: `${-Math.random() * 2}s`,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
}
