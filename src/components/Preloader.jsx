import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-4 sm:gap-6 px-4">
        {/* Solar panel icon with energy rays */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
          {/* Outer energy ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary-light/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-secondary/30"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />

          {/* Center sun */}
          <motion.div
            className="absolute inset-2 sm:inset-3 rounded-full"
            style={{
              background: 'radial-gradient(circle, #FCD34D 0%, #F59E0B 50%, #D97706 100%)',
              boxShadow: '0 0 30px rgba(245,158,11,0.5), 0 0 60px rgba(245,158,11,0.2)',
            }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Rotating rays */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 sm:w-1 rounded-full left-1/2 -ml-[1px] sm:-ml-[2px]"
                style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(to top, transparent, #159946)'
                    : 'linear-gradient(to top, transparent, #F59E0B)',
                  height: i % 2 === 0 ? '8px' : '12px',
                  transformOrigin: '50% 48px',
                  transform: `rotate(${i * 30}deg)`,
                  top: '-4px',
                }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </motion.div>

          {/* Small orbiting energy dots */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: i === 1 ? '#F59E0B' : '#159946',
                boxShadow: `0 0 8px ${i === 1 ? '#F59E0B' : '#159946'}`,
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [
                  Math.cos(i * (Math.PI * 2 / 3)) * 44,
                  Math.cos(i * (Math.PI * 2 / 3) + Math.PI) * 44,
                  Math.cos(i * (Math.PI * 2 / 3) + Math.PI * 2) * 44,
                ],
                y: [
                  Math.sin(i * (Math.PI * 2 / 3)) * 44,
                  Math.sin(i * (Math.PI * 2 / 3) + Math.PI) * 44,
                  Math.sin(i * (Math.PI * 2 / 3) + Math.PI * 2) * 44,
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white tracking-wider">
            TECHNOMANIA
          </h2>
          <p className="text-primary-light text-sm tracking-[0.3em] mt-1">
            ENERGY LLP
          </p>
        </motion.div>

        {/* Energy loading bar */}
        <div className="w-36 sm:w-48 h-1.5 bg-dark-light rounded-full overflow-hidden mt-4 relative">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #159946, #159946, #F59E0B, #159946, #159946)',
              backgroundSize: '200% 100%',
            }}
            initial={{ width: 0 }}
            animate={{ width: '100%', backgroundPosition: ['0% 0%', '200% 0%'] }}
            transition={{
              width: { duration: 2, ease: 'easeInOut' },
              backgroundPosition: { duration: 1.5, repeat: Infinity, ease: 'linear' },
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
