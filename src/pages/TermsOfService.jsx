import PageTransition from '../components/PageTransition';
import MountainDivider from '../components/MountainDivider';

const sections = [
  {
    title: 'Using Our Website',
    body: 'By using this website, you agree to use it only for lawful purposes and to contact us with accurate information.',
  },
  {
    title: 'Quotes And Estimates',
    body: 'Any quote or estimate shared by Technomania Energy is based on the information available at that time. Final project scope and pricing may change after a site visit or technical review.',
  },
  {
    title: 'Service Information',
    body: 'We try to keep service descriptions, images, and project details accurate, but we may update or change them without notice.',
  },
  {
    title: 'Third-Party Links',
    body: 'Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those sites.',
  },
  {
    title: 'Contact Us',
    body: 'For questions about these terms, contact Technomania Energy at maruti@technomania.in or call +91 98819 32325.',
  },
];

export default function TermsOfService() {
  return (
    <PageTransition>
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,214,92,0.12),transparent_30%)]" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-primary-light font-semibold text-sm tracking-[0.24em] uppercase">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            Terms of Service
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
            Straightforward website terms for visitors, inquiries, and service requests.
          </p>
        </div>
        <MountainDivider />
      </section>

      <section className="px-4 md:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="rounded-[2rem] border border-primary/10 bg-white p-6 sm:p-8 shadow-[0_18px_48px_rgba(7,41,66,0.08)]">
            <p className="text-sm text-gray-custom">Last updated: April 1, 2026</p>
            <p className="mt-3 text-gray-custom leading-relaxed">
              These terms cover the use of the Technomania Energy website and the information shared through it.
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
