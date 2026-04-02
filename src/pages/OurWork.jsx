import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';
import projects from '../data/projects';
import { CurrencyInr, Lightning, MapPin } from '@phosphor-icons/react';
import MountainDivider from '../components/MountainDivider';
import IconBadge from '../components/IconBadge';

const filters = ['All', 'Residential', 'Commercial', 'Industrial'];

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: gridRef, inView: gridInView } = useScrollAnimation(0.05);

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative overflow-hidden gradient-hero pb-16 pt-24 sm:pb-20 sm:pt-32">
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="mb-6 mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our <span className="text-secondary">Work</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="mx-auto max-w-2xl text-lg text-white/70">
            A look at some of the rooftop solar projects we have completed across Maharashtra.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      <section ref={gridRef} className="px-4 py-16 md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 sm:px-6 ${
                  activeFilter === f ? 'gradient-primary text-white shadow-lg' : 'bg-gray-100 text-gray-custom hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-dark transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-custom">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4 text-xs text-gray-custom">
                    <span className="flex items-center gap-1">
                      <IconBadge icon={MapPin} size="xs" tone="muted" weight="fill" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <IconBadge icon={Lightning} size="xs" tone="secondary" weight="fill" />
                      {project.capacity}
                    </span>
                    <span className="flex items-center gap-1 sm:ml-auto">
                      <IconBadge icon={CurrencyInr} size="xs" tone="muted" weight="bold" />
                      {project.savings}/mo
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
