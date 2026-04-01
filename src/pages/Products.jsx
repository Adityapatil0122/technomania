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

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

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
          Our <span className="text-gradient-amber">Products</span>
        </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Everything you need for solar power — panels, inverters, batteries, and more.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      {/* Products Grid */}
      <section ref={gridRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-custom hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
