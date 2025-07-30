import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";
import SocialLinks from "./social-links";


export default function ProfileCard() {
  return (
    <div className="max-w-md w-full mx-auto px-4 animate-fade-in">
      {/* Profile Card */}
      <Card className="bg-card/30 backdrop-blur-sm border-border/30 shadow-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <CardContent className="p-6 sm:p-10">
          {/* Profile Image */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="https://i.pinimg.com/originals/8e/be/65/8ebe6576c75c0d65f345d72a4f152658.jpg"
              alt="penomovu profile picture"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-primary/30 shadow-lg hover:border-primary/50 transition-all duration-300"
            />
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl font-light mb-2 sm:mb-3 text-foreground">penomovu</h1>
            <p className="text-muted-foreground text-sm sm:text-base mb-2">C++ & Python Developer</p>
            <p className="text-muted-foreground/70 text-xs sm:text-sm flex items-center justify-center gap-1">
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
        <p className="text-xs flex items-center justify-center gap-1 text-[#e6e4e721]">
          Made with 
          <Heart className="h-3 w-3 text-primary/70" />
          by penomovu
        </p>
      </div>
    </div>
  );
}
