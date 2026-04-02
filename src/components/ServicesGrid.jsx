import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import services from '../data/services';

const serviceImages = [
  '/imgi_8_img6-DFPOJ7QV.jpg',
  '/imgi_4_img2-qR01P7nz.jpg',
  '/imgi_5_img3-s04cSDZm.jpg',
  '/imgi_6_img4-iIb3MwoK.jpg',
  '/imgi_7_img5-CktoCwMF.jpg',
];

export default function ServicesGrid() {
  const { ref, inView } = useScrollAnimation(0.05);

  return (
    <section ref={ref} className="bg-white px-4 py-16 md:px-8 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
          <h2 className="text-3xl font-bold text-dark md:text-4xl">What We Do</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-custom sm:text-base">
            From rooftop solar to water pumps and audits, we help customers choose systems that fit the site and the budget.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col items-center rounded-2xl bg-[#EDF5E4] p-6 text-center transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-5 flex h-28 w-28 items-center justify-center">
                <img
                  src={serviceImages[i]}
                  alt={service.title}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-500">{service.description}</p>
              <Link
                to="/services"
                className="mt-auto text-sm font-semibold text-primary transition-colors duration-200 hover:text-secondary"
              >
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
