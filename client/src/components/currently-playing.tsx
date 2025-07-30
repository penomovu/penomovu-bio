import { Music } from "lucide-react";

export default function CurrentlyPlaying() {
  return (
    <div 
      className="fixed bottom-4 right-4 z-20 transition-all duration-300 bg-[#14111700]"
      style={{
        backgroundColor: 'hsla(270, 15%, 8%, 0.8)',
        backdropFilter: 'blur(8px)',
        border: '1px solid hsla(270, 10%, 15%, 0.5)',
        borderRadius: '0.75rem',
        padding: '0.75rem 1rem',
        fontSize: '0.75rem',
        color: 'hsl(270, 5%, 70%)',
        maxWidth: '200px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'hsla(270, 15%, 8%, 0.95)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'hsla(270, 15%, 8%, 0.8)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div className="flex items-center gap-2">
        <Music 
          className="h-3 w-3 opacity-70" 
          style={{ color: 'hsl(270, 60%, 55%)' }}
        />
        <div className="truncate">
          <div 
            className="font-medium truncate"
            style={{ color: 'hsl(270, 5%, 85%)' }}
          >
            cascade
          </div>
          <div className="opacity-70 truncate">
            plenka
          </div>
        </div>
      </div>
    </div>
  );
}