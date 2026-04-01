import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 2500, suffix: 'kW', label: 'Energy Installed' },
  { value: 400, suffix: '+', label: 'Happy Customers' },
  { value: 8, suffix: '+', label: 'Years Experience' },
];

function AnimatedCounter({ target, inView, suffix }) {
  const [count, setCount] = useState(0);
  const counted = useRef(false);

  useEffect(() => {
    if (inView && !counted.current) {
      counted.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const { ref, inView } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="relative bg-white py-10 sm:py-14 px-4 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center py-6 sm:py-8 px-4 relative
                ${i < stats.length - 1 ? 'after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-gray-100' : ''}`}
            >
              <div className="mb-2">
                <AnimatedCounter target={stat.value} inView={inView} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
