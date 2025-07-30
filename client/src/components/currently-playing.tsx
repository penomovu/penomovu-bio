export default function CurrentlyPlaying() {
  return (
    <div 
      className="fixed bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-md transition-all duration-300"
      style={{
        backgroundColor: 'hsla(270, 15%, 8%, 0.8)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        color: 'hsl(270, 5%, 85%)'
      }}
    >
      {/* Animated Wave Icon */}
      <div className="flex items-center gap-px">
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>
      
      {/* Song Info */}
      <div className="text-xs">
        <div style={{ color: 'hsl(270, 5%, 85%)' }}>Currently Playing</div>
        <div 
          className="font-medium"
          style={{ color: 'hsl(270, 60%, 60%)' }}
        >
          plenka - cascade
        </div>
      </div>
    </div>
  );
}