import { useState, useEffect } from "react";

interface AndroidLedIndicatorProps {
  status?: 'stable' | 'unstable' | 'critical';
}

export default function AndroidLedIndicator({ status = 'stable' }: AndroidLedIndicatorProps) {
  const [currentStatus, setCurrentStatus] = useState(status);

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();
      if (rand > 0.95) {
        setCurrentStatus('unstable');
        setTimeout(() => setCurrentStatus('stable'), 500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    switch (currentStatus) {
      case 'stable':
        return 'var(--android-led)';
      case 'unstable':
        return 'var(--warning-amber)';
      case 'critical':
        return 'var(--destructive)';
      default:
        return 'var(--android-led)';
    }
  };

  return (
    <div 
      className="absolute top-4 right-4 flex items-center gap-2 z-20"
      style={{
        background: 'rgba(0, 30, 60, 0.8)',
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid rgba(0, 217, 255, 0.3)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div 
        className="android-led"
        style={{
          background: getColor(),
          boxShadow: `
            0 0 10px ${getColor()},
            0 0 20px ${getColor()},
            0 0 30px ${getColor()},
            inset 0 0 10px rgba(255, 255, 255, 0.5)
          `
        }}
      />
      <span 
        className="system-text text-xs"
        style={{ fontSize: '10px' }}
      >
        {currentStatus === 'stable' ? 'ANDROID ONLINE' : 
         currentStatus === 'unstable' ? 'PROCESSING...' : 
         'SYSTEM ERROR'}
      </span>
    </div>
  );
}
