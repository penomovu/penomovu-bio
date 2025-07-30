import { useState, useEffect } from "react";

export default function ViewCounter() {
  const [views, setViews] = useState(1337);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Simulate view increments
    const incrementTimer = setInterval(() => {
      setViews(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 15000);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(incrementTimer);
    };
  }, []);

  return (
    <div className="text-center">
      {isLoading ? (
        <div className="mb-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
            <span className="text-xs">Loading</span>
          </div>
        </div>
      ) : null}
      
      <div className="text-3xl font-light text-foreground mb-1">
        {views.toLocaleString()}
      </div>
      <div className="text-muted-foreground text-xs">Views</div>
    </div>
  );
}
