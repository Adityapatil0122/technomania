import { motion } from 'framer-motion';
import { ArrowRight, Check } from '@phosphor-icons/react';
import IconBadge from './IconBadge';
import { buildWhatsAppUrl } from '../data/company';

export default function ProductCard({ product, index, inView }) {
  const whatsappUrl = buildWhatsAppUrl(`Hi, I'm interested in the ${product.name} (${product.spec}). Can you share more details?`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex h-full flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl
                 transition-all duration-500 border border-gray-100 hover:border-primary/20"
    >
      <div className="relative overflow-hidden h-44 sm:h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
          {product.spec}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="text-base sm:text-lg font-bold text-dark mt-3 mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-custom text-sm leading-relaxed mb-4">{product.description}</p>

        <div className="space-y-2 mb-4">
          {product.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-gray-custom">
              <IconBadge icon={Check} size="xs" tone="muted" weight="bold" />
              {f}
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
          <span className="text-xl sm:text-2xl font-bold text-gradient">{product.price}</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary
                       transition-all duration-300 hover:gap-3 hover:text-dark"
          >
            <span>Enquire</span>
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
