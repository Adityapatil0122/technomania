import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, EnvelopeSimple, GlobeHemisphereWest, MapPin, Phone } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import IconBadge from './IconBadge';
import BrandLogo from './BrandLogo';
import { company, primaryContact, secondaryContact } from '../data/company';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/our-work', label: 'Our Work' },
  { path: '/products', label: 'Products' },
  { path: '/contact', label: 'Contact' },
];

const serviceLinks = company.serviceFocus;

export default function Footer() {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-dark text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(161,214,92,0.45) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(161,214,92,0.45) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-20 md:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <Link to="/" className="mb-6 inline-flex" aria-label="Technomania Energy home">
              <BrandLogo size="footer" />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-custom">
              Pune-based solar specialists serving homes, shops, factories, and field sites across Maharashtra.
              We focus on rooftop solar, solar water pumps, and energy audits that lead to practical energy savings.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="relative mb-6 text-lg font-bold">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 rounded-full bg-secondary" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group flex items-center gap-2 text-sm text-gray-custom transition-all duration-300 hover:text-primary-light">
                    <ArrowRight className="-ml-4 text-xs text-secondary opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100" weight="bold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="relative mb-6 text-lg font-bold">
              Our Services
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 rounded-full bg-secondary" />
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link to="/services" className="group flex items-center gap-2 text-sm text-gray-custom transition-all duration-300 hover:text-primary-light">
                    <ArrowRight className="-ml-4 text-xs text-secondary opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100" weight="bold" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="relative mb-6 text-lg font-bold">
              Contact Us
              <span className="absolute -bottom-2 left-0 h-0.5 w-8 rounded-full bg-secondary" />
            </h4>
            <div className="space-y-4">
              <a href={primaryContact.phoneHref} className="flex items-start gap-3 text-sm text-gray-custom transition-colors duration-300 hover:text-primary-light">
                <IconBadge icon={Phone} size="xs" tone="dark" weight="bold" />
                {primaryContact.phone}
              </a>
              <a href={secondaryContact.phoneHref} className="flex items-start gap-3 text-sm text-gray-custom transition-colors duration-300 hover:text-primary-light">
                <IconBadge icon={Phone} size="xs" tone="dark" weight="bold" />
                {secondaryContact.phone}
              </a>
              <a href={primaryContact.emailHref} className="flex items-start gap-3 text-sm text-gray-custom transition-colors duration-300 hover:text-primary-light">
                <IconBadge icon={EnvelopeSimple} size="xs" tone="dark" weight="bold" />
                {primaryContact.email}
              </a>
              <a href={company.websiteUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-sm text-gray-custom transition-colors duration-300 hover:text-primary-light">
                <IconBadge icon={GlobeHemisphereWest} size="xs" tone="dark" weight="bold" />
                {company.website}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-custom">
                <IconBadge icon={MapPin} size="xs" tone="dark" weight="fill" />
                {company.shortAddress}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-custom">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="text-sm text-gray-custom transition-colors duration-300 hover:text-primary-light">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-gray-custom transition-colors duration-300 hover:text-primary-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
