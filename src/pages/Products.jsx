import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import products, { categories } from '../data/products';
import MountainDivider from '../components/MountainDivider';

export default function Products() {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat');
  const [activeCategory, setActiveCategory] = useState(catParam || 'All');
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: gridRef, inView: gridInView } = useScrollAnimation(0.05);

  useEffect(() => {
    if (catParam) setActiveCategory(catParam);
  }, [catParam]);

  const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative overflow-hidden gradient-hero pb-16 pt-24 sm:pb-20 sm:pt-32">
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="mb-6 mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our <span className="text-gradient-amber">Products</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="mx-auto max-w-2xl text-lg text-white/70">
            Browse commonly requested solar products, from panels and inverters to batteries and water-heating solutions.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      <section ref={gridRef} className="px-4 py-16 md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 sm:px-6 ${
                  activeCategory === cat ? 'gradient-primary text-white shadow-lg' : 'bg-gray-100 text-gray-custom hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} inView={gridInView} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
