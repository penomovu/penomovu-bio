import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, Sparkles } from "lucide-react";
import SocialLinks from "./social-links";
import { useState, useEffect } from "react";





export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate random sparkle positions
    const newSparkles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="max-w-md w-full mx-auto px-4 animate-fade-in relative">
      {/* Floating Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none animate-float opacity-20"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${6 + sparkle.delay}s`
          }}
        >
          <Sparkles 
            className="w-4 h-4 text-primary animate-pulse-slow"
            style={{ animationDelay: `${sparkle.delay * 0.5}s` }}
          />
        </div>
      ))}

      {/* Profile Card */}
      <Card 
        className="glass-morphism-strong shadow-2xl animate-slide-up transition-all duration-500 glow-border relative overflow-hidden" 
        style={{ 
          animationDelay: "0.2s",
          backgroundColor: isHovered 
            ? 'hsla(270, 18%, 6%, 0.8)' 
            : 'hsla(270, 18%, 6%, 0.6)',
          borderColor: isHovered 
            ? 'hsla(270, 75%, 65%, 0.4)' 
            : 'hsla(270, 25%, 18%, 0.6)',
          transform: isHovered 
            ? 'translateY(-12px) scale(1.03)' 
            : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? `0 32px 64px -12px rgba(0, 0, 0, 0.4), 
               0 0 60px hsla(270, 75%, 65%, 0.2),
               inset 0 1px 0 hsla(270, 75%, 65%, 0.1)` 
            : `0 24px 48px -12px rgba(0, 0, 0, 0.3),
               inset 0 1px 0 rgba(255, 255, 255, 0.05)`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, hsla(270, 75%, 65%, 0.03), hsla(285, 85%, 70%, 0.02))',
            opacity: isHovered ? 1 : 0
          }}
        />
        <CardContent className="p-6 sm:p-10 relative z-10">
          {/* Profile Image */}
          <div className="flex justify-center mb-6 sm:mb-8 relative">
            <div className="relative group">
              {/* Glow ring */}
              <div 
                className="absolute inset-0 rounded-full transition-all duration-500"
                style={{
                  background: isImageHovered 
                    ? 'conic-gradient(from 0deg, hsla(270, 75%, 65%, 0.6), hsla(285, 85%, 70%, 0.4), hsla(270, 75%, 65%, 0.6))'
                    : 'none',
                  transform: isImageHovered ? 'scale(1.15)' : 'scale(1.05)',
                  opacity: isImageHovered ? 1 : 0,
                  filter: 'blur(8px)'
                }}
              />
              
              <img
                src="/profile-picture.png"
                alt="penomovu profile picture"
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full transition-all duration-500 relative z-10"
                style={{
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderColor: isImageHovered 
                    ? 'hsla(270, 75%, 65%, 0.8)' 
                    : 'hsla(270, 25%, 18%, 0.6)',
                  boxShadow: isImageHovered 
                    ? `0 20px 40px -12px rgba(0, 0, 0, 0.3), 
                       0 0 40px hsla(270, 75%, 65%, 0.3),
                       inset 0 1px 0 rgba(255, 255, 255, 0.1)` 
                    : `0 12px 24px -8px rgba(0, 0, 0, 0.2),
                       inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
                  transform: isImageHovered ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              />
              
              {/* Pulse ring on hover */}
              <div 
                className="absolute inset-0 rounded-full border-2 transition-all duration-1000"
                style={{
                  borderColor: 'hsla(270, 75%, 65%, 0.4)',
                  transform: isImageHovered ? 'scale(1.3)' : 'scale(1)',
                  opacity: isImageHovered ? 0 : 1,
                  animation: isImageHovered ? 'none' : 'pulse 2s infinite'
                }}
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 
              className="text-3xl sm:text-4xl font-light mb-2 sm:mb-3 transition-all duration-500 relative"
              style={{ 
                color: isHovered ? 'hsl(270, 75%, 65%)' : 'hsl(270, 8%, 95%)',
                textShadow: isHovered 
                  ? '0 0 30px hsla(270, 75%, 65%, 0.4), 0 0 60px hsla(285, 85%, 70%, 0.2)' 
                  : 'none',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'hsl(270, 75%, 65%)';
                e.currentTarget.style.textShadow = '0 0 30px hsla(270, 75%, 65%, 0.4), 0 0 60px hsla(285, 85%, 70%, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isHovered ? 'hsl(270, 75%, 65%)' : 'hsl(270, 8%, 95%)';
                e.currentTarget.style.textShadow = isHovered 
                  ? '0 0 30px hsla(270, 75%, 65%, 0.4), 0 0 60px hsla(285, 85%, 70%, 0.2)' 
                  : 'none';
              }}
            >
              penomovu
              {/* Animated underline */}
              <div 
                className="absolute bottom-0 left-1/2 h-0.5 transition-all duration-500"
                style={{
                  width: isHovered ? '100%' : '0%',
                  background: 'linear-gradient(90deg, hsla(270, 75%, 65%, 0.8), hsla(285, 85%, 70%, 0.6))',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 10px hsla(270, 75%, 65%, 0.4)'
                }}
              />
            </h1>
            <div className="mb-3">
              <p 
                className="text-sm sm:text-base transition-all duration-300 relative"
                style={{ 
                  color: isHovered ? 'hsl(270, 75%, 70%)' : 'hsl(270, 8%, 60%)',
                  textShadow: isHovered ? '0 0 20px hsla(270, 75%, 65%, 0.2)' : 'none'
                }}
              >
                C++, Python & Web Developer
              </p>
              {/* Skill badges */}
              <div className="flex justify-center gap-2 mt-2">
                {['C++', 'Python', 'Web'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: isHovered 
                        ? 'hsla(270, 75%, 65%, 0.15)' 
                        : 'hsla(270, 20%, 18%, 0.6)',
                      borderColor: isHovered 
                        ? 'hsla(270, 75%, 65%, 0.3)' 
                        : 'hsla(270, 25%, 18%, 0.4)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      color: isHovered ? 'hsl(270, 75%, 70%)' : 'hsl(270, 8%, 70%)',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm flex items-center justify-center gap-1 transition-colors duration-300"
               style={{ 
                 color: isHovered ? 'hsl(270, 8%, 70%)' : 'hsl(270, 8%, 50%)'
               }}>
              <MapPin className="h-3 w-3" />
              France
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

          </CardContent>
      </Card>
      {/* Footer */}
      <div className="text-center mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <p className="text-xs flex items-center justify-center gap-1 transition-all duration-300"
           style={{ 
             color: isHovered ? 'hsl(270, 8%, 60%)' : 'hsl(270, 8%, 40%)'
           }}>
          Made with 
          <Heart 
            className="h-3 w-3 transition-all duration-300 animate-pulse-slow" 
            style={{ 
              color: isHovered ? 'hsl(270, 75%, 65%)' : 'hsl(270, 8%, 50%)',
              filter: isHovered ? 'drop-shadow(0 0 6px hsla(270, 75%, 65%, 0.6))' : 'none'
            }}
          />
          by penomovu
        </p>
      </div>
    </div>
  );
}
