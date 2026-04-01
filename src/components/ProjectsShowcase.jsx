import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Lightning, MapPin } from '@phosphor-icons/react';
import projects from '../data/projects';
import IconBadge from './IconBadge';

export default function ProjectsShowcase() {
  const { ref, inView } = useScrollAnimation(0.05);
  const featured = projects.slice(0, 4);

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-dark">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-custom mt-4 max-w-2xl mx-auto text-lg">
            Some of the solar and energy projects we've completed across Maharashtra.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl
                         transition-all duration-500 cursor-pointer h-56 sm:h-72"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent
                              opacity-70 sm:opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content overlay — always visible on mobile, reveal on desktop hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform
                              translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-xs font-medium mb-2 sm:mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                <div className="flex items-center gap-3 sm:gap-4 text-white/70 text-xs sm:text-sm
                                opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="flex items-center gap-1">
                    <IconBadge icon={MapPin} size="xs" tone="dark" weight="fill" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconBadge icon={Lightning} size="xs" tone="dark" weight="fill" />
                    {project.capacity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/our-work"
            className="group inline-flex items-center gap-2 px-8 py-4 gradient-primary text-white
                       font-bold rounded-full hover:shadow-[0_0_30px_rgba(15,118,110,0.4)]
                       hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
