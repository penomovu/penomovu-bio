import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, MapPin, Heart } from "lucide-react";
import SocialLinks from "./social-links";
import ViewCounter from "./view-counter";

export default function ProfileCard() {
  return (
    <div className="max-w-md w-full animate-fade-in">
      
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

          {/* Unique Brand Element */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center animate-pulse-slow shadow-lg border border-purple-400/30">
                <div className="text-white font-bold text-lg font-code">PM</div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6">
            <div className="relative inline-block mb-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                penomovu
              </h1>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-600/50 rounded-xl p-4 mb-3">
              <p className="text-cyan-400 text-lg font-semibold mb-1">Full-Stack Developer</p>
              <div className="flex justify-center gap-3 text-sm">
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md font-code">C++</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md font-code">Python</span>
                <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-md font-code">Web</span>
              </div>
            </div>
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
