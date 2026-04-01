import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, PaperPlaneTilt } from '@phosphor-icons/react';
import IconBadge from './IconBadge';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const inputClasses = `w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm
                         focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                         transition-all duration-300 placeholder:text-gray-400`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-12 shadow-lg text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <IconBadge icon={CheckCircle} size="xl" className="mx-auto mb-6" weight="fill" />
        </motion.div>
        <h3 className="text-2xl font-bold text-dark mb-3">Message Sent!</h3>
        <p className="text-gray-custom">We&apos;ll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-lg space-y-5">
      <h3 className="text-2xl font-bold text-dark mb-2">Send Us a Message</h3>
      <p className="text-gray-custom text-sm mb-6">Fill out the form and our team will reach out shortly.</p>

      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text" name="name" placeholder="Your Name" required
          value={form.name} onChange={handleChange} className={inputClasses}
        />
        <input
          type="email" name="email" placeholder="Your Email" required
          value={form.email} onChange={handleChange} className={inputClasses}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="tel" name="phone" placeholder="Phone Number"
          value={form.phone} onChange={handleChange} className={inputClasses}
        />
        <input
          type="text" name="subject" placeholder="Subject"
          value={form.subject} onChange={handleChange} className={inputClasses}
        />
      </div>
      <textarea
        name="message" placeholder="Your Message" rows={5} required
        value={form.message} onChange={handleChange}
        className={`${inputClasses} resize-none`}
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 gradient-primary text-white font-bold rounded-2xl
                   flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(15,118,110,0.3)]
                   transition-shadow duration-300 cursor-pointer"
      >
        <PaperPlaneTilt weight="fill" />
        Send Message
      </motion.button>
    </form>
  );
}
