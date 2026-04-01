import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import SolarCalculator from '../components/SolarCalculator';
import { CurrencyInr, Leaf, ShieldCheck, SolarPanel } from '@phosphor-icons/react';
import MountainDivider from '../components/MountainDivider';
import IconBadge from '../components/IconBadge';

const benefits = [
  { icon: SolarPanel, title: 'Right System Size', desc: 'Find out what size solar setup matches your actual electricity use.' },
  { icon: CurrencyInr, title: 'Real Savings Numbers', desc: 'See how much you\'ll actually save on your electricity bill each month.' },
  { icon: Leaf, title: 'Help the Environment', desc: 'Find out how much CO2 you\'ll cut by switching to solar.' },
  { icon: ShieldCheck, title: 'Know Your ROI', desc: 'See when your system pays for itself and starts saving you money.' },
];

export default function SolarCalculatorPage() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: benefitsRef, inView: benefitsInView } = useScrollAnimation(0.05);

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 gradient-hero overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
        >
          Solar <span className="text-gradient-amber">Calculator</span>
        </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            See how much you could save and find the right solar system for your home or business.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      {/* Calculator */}
      <section className="py-24 px-4 md:px-8 -mt-8">
        <div className="max-w-4xl mx-auto">
          <SolarCalculator />
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Why Go Solar?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3">
              Benefits of <span className="text-gradient">Solar Energy</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl
                           transition-all duration-500 group"
              >
                <IconBadge icon={item.icon} size="lg" className="mx-auto mb-5 group-hover:scale-110" />
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-custom text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
