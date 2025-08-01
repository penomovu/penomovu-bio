import { Music } from "lucide-react";

export default function CurrentlyPlaying() {
  return (
    <div 
      className="fixed bottom-6 right-6 z-20 transition-all duration-500 group"
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid var(--glass-border)',
        borderRadius: '1rem',
        padding: '1rem 1.25rem',
        fontSize: '0.875rem',
        color: 'var(--foreground)',
        maxWidth: '240px',
        boxShadow: '0 8px 32px hsla(0, 0%, 0%, 0.3), 0 0 20px var(--glow-secondary), inset 0 1px 0 var(--glass-border)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--glass-hover-bg)';
        e.currentTarget.style.borderColor = 'var(--glass-hover-border)';
        e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 12px 48px hsla(0, 0%, 0%, 0.4), 0 0 30px var(--glow-primary), inset 0 1px 0 var(--glass-hover-border)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--glass-bg)';
        e.currentTarget.style.borderColor = 'var(--glass-border)';
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px hsla(0, 0%, 0%, 0.3), 0 0 20px var(--glow-secondary), inset 0 1px 0 var(--glass-border)';
      }}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Music 
            className="h-4 w-4 transition-all duration-300" 
            style={{ 
              color: 'var(--primary)',
              filter: 'drop-shadow(0 0 8px var(--glow-primary))'
            }}
          />
          <div 
            className="absolute inset-0 animate-pulse opacity-30"
            style={{
              background: 'radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(4px)'
            }}
          />
        </div>
        <div className="truncate">
          <div 
            className="font-semibold truncate transition-all duration-300"
            style={{ 
              color: 'var(--foreground)',
              textShadow: 'group-hover:0 0 10px var(--glow-secondary)'
            }}
          >
            cascade
          </div>
          <div 
            className="opacity-70 truncate text-sm font-medium"
            style={{ color: 'var(--muted-foreground)' }}
          >
            plenka
          </div>
        </div>
      </div>
    </div>
  );
}