import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Leaf, ShieldCheck, UsersThree } from '@phosphor-icons/react';
import IconBadge from './IconBadge';

const highlights = [
  { icon: Leaf, title: 'Eco-Friendly', desc: '100% clean energy' },
  { icon: ShieldCheck, title: 'Reliable', desc: '25-year warranty' },
  { icon: UsersThree, title: 'Expert Team', desc: 'Trained professionals' },
];

export default function AboutPreview() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/imgi_9_img1-CvcHrirJ.jpg"
              alt="Technomania commercial solar installation"
              className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </div>


          {/* Decorative */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-3xl -z-10" />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-dark leading-tight">
            Leading the Way in{' '}
            <span className="text-gradient">Green Energy</span>
          </h2>
          <p className="text-gray-custom leading-relaxed mb-6 text-lg">
            Technomania Energy LLP helps homes, shops, and factories switch to clean energy.
            We handle everything — from picking the right system to getting it installed and running.
          </p>
          <p className="text-gray-custom leading-relaxed mb-8">
            Based in Pune, we've done over 500 projects across Maharashtra.
            Our clients save real money on electricity — and help the environment while they're at it.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="h-full text-center p-3 sm:p-4 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-colors duration-300"
              >
                <IconBadge icon={item.icon} size="sm" className="mx-auto mb-3" />
                <p className="text-sm font-semibold text-dark">{item.title}</p>
                <p className="text-xs text-gray-custom mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link
            to="/about"
            className="group inline-flex items-center gap-2 px-8 py-4 gradient-primary text-white
                       font-bold rounded-full hover:shadow-[0_0_30px_rgba(15,118,110,0.4)]
                       hover:scale-105 transition-all duration-300"
          >
            Learn More About Us
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
