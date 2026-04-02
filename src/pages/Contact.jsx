import { motion } from 'framer-motion';
import { EnvelopeSimple, MapPin, Phone, UserCircle, WhatsappLogo } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import MountainDivider from '../components/MountainDivider';
import IconBadge from '../components/IconBadge';
import { buildWhatsAppUrl, company, primaryContact, secondaryContact } from '../data/company';

const contactCards = [
  {
    icon: Phone,
    label: 'Call Us',
    value: primaryContact.phone,
    detail: primaryContact.name,
    href: primaryContact.phoneHref,
    surface: 'bg-[#eef9f1] border-[#d6eedc]',
    accent: 'text-[#36a364]',
  },
  {
    icon: EnvelopeSimple,
    label: 'Email Us',
    value: primaryContact.email,
    detail: 'Primary contact',
    href: primaryContact.emailHref,
    surface: 'bg-[#eef4ff] border-[#d8e4ff]',
    accent: 'text-[#5d86eb]',
  },
  {
    icon: WhatsappLogo,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    detail: 'Fast response from our Pune team',
    href: buildWhatsAppUrl('Hello Technomania Energy, I would like to discuss a solar project.'),
    surface: 'bg-[#eefaf5] border-[#d7efe0]',
    accent: 'text-[#23a562]',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: company.address,
    detail: 'Narhe, Pune office',
    surface: 'bg-[#fff5ea] border-[#f4e0bf]',
    accent: 'text-[#f08b45]',
  },
  {
    icon: UserCircle,
    label: 'Projects Contact',
    value: secondaryContact.name,
    detail: `${secondaryContact.phone} | ${secondaryContact.email}`,
    href: secondaryContact.phoneHref,
    surface: 'bg-[#f4f6fb] border-[#e4e9f4]',
    accent: 'text-[#5b6a86]',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08 },
  }),
};

export default function Contact() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: contentRef, inView: contentInView } = useScrollAnimation(0.05);
  const { ref: mapRef, inView: mapInView } = useScrollAnimation(0.1);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative overflow-hidden gradient-hero pb-16 pt-24 sm:pb-20 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,214,92,0.12),transparent_30%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="mb-4 mt-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Talk to the <span className="text-gradient-amber">Technomania Team</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="mx-auto max-w-2xl text-lg text-white/70">
            Reach our Narhe, Pune team for rooftop solar, solar water pumps, and energy audits.
            Call, email, or message us directly, or send a detailed inquiry through the form below.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      <section ref={contentRef} className="px-4 py-16 md:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={contentInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="space-y-4">
              {contactCards.map((item, index) => {
                const content = (
                  <>
                    <IconBadge icon={item.icon} size="md" tone="light" weight="fill" className={`bg-white/80 border-white/70 shadow-none ${item.accent}`} />
                    <div className="min-w-0">
                      <p className={`text-sm font-bold uppercase tracking-[0.18em] ${item.accent}`}>{item.label}</p>
                      <p className="mt-2 break-words text-lg font-semibold leading-snug text-dark">{item.value}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-custom">{item.detail}</p>
                    </div>
                  </>
                );

                return (
                  <motion.div key={item.label} custom={index} initial="hidden" animate={contentInView ? 'visible' : 'hidden'} variants={cardVariants}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`flex items-center gap-4 rounded-[1.85rem] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(7,41,66,0.08)] sm:p-6 ${item.surface}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={`flex items-center gap-4 rounded-[1.85rem] border p-5 sm:p-6 ${item.surface}`}>
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={contentInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.08 }}>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <section ref={mapRef} className="px-4 pb-16 md:px-8 sm:pb-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={mapInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Visit The Office</p>
            <h2 className="mt-3 text-3xl font-bold text-dark md:text-4xl">
              Find us in <span className="text-secondary">Narhe, Pune</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-gray-custom">
              Visit our Narhe office or use the map below to plan your route.
            </p>
          </div>

          <div className="h-[24rem] overflow-hidden rounded-[2rem] border border-gray-100 shadow-[0_24px_72px_rgba(7,41,66,0.14)] sm:h-[30rem] lg:h-[36rem]">
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
