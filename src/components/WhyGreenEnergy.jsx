import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, GlobeHemisphereWest, Handshake, Leaf } from '@phosphor-icons/react';
import IconBadge from './IconBadge';

const sections = [
  {
    icon: Leaf,
    title: 'Why Choose Green Energy?',
    text: 'Green energy comes from natural sources like sunlight, wind, and water. These resources are renewable — they never run out and cause far less pollution compared to fossil fuels. Switching to green energy means lower bills and a healthier planet.',
  },
  {
    icon: Handshake,
    title: 'Our Commitment',
    text: 'At Technomania Energy LLP, we provide sustainable energy solutions that help reduce carbon footprints and promote environmental conservation. We work hard to bring the latest innovations in renewable energy to our customers.',
  },
  {
    icon: GlobeHemisphereWest,
    title: 'Join the Revolution',
    text: 'By choosing green energy, you are making a commitment to a cleaner, healthier planet. Join us in the revolution towards sustainable energy and make a real difference today.',
  },
];

export default function WhyGreenEnergy() {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-20 sm:py-24 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Why Green Energy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-dark">
            Learn More About{' '}
            <span className="text-gradient">Green Energy</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text Side */}
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
                    <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                    <p className="text-gray-custom leading-relaxed">
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
              className="pt-2 pl-0 sm:pl-[64px]"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-dark
                           font-bold rounded-full hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]
                           hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/imgi_6_img4-iIb3MwoK.jpg"
                    alt="Residential solar installation in Pune"
                    className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/imgi_7_img5-CktoCwMF.jpg"
                    alt="Solar tree installation"
                    className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/imgi_4_img2-qR01P7nz.jpg"
                    alt="Commercial solar panel array"
                    className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/imgi_5_img3-s04cSDZm.jpg"
                    alt="Large scale solar installation"
                    className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-secondary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
