import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-field-accent flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-field-glow" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Infinite<span className="text-field-accent">Field</span>
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1">
              Privacy <ArrowUpRight size={12} />
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1">
              Terms <ArrowUpRight size={12} />
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1">
              Contact <ArrowUpRight size={12} />
            </a>
          </div>

          <p className="text-sm text-white/30">
            &copy; {currentYear} Infinite Field. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
