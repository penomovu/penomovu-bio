import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";
import SocialLinks from "./social-links";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -18;
    const rotationY = (offsetX / (rect.width / 2)) * 18;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(1.08);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }

  return (
    <div className="max-w-md w-full mx-auto px-4 animate-fade-in">
      {/* Profile Card with Tilted Effect */}
      <motion.div 
        ref={ref}
        className="animate-slide-up [perspective:800px]" 
        style={{ 
          animationDelay: "0.2s",
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card 
          className="backdrop-blur-sm shadow-xl transition-all duration-500" 
          style={{ 
            backgroundColor: 'hsla(270, 15%, 8%, 0.3)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: isHovered ? 'hsla(270, 60%, 55%, 0.8)' : 'hsla(270, 10%, 15%, 0.3)',
            boxShadow: isHovered 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 40px hsla(270, 60%, 55%, 0.3), 0 0 80px hsla(270, 60%, 55%, 0.1)' 
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}
        >
          <CardContent className="p-6 sm:p-10">
            {/* Profile Image */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <img
                src="/profile-picture.png"
                alt="penomovu profile picture"
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full transition-all duration-500"
                style={{
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderColor: isHovered || isImageHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: isHovered || isImageHovered 
                    ? '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 90px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)' 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  filter: isHovered || isImageHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1)',
                  transform: isImageHovered ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 
                className="text-3xl sm:text-4xl font-light mb-2 sm:mb-3 transition-all duration-500"
                style={{ 
                  color: isHovered ? '#ffffff' : 'hsl(270, 5%, 90%)',
                  textShadow: isHovered 
                    ? '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)' 
                    : 'none',
                  filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
                }}
              >
                penomovu
              </h1>
              <p 
                className="text-sm sm:text-base mb-2 transition-all duration-500"
                style={{ 
                  color: isHovered ? 'rgba(255, 255, 255, 0.9)' : 'hsl(270, 5%, 55%)',
                  textShadow: isHovered 
                    ? '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)' 
                    : 'none'
                }}
              >
                C++, Python & Web Developer
              </p>
              <p 
                className="text-muted-foreground/70 text-xs sm:text-sm flex items-center justify-center gap-1 transition-all duration-500"
                style={{
                  color: isHovered ? 'rgba(255, 255, 255, 0.8)' : undefined,
                  textShadow: isHovered 
                    ? '0 0 10px rgba(255, 255, 255, 0.5)' 
                    : 'none'
                }}
              >
                <MapPin 
                  className="h-3 w-3" 
                  style={{
                    filter: isHovered ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' : 'none'
                  }}
                />
                France
              </p>
            </div>

            {/* Social Links */}
            <SocialLinks parentHovered={isHovered} />
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Footer */}
      <div className="text-center mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <p className="text-xs flex items-center justify-center gap-1 text-[#e6e4e721]">
          Made with 
          <Heart className="h-3 w-3 text-primary/70" />
          by penomovu
        </p>
      </div>
    </div>
  );
}