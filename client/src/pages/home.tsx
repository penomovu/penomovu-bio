import { useEffect } from "react";
import VideoBackground from "@/components/video-background";
import ProfileCard from "@/components/profile-card";

export default function Home() {
  useEffect(() => {
    // Handle responsive video background
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      document.documentElement.style.setProperty(
        '--video-opacity', 
        isMobile ? '0.4' : '0.6'
      );
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Video Background */}
      <VideoBackground 
        videoUrl="https://www.youtube.com/watch?v=UFOBXZWfeBc&list=RDUFOBXZWfeBc&start_radio=1&ab_channel=wavexisor"
        opacity={0.6}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <ProfileCard />
      </div>


    </div>
  );
}
