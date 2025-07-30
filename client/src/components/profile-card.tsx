import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";
import SocialLinks from "./social-links";





export default function ProfileCard() {
  return (
    <div className="max-w-md w-full mx-auto px-4 animate-fade-in">
      {/* Profile Card */}
      <Card 
        className="bg-slate-900/30 backdrop-blur-sm border-slate-700/30 shadow-xl animate-slide-up" 
        style={{ 
          animationDelay: "0.2s",
          backgroundColor: 'hsla(270, 15%, 8%, 0.3)',
          borderColor: 'hsla(270, 10%, 15%, 0.3)'
        }}
      >
        <CardContent className="p-6 sm:p-10">
          {/* Profile Image */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="/profile-picture.png"
              alt="penomovu profile picture"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-purple-500/30 shadow-lg hover:border-purple-500/50 transition-all duration-300"
              style={{
                borderColor: 'hsla(270, 60%, 55%, 0.3)'
              }}
            />
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 
              className="text-3xl sm:text-4xl font-light mb-2 sm:mb-3 text-slate-100" 
              style={{ color: 'hsl(270, 5%, 90%)' }}
            >
              penomovu
            </h1>
            <p 
              className="text-slate-400 text-sm sm:text-base mb-2"
              style={{ color: 'hsl(270, 5%, 55%)' }}
            >
              C++ & Python Developer
            </p>
            <p 
              className="text-slate-500 text-xs sm:text-sm flex items-center justify-center gap-1"
              style={{ color: 'hsl(270, 5%, 45%)' }}
            >
              <MapPin className="h-3 w-3" />
              Remote
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

          </CardContent>
      </Card>
      {/* Footer */}
      <div className="text-center mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <p 
          className="text-xs flex items-center justify-center gap-1"
          style={{ color: 'hsla(270, 5%, 45%, 0.8)' }}
        >
          Made with 
          <Heart 
            className="h-3 w-3" 
            style={{ color: 'hsla(270, 60%, 55%, 0.7)' }}
          />
          by penomovu
        </p>
      </div>
    </div>
  );
}
