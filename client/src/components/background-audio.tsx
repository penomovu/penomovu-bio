import { useEffect, useRef } from "react";

interface BackgroundAudioProps {
  shouldPlay?: boolean;
  onAudioReady?: (audio: HTMLAudioElement) => void;
}

export default function BackgroundAudio({ shouldPlay = false, onAudioReady }: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && shouldPlay) {
      const audio = audioRef.current;
      audio.volume = 0.3; // Set to 30% volume
      
      // Notify parent that audio is ready
      onAudioReady?.(audio);
      
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
  }, [shouldPlay, onAudioReady]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
    >
      <source src="/detroit-soundtrack.mp3" type="audio/mpeg" />
    </audio>
  );
}
