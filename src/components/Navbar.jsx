import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BatteryFull, CaretDown, Fire, LightbulbFilament, Lightning, List, SolarPanel, X } from '@phosphor-icons/react';
import IconBadge from './IconBadge';
import BrandLogo from './BrandLogo';

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
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileProductsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-2 shadow-2xl sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Link to="/" className="group inline-flex items-center" aria-label="Technomania Energy home">
          <motion.div className="relative inline-flex" whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
            <BrandLogo size="nav" className="drop-shadow-[0_12px_30px_rgba(7,41,66,0.18)]" />
          </motion.div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              <Link
                to={link.path}
                className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path ? 'bg-white/10 text-secondary' : 'text-white/80 hover:bg-white/5 hover:text-white'
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

              <AnimatePresence>
                {link.dropdown && dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(12,44,66,0.96),rgba(7,41,66,0.94))] p-2 shadow-[0_28px_80px_rgba(4,27,44,0.42)] backdrop-blur-xl"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/80 transition-all duration-200 hover:bg-white/6 hover:text-white"
                      >
                        <IconBadge
                          icon={item.icon}
                          size="sm"
                          tone="menu"
                          weight="fill"
                          className="group-hover:scale-105 group-hover:shadow-[0_16px_36px_rgba(161,214,92,0.12)]"
                        />
                        <span className="font-medium tracking-[0.01em]">{item.label}</span>
                        <span className="ml-auto h-2 w-2 rounded-full bg-secondary/0 transition-colors duration-200 group-hover:bg-secondary/70" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/solar-calculator"
            className="hidden rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_22px_rgba(161,214,92,0.3)] lg:inline-flex"
          >
            Solar Calculator
          </Link>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-xl text-white backdrop-blur-sm lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X weight="bold" /> : <List weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-[#041B2C]/65 backdrop-blur-[2px] lg:hidden"
              aria-label="Close mobile menu overlay"
            />

            <motion.aside
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed right-0 top-0 z-50 flex h-[100dvh] w-[min(22rem,88vw)] flex-col border-l border-white/10 bg-[linear-gradient(180deg,rgba(4,27,44,0.98),rgba(7,41,66,0.96))] px-4 pb-6 pt-5 shadow-[0_24px_80px_rgba(4,27,44,0.46)] backdrop-blur-xl lg:hidden"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <Link to="/" className="min-w-0" aria-label="Technomania Energy home">
                  <BrandLogo size="nav" className="max-w-full" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-white/10 p-2 text-white"
                  aria-label="Close menu"
                >
                  <X weight="bold" />
                </button>
              </div>

              <div className="mt-5 flex-1 overflow-y-auto pr-1">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.label} className="rounded-2xl border border-transparent bg-white/0">
                      {link.dropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setMobileProductsOpen((open) => !open)}
                            className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                              location.pathname === link.path ? 'bg-white/10 text-secondary' : 'text-white/85 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <span>{link.label}</span>
                            <CaretDown className={`transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                          </button>

                          <AnimatePresence initial={false}>
                            {mobileProductsOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-1 flex flex-col gap-1 rounded-2xl bg-white/5 p-2">
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.label}
                                      to={item.path}
                                      className="group flex items-center gap-3 rounded-xl px-3 py-3 text-xs font-medium text-white/75 transition-all duration-200 hover:bg-white/6 hover:text-white"
                                    >
                                      <IconBadge icon={item.icon} size="xs" tone="menu" weight="fill" className="group-hover:scale-105" />
                                      <span>{item.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                            location.pathname === link.path ? 'bg-white/10 text-secondary' : 'text-white/85 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <Link
                  to="/solar-calculator"
                  className="flex w-full items-center justify-center rounded-2xl bg-secondary px-4 py-3 text-sm font-bold text-dark shadow-[0_14px_30px_rgba(161,214,92,0.22)] transition-all duration-300"
                >
                  Solar Calculator
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
