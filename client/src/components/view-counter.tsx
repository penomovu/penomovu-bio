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
    <div className="text-center mb-6">
      {isLoading ? (
        <div className="mb-4">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
            <span className="text-sm">Loading</span>
          </div>
        </div>
      ) : null}
      
      <div className="text-4xl font-bold text-white mb-1">
        {views.toLocaleString()}
      </div>
      <div className="text-gray-400 text-sm">Views</div>
    </div>
  );
}
