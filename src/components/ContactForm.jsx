import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, PaperPlaneTilt, WhatsappLogo } from '@phosphor-icons/react';
import IconBadge from './IconBadge';
import { buildWhatsAppUrl } from '../data/company';

const subjectOptions = [
  'Rooftop Solar',
  'Solar Water Pumps',
  'Energy Audit',
  'Site Visit',
  'General Inquiry',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjectOptions[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: subjectOptions[0],
      message: '',
    });
  };

  const inputClasses = `w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm text-dark
    transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/12`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[2rem] border border-gray-100 bg-white p-10 sm:p-12 shadow-[0_22px_60px_rgba(7,41,66,0.12)] text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 220, delay: 0.15 }}
        >
          <IconBadge icon={CheckCircle} size="xl" className="mx-auto mb-6" weight="fill" />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-bold text-dark">Message Sent!</h3>
        <p className="mt-3 text-gray-custom max-w-md mx-auto leading-relaxed">
          Our team will get back to you shortly by phone or email with the next step for your inquiry.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-gray-100 bg-white p-8 md:p-10 shadow-[0_22px_60px_rgba(7,41,66,0.12)]"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-dark">Send Us a Message</h3>
      <p className="mt-3 text-gray-custom text-sm sm:text-base">
        We&apos;ll get back to you as soon as possible with the right contact or next step.
      </p>

      <div className="mt-8 space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-dark">
              Full Name <span className="text-secondary">*</span>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-dark">
              Email Address <span className="text-secondary">*</span>
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-dark">Phone Number</span>
            <input
              type="tel"
              name="phone"
              placeholder="+91 98xxx xxxxx"
              value={form.phone}
              onChange={handleChange}
              className={inputClasses}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-dark">Subject</span>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={inputClasses}
            >
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-dark">
            Message <span className="text-secondary">*</span>
          </span>
          <textarea
            name="message"
            rows={6}
            placeholder="Tell us about your energy needs..."
            required
            value={form.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="flex-1 rounded-2xl bg-secondary px-6 py-4 text-dark font-bold flex items-center justify-center gap-2 shadow-[0_18px_38px_rgba(161,214,92,0.2)] transition-shadow duration-300 cursor-pointer"
        >
          <PaperPlaneTilt weight="fill" />
          Send Message
        </motion.button>

        <a
          href={buildWhatsAppUrl('Hello Technomania Energy, I would like to discuss my requirement.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-2xl border border-secondary/35 bg-[#eefaf5] px-6 py-4 text-primary font-bold flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-[#e6f6ef]"
        >
          <WhatsappLogo weight="fill" />
          WhatsApp Instead
        </a>
      </div>

      <p className="mt-5 text-center text-sm text-gray-custom">
        By submitting, you agree to our privacy policy. We only use your details to respond to your inquiry.
      </p>
    </form>
  );
}
