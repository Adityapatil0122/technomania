import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const checkHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      setHovering(!!isInteractive);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', checkHover, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [visible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: pos.x - (hovering ? 24 : 18),
          y: pos.y - (hovering ? 24 : 18),
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          opacity: visible ? (clicking ? 0.8 : 0.5) : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
        style={{
          borderRadius: '50%',
          border: `2px solid ${hovering ? '#F59E0B' : '#159946'}`,
          background: hovering
            ? 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)',
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: clicking ? 0.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: hovering ? '#F59E0B' : '#159946',
          boxShadow: `0 0 10px ${hovering ? '#F59E0B' : '#159946'}`,
        }}
      />
    </>
  );
}
