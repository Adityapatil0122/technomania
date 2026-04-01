import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';
import services from '../data/services';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import MountainDivider from '../components/MountainDivider';
import IconBadge from '../components/IconBadge';

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We visit your site, check your electricity usage, and figure out the best setup for you.' },
  { step: '02', title: 'Design', desc: 'We design a system that saves you the most money while fitting your roof and budget.' },
  { step: '03', title: 'Installation', desc: 'Our trained team installs everything quickly and cleanly — minimal hassle for you.' },
  { step: '04', title: 'Support', desc: 'We monitor your system, fix issues fast, and are available 24/7 if you need help.' },
];

export default function Services() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation(0.05);
  const { ref: processRef, inView: processInView } = useScrollAnimation(0.05);

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
          Our <span className="text-gradient-amber">Services</span>
        </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Here's how we can help you save on electricity and switch to clean power.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      {/* Services Detail */}
      <section ref={servicesRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-14 sm:space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
            >
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <IconBadge icon={service.icon} size="lg" className="mb-6" />
                <h2 className="text-3xl font-bold text-dark mb-4">{service.title}</h2>
                <p className="text-gray-custom leading-relaxed mb-6 text-lg">{service.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-custom">
                      <IconBadge icon={CheckCircle} size="xs" tone="muted" weight="fill" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white
                             font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get a Quote <ArrowRight className="text-sm" weight="bold" />
                </Link>
              </div>
              <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div
                  className="rounded-3xl h-72 lg:h-80 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${service.color}10, ${service.color}05)` }}
                >
                  <service.icon className="text-[120px] opacity-10" style={{ color: service.color }} />
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `radial-gradient(${service.color} 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3">
              How We <span className="text-gradient">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl
                           transition-all duration-500 group relative overflow-hidden"
              >
                <span className="text-6xl font-bold text-primary/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors duration-300">
                  {item.step}
                </span>
                <div className="w-14 h-14 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-5 relative z-10">
                  <span className="text-white text-lg font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-custom text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
