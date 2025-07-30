import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface VideoBackgroundProps {
  videoUrl?: string;
  opacity?: number;
}

export default function VideoBackground({ 
  videoUrl = "https://www.youtube.com/watch?v=UFOBXZWfeBc", 
  opacity = 0.2 
}: VideoBackgroundProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Extract YouTube video ID
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);
  const embedUrl = videoId 
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`
    : null;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const iframe = videoRef.current;
      if (isMuted) {
        iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
      } else {
        iframe.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', '*');
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      {embedUrl ? (
        <iframe
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{ opacity }}
          src={embedUrl}
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        // Fallback background
        <div 
          className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity
          }}
        />
      )}
      
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
