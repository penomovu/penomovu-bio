import { useEffect, useState } from "react";
import VideoBackground from "@/components/video-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import Footer from "@/components/footer";
import LandingOverlay from "@/components/landing-overlay";
import CurrentlyPlaying from "@/components/currently-playing";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Handle responsive video background
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      document.documentElement.style.setProperty(
        '--video-opacity', 
        isMobile ? '0.2' : '0.3'
      );
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!hasEntered) {
    return <LandingOverlay onEnter={() => setHasEntered(true)} />;
  }

  return (
    <>
      {/* Global Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body, html {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, hsl(270, 15%, 5%) 0%, hsl(270, 20%, 8%) 50%, hsl(270, 15%, 5%) 100%);
          color: hsl(270, 5%, 90%);
          min-height: 100vh;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: hsl(270, 15%, 10%);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, hsl(270, 60%, 55%), hsl(300, 60%, 55%));
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, hsl(270, 70%, 65%), hsl(300, 70%, 65%));
        }

        /* Container utility */
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Text gradient utilities */
        .text-gradient {
          background: linear-gradient(135deg, #a855f7, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Selection styling */
        ::selection {
          background: hsla(270, 60%, 55%, 0.3);
          color: white;
        }

        /* Focus styles */
        *:focus {
          outline: 2px solid hsl(270, 60%, 55%);
          outline-offset: 2px;
        }

        /* Animation utilities */
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Loading animation */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Blur backdrop */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }

        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }

        /* Responsive grid classes */
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .md\\:flex { display: flex; }
          .md\\:hidden { display: none; }
        }

        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .lg\\:text-5xl { font-size: 3rem; line-height: 1; }
          .lg\\:text-7xl { font-size: 4.5rem; line-height: 1; }
          .lg\\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
        }

        /* Common utilities */
        .relative { position: relative; }
        .absolute { position: absolute; }
        .fixed { position: fixed; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .flex { display: flex; }
        .inline-flex { display: inline-flex; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .text-center { text-align: center; }
        .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
        .space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 1.5rem; }
        .space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 2rem; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-12 { gap: 3rem; }
        .overflow-hidden { overflow: hidden; }
        .min-h-screen { min-height: 100vh; }
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .rounded-full { border-radius: 9999px; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-16 { margin-top: 4rem; }
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }
        .leading-tight { line-height: 1.25; }
        .leading-relaxed { line-height: 1.625; }
        .text-white { color: rgb(255 255 255); }
        .text-gray-300 { color: rgb(209 213 219); }
        .text-gray-400 { color: rgb(156 163 175); }
        .text-gray-500 { color: rgb(107 114 128); }
        .text-gray-600 { color: rgb(75 85 99); }
        .text-purple-400 { color: rgb(196 181 253); }
        .text-yellow-400 { color: rgb(251 191 36); }
        .text-blue-400 { color: rgb(96 165 250); }
        .text-green-400 { color: rgb(74 222 128); }
        .text-red-400 { color: rgb(248 113 113); }
        .text-orange-400 { color: rgb(251 146 60); }
        .bg-green-400 { background-color: rgb(74 222 128); }
        .w-2 { width: 0.5rem; }
        .h-2 { height: 0.5rem; }
        .w-4 { width: 1rem; }
        .h-4 { height: 1rem; }
        .w-5 { width: 1.25rem; }
        .h-5 { height: 1.25rem; }
        .w-6 { width: 1.5rem; }
        .h-6 { height: 1.5rem; }
        .w-12 { width: 3rem; }
        .h-12 { height: 3rem; }
        .w-24 { width: 6rem; }
        .h-px { height: 1px; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .transition-all { transition: all 0.3s ease; }
        .transition-colors { transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; }
        .duration-300 { transition-duration: 300ms; }
        .duration-500 { transition-duration: 500ms; }
        .border { border-width: 1px; }
        .border-t { border-top-width: 1px; }
        .z-40 { z-index: 40; }
        .z-50 { z-index: 50; }
        .-z-10 { z-index: -10; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .right-0 { right: 0; }
        .fill-current { fill: currentColor; }
        .italic { font-style: italic; }
        .block { display: block; }
        .hidden { display: none; }
      `}</style>

      <div className="min-h-screen relative">
        {/* Video Background - more subtle */}
        <VideoBackground 
          opacity={0.3}
          shouldPlay={true}
        />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Skills Section */}
          <SkillsSection />
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Currently Playing - repositioned */}
        <CurrentlyPlaying />
      </div>
    </>
  );
}
