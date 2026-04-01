import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { Clock, EnvelopeSimple, MapPin, Phone, WhatsappLogo } from '@phosphor-icons/react';
import MountainDivider from '../components/MountainDivider';
import IconBadge from '../components/IconBadge';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 95453 45765', href: 'tel:+919545345765' },
  { icon: WhatsappLogo, label: 'WhatsApp', value: '+91 95453 45765', href: 'https://wa.me/919545345765' },
  { icon: EnvelopeSimple, label: 'Email', value: 'info@technomania.in', href: 'mailto:info@technomania.in' },
  { icon: MapPin, label: 'Address', value: 'Greenland County, Narhe, Pune, Maharashtra' },
  { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Contact() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: contentRef, inView: contentInView } = useScrollAnimation(0.05);
  const { ref: mapRef, inView: mapInView } = useScrollAnimation(0.1);

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 gradient-hero overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4 sm:mb-6"
          >
            Get in <span className="text-gradient-amber">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Want to switch to solar? Get in touch — we&apos;ll help you figure out the best option.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      {/* Contact Info Cards */}
      <section ref={contentRef} className="py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Info cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-12 sm:mb-16">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                animate={contentInView ? 'visible' : 'hidden'}
                variants={cardVariants}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100
                           hover:shadow-xl hover:border-primary/20 transition-all duration-300 group text-center"
              >
                <div className="flex justify-center mb-3">
                  <IconBadge icon={item.icon} size="md" className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-dark font-medium text-sm hover:text-primary transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-dark font-medium text-sm">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Full Width Map */}
      <section ref={mapRef} className="px-4 md:px-8 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={mapInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark">
              Find Us <span className="text-gradient">Here</span>
            </h2>
            <p className="text-gray-custom text-sm mt-2">Visit our office in Pune, Maharashtra</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-72 sm:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d73.85!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzAwLjAiTiA3M8KwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Technomania Energy Location"
            />
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
