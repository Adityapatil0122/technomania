import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import SolarCalculator from '../components/SolarCalculator';
import MountainDivider from '../components/MountainDivider';

const simplePoints = [
  'Clean one-page estimate',
  'Simple bill split chart',
  'Easy to understand output',
];

export default function SolarCalculatorPage() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();

  return (
    <PageTransition>
      <section ref={heroRef} className="relative overflow-hidden gradient-hero pb-16 pt-24 sm:pb-20 sm:pt-32">
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="mb-6 mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Solar <span className="text-gradient-amber">Load Calculator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-lg text-white/70"
          >
            A calm and simple way to estimate the right solar size for your bill, roof area, and location.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {simplePoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/80 backdrop-blur-sm"
              >
                {point}
              </span>
            ))}
          </motion.div>
        </div>
        <MountainDivider />
      </section>

      <section className="-mt-8 px-4 py-16 md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SolarCalculator />
        </div>
      </section>
    </PageTransition>
  );
}
