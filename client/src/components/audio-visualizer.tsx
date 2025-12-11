import { useEffect, useRef, useState } from "react";

interface AudioVisualizerProps {
  audioElement?: HTMLAudioElement | null;
  onBeatDetected?: (intensity: number) => void;
  onFrequencyData?: (data: { bass: number; mid: number; treble: number }) => void;
}

export default function AudioVisualizer({ audioElement, onBeatDetected, onFrequencyData }: AudioVisualizerProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastBeatTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!audioElement) return;

    try {
      // Create audio context and analyzer
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyzer = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audioElement);
      
      analyzer.fftSize = 512;
      analyzer.smoothingTimeConstant = 0.8;
      
      source.connect(analyzer);
      analyzer.connect(audioContext.destination);
      
      analyzerRef.current = analyzer;
      dataArrayRef.current = new Uint8Array(analyzer.frequencyBinCount);
      
      setIsAnalyzing(true);

      // Start analyzing
      const analyze = () => {
        if (!analyzerRef.current || !dataArrayRef.current) return;
        
        analyzerRef.current.getByteFrequencyData(dataArrayRef.current);
        
        const dataArray = dataArrayRef.current;
        const bufferLength = dataArray.length;
        
        // Calculate frequency bands
        const bassEnd = Math.floor(bufferLength * 0.15);
        const midEnd = Math.floor(bufferLength * 0.5);
        
        let bass = 0;
        let mid = 0;
        let treble = 0;
        
        for (let i = 0; i < bassEnd; i++) {
          bass += dataArray[i];
        }
        bass /= bassEnd;
        
        for (let i = bassEnd; i < midEnd; i++) {
          mid += dataArray[i];
        }
        mid /= (midEnd - bassEnd);
        
        for (let i = midEnd; i < bufferLength; i++) {
          treble += dataArray[i];
        }
        treble /= (bufferLength - midEnd);
        
        // Normalize values (0-1)
        const normalizedBass = bass / 255;
        const normalizedMid = mid / 255;
        const normalizedTreble = treble / 255;
        
        // Beat detection (simple threshold-based)
        const now = Date.now();
        const intensity = (normalizedBass * 0.5 + normalizedMid * 0.3 + normalizedTreble * 0.2);
        
        if (intensity > 0.6 && now - lastBeatTimeRef.current > 200) {
          onBeatDetected?.(intensity);
          lastBeatTimeRef.current = now;
        }
        
        // Send frequency data
        onFrequencyData?.({
          bass: normalizedBass,
          mid: normalizedMid,
          treble: normalizedTreble
        });
        
        animationFrameRef.current = requestAnimationFrame(analyze);
      };
      
      analyze();
      
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        if (audioContext.state !== 'closed') {
          audioContext.close();
        }
      };
    } catch (error) {
      console.error('Error setting up audio analyzer:', error);
    }
  }, [audioElement, onBeatDetected, onFrequencyData]);

  return null; // This component doesn't render anything
}
