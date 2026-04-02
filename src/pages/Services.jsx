import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';
import services from '../data/services';
import MountainDivider from '../components/MountainDivider';
import IconBadge from '../components/IconBadge';

const serviceImages = [
  '/imgi_8_img6-DFPOJ7QV.jpg',
  '/imgi_4_img2-qR01P7nz.jpg',
  '/imgi_5_img3-s04cSDZm.jpg',
  '/imgi_6_img4-iIb3MwoK.jpg',
  '/imgi_7_img5-CktoCwMF.jpg',
];

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We visit your site, review your electricity usage, and figure out which solar direction makes the most sense.' },
  { step: '02', title: 'Survey & Design', desc: 'We study the roof, load, or field conditions and design a solution that makes technical and financial sense.' },
  { step: '03', title: 'Execution', desc: 'Our team installs the system cleanly and methodically so the final result is easy to operate and maintain.' },
  { step: '04', title: 'Audit & Support', desc: 'We review system performance, highlight savings opportunities, and stay available for follow-up support.' },
];

export default function Services() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation(0.05);
  const { ref: processRef, inView: processInView } = useScrollAnimation(0.05);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative overflow-hidden gradient-hero pb-16 pt-24 sm:pb-20 sm:pt-32">
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="mb-6 mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our <span className="text-gradient-amber">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="mx-auto max-w-2xl text-lg text-white/70">
            Here is how we help customers lower electricity costs and move to cleaner, site-appropriate power.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.18 }} className="mx-auto mt-3 max-w-2xl text-sm text-white/50 sm:text-base">
            Our work covers rooftop solar, solar water pumps, energy audits, and the site support that ties them together.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      <section ref={servicesRef} className="px-4 py-16 md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-14 sm:space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <IconBadge icon={service.icon} size="lg" className="mb-6" />
                <h2 className="mb-4 text-3xl font-bold text-dark">{service.title}</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-custom">{service.description}</p>
                <div className="mb-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-custom">
                      <IconBadge icon={CheckCircle} size="xs" tone="muted" weight="fill" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Request a Quote <ArrowRight className="text-sm" weight="bold" />
                </Link>
              </div>
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="h-72 overflow-hidden rounded-3xl shadow-lg lg:h-80">
                  <img
                    src={serviceImages[i]}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={processRef} className="bg-gray-50 px-4 py-16 md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={processInView ? { opacity: 1, y: 0 } : {}} className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Process</span>
            <h2 className="mt-3 text-3xl font-bold text-dark md:text-4xl">
              How We <span className="text-gradient">Work</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                <span className="absolute right-4 top-4 text-6xl font-bold text-primary/5 transition-colors duration-300 group-hover:text-primary/10">
                  {item.step}
                </span>
                <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary">
                  <span className="text-lg font-bold text-white">{item.step}</span>
                </div>
                <h3 className="relative z-10 mb-2 text-lg font-bold text-dark">{item.title}</h3>
                <p className="relative z-10 text-sm leading-relaxed text-gray-custom">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
