import { motion } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-field-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-field-glow/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-field-glow mb-10"
        >
          <Zap size={14} className="text-field-accent" />
          <span>High-Frequency Trading</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          <span className="text-white">There is no limit</span>
          <br />
          <span className="text-gradient">for those who think infinite</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          At Infinite Field, we go beyond the surface, diving deep into data and
          technology to create precision-driven opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#careers"
            className="px-8 py-4 bg-field-accent hover:bg-field-glow text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Explore Careers
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
