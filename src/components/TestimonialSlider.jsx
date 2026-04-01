import { motion } from 'framer-motion';
import { Quotes, Star } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import testimonials from '../data/testimonials';
import IconBadge from './IconBadge';

export default function TestimonialSlider() {
  const { ref, inView } = useScrollAnimation(0.05);

  return (
    <section ref={ref} className="py-20 sm:py-24 md:py-28 px-4 md:px-8 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/8 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(20,184,166,0.5) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-white">
            What Our{' '}
            <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            Real feedback from homeowners and businesses we've helped switch to solar.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative h-full bg-dark-light rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col
                         border border-white/5 hover:border-primary/30
                         transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,118,110,0.15)]"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <IconBadge
                  icon={Quotes}
                  size="sm"
                  tone="dark"
                  weight="fill"
                  className="text-white/55 border-white/8 group-hover:scale-110"
                />
              </div>

              {/* Type badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-light text-xs font-medium mb-5">
                {t.type}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-primary-light transition-colors duration-300">
                "{t.title}"
              </h3>

              {/* Review text */}
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {t.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="text-secondary text-xs" weight="fill" />
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 pt-5 mt-auto">
                {/* Person */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30 bg-white/10"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
