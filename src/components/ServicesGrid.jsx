import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from '@phosphor-icons/react';
import services from '../data/services';

function ServiceCard({ service, i, inView }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-6deg', '6deg']);

  function handleMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '1000px' }}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl
                 border border-gray-100 hover:border-transparent relative overflow-hidden cursor-pointer"
    >
      {/* Bottom color reveal bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl"
        style={{ background: service.color }}
      />

      {/* Corner accent */}
      <div
        className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 scale-50 group-hover:scale-100"
        style={{ background: service.color }}
      />

      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at top right, ${service.color}, transparent 70%)` }}
      />

      <div style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-start gap-3 mb-4">
          <div
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: `${service.color}18` }}
          >
            <service.icon className="text-lg" style={{ color: service.color }} weight="duotone" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-dark leading-tight mt-1 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
          {service.description}
        </p>

        <ul className="space-y-1 mb-4">
          {service.features.slice(0, 3).map((f, fi) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08 + fi * 0.05 + 0.3 }}
              className="text-[11px] text-gray-400 flex items-center gap-1.5"
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150"
                style={{ background: service.color }}
              />
              {f}
            </motion.li>
          ))}
        </ul>

        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-300"
          style={{ color: service.color }}
        >
          Learn More
          <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-[10px]" weight="bold" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const { ref, inView } = useScrollAnimation(0.05);

  return (
    <section ref={ref} className="py-14 sm:py-18 md:py-20 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[60px] translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-primary font-semibold text-xs tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-dark">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to switch to clean energy — whether it's for your home,
            office, or factory.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
