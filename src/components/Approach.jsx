import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Network, Shield, Sparkles } from 'lucide-react';

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

const pillars = [
  {
    icon: Brain,
    title: 'Quantitative Research',
    description: 'Our researchers develop novel statistical and machine learning models that uncover patterns in market data at unprecedented scale.',
  },
  {
    icon: Network,
    title: 'Low-Latency Systems',
    description: 'Custom hardware and software stacks optimized for speed. FPGA-accelerated execution paths and kernel-bypass networking.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Real-time monitoring and automated safeguards ensure disciplined exposure across all strategies and market conditions.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Innovation',
    description: 'We constantly evolve our strategies and infrastructure, embracing new technologies before they become industry standard.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-32 lg:py-40">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="text-white">Our </span>
              <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              We combine cutting-edge technology with rigorous quantitative research
              to build systems that operate at the frontier of what is possible.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-field-accent/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-field-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-6 h-6 text-field-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
