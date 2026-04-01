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

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 gradient-hero overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
        >
          Our <span className="text-gradient-amber">Work</span>
        </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Here are some of the solar and energy projects we've completed across Maharashtra.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      {/* Filters & Grid */}
      <section ref={gridRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === f
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-custom hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl
                           transition-all duration-500 bg-white"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-custom text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-custom border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1">
                      <IconBadge icon={MapPin} size="xs" tone="muted" weight="fill" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <IconBadge icon={Lightning} size="xs" tone="secondary" weight="fill" />
                      {project.capacity}
                    </span>
                    <span className="flex items-center gap-1 ml-auto">
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
