import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, SunHorizon } from '@phosphor-icons/react';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-[#041B2C]">
      <img
        src="/vidsolar.gif"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 z-[1] bg-black/55" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#041B2C] via-[#041B2C]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-secondary/90 sm:text-sm"
        >
          <SunHorizon size={18} weight="bold" />
          Trusted Solar Partner in Pune
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mb-6 text-[2.35rem] font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Still Paying for
          <br className="hidden sm:block" />
          <span className="text-gradient-amber">Electricity?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl px-2 text-base font-light leading-relaxed text-white/75 sm:px-0 sm:text-xl md:text-2xl"
        >
          Switch to solar. Let the sun pay your bills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            to="/contact"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-secondary px-8 py-4 text-base font-bold text-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(161,214,92,0.35)] active:scale-95 sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request a Quote
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" weight="bold" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary-light to-secondary bg-[length:200%_100%] group-hover:animate-shimmer" />
          </Link>
          <Link
            to="/services"
            className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/10 active:scale-95 sm:w-auto"
          >
            See Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
