import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, MessageCircle, Copy, Activity, Cpu, Database } from "lucide-react";
import SocialLinks from "./social-links";
import EnhancedProfileImage from "./enhanced-profile-image";
import { useState, useEffect } from "react";





interface ProfileCardProps {
  audioIntensity?: number;
  frequencyData?: { bass: number; mid: number; treble: number };
}

export default function ProfileCard({ audioIntensity = 0, frequencyData }: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showDiscordTooltip, setShowDiscordTooltip] = useState(false);
  const [discordCopied, setDiscordCopied] = useState(false);
  const [systemStability, setSystemStability] = useState(95);
  const [cpuLoad, setCpuLoad] = useState(23);
  const [memoryStatus, setMemoryStatus] = useState("OPTIMAL");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Fetch real server stats
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/server-stats');
        if (response.ok) {
          const data = await response.json();
          setSystemStability(data.stability);
          setCpuLoad(data.cpuLoad);
          setMemoryStatus(data.memoryStatus);
        }
      } catch (error) {
        console.error('Failed to fetch server stats:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDiscordCopy = () => {
    navigator.clipboard.writeText('ronioza');
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 2000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  // Calculate 3D transform based on mouse position
  const get3DTransform = () => {
    if (!isHovered) return 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
    
    const { x, y } = mousePosition;
    const rotateY = (x - 0.5) * 15; // -7.5 to 7.5 degrees
    const rotateX = (y - 0.5) * -15; // -7.5 to 7.5 degrees
    const scale = 1.05 + (audioIntensity * 0.03); // Pulse with music
    
    return `translateY(-12px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(1000px)`;
  };

  // Calculate glow intensity based on audio
  const getGlowIntensity = () => {
    const baseGlow = 'rgba(0, 217, 255, 0.3)';
    const intensityGlow = `rgba(0, 217, 255, ${0.3 + (frequencyData?.bass || 0) * 0.4})`;
    return isHovered ? intensityGlow : baseGlow;
  };

  return (
    <div 
      className="max-w-md w-full mx-auto px-4 animate-fade-in"
      style={{ perspective: '1000px' }}
    >
      {/* Android Diagnostic Panel */}
      <Card 
        className="diagnostic-panel animate-slide-up transition-all duration-300 relative overflow-hidden hud-border digital-noise scan-sweep holo-distortion" 
        style={{ 
          animationDelay: "0.2s",
          transform: get3DTransform(),
          transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out, border 0.3s ease-out',
          border: `2px solid ${getGlowIntensity()}`,
          boxShadow: isHovered 
            ? `0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px ${getGlowIntensity()}, inset 0 0 30px rgba(0, 217, 255, 0.1)`
            : '0 10px 30px rgba(0, 0, 0, 0.3)',
          transformStyle: 'preserve-3d',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Holographic overlay */}
        <div className="absolute inset-0 holographic holo-flicker pointer-events-none" />
        
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid pointer-events-none" style={{ opacity: 0.1 }} />
        
        {/* Data stream effect */}
        <div className="data-stream" />
        <CardContent className="p-4 sm:p-6 relative z-10">
          {/* System Header */}
          <div className="mb-3 pb-2 border-b border-cyan-500/30">
            <div className="flex items-center justify-between">
              <span className="system-text text-xs">SERIAL#</span>
              <span className="font-mono text-xs text-cyan-400">RK800-#313-248-317</span>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center mb-4 sm:mb-5 relative">
            <div className="absolute -inset-4 border border-cyan-500/20 rounded-lg" />
            <EnhancedProfileImage
              src="/profile-picture.png"
              alt="penomovu profile picture"
              isHovered={isImageHovered}
              onHover={setIsImageHovered}
              isDiscordHovered={showDiscordTooltip}
              onDiscordHover={setShowDiscordTooltip}
              onDiscordClick={handleDiscordCopy}
              discordCopied={discordCopied}
            />
          </div>

          {/* Name and Title - Detroit Style */}
          <div className="text-center mb-4">
            <div className="system-text text-xs mb-1" style={{ opacity: 0.6 }}>
              DESIGNATION
            </div>
            <div className="relative inline-block">
              {/* Background glow that reacts to music */}
              <div 
                className="absolute inset-0 blur-2xl"
                style={{
                  background: `radial-gradient(circle, var(--android-led) 0%, transparent 70%)`,
                  opacity: 0.3 + (frequencyData?.mid || 0) * 0.5,
                  transform: `scale(${1 + (audioIntensity * 0.2)})`,
                  transition: 'all 0.2s ease-out'
                }}
              />
              <h1 
                className="text-3xl sm:text-4xl font-light mb-2 transition-all duration-500 relative chromatic-text"
                data-text="penomovu"
                style={{ 
                  color: 'var(--primary)',
                  letterSpacing: '0.08em',
                  fontWeight: 200,
                  textShadow: `
                    0 0 10px var(--android-led),
                    0 0 20px var(--android-led),
                    0 0 30px var(--android-led),
                    0 0 ${40 + (frequencyData?.treble || 0) * 60}px var(--android-led),
                    0 2px 4px rgba(0, 0, 0, 0.5)
                  `,
                  transform: `scale(${1 + (audioIntensity * 0.05)})`,
                  transition: 'all 0.2s ease-out',
                  WebkitTextStroke: '0.5px rgba(0, 217, 255, 0.3)',
                }}
              >
                penomovu
              </h1>
              {/* Animated underline */}
              <div 
                className="h-0.5 mx-auto mt-1 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, var(--android-led), transparent)',
                  boxShadow: `0 0 10px var(--android-led)`,
                  width: `${60 + (frequencyData?.bass || 0) * 40}%`,
                  transition: 'width 0.2s ease-out'
                }}
              />
            </div>
            
            <div className="system-text text-xs mb-1" style={{ opacity: 0.6 }}>
              PRIMARY FUNCTION
            </div>
            <p 
              className="text-xs sm:text-sm mb-2 font-mono"
              style={{ 
                color: 'var(--foreground)',
                textShadow: '0 0 10px var(--glow-secondary)'
              }}
            >
              C++, Python & Web Developer
            </p>
            
            <div className="flex items-center justify-center gap-2 text-xs font-mono"
              style={{
                color: 'var(--muted-foreground)',
                opacity: 0.8
              }}
            >
              <MapPin className="h-3 w-3" style={{ color: 'var(--android-led)' }} />
              <span className="system-text" style={{ fontSize: '10px' }}>LOCATION:</span>
              <span>France</span>
            </div>
          </div>

          {/* System Diagnostics */}
          <div className="mb-4 p-3 rounded" style={{ 
            background: 'rgba(0, 217, 255, 0.05)',
            border: '1px solid rgba(0, 217, 255, 0.2)'
          }}>
            <div className="system-text text-xs mb-2">SYSTEM DIAGNOSTICS</div>
            
            <div className="space-y-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center gap-2 text-xs">
                    <Activity className="h-3 w-3" style={{ color: 'var(--android-led)' }} />
                    <span className="font-mono">STABILITY</span>
                  </span>
                  <span className="font-mono text-xs text-cyan-400">{systemStability.toFixed(0)}%</span>
                </div>
                <div className="probability-bar" style={{ width: '100%' }}>
                  <div style={{ 
                    width: `${systemStability}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--android-led), var(--glow-secondary))',
                    boxShadow: '0 0 10px var(--android-led)',
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center gap-2 text-xs">
                    <Cpu className="h-3 w-3" style={{ color: 'var(--android-led)' }} />
                    <span className="font-mono">CPU LOAD</span>
                  </span>
                  <span className="font-mono text-xs text-cyan-400">{cpuLoad.toFixed(0)}%</span>
                </div>
                <div className="probability-bar" style={{ width: '100%' }}>
                  <div style={{ 
                    width: `${cpuLoad}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--android-led), var(--glow-secondary))',
                    boxShadow: '0 0 10px var(--android-led)',
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs">
                    <Database className="h-3 w-3" style={{ color: 'var(--android-led)' }} />
                    <span className="font-mono">MEMORY STATUS</span>
                  </span>
                  <span className="font-mono text-xs text-cyan-400">{memoryStatus}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-2">
            <div className="system-text text-xs mb-2">NETWORK INTERFACES</div>
            <SocialLinks />
          </div>

          </CardContent>
      </Card>
      {/* Footer - Detroit Style */}
      <div className="text-center mt-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <div 
          className="system-text flex items-center justify-center gap-2 transition-all duration-300"
          style={{ 
            color: 'var(--muted-foreground)',
            opacity: 0.7,
            fontSize: '10px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.textShadow = '0 0 15px var(--glow-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
            e.currentTarget.style.textShadow = 'none';
          }}
        >
          <span>DESIGNED BY</span>
          <Heart 
            className="h-3 w-3 transition-all duration-300 android-led" 
            style={{ 
              color: 'var(--android-led)',
              filter: 'drop-shadow(0 0 8px var(--android-led))',
              animation: 'led-pulse 2s ease-in-out infinite'
            }}
          />
          <span>PENOMOVU</span>
        </div>
        <div 
          className="font-mono text-xs mt-2"
          style={{ 
            color: 'var(--muted-foreground)',
            opacity: 0.5
          }}
        >
          &copy; 2038
        </div>
      </div>
    </div>
  );
}
