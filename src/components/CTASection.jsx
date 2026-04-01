import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, PhoneCall } from '@phosphor-icons/react';
import IconBadge from './IconBadge';

function TechnicalBg() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Grid lines */}
      <defs>
        <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
        </pattern>
        <pattern id="ctaDots" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.07)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ctaGrid)"/>
      <rect width="100%" height="100%" fill="url(#ctaDots)"/>

      {/* Large solar panel sketch — top right */}
      <g transform="translate(78%, 6%) scale(0.9)" opacity="0.08" stroke="white" strokeWidth="1" fill="none">
        {/* Panel frame */}
        <rect x="0" y="0" width="180" height="120" rx="2"/>
        {/* Panel cells grid 4x6 */}
        {[0,1,2,3].map(row =>
          [0,1,2,3,4,5].map(col => (
            <rect key={`${row}-${col}`} x={col*30+2} y={row*30+2} width="26" height="26" rx="1"/>
          ))
        )}
        {/* Dimension lines */}
        <line x1="-12" y1="0" x2="-12" y2="120"/>
        <line x1="-16" y1="0" x2="-8" y2="0"/>
        <line x1="-16" y1="120" x2="-8" y2="120"/>
        <line x1="0" y1="-12" x2="180" y2="-12"/>
        <line x1="0" y1="-16" x2="0" y2="-8"/>
        <line x1="180" y1="-16" x2="180" y2="-8"/>
        {/* Support mount */}
        <line x1="90" y1="120" x2="70" y2="150"/>
        <line x1="90" y1="120" x2="110" y2="150"/>
        <line x1="60" y1="150" x2="120" y2="150"/>
      </g>

      {/* Solar panel sketch — bottom left (tilted) */}
      <g transform="translate(-3%, 52%) rotate(-10) scale(0.7)" opacity="0.06" stroke="white" strokeWidth="1" fill="none">
        <rect x="0" y="0" width="200" height="130" rx="2"/>
        {[0,1,2,3].map(row =>
          [0,1,2,3,4,5,6].map(col => (
            <rect key={`${row}-${col}`} x={col*28+2} y={row*30+2} width="24" height="26" rx="1"/>
          ))
        )}
        <line x1="100" y1="130" x2="80" y2="165"/>
        <line x1="100" y1="130" x2="120" y2="165"/>
        <line x1="70" y1="165" x2="130" y2="165"/>
      </g>

      {/* Plan/blueprint circles — top left area */}
      <g transform="translate(8%, 15%)" opacity="0.07" stroke="white" fill="none">
        <circle cx="0" cy="0" r="80" strokeWidth="0.8" strokeDasharray="4 4"/>
        <circle cx="0" cy="0" r="55" strokeWidth="0.5"/>
        <circle cx="0" cy="0" r="30" strokeWidth="0.8"/>
        <circle cx="0" cy="0" r="6" fill="white" opacity="0.3"/>
        <line x1="-90" y1="0" x2="90" y2="0" strokeWidth="0.5" strokeDasharray="3 3"/>
        <line x1="0" y1="-90" x2="0" y2="90" strokeWidth="0.5" strokeDasharray="3 3"/>
        {/* Degree marks */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map(deg => {
          const r = 90 * Math.PI / 180;
          const ang = deg * Math.PI / 180;
          const x1 = Math.cos(ang) * 75;
          const y1 = Math.sin(ang) * 75;
          const x2 = Math.cos(ang) * 85;
          const y2 = Math.sin(ang) * 85;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.8"/>;
        })}
      </g>

      {/* Technical circle — bottom right */}
      <g transform="translate(92%, 88%)" opacity="0.05" stroke="white" fill="none">
        <circle cx="0" cy="0" r="100" strokeWidth="0.8" strokeDasharray="6 3"/>
        <circle cx="0" cy="0" r="65" strokeWidth="0.5"/>
        <circle cx="0" cy="0" r="35" strokeWidth="1"/>
        <circle cx="0" cy="0" r="8" fill="white" opacity="0.2"/>
        <line x1="-110" y1="0" x2="110" y2="0" strokeWidth="0.4" strokeDasharray="4 4"/>
        <line x1="0" y1="-110" x2="0" y2="110" strokeWidth="0.4" strokeDasharray="4 4"/>
      </g>

      {/* Measurement / annotation lines */}
      <g opacity="0.06" stroke="white" strokeWidth="0.7" fill="none">
        {/* Horizontal rule top */}
        <line x1="20%" y1="12" x2="40%" y2="12" strokeDasharray="5 3"/>
        <line x1="20%" y1="8" x2="20%" y2="16"/>
        <line x1="40%" y1="8" x2="40%" y2="16"/>
        {/* Horizontal rule bottom */}
        <line x1="55%" y1="88%" x2="80%" y2="88%" strokeDasharray="5 3"/>
        <line x1="55%" y1="calc(88%-5px)" x2="55%" y2="calc(88%+5px)"/>
        <line x1="80%" y1="calc(88%-5px)" x2="80%" y2="calc(88%+5px)"/>
        {/* Vertical guide line */}
        <line x1="50%" y1="5%" x2="50%" y2="20%" strokeDasharray="3 3" opacity="0.5"/>
      </g>

      {/* Small solar cell pattern — mid right */}
      <g transform="translate(63%, 38%)" opacity="0.05" stroke="white" strokeWidth="0.8" fill="none">
        {[0,1,2].map(row =>
          [0,1,2,3].map(col => (
            <rect key={`sm-${row}-${col}`} x={col*18} y={row*18} width="15" height="15" rx="1"/>
          ))
        )}
      </g>

      {/* Cross/plus mark accents */}
      {[[15,70],[85,25],[70,80]].map(([cx,cy], k) => (
        <g key={k} transform={`translate(${cx}%,${cy}%)`} opacity="0.08" stroke="white" strokeWidth="1">
          <line x1="-8" y1="0" x2="8" y2="0"/>
          <line x1="0" y1="-8" x2="0" y2="8"/>
          <circle cx="0" cy="0" r="12" strokeWidth="0.5" strokeDasharray="2 2"/>
        </g>
      ))}
    </svg>
  );
}

export default function CTASection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 sm:py-16 px-4 md:px-6 relative overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="gradient-hero rounded-xl sm:rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden
                   border border-white/5"
        style={{ maxWidth: '100%' }}
      >
        <TechnicalBg />

        {/* Subtle ambient glows */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-light/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary/8 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative z-10"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 mb-6 text-xs text-white/50 tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full bg-secondary inline-block" />
            Ready to go green?
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight">
            Join Us in the{' '}
            <span className="text-gradient-amber">Green Energy</span>{' '}
            Revolution
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Want to cut your electricity bills and go green? Let's talk.
            We'll help you find the right setup for your home or business.
          </p>

          {/* Divider line */}
          <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
            <div className="h-px w-16 bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
            <div className="h-px w-16 bg-white/10" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-secondary text-dark font-bold rounded-full
                         transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]
                         hover:scale-105 active:scale-95 flex items-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-[length:200%_100%]
                              group-hover:animate-shimmer" />
            </Link>
            <a
              href="tel:+919545345765"
              className="group px-8 py-4 border border-white/20 text-white font-semibold rounded-full
                         transition-all duration-300 hover:bg-white/8 hover:border-white/40
                         hover:scale-105 active:scale-95 flex items-center gap-2 text-sm"
            >
              +91 95453 45765
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
