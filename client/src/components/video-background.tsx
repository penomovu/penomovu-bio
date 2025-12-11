import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  opacity?: number;
  shouldPlay?: boolean;
}

export default function VideoBackground({ 
  opacity = 0.2,
  shouldPlay = false
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video muted only when shouldPlay is true
    if (videoRef.current && shouldPlay) {
      const video = videoRef.current;

      // Configure video for muted autoplay
      video.muted = true; // Always muted
      video.playsInline = true;
      video.controls = false;
      video.disablePictureInPicture = true;

      // Wait for video to be ready
      const handleCanPlay = () => {
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video autoplay started successfully (muted)');
            })
            .catch(error => {
              console.log('Autoplay failed:', error);
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
  }, [shouldPlay]);



  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        style={{ 
          opacity,
          filter: 'contrast(1.1) brightness(0.9) saturate(1.2) hue-rotate(5deg)'
        }}
        autoPlay
        loop
        muted={true} // Always muted
        playsInline
        preload="metadata"
        controls={false}
      >
        <source src="/videos/detroit-become-human.mp4" type="video/mp4" />
        {/* Fallback background if video fails to load */}
        <div 
          className="w-full h-full bg-gradient-to-br from-cyan-900 via-background to-blue-900"
        />
      </video>
      
      {/* Detroit: Become Human cyan overlay - much lighter */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at top, hsla(190, 100%, 20%, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, hsla(207, 100%, 3%, 0.15) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Animated cyan gradient overlay - very subtle */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: `
            linear-gradient(45deg, 
              hsla(190, 100%, 50%, 0.08) 0%, 
              transparent 25%, 
              hsla(190, 100%, 70%, 0.05) 50%, 
              transparent 75%, 
              hsla(190, 100%, 50%, 0.08) 100%
            )`,
          animation: 'gradient-shift 8s ease-in-out infinite'
        }}
      />
      
      {/* Scanlines - very subtle */}
      <div className="absolute inset-0 pointer-events-none scanlines" style={{ opacity: 0.3 }} />
    </div>
  );
}