import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface DetroitAudioPlayerProps {
  shouldPlay?: boolean;
}

export default function DetroitAudioPlayer({ shouldPlay = false }: DetroitAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current && shouldPlay) {
      const audio = audioRef.current;
      audio.volume = volume;
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Detroit soundtrack started playing');
          })
          .catch(error => {
            console.log('Audio autoplay blocked:', error);
          });
      }
    }
  }, [shouldPlay, volume]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/detroit-soundtrack.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Audio Control Panel */}
      <div 
        className="fixed bottom-4 right-4 z-50 diagnostic-panel p-3 rounded"
        style={{
          backdropFilter: 'blur(10px)',
          minWidth: '200px'
        }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="hud-border p-2 rounded transition-all duration-300 hover:bg-cyan-500/10"
            style={{
              background: 'rgba(0, 217, 255, 0.05)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
            }}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" style={{ color: 'var(--primary)' }} />
            ) : (
              <Volume2 className="h-4 w-4" style={{ color: 'var(--primary)' }} />
            )}
          </button>
          
          <div className="flex-1">
            <div className="system-text text-xs mb-1">AUDIO SYSTEM</div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-1 rounded appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--android-led) 0%, var(--android-led) ${volume * 100}%, rgba(0, 217, 255, 0.2) ${volume * 100}%, rgba(0, 217, 255, 0.2) 100%)`,
              }}
            />
          </div>
        </div>
        
        <div 
          className="mt-2 text-xs font-mono"
          style={{
            color: 'var(--muted-foreground)',
            opacity: 0.7
          }}
        >
          Hostage - Connor Theme
        </div>
      </div>
    </>
  );
}
