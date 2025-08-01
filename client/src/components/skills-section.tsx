import { motion } from "framer-motion";
import { Code2, Database, Globe, Terminal, Cpu, Zap } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Systems Programming",
      icon: Cpu,
      color: "from-blue-500 to-cyan-400",
      skills: ["C++", "Memory Management", "Performance Optimization", "Low-level Programming"]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-400",
      skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-purple-500 to-pink-400",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "DevOps & Tools",
      icon: Terminal,
      color: "from-orange-500 to-red-400",
      skills: ["Linux", "Git", "CI/CD", "AWS", "Monitoring"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: 'hsla(270, 60%, 55%, 0.1)',
              border: '1px solid hsla(270, 60%, 55%, 0.3)',
            }}
          >
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Skills & Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What I Build With
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A versatile toolkit spanning from low-level systems to modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div 
                className="p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 h-full"
                style={{
                  backgroundColor: 'hsla(0, 0%, 100%, 0.02)',
                  borderColor: 'hsla(0, 0%, 100%, 0.1)',
                }}
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 transition-transform group-hover:scale-110`}
                  >
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Glow effect */}
                  <div 
                    className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 blur-lg transition-opacity`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-60" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative border glow */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="mailto:hello@penomovu.dev"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-purple-500/25"
          >
            <span>Let's Chat</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
    </section>
  );
}