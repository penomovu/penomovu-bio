import { motion } from "framer-motion";
import { Heart, Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-purple-500/20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center space-y-6">
          
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <blockquote className="text-lg text-gray-300 italic">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <cite className="text-sm text-gray-500 mt-2 block">— Cory House</cite>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>and</span>
            <Code2 className="w-4 h-4 text-purple-400" />
            <span>by penomovu</span>
          </motion.div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} penomovu. All rights reserved.
          </div>

          {/* Fun fact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xs text-gray-600"
          >
            This website was built with React, TypeScript, and lots of coffee ☕
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
    </footer>
  );
}