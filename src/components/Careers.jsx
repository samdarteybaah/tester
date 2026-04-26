import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

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

const roles = [
  {
    title: 'Quantitative Researcher',
    location: 'New York / Remote',
    type: 'Full-time',
  },
  {
    title: 'Systems Engineer',
    location: 'Chicago / London',
    type: 'Full-time',
  },
  {
    title: 'Machine Learning Engineer',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Low-Latency Developer',
    location: 'New York',
    type: 'Full-time',
  },
];

export default function Careers() {
  return (
    <section id="careers" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-field-950 via-field-900/30 to-field-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="text-white">Join the </span>
              <span className="text-gradient">field</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              We are always looking for exceptional talent. If you are driven by
              curiosity, speed, and the desire to solve hard problems, we want to
              hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-field-accent/30 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-field-glow transition-colors">
                  {role.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-white/40">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {role.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {role.type}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-field-accent group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-field-accent hover:bg-field-glow text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              View All Openings
              <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
