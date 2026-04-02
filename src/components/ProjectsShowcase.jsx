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
    <section ref={ref} className="overflow-hidden px-4 py-16 md:px-8 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Recent Work
          </span>
          <h2 className="mt-3 text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-custom">
            A few of the solar installations we have completed across Maharashtra.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative h-56 cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl sm:h-72 sm:rounded-3xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90 sm:opacity-60" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-0 p-4 text-white transition-transform duration-500 sm:translate-y-4 sm:p-6 sm:group-hover:translate-y-0">
                <span className="mb-2 inline-block rounded-full bg-primary/80 px-3 py-1 text-xs font-medium sm:mb-3">
                  {project.category}
                </span>
                <h3 className="mb-1 text-lg font-bold sm:mb-2 sm:text-xl">{project.title}</h3>
                <div className="flex items-center gap-3 text-xs text-white/70 transition-all duration-500 delay-100 sm:gap-4 sm:text-sm sm:opacity-0 sm:group-hover:opacity-100">
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
          className="mt-12 text-center"
        >
          <Link
            to="/our-work"
            className="group inline-flex items-center gap-2 rounded-full gradient-primary px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(76,105,113,0.24)]"
          >
            View All Projects
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
