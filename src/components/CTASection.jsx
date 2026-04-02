import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from '@phosphor-icons/react';
import { primaryContact } from '../data/company';

function TechnicalBg() {
  return (
    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
        <pattern id="ctaDots" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.07)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ctaGrid)" />
      <rect width="100%" height="100%" fill="url(#ctaDots)" />
      <g transform="translate(78%, 6%) scale(0.9)" opacity="0.08" stroke="white" strokeWidth="1" fill="none">
        <rect x="0" y="0" width="180" height="120" rx="2" />
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <rect key={`${row}-${col}`} x={col * 30 + 2} y={row * 30 + 2} width="26" height="26" rx="1" />
          )),
        )}
        <line x1="-12" y1="0" x2="-12" y2="120" />
        <line x1="-16" y1="0" x2="-8" y2="0" />
        <line x1="-16" y1="120" x2="-8" y2="120" />
        <line x1="0" y1="-12" x2="180" y2="-12" />
        <line x1="0" y1="-16" x2="0" y2="-8" />
        <line x1="180" y1="-16" x2="180" y2="-8" />
        <line x1="90" y1="120" x2="70" y2="150" />
        <line x1="90" y1="120" x2="110" y2="150" />
        <line x1="60" y1="150" x2="120" y2="150" />
      </g>
      <g transform="translate(-3%, 52%) rotate(-10) scale(0.7)" opacity="0.06" stroke="white" strokeWidth="1" fill="none">
        <rect x="0" y="0" width="200" height="130" rx="2" />
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5, 6].map((col) => (
            <rect key={`${row}-${col}`} x={col * 28 + 2} y={row * 30 + 2} width="24" height="26" rx="1" />
          )),
        )}
        <line x1="100" y1="130" x2="80" y2="165" />
        <line x1="100" y1="130" x2="120" y2="165" />
        <line x1="70" y1="165" x2="130" y2="165" />
      </g>
      <g transform="translate(8%, 15%)" opacity="0.07" stroke="white" fill="none">
        <circle cx="0" cy="0" r="80" strokeWidth="0.8" strokeDasharray="4 4" />
        <circle cx="0" cy="0" r="55" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="30" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="6" fill="white" opacity="0.3" />
        <line x1="-90" y1="0" x2="90" y2="0" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="0" y1="-90" x2="0" y2="90" strokeWidth="0.5" strokeDasharray="3 3" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
          const ang = deg * Math.PI / 180;
          const x1 = Math.cos(ang) * 75;
          const y1 = Math.sin(ang) * 75;
          const x2 = Math.cos(ang) * 85;
          const y2 = Math.sin(ang) * 85;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.8" />;
        })}
      </g>
      <g transform="translate(92%, 88%)" opacity="0.05" stroke="white" fill="none">
        <circle cx="0" cy="0" r="100" strokeWidth="0.8" strokeDasharray="6 3" />
        <circle cx="0" cy="0" r="65" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="35" strokeWidth="1" />
        <circle cx="0" cy="0" r="8" fill="white" opacity="0.2" />
        <line x1="-110" y1="0" x2="110" y2="0" strokeWidth="0.4" strokeDasharray="4 4" />
        <line x1="0" y1="-110" x2="0" y2="110" strokeWidth="0.4" strokeDasharray="4 4" />
      </g>
      <g opacity="0.06" stroke="white" strokeWidth="0.7" fill="none">
        <line x1="20%" y1="12" x2="40%" y2="12" strokeDasharray="5 3" />
        <line x1="20%" y1="8" x2="20%" y2="16" />
        <line x1="40%" y1="8" x2="40%" y2="16" />
        <line x1="55%" y1="88%" x2="80%" y2="88%" strokeDasharray="5 3" />
        <line x1="55%" y1="calc(88%-5px)" x2="55%" y2="calc(88%+5px)" />
        <line x1="80%" y1="calc(88%-5px)" x2="80%" y2="calc(88%+5px)" />
        <line x1="50%" y1="5%" x2="50%" y2="20%" strokeDasharray="3 3" opacity="0.5" />
      </g>
      <g transform="translate(63%, 38%)" opacity="0.05" stroke="white" strokeWidth="0.8" fill="none">
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect key={`sm-${row}-${col}`} x={col * 18} y={row * 18} width="15" height="15" rx="1" />
          )),
        )}
      </g>
      {[[15, 70], [85, 25], [70, 80]].map(([cx, cy], k) => (
        <g key={k} transform={`translate(${cx}%,${cy}%)`} opacity="0.08" stroke="white" strokeWidth="1">
          <line x1="-8" y1="0" x2="8" y2="0" />
          <line x1="0" y1="-8" x2="0" y2="8" />
          <circle cx="0" cy="0" r="12" strokeWidth="0.5" strokeDasharray="2 2" />
        </g>
      ))}
    </svg>
  );
}

export default function CTASection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-4 py-12 md:px-6 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-xl border border-white/5 gradient-hero p-8 text-center sm:rounded-2xl sm:p-12 md:p-16"
        style={{ maxWidth: '100%' }}
      >
        <TechnicalBg />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary-light/8 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-secondary/8 blur-[80px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs uppercase tracking-widest text-white/50">
            <span className="inline-block h-1 w-1 rounded-full bg-secondary" />
            Narhe, Pune team
          </div>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
            Plan the right <span className="text-gradient-amber">solar setup</span> for your property
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-white/60 sm:mb-10 sm:text-base">
            Talk to our Pune team about rooftop solar, solar water pumps, or an energy audit.
            We will help you choose the next step that fits your roof, usage, and budget.
          </p>

          <div className="mb-8 flex items-center justify-center gap-4 sm:mb-10">
            <div className="h-px w-16 bg-white/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-secondary/60" />
            <div className="h-px w-16 bg-white/10" />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-secondary px-8 py-4 font-bold text-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(161,214,92,0.3)] active:scale-95 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Site Visit
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" weight="bold" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary-light to-secondary bg-[length:200%_100%] group-hover:animate-shimmer" />
            </Link>
            <a
              href={primaryContact.phoneHref}
              className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/8 active:scale-95 sm:w-auto"
            >
              {primaryContact.phone}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
