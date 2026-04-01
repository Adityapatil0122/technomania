import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, EnvelopeSimple, FacebookLogo, InstagramLogo, Lightning, LinkedinLogo, MapPin, Phone, XLogo } from '@phosphor-icons/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import IconBadge from './IconBadge';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/our-work', label: 'Our Work' },
  { path: '/products', label: 'Products' },
  { path: '/contact', label: 'Contact' },
];

const serviceLinks = [
  'Solar Panel Installation',
  'Wind Turbine Solutions',
  'Energy Storage Systems',
  'Consultation & Design',
  'Energy Audits',
];

const socialLinks = [
  { icon: FacebookLogo, url: '#', label: 'Facebook' },
  { icon: XLogo, url: '#', label: 'Twitter' },
  { icon: LinkedinLogo, url: '#', label: 'LinkedIn' },
  { icon: InstagramLogo, url: '#', label: 'Instagram' },
];

export default function Footer() {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <footer ref={ref} className="bg-dark text-white relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Energy grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(20,184,166,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(20,184,166,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Technomania Logo" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
              <div>
                <h3 className="text-lg font-bold leading-tight">Technomania</h3>
                <p className="text-primary-light text-[10px] tracking-[0.25em] uppercase">Energy LLP</p>
              </div>
            </Link>
            <p className="text-gray-custom text-sm leading-relaxed mb-6">
              Clean energy for homes and businesses across Maharashtra.
              Solar, wind, and battery systems that actually save you money.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="text-gray-custom hover:text-primary-light transition-all duration-300
                             hover:scale-110 inline-flex"
                >
                  <IconBadge icon={social.icon} size="xs" tone="dark" weight="fill" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-custom text-sm hover:text-primary-light transition-all duration-300
                               flex items-center gap-2 group"
                  >
                    <ArrowRight className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-secondary" weight="bold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-custom text-sm hover:text-primary-light transition-all duration-300
                               flex items-center gap-2 group"
                  >
                    <ArrowRight className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-secondary" weight="bold" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <div className="space-y-4">
              <a href="tel:+919545345765" className="flex items-start gap-3 text-gray-custom text-sm hover:text-primary-light transition-colors duration-300">
                <IconBadge icon={Phone} size="xs" tone="dark" weight="bold" />
                +91 95453 45765
              </a>
              <a href="mailto:info@technomania.in" className="flex items-start gap-3 text-gray-custom text-sm hover:text-primary-light transition-colors duration-300">
                <IconBadge icon={EnvelopeSimple} size="xs" tone="dark" weight="bold" />
                info@technomania.in
              </a>
              <div className="flex items-start gap-3 text-gray-custom text-sm">
                <IconBadge icon={MapPin} size="xs" tone="dark" weight="fill" />
                Greenland County, Narhe, Pune, Maharashtra
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-custom text-sm">
            &copy; {new Date().getFullYear()} Technomania Energy LLP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-custom text-sm hover:text-primary-light transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-custom text-sm hover:text-primary-light transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
