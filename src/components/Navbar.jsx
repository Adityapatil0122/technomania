import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BatteryFull, CaretDown, Fire, LightbulbFilament, Lightning, List, SolarPanel, X } from '@phosphor-icons/react';
import IconBadge from './IconBadge';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/our-work', label: 'Our Work' },
  {
    label: 'Products',
    path: '/products',
    dropdown: [
      { path: '/products?cat=Solar Panels', label: 'Solar Panels', icon: SolarPanel },
      { path: '/products?cat=Inverters', label: 'Inverters', icon: Lightning },
      { path: '/products?cat=Batteries', label: 'Batteries', icon: BatteryFull },
      { path: '/products?cat=Water Heaters', label: 'Water Heaters', icon: Fire },
      { path: '/products?cat=Lighting', label: 'Lighting', icon: LightbulbFilament },
    ],
  },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-2xl py-2 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <motion.div
            className="relative inline-flex"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.png" alt="Technomania Logo" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
          </motion.div>
          <div>
            <h1 className="text-white text-base sm:text-lg font-bold leading-tight tracking-wide">
              Technomania
            </h1>
            <p className="text-primary-light text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase leading-tight">
              Energy LLP
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative"
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                  location.pathname === link.path
                    ? 'text-secondary bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <CaretDown
                    className={`text-xs transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-56 glass-dark rounded-xl overflow-hidden shadow-2xl"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white
                                   hover:bg-white/10 transition-all duration-200 text-sm"
                      >
                        <IconBadge icon={item.icon} size="xs" tone="dark" />
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/solar-calculator"
            className="hidden lg:inline-flex px-5 py-2.5 bg-secondary text-dark text-sm font-bold
                       rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105
                       transition-all duration-300"
          >
            Solar Calculator
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white text-xl p-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X weight="bold" /> : <List weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark mt-2 mx-3 sm:mx-4 rounded-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="p-3 sm:p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-secondary bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white
                                     text-xs transition-all duration-200"
                        >
                          <IconBadge icon={item.icon} size="xs" tone="dark" className="text-xs" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/solar-calculator"
                className="mt-2 px-4 py-3 bg-secondary text-dark text-sm font-bold
                           rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                Solar Calculator
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
