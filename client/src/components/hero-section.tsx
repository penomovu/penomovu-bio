import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Code2, Terminal, Database, Globe } from "lucide-react";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -12;
    const rotationY = (offsetX / (rect.width / 2)) * 12;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
    
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  function handleMouseEnter() {
    scale.set(1.02);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }

  const technologies = [
    { icon: Code2, name: "C++", color: "hsl(210, 100%, 60%)" },
    { icon: Terminal, name: "Python", color: "hsl(60, 100%, 50%)" },
    { icon: Database, name: "Backend", color: "hsl(120, 100%, 40%)" },
    { icon: Globe, name: "Web", color: "hsl(270, 60%, 55%)" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(hsl(270, 60%, 55%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(270, 60%, 55%) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: 'hsla(270, 60%, 55%, 0.1)',
              border: '1px solid hsla(270, 60%, 55%, 0.3)',
            }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Available for Projects</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Hello, I'm</span>
              <br />
              <span 
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                penomovu
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
            >
              Full-stack developer crafting digital experiences with
              <span className="text-purple-400 font-semibold"> C++</span>,
              <span className="text-yellow-400 font-semibold"> Python</span>, and
              <span className="text-blue-400 font-semibold"> modern web technologies</span>
            </motion.p>
          </div>

          {/* Technology Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-3 rounded-xl backdrop-blur-sm cursor-pointer"
                style={{
                  backgroundColor: 'hsla(0, 0%, 100%, 0.05)',
                  border: '1px solid hsla(0, 0%, 100%, 0.1)',
                }}
              >
                <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-gray-400"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Based in France</span>
          </motion.div>
        </motion.div>

        {/* Right Side - Interactive Profile Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            rotateX,
            rotateY,
            scale,
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
          onMouseMove={handleMouse}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          {/* Profile Card */}
          <div 
            className="relative p-8 rounded-3xl backdrop-blur-lg transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, hsla(270, 60%, 15%, 0.2), hsla(270, 60%, 5%, 0.3))',
              border: '1px solid hsla(270, 60%, 55%, 0.2)',
              boxShadow: isHovered 
                ? '0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 0 50px hsla(270, 60%, 55%, 0.2)' 
                : '0 20px 40px -12px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Profile Image */}
            <div className="relative mb-6 flex justify-center">
              <div 
                className="relative w-32 h-32 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, hsl(270, 60%, 55%), hsl(300, 60%, 55%))',
                  padding: '3px'
                }}
              >
                <img
                  src="/profile-picture.png"
                  alt="penomovu profile picture"
                  className="w-full h-full object-cover rounded-full"
                  style={{
                    filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1)',
                    transition: 'filter 0.3s ease'
                  }}
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-blue-400">20+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-400">∞</div>
                <div className="text-xs text-gray-400">Coffee</div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-10 left-10 w-20 h-20 rounded-full bg-purple-500/10 blur-xl" />
          <div className="absolute -z-10 bottom-10 right-10 w-16 h-16 rounded-full bg-blue-500/10 blur-xl" />
        </motion.div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
    </div>
  );
}