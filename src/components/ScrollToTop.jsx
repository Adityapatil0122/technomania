import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from '@phosphor-icons/react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-[5.5rem] right-4 sm:bottom-24 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12
                     rounded-2xl bg-white border border-primary/12 text-primary shadow-[0_14px_30px_rgba(21,153,70,0.2)]
                     hover:text-primary-light hover:-translate-y-0.5 transition-all duration-300 cursor-pointer
                     flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp weight="bold" className="text-2xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
