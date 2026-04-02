import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, ChartLineUp, Drop, SolarPanel } from '@phosphor-icons/react';
import IconBadge from './IconBadge';

const sections = [
  {
    icon: SolarPanel,
    title: 'Rooftop Solar That Fits the Property',
    text: 'We size rooftop systems around your roof area, energy use, and payback goals so the setup makes sense from day one.',
  },
  {
    icon: Drop,
    title: 'Solar Water Pumps for Field Use',
    text: 'For agricultural and utility needs, we plan pumping systems that reduce recurring power cost and keep day-to-day operation dependable.',
  },
  {
    icon: ChartLineUp,
    title: 'Energy Audits with Clear Next Steps',
    text: 'Before recommending upgrades, we study your current load, waste points, and savings opportunities so the next decision is grounded in numbers.',
  },
];

export default function WhyGreenEnergy() {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="overflow-hidden px-4 py-20 md:px-8 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Focus Areas
          </span>
          <h2 className="mt-3 text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            What <span className="text-secondary">Technomania</span> Delivers
          </h2>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {sections.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="flex items-start gap-4">
                  <IconBadge icon={item.icon} size="md" className="mt-0.5" />
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-dark">{item.title}</h3>
                    <p className="leading-relaxed text-gray-custom">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pl-0 pt-2 sm:pl-[64px]"
            >
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-bold text-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(161,214,92,0.3)] sm:w-auto"
              >
                Talk to Our Team
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" weight="bold" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/imgi_4_img2-qR01P7nz.jpg"
                    alt="Rooftop solar installation"
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-56"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/imgi_6_img4-iIb3MwoK.jpg"
                    alt="Solar panel closeup"
                    className="h-36 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-44"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/imgi_5_img3-s04cSDZm.jpg"
                    alt="Large-scale solar installation"
                    className="h-36 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-44"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/imgi_7_img5-CktoCwMF.jpg"
                    alt="Solar energy project"
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-56"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-3xl border-2 border-primary/20" />
            <div className="absolute -bottom-4 -left-4 -z-10 h-20 w-20 rounded-2xl border-2 border-secondary/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
