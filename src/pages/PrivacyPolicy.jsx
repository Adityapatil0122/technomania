import PageTransition from '../components/PageTransition';
import MountainDivider from '../components/MountainDivider';

const sections = [
  {
    title: 'Information We Collect',
    body: 'We may collect the details you share through our contact forms, phone calls, WhatsApp messages, and site visit requests. This can include your name, phone number, email address, address, and project details.',
  },
  {
    title: 'How We Use It',
    body: 'We use your information to respond to inquiries, prepare quotes, schedule site visits, and provide service updates. We may also use it to improve the website and our customer experience.',
  },
  {
    title: 'Sharing Information',
    body: 'We do not sell your information. We may share it only with team members, trusted service providers, or partners who help us complete your request and operate the business.',
  },
  {
    title: 'Data Security And Retention',
    body: 'We keep your information only as long as needed for business, service, or legal purposes and take reasonable steps to protect it from misuse or unauthorized access.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about this policy, you can contact Technomania Energy at maruti@technomania.in or call +91 98819 32325.',
  },
];

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,214,92,0.12),transparent_30%)]" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-primary-light font-semibold text-sm tracking-[0.24em] uppercase">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
            Simple information about how we collect and use contact details when you reach out to Technomania Energy.
          </p>
        </div>
        <MountainDivider />
      </section>

      <section className="px-4 md:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="rounded-[2rem] border border-primary/10 bg-white p-6 sm:p-8 shadow-[0_18px_48px_rgba(7,41,66,0.08)]">
            <p className="text-sm text-gray-custom">Last updated: April 1, 2026</p>
            <p className="mt-3 text-gray-custom leading-relaxed">
              This policy explains how Technomania Energy LLP handles information collected through our website and direct communication channels.
            </p>
          </div>

          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[2rem] border border-primary/10 bg-white p-6 sm:p-8 shadow-[0_18px_48px_rgba(7,41,66,0.08)]"
            >
              <h2 className="text-2xl font-bold text-dark">{section.title}</h2>
              <p className="mt-3 text-gray-custom leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
