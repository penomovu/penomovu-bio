import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Award, Users, Coffee } from "lucide-react";
import SocialLinks from "./social-links";
import { useState } from "react";

const achievements = [
  { icon: Award, text: "5+ Years Experience", color: "hsl(270, 85%, 60%)" },
  { icon: Users, text: "50+ Projects", color: "hsl(142, 76%, 36%)" },
  { icon: Coffee, text: "Available for Hire", color: "hsl(38, 92%, 50%)" }
];





export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="max-w-lg w-full mx-auto px-4">
      {/* Profile Card */}
      <Card 
        className="glass-effect shadow-xl animate-slide-up transition-all duration-500 relative overflow-hidden" 
        style={{ 
          animationDelay: "0.9s",
          transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
          borderColor: isHovered ? 'hsl(270, 85%, 60%)' : 'hsla(270, 85%, 60%, 0.1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Background Overlay */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, hsla(270, 85%, 60%, 0.1) 0%, transparent 50%, hsla(280, 70%, 55%, 0.1) 100%)',
            opacity: isHovered ? 0.3 : 0.1
          }}
        />
        <CardContent className="p-8 sm:p-10 relative z-10">
          {/* Profile Image with Status */}
          <div className="flex justify-center mb-8 relative">
            <div className="relative">
              <img
                src="/profile-picture.png"
                alt="penomovu profile picture"
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full transition-all duration-500 object-cover"
                style={{
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderColor: isImageHovered ? 'hsl(270, 85%, 60%)' : 'hsl(272, 12%, 18%)',
                  boxShadow: isImageHovered 
                    ? '0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 30px hsla(270, 85%, 60%, 0.3)' 
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              />
              {/* Online Status */}
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-background animate-pulse" />
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>Based in France</span>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <div className="mb-2 flex justify-center">
                    <Icon 
                      className="w-6 h-6 transition-colors duration-300"
                      style={{ color: achievement.color }}
                    />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground leading-tight">
                    {achievement.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mb-8 animate-slide-up" style={{ animationDelay: "1.3s" }}>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Ready to bring your next project to life with{" "}
              <span className="text-gradient font-semibold">cutting-edge technology</span> and{" "}
              <span className="text-gradient font-semibold">expert craftsmanship</span>.
            </p>
            
            <button 
              className="gradient-primary text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg mb-4 w-full sm:w-auto"
              onClick={() => window.open('mailto:contact@penomovu.dev', '_blank')}
            >
              Let's Work Together
            </button>
            
            <p className="text-xs text-muted-foreground">
              Currently accepting new projects • Quick turnaround
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

        </CardContent>
      </Card>
    </div>
  );
}
