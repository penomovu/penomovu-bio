import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, MapPin, Heart } from "lucide-react";
import SocialLinks from "./social-links";
import ViewCounter from "./view-counter";

export default function ProfileCard() {
  return (
    <div className="max-w-md w-full animate-fade-in">
      
      {/* Profile Card */}
      <Card className="bg-card/30 backdrop-blur-sm border-border/30 shadow-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <CardContent className="p-10">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <img
              src="https://i.pinimg.com/originals/8e/be/65/8ebe6576c75c0d65f345d72a4f152658.jpg"
              alt="penomovu profile picture"
              className="w-28 h-28 rounded-full border-2 border-primary/30 shadow-lg hover:border-primary/50 transition-all duration-300"
            />
          </div>

          {/* Name and Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light mb-3 text-foreground">penomovu</h1>
            <p className="text-muted-foreground text-base mb-2">C++ & Python Developer</p>
            <p className="text-muted-foreground/70 text-sm flex items-center justify-center gap-1">
              <MapPin className="h-3 w-3" />
              Remote
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

          {/* Username Display */}
          <div className="text-center mb-6">
            <div className="inline-block bg-secondary/30 border border-border/30 rounded-md px-4 py-2 font-code text-sm text-muted-foreground">
              penomovu
            </div>
          </div>

          {/* View Counter */}
          <ViewCounter />
        </CardContent>
      </Card>
      {/* Footer */}
      <div className="text-center mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <p className="text-muted-foreground/50 text-xs flex items-center justify-center gap-1">
          Made with 
          <Heart className="h-3 w-3 text-primary/70" />
          by penomovu
        </p>
      </div>
    </div>
  );
}
