import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Activity, BarChart3, Cpu, Globe } from 'lucide-react';

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { icon: Activity, label: 'Markets', value: '50+' },
  { icon: BarChart3, label: 'Daily Trades', value: '10M+' },
  { icon: Cpu, label: 'Latency', value: '<1μs' },
  { icon: Globe, label: 'Countries', value: '12' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-field-950 via-field-900/50 to-field-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-white">Engineering the </span>
                <span className="text-gradient">future of finance</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                As high-frequency traders, we move fast, think ahead, and innovate
                boldly. Our systems process millions of transactions across global
                markets with sub-microsecond precision.
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                We combine deep expertise in quantitative research, systems engineering,
                and market microstructure to identify and capture opportunities invisible
                to conventional approaches.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-field-accent/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-field-accent mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
