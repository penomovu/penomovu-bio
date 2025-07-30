import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { VolumeX, Volume2 } from "lucide-react";

interface VideoBackgroundProps {
  opacity?: number;
}

export default function VideoBackground({ 
  opacity = 0.2 
}: VideoBackgroundProps) {
  const [isMuted, setIsMuted] = useState(true); // Start muted by default
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video (muted by default for better UX)
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(console.log);
    }
  }, []);

  const handleToggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        style={{ opacity }}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src="/videos/plenka - cascade [escapism].mp4" type="video/mp4" />
        {/* Fallback background if video fails to load */}
        <div 
          className="w-full h-full bg-gradient-to-br from-purple-900 via-background to-purple-800"
        />
      </video>
      
      {/* New Mute Button */}
      <div 
        className="absolute bottom-6 right-6 z-10 transition-all duration-300 hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          variant="outline"
          size="lg"
          onClick={handleToggleMute}
          className={`
            relative overflow-hidden backdrop-blur-md transition-all duration-300
            ${isMuted 
              ? 'bg-red-500/20 hover:bg-red-500/30 border-red-400/40 text-red-400' 
              : 'bg-purple-500/20 hover:bg-purple-500/30 border-purple-400/40 text-purple-400'
            }
            ${isHovered ? 'shadow-lg shadow-purple-500/25' : ''}
          `}
        >
          <div className="flex items-center gap-2">
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
            <span className="text-sm font-medium">
              {isMuted ? 'Unmute' : 'Mute'}
            </span>
          </div>
        </Button>
      </div>


    </div>
  );
}
