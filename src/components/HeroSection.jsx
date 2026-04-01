import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import SolarHeroScene from './SolarHeroScene';
import { ArrowRight, SolarPanel } from '@phosphor-icons/react';
import IconBadge from './IconBadge';

export default function HeroSection() {
  const headingRef = useRef(null);

  useEffect(() => {
    const chars = headingRef.current?.querySelectorAll('.char');
    if (chars && chars.length > 0) {
      gsap.fromTo(chars,
        { opacity: 0, y: 50, rotateX: -80 },
        { opacity: 1, y: 0, rotateX: 0, stagger: 0.025, duration: 0.7, ease: 'back.out(1.7)', delay: 0.5 }
      );
    }
  }, []);

  const splitText = (text, gradient = false) =>
    text.split('').map((char, i) => (
      <span key={i} className={`char inline-block ${gradient ? 'text-gradient-amber' : ''}`} style={{ perspective: '500px' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden gradient-hero">
      <SolarHeroScene />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark/40 z-[2]" />

      {/* Mountain range divider */}
      <div className="absolute bottom-0 left-0 right-0 z-[3]" aria-hidden="true">
        {/* Back mountain layer */}
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block" preserveAspectRatio="none"
          style={{ marginBottom: '-2px' }}>
          <path
            d="M0,200 L0,140
               L80,110 L160,125 L220,85 L300,105 L360,60 L420,90 L480,70
               L540,95 L600,55 L660,80 L720,40 L780,75 L840,50 L900,80
               L960,65 L1020,90 L1080,45 L1140,70 L1200,55 L1260,85
               L1320,60 L1380,80 L1440,100 L1440,200 Z"
            fill="rgba(255,255,255,0.15)"
          />
          <path
            d="M0,200 L0,155
               L100,130 L180,145 L250,100 L340,120 L400,80 L470,105
               L530,85 L600,110 L680,65 L750,95 L820,55 L890,85
               L950,70 L1020,100 L1100,60 L1170,85 L1240,70
               L1320,95 L1380,75 L1440,110 L1440,200 Z"
            fill="rgba(255,255,255,0.3)"
          />
          <path
            d="M0,200 L0,165
               L60,155 L140,170 L200,135 L280,150 L350,115 L430,140
               L500,120 L570,145 L650,100 L720,130 L800,90 L870,120
               L940,105 L1010,130 L1090,85 L1160,115 L1230,95
               L1300,120 L1370,105 L1440,125 L1440,200 Z"
            fill="rgba(255,255,255,0.55)"
          />
          <path
            d="M0,200 L0,175
               L70,168 L150,180 L210,155 L300,170 L370,140 L450,160
               L520,145 L590,165 L670,125 L740,155 L830,120 L900,148
               L970,135 L1050,155 L1130,115 L1200,140 L1280,125
               L1350,145 L1400,135 L1440,148 L1440,200 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 z-[1] opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(20,184,166,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(20,184,166,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-32">
        {/* Heading */}
        <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-5 sm:mb-7 leading-[1.1]">
          {splitText('Sustainable')}
          <br />
          {splitText('Energy Solutions', true)}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Innovative energy solutions for a cleaner and greener future.
          Solar panels, battery storage &amp; complete energy systems — all under one roof.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/services"
            className="group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-secondary text-dark font-bold rounded-full
                       transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]
                       hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base
                       relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-[length:200%_100%]
                            group-hover:animate-shimmer" />
          </Link>
          <Link
            to="/solar-calculator"
            className="group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 border-2 border-white/20 text-white font-bold rounded-full
                       transition-all duration-300 hover:bg-white/10 hover:border-white/50
                       hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Calculate Savings
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden sm:flex flex-col items-center gap-2 mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <motion.span
            className="text-white/30 text-[10px] tracking-[0.2em] uppercase"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-1 bg-secondary rounded-full"
                animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
