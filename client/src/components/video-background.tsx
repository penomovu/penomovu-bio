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
    // Auto-play the video with sound only when shouldPlay is true
    if (videoRef.current && shouldPlay) {
      const video = videoRef.current;

      // Configure video for autoplay with sound
      video.muted = false; // Sound on by default
      video.playsInline = true;
      video.controls = false;
      video.disablePictureInPicture = true;

      // Wait for video to be ready
      const handleCanPlay = () => {
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video autoplay with sound started successfully');
            })
            .catch(error => {
              console.log('Autoplay with sound blocked, trying muted autoplay:', error);

              // Fallback: Try muted autoplay first, then unmute on interaction
              video.muted = true;
              video.play()
                .then(() => {
                  console.log('Muted autoplay started, will unmute on user interaction');

                  // Unmute on first user interaction
                  const handleUserInteraction = () => {
                    video.muted = false;
                    console.log('Video unmuted after user interaction');

                    // Remove listeners after unmuting
                    document.removeEventListener('click', handleUserInteraction);
                    document.removeEventListener('touchstart', handleUserInteraction);
                    document.removeEventListener('keydown', handleUserInteraction);
                    document.removeEventListener('scroll', handleUserInteraction);
                  };

                  // Listen for various interaction types to unmute
                  document.addEventListener('click', handleUserInteraction, { passive: true });
                  document.addEventListener('touchstart', handleUserInteraction, { passive: true });
                  document.addEventListener('keydown', handleUserInteraction, { passive: true });
                  document.addEventListener('scroll', handleUserInteraction, { passive: true });
                })
                .catch(fallbackError => {
                  console.log('Even muted autoplay failed:', fallbackError);
                });
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
          filter: 'contrast(1.1) brightness(0.8) saturate(1.2)'
        }}
        autoPlay
        loop
        muted={false} // Sound on by default
        playsInline
        preload="metadata"
        controls={false}
      >
        <source src="/videos/plenka - cascade [escapism].mp4" type="video/mp4" />
        {/* Fallback background if video fails to load */}
        <div 
          className="w-full h-full bg-gradient-to-br from-purple-900 via-background to-purple-800"
        />
      </video>
      
      {/* Enhanced video overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at top, hsla(285, 40%, 8%, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, hsla(260, 25%, 2%, 0.4) 0%, transparent 50%),
            linear-gradient(180deg, transparent 0%, hsla(265, 30%, 4%, 0.2) 50%, transparent 100%)
          `
        }}
      />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            linear-gradient(45deg, 
              hsla(285, 85%, 65%, 0.1) 0%, 
              transparent 25%, 
              hsla(270, 60%, 70%, 0.1) 50%, 
              transparent 75%, 
              hsla(285, 85%, 65%, 0.1) 100%
            )`,
          animation: 'gradient-shift 8s ease-in-out infinite'
        }}
      />
    </div>
  );
}