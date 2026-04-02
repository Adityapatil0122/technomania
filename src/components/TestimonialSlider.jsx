import { motion } from 'framer-motion';
import { Quotes, Star } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import testimonials from '../data/testimonials';
import IconBadge from './IconBadge';

export default function TestimonialSlider() {
  const { ref, inView } = useScrollAnimation(0.05);

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark px-4 py-20 md:px-8 sm:py-24 md:py-28">
      <div className="absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/8 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(161,214,92,0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-light">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            What Our <span className="text-secondary">Clients Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/40">
            Feedback from homeowners and businesses we have worked with.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative flex h-full flex-col rounded-2xl border border-white/5 bg-dark-light p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(76,105,113,0.18)] sm:rounded-3xl sm:p-8"
            >
              <div className="absolute right-6 top-6">
                <IconBadge
                  icon={Quotes}
                  size="sm"
                  tone="dark"
                  weight="fill"
                  className="border-white/8 text-white/55 group-hover:scale-110"
                />
              </div>

              <span className="mb-5 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                {t.type}
              </span>

              <h3 className="mb-3 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-primary-light">
                "{t.title}"
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-white/50">
                {t.text}
              </p>

              <div className="mb-6 flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="text-xs text-secondary" weight="fill" />
                ))}
              </div>

              <div className="mt-auto border-t border-white/5 pt-5">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full bg-white/10 object-cover ring-2 ring-primary/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.location}</p>
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
