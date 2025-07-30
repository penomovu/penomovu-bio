import { useEffect, useState } from "react";
import VideoBackground from "@/components/video-background";
import ProfileCard from "@/components/profile-card";
import LandingOverlay from "@/components/landing-overlay";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

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
    <>
      {/* Embedded CSS for reliable loading */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body, html {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background-color: hsl(270, 15%, 5%);
          color: hsl(270, 5%, 90%);
          min-height: 100vh;
          overflow-x: hidden;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .transition-colors {
          transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        }
        
        .transition-opacity {
          transition: opacity 0.3s ease;
        }
        
        .group:hover .group-hover\\:opacity-40 {
          opacity: 0.4;
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        .hover\\:scale-\\[1\\.02\\]:hover {
          transform: scale(1.02);
        }
        
        .active\\:scale-95:active {
          transform: scale(0.95);
        }
        
        /* Utility classes */
        .fixed { position: fixed; }
        .absolute { position: absolute; }
        .relative { position: relative; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .z-10 { z-index: 10; }
        .z-50 { z-index: 50; }
        .flex { display: flex; }
        .grid { display: grid; }
        .min-h-screen { min-height: 100vh; }
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .max-w-md { max-width: 28rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-start { justify-content: flex-start; }
        .text-center { text-align: center; }
        .overflow-x-hidden { overflow-x: hidden; }
        .rounded-full { border-radius: 9999px; }
        .rounded-md { border-radius: 0.375rem; }
        .border-2 { border-width: 2px; }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
        .font-light { font-weight: 300; }
        .font-medium { font-weight: 500; }
        .font-normal { font-weight: 400; }
        .opacity-0 { opacity: 0; }
        .opacity-50 { opacity: 0.5; }
        .opacity-70 { opacity: 0.7; }
        .object-cover { object-fit: cover; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .ml-auto { margin-left: auto; }
        
        /* Spacing */
        .p-2\.5 { padding: 0.625rem; }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .gap-1 { gap: 0.25rem; }
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        
        /* Text sizes */
        .text-xs { font-size: 0.75rem; }
        .text-sm { font-size: 0.875rem; }
        .text-base { font-size: 1rem; }
        .text-lg { font-size: 1.125rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-6xl { font-size: 3.75rem; }
        
        /* Icon sizes */
        .h-3 { height: 0.75rem; }
        .w-3 { width: 0.75rem; }
        .h-32 { height: 8rem; }
        .w-32 { width: 8rem; }
        .h-36 { height: 9rem; }
        .w-36 { width: 9rem; }
        
        /* Responsive styles */
        @media (max-width: 768px) {
          .sm\\:text-4xl { font-size: 2.25rem; }
          .sm\\:text-6xl { font-size: 3rem; }
          .sm\\:p-8 { padding: 2rem; }
          .sm\\:p-10 { padding: 2.5rem; }
          .sm\\:gap-3 { gap: 0.75rem; }
          .sm\\:mb-8 { margin-bottom: 2rem; }
          .sm\\:text-base { font-size: 1rem; }
          .sm\\:text-lg { font-size: 1.125rem; }
          .sm\\:text-sm { font-size: 0.875rem; }
          .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sm\\:h-36 { height: 9rem; }
          .sm\\:w-36 { width: 9rem; }
        }
        
        @media (min-width: 640px) {
          .sm\\:text-4xl { font-size: 2.25rem; }
          .sm\\:text-6xl { font-size: 3.75rem; }
          .sm\\:p-8 { padding: 2rem; }
          .sm\\:p-10 { padding: 2.5rem; }
          .sm\\:gap-3 { gap: 0.75rem; }
          .sm\\:mb-8 { margin-bottom: 2rem; }
          .sm\\:text-base { font-size: 1rem; }
          .sm\\:text-lg { font-size: 1.125rem; }
          .sm\\:text-sm { font-size: 0.875rem; }
          .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sm\\:h-36 { height: 9rem; }
          .sm\\:w-36 { width: 9rem; }
        }
      `}</style>
      
      <div 
        className="min-h-screen overflow-x-hidden" 
        style={{ 
          backgroundColor: 'hsl(270, 15%, 5%)', 
          color: 'hsl(270, 5%, 90%)',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        }}
      >
        {/* Video Background */}
        <VideoBackground 
          opacity={0.6}
          shouldPlay={hasEntered}
        />

        {/* Main Content */}
        <div 
          className="relative min-h-screen flex items-center justify-center p-4 sm:p-8"
          style={{ zIndex: 10 }}
        >
          <ProfileCard />
        </div>
        
        {/* Landing Overlay */}
        {!hasEntered && (
          <LandingOverlay onEnter={() => setHasEntered(true)} />
        )}
      </div>
    </>
  );
}
