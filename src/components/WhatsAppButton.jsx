import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperPlaneTilt, WhatsappLogo, X } from '@phosphor-icons/react';

const quickMessages = [
  'I want to know about solar panels for my home',
  'What is the cost of a solar system?',
  'I need a solar consultation',
  'Tell me about your products',
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '919545345765';

  const sendMessage = (text) => {
    const msg = encodeURIComponent(text || message || 'Hi, I want to know more about your solar energy services.');
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-[300px] sm:w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden
                       border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4 flex items-center gap-3">
              <WhatsappLogo className="text-white text-2xl flex-shrink-0" weight="fill" />
              <div className="flex-1">
                <p className="text-white font-bold text-sm">Technomania Energy</p>
                <p className="text-white/70 text-xs">Usually replies in minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X />
              </button>
            </div>

            {/* Chat body */}
            <div className="p-4 bg-[#ECE5DD] min-h-[120px]">
              {/* Incoming message bubble */}
              <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[85%] mb-3">
                <p className="text-sm text-gray-700">
                  Hi! 👋 How can we help you with solar energy today?
                </p>
                <p className="text-[10px] text-gray-400 mt-1 text-right">Now</p>
              </div>

              {/* Quick replies */}
              <div className="space-y-2">
                {quickMessages.map((msg) => (
                  <button
                    key={msg}
                    onClick={() => sendMessage(msg)}
                    className="block w-full text-left px-3 py-2 bg-white rounded-xl text-xs text-gray-700
                               hover:bg-primary/5 hover:text-primary transition-all duration-200
                               border border-gray-200 hover:border-primary/30 cursor-pointer"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="p-3 bg-white flex items-center gap-2 border-t border-gray-100">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 bg-gray-50 rounded-full text-sm focus:outline-none
                           focus:ring-2 focus:ring-primary/20 border border-gray-200"
              />
              <button
                onClick={() => sendMessage()}
                className="p-2 text-[#25D366] hover:text-[#128C7E] transition-colors cursor-pointer"
                aria-label="Send message on WhatsApp"
              >
                <PaperPlaneTilt className="text-xl" weight="fill" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#25D366] drop-shadow-[0_10px_18px_rgba(37,211,102,0.45)]
                   transition-all duration-300 hover:scale-110 cursor-pointer p-1"
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

      {/* Pulse ring when closed */}
      {!isOpen && (
        <span className="absolute -inset-1 border border-[#25D366]/35 rounded-full animate-ping opacity-30 pointer-events-none" />
      )}
    </div>
  );
}
