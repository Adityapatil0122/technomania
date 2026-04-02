import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperPlaneTilt, WhatsappLogo, X } from '@phosphor-icons/react';
import { buildWhatsAppUrl } from '../data/company';

const quickMessages = [
  'I want to know about rooftop solar for my home',
  'Please help me plan a solar water pump',
  'I need an energy audit for my site',
  'Can we schedule a site visit in Pune?',
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const sendMessage = (text) => {
    const whatsappUrl = buildWhatsAppUrl(text || message || 'Hi, I want to know more about your solar services.');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl sm:w-[340px]"
          >
            <div className="flex items-center gap-3 bg-[#075E54] p-4">
              <WhatsappLogo className="shrink-0 text-2xl text-white" weight="fill" />
              <div className="flex-1">
                <p className="text-sm font-bold text-white">Technomania Energy</p>
                <p className="text-xs text-white/70">Narhe, Pune team</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white/70 transition-colors hover:text-white"
                aria-label="Close chat"
              >
                <X />
              </button>
            </div>

            <div className="min-h-[120px] bg-[#ECE5DD] p-4">
              <div className="mb-3 max-w-[85%] rounded-xl rounded-tl-sm bg-white p-3 shadow-sm">
                <p className="text-sm text-gray-700">
                  Hi! How can we help with rooftop solar, water pumps, or an energy audit today?
                </p>
                <p className="mt-1 text-right text-[10px] text-gray-400">Just now</p>
              </div>

              <div className="space-y-2">
                {quickMessages.map((msg) => (
                  <button
                    key={msg}
                    onClick={() => sendMessage(msg)}
                    className="block w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-3 py-2 text-left text-xs text-gray-700 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-gray-100 bg-white p-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                onClick={() => sendMessage()}
                className="cursor-pointer p-2 text-[#25D366] transition-colors hover:text-[#128C7E]"
                aria-label="Send message on WhatsApp"
              >
                <PaperPlaneTilt className="text-xl" weight="fill" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer p-1 text-[#25D366] drop-shadow-[0_10px_18px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110"
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Chat on WhatsApp'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="text-4xl" />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <WhatsappLogo className="text-5xl" weight="fill" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {!isOpen && (
        <span className="pointer-events-none absolute -inset-1 animate-ping rounded-full border border-[#25D366]/35 opacity-30" />
      )}
    </div>
  );
}
