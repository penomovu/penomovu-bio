import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, MessageCircle, Copy, Activity, Cpu, Database } from "lucide-react";
import SocialLinks from "./social-links";
import EnhancedProfileImage from "./enhanced-profile-image";
import AndroidLedIndicator from "./android-led-indicator";
import { useState, useEffect } from "react";





export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showDiscordTooltip, setShowDiscordTooltip] = useState(false);
  const [discordCopied, setDiscordCopied] = useState(false);
  const [systemStability, setSystemStability] = useState(95);
  const [cpuLoad, setCpuLoad] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStability(prev => Math.min(100, Math.max(80, prev + (Math.random() - 0.5) * 5)));
      setCpuLoad(prev => Math.min(100, Math.max(10, prev + (Math.random() - 0.5) * 10)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDiscordCopy = () => {
    navigator.clipboard.writeText('ronioza');
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 2000);
  };

  return (
    <div className="max-w-md w-full mx-auto px-4 animate-fade-in">
      {/* Android Diagnostic Panel */}
      <Card 
        className="diagnostic-panel animate-slide-up transition-all duration-500 relative overflow-hidden hud-border digital-noise" 
        style={{ 
          animationDelay: "0.2s",
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '2px solid rgba(0, 217, 255, 0.3)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Android LED Indicator */}
        <AndroidLedIndicator status="stable" />
        
        {/* Holographic overlay */}
        <div className="absolute inset-0 holographic pointer-events-none" />
        
        {/* Data stream effect */}
        <div className="data-stream" />
        <CardContent className="p-6 sm:p-10 relative z-10">
          {/* System Header */}
          <div className="mb-4 pb-3 border-b border-cyan-500/30">
            <div className="system-text text-xs mb-1" style={{ opacity: 0.7 }}>
              ANDROID IDENTIFICATION
            </div>
            <div className="flex items-center justify-between">
              <span className="system-text text-sm">SERIAL#</span>
              <span className="font-mono text-xs text-cyan-400">RK800-#313-248-317</span>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center mb-6 sm:mb-8 relative">
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
          <div className="text-center mb-6">
            <div className="system-text text-xs mb-2" style={{ opacity: 0.6 }}>
              DESIGNATION
            </div>
            <h1 
              className="text-3xl sm:text-4xl font-light mb-3 transition-all duration-500 relative"
              data-text="penomovu"
              style={{ 
                color: 'var(--primary)',
                textShadow: '0 0 20px var(--glow-primary), 0 2px 4px hsla(0, 0%, 0%, 0.5)',
                letterSpacing: '0.05em',
                fontWeight: 300
              }}
            >
              penomovu
            </h1>
            
            <div className="system-text text-xs mb-2" style={{ opacity: 0.6 }}>
              PRIMARY FUNCTION
            </div>
            <p 
              className="text-sm sm:text-base mb-3 font-mono"
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
          <div className="mb-6 p-3 rounded" style={{ 
            background: 'rgba(0, 217, 255, 0.05)',
            border: '1px solid rgba(0, 217, 255, 0.2)'
          }}>
            <div className="system-text text-xs mb-3">SYSTEM DIAGNOSTICS</div>
            
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
                  <span className="font-mono text-xs text-cyan-400">OPTIMAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-4">
            <div className="system-text text-xs mb-3">NETWORK INTERFACES</div>
            <SocialLinks />
          </div>

          </CardContent>
      </Card>
      {/* Footer - Detroit Style */}
      <div className="text-center mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
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
          &copy; 2038 CYBERLIFE
        </div>
      </div>
    </div>
  );
}
