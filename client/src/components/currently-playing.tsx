import { Music, Activity } from "lucide-react";
import { useState } from "react";

export default function CurrentlyPlaying() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 left-6 z-20 transition-all duration-300 group diagnostic-panel hud-border"
      style={{
        padding: '0.75rem 0.875rem',
        fontSize: '0.875rem',
        color: 'var(--foreground)',
        maxWidth: '260px',
        border: '1px solid rgba(0, 217, 255, 0.25)',
        boxShadow: isHovered 
          ? '0 8px 32px hsla(0, 0%, 0%, 0.5), 0 0 30px rgba(0, 217, 255, 0.4), inset 0 0 15px rgba(0, 217, 255, 0.06)' 
          : '0 4px 20px hsla(0, 0%, 0%, 0.4), 0 0 15px rgba(0, 217, 255, 0.2)',
        transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* System Label */}
      <div className="system-text text-xs mb-2 flex items-center justify-between" style={{ opacity: 0.7 }}>
        <span>AUDIO PLAYBACK</span>
        <Activity 
          className="h-3 w-3 animate-pulse" 
          style={{ 
            color: 'var(--android-led)',
            filter: 'drop-shadow(0 0 6px var(--android-led))'
          }}
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Animated Audio Icon */}
        <div className="relative">
          <div className="android-led" style={{ width: '10px', height: '10px' }} />
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(circle, var(--android-led) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(6px)',
              transform: 'scale(2)'
            }}
          />
        </div>

        <div className="flex-1 truncate">
          <div 
            className="font-mono text-sm truncate transition-all duration-300"
            style={{ 
              color: 'var(--primary)',
              textShadow: isHovered ? '0 0 10px var(--android-led)' : 'none',
              letterSpacing: '0.02em'
            }}
          >
            HOSTAGE
          </div>
          <div 
            className="system-text truncate"
            style={{ 
              color: 'var(--muted-foreground)',
              fontSize: '10px',
              opacity: 0.8,
              marginTop: '2px'
            }}
          >
            NIMA FAKHRARA
          </div>
        </div>

        {/* Audio Visualizer Bars */}
        <div className="flex items-center gap-0.5 h-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 bg-cyan-400 rounded-full"
              style={{
                height: '100%',
                opacity: 0.6,
                animation: `pulse ${0.5 + i * 0.1}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
                boxShadow: '0 0 4px var(--android-led)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div 
        className="mt-2 h-0.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(0, 217, 255, 0.2)' }}
      >
        <div 
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, var(--android-led), var(--glow-secondary))',
            boxShadow: '0 0 10px var(--android-led)',
            width: '100%',
            animation: 'shimmer 2s linear infinite'
          }}
        />
      </div>
    </div>
  );
}