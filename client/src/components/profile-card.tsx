import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, MapPin, Heart } from "lucide-react";
import SocialLinks from "./social-links";
import ViewCounter from "./view-counter";

export default function ProfileCard() {
  return (
    <div className="max-w-md w-full animate-fade-in">
      {/* Banner/Header */}
      <div className="text-center mb-8 animate-slide-up">
        <Badge variant="secondary" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 border-0">
          - Code & Create -
        </Badge>
      </div>
      {/* Profile Card */}
      <Card className="bg-black/40 backdrop-blur-md border-gray-700/50 shadow-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <CardContent className="p-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <img
              src="https://i.pinimg.com/originals/8e/be/65/8ebe6576c75c0d65f345d72a4f152658.jpg"
              alt="penomovu profile picture"
              className="w-24 h-24 rounded-full border-4 border-purple-500/50 shadow-lg hover:border-purple-400 transition-all duration-300"
            />
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center animate-pulse-slow">
              <Code2 className="text-white text-xl" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">penomovu</h1>
            <p className="text-gray-400 text-lg mb-2">C++, Python, and Web Developer.</p>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              <MapPin className="h-4 w-4" />
              Remote / Global
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />

          {/* Username Display */}
          <div className="text-center mb-4">
            <div className="inline-block bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 font-code text-sm text-gray-300">
              penomovu
            </div>
          </div>

          {/* View Counter */}
          <ViewCounter />
        </CardContent>
      </Card>
      {/* Footer */}
      <div className="text-center mt-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
        <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
          Made with 
          <Heart className="h-4 w-4 text-red-500 animate-pulse" />
          by penomovu
        </p>
      </div>
    </div>
  );
}
