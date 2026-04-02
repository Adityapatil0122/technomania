import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Leaf, ShieldCheck, UsersThree } from '@phosphor-icons/react';
import IconBadge from './IconBadge';
import { company } from '../data/company';

const highlights = [
  { icon: Leaf, title: 'Rooftop Solar', desc: 'Homes, offices, and plants' },
  { icon: ShieldCheck, title: 'Water Pumps', desc: 'Dependable field systems' },
  { icon: UsersThree, title: 'Energy Audits', desc: 'Clear next steps' },
];

export default function AboutPreview() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="overflow-hidden px-4 py-16 md:px-8 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/imgi_9_img1-CvcHrirJ.jpg"
              alt="Technomania commercial solar installation"
              className="h-[280px] w-full object-cover sm:h-[350px] md:h-[400px] lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </div>
          <div className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-3xl border-2 border-primary/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </span>
          <h2 className="mt-3 mb-6 text-3xl font-bold leading-tight text-dark md:text-4xl lg:text-5xl">
            Solar Planning Built Around <span className="text-secondary">Real Needs</span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-custom">
            {company.legalName} helps homes, shops, factories, and field sites move to practical solar systems.
            Our work starts with the site and stays grounded through survey, sizing, installation, and support.
          </p>
          <p className="mb-8 leading-relaxed text-gray-custom">
            From our Narhe, Pune base, we focus on rooftop solar, solar water pumps, and energy audits
            that help customers lower recurring electricity costs with a clear, workable plan.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="h-full rounded-2xl bg-gray-50 p-4 text-center transition-colors duration-300 hover:bg-primary/5"
              >
                <IconBadge icon={item.icon} size="sm" className="mx-auto mb-3" />
                <p className="text-sm font-semibold text-dark">{item.title}</p>
                <p className="mt-1 text-xs text-gray-custom">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-full gradient-primary px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(76,105,113,0.24)]"
          >
            Learn More
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
