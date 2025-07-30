import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface VideoBackgroundProps {
  opacity?: number;
}

export default function VideoBackground({ 
  opacity = 0.2 
}: VideoBackgroundProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(true);
    }, 1000);

    // Try to auto-play the video, but handle the error gracefully
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // If autoplay fails, we'll wait for user interaction
        console.log('Autoplay prevented, waiting for user interaction');
      });
    }

    // Add click listener to start video on first user interaction
    const handleFirstInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(console.log);
      }
      // Remove listener after first interaction
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
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
        muted
        playsInline
      >
        <source src="/videos/plenka - cascade [escapism].mp4" type="video/mp4" />
        {/* Fallback background if video fails to load */}
        <div 
          className="w-full h-full bg-gradient-to-br from-purple-900 via-background to-purple-800"
        />
      </video>
      
      {/* Video Controls */}
      {showControls && (
        <div className="absolute bottom-4 right-4 z-10">
          <Button
            variant="secondary"
            size="icon"
            onClick={toggleMute}
            className="bg-background/30 hover:bg-background/50 backdrop-blur-sm border border-border/30"
          >
            {isMuted ? <VolumeX className="h-4 w-4 text-muted-foreground" /> : <Volume2 className="h-4 w-4 text-primary" />}
          </Button>
        </div>
      )}


    </div>
  );
}
