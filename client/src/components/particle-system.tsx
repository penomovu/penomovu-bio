import { useEffect, useRef } from "react";

export default function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const createParticles = () => {
      const particleCount = 25; // Reduced for performance but more impactful

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        
        // Random size variation
        const size = Math.random() * 2 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        container.appendChild(particle);
      }
    };

    createParticles();

    // Clean up function
    return () => {
      if (container) {
        const particles = container.querySelectorAll('.particle');
        particles.forEach(particle => particle.remove());
      }
    };
  }, []);

  return (
    <div className="particle-system" ref={containerRef} />
  );
}