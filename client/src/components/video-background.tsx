import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface VideoBackgroundProps {
  opacity?: number;
}

export default function VideoBackground({ 
  opacity = 0.2 
}: VideoBackgroundProps) {
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(true);
    }, 1000);

    // Auto-play the video with multiple fallback attempts
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Ensure video is properly configured for autoplay
      video.muted = true;
      video.playsInline = true;
      video.controls = false;
      video.disablePictureInPicture = true;
      
      // Wait for video to be ready
      const handleCanPlay = () => {
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video autoplay started successfully');
            })
            .catch(error => {
              console.log('Autoplay blocked by browser, setting up interaction listener:', error);
              
              // Fallback: Try to play on any user interaction
              const handleUserInteraction = () => {
                video.play()
                  .then(() => console.log('Video started after user interaction'))
                  .catch(console.log);
                
                // Remove listeners after first successful interaction
                document.removeEventListener('click', handleUserInteraction);
                document.removeEventListener('touchstart', handleUserInteraction);
                document.removeEventListener('keydown', handleUserInteraction);
                document.removeEventListener('scroll', handleUserInteraction);
              };
              
              // Listen for various interaction types
              document.addEventListener('click', handleUserInteraction, { passive: true });
              document.addEventListener('touchstart', handleUserInteraction, { passive: true });
              document.addEventListener('keydown', handleUserInteraction, { passive: true });
              document.addEventListener('scroll', handleUserInteraction, { passive: true });
            });
        }
      };
      
      // If video is already ready, try to play immediately
      if (video.readyState >= 3) {
        handleCanPlay();
      } else {
        video.addEventListener('canplay', handleCanPlay, { once: true });
      }
    }

    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
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
        muted={true} // Always start muted for autoplay
        playsInline
        preload="metadata"
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
