import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SiStackoverflow } from "react-icons/si";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/penomovu",
      color: "hover:text-white"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com/in/penomovu",
      color: "hover:text-blue-400"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      url: "https://twitter.com/penomovu",
      color: "hover:text-blue-400"
    },
    { 
      name: "Stack Overflow", 
      icon: SiStackoverflow, 
      url: "https://stackoverflow.com/users/penomovu",
      color: "hover:text-orange-400"
    },
  ];

  return (
    <>
      {/* Fixed Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrollY > 50 
            ? 'hsla(270, 15%, 5%, 0.9)' 
            : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
          borderBottom: scrollY > 50 
            ? '1px solid hsla(270, 60%, 55%, 0.2)' 
            : 'none'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold"
            >
              <span className="text-white">peno</span>
              <span className="text-purple-400">movu</span>
            </motion.div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`text-gray-400 transition-colors ${link.color}`}
                  title={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
              
              {/* Contact Button */}
              <motion.a
                href="mailto:hello@penomovu.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-purple-500/25"
              >
                Contact
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          x: isMenuOpen ? "0%" : "100%"
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-0 z-40 md:hidden"
        style={{
          backgroundColor: 'hsla(270, 15%, 5%, 0.95)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20
              }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 text-xl text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <link.icon className="w-6 h-6" />
              {link.name}
            </motion.a>
          ))}
          
          <motion.a
            href="mailto:hello@penomovu.dev"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : 20
            }}
            transition={{ delay: socialLinks.length * 0.1 }}
            className="flex items-center gap-4 text-xl text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Mail className="w-6 h-6" />
            Contact
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}