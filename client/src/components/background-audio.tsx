import { useEffect, useRef } from "react";

interface BackgroundAudioProps {
  shouldPlay?: boolean;
}

export default function BackgroundAudio({ shouldPlay = false }: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && shouldPlay) {
      const audio = audioRef.current;
      audio.volume = 0.3; // Set to 30% volume
      
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
  }, [shouldPlay]);

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
