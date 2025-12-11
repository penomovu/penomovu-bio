export default function GeometricBackground() {
  return (
    <div className="geometric-bg">
      <div className="geometric-shape" style={{ borderRadius: '10% 50% 30% 70%' }} />
      <div className="geometric-shape" style={{ borderRadius: '60% 40% 30% 70%' }} />
      <div className="geometric-shape" style={{ borderRadius: '50% 20% 80% 30%' }} />
      <div className="geometric-shape" style={{ 
        width: '40px', 
        height: '40px', 
        top: '10%', 
        left: '60%',
        animationDelay: '-8s'
      }} />
      <div className="geometric-shape" style={{ 
        width: '120px', 
        height: '120px', 
        bottom: '20%', 
        right: '25%',
        animationDelay: '-12s',
        borderRadius: '20%'
      }} />
    </div>
  );
}