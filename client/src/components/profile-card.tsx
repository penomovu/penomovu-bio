import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";
import SocialLinks from "./social-links";
import { useState } from "react";





export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="max-w-md w-full mx-auto px-4 animate-fade-in">
      {/* Profile Card */}
      <Card 
        className="backdrop-blur-sm shadow-xl animate-slide-up transition-all duration-300" 
        style={{ 
          animationDelay: "0.2s",
          backgroundColor: 'hsla(270, 15%, 8%, 0.3)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: isHovered ? 'hsla(270, 60%, 55%, 0.6)' : 'hsla(270, 10%, 15%, 0.3)',
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px hsla(270, 60%, 55%, 0.1)' 
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6 sm:p-10">
          {/* Profile Image */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="/profile-picture.png"
              alt="penomovu profile picture"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full transition-all duration-300"
              style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isImageHovered ? 'hsla(270, 60%, 55%, 0.5)' : 'hsla(270, 60%, 55%, 0.3)',
                boxShadow: isImageHovered 
                  ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0 20px hsla(270, 60%, 55%, 0.2)' 
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            />
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 
              className="text-3xl sm:text-4xl font-light mb-2 sm:mb-3 transition-colors duration-300"
              style={{ 
                color: isHovered ? 'hsl(270, 60%, 55%)' : 'hsl(270, 5%, 90%)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(270, 60%, 55%)'}
              onMouseLeave={(e) => e.currentTarget.style.color = isHovered ? 'hsl(270, 60%, 55%)' : 'hsl(270, 5%, 90%)'}
            >
              penomovu
            </h1>
            <p 
              className="text-sm sm:text-base mb-2 transition-colors duration-300"
              style={{ 
                color: isHovered ? 'hsl(270, 60%, 65%)' : 'hsl(270, 5%, 55%)'
              }}
            >
              C++, Python & Web Developer
            </p>
            <p className="text-muted-foreground/70 text-xs sm:text-sm flex items-center justify-center gap-1">
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
        <p className="text-xs flex items-center justify-center gap-1 text-[#e6e4e721]">
          Made with 
          <Heart className="h-3 w-3 text-primary/70" />
          by penomovu
        </p>
      </div>
    </div>
  );
}
