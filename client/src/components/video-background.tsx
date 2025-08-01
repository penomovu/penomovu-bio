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
        style={{ opacity }}
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
    </div>
  );
}