import { Heart, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 animate-slide-up"
      style={{ animationDelay: "1s" }}
    >
      <div className="glass-effect rounded-full px-6 py-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Built with</span>
          <Heart className="w-3 h-3 text-red-500 animate-pulse" />
          <span>and</span>
          <Code className="w-3 h-3 text-primary" />
          <span>by penomovu</span>
          <span className="mx-2">•</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}