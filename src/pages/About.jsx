import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';
import { Eye, GearSix, GlobeHemisphereWest, Leaf, Target, UsersThree } from '@phosphor-icons/react';
import MountainDivider from '../components/MountainDivider';
import IconBadge from '../components/IconBadge';
import { company } from '../data/company';

const timeline = [
  { year: '2016', title: 'Technomania Began', desc: 'Technomania Energy LLP was established in Pune with a practical goal: make solar adoption easier for customers on real budgets.' },
  { year: '2018', title: 'Residential Momentum', desc: 'Early rooftop projects across homes and housing communities helped build the company\'s on-site execution experience.' },
  { year: '2020', title: 'Commercial & Industrial Work', desc: 'The team expanded into petrol pumps, businesses, and industrial sites with larger rooftop installations.' },
  { year: '2022', title: 'Pumps & Audits Added', desc: 'Solar water pump planning and energy audit services were added to help customers solve broader power-use challenges.' },
  { year: '2024', title: '500+ Projects Completed', desc: 'Technomania crossed 500 completed projects and kept growing as a Pune-based site-first solar partner.' },
];

const values = [
  { icon: Leaf, title: 'Practical Sustainability', desc: 'We design systems that stay grounded in site conditions, usage, and long-term value.' },
  { icon: GearSix, title: 'Execution Discipline', desc: 'Survey, design, installation, and support all stay connected instead of happening in silos.' },
  { icon: UsersThree, title: 'Direct Access', desc: 'Customers speak directly with the people coordinating the work, not a disconnected sales layer.' },
  { icon: GlobeHemisphereWest, title: 'Local Presence', desc: 'Our Narhe, Pune base keeps us close to the projects and customers we serve across Maharashtra.' },
];

export default function About() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: storyRef, inView: storyInView } = useScrollAnimation();
  const { ref: missionRef, inView: missionInView } = useScrollAnimation();
  const { ref: leadersRef, inView: leadersInView } = useScrollAnimation(0.05);
  const { ref: timelineRef, inView: timelineInView } = useScrollAnimation(0.05);
  const { ref: valuesRef, inView: valuesInView } = useScrollAnimation(0.05);

  return (
    <PageTransition>
      <section ref={heroRef} className="relative overflow-hidden gradient-hero pb-16 pt-24 sm:pb-20 sm:pt-32">
        <div className="absolute inset-0 bg-[url('/imgi_4_img2-qR01P7nz.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} className="text-sm font-semibold uppercase tracking-wider text-primary-light">
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mb-4 mt-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Practical Solar From <span className="text-gradient-amber">Narhe, Pune</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg"
          >
            Since 2016, we have helped customers across Maharashtra plan rooftop solar,
            solar water pumps, and energy audits with a clear, site-first approach.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      <section ref={storyRef} className="px-4 py-16 md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</span>
            <h2 className="mt-3 mb-6 text-3xl font-bold leading-tight text-dark md:text-4xl">
              From a Local Team to <span className="text-secondary">500+ Projects</span>
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-custom">
              <p>
                We started in 2016 in Pune with a simple idea: make solar adoption easier
                for customers who need practical answers, not vague promises.
              </p>
              <p>
                That work grew into a hands-on team based in Narhe, Pune, helping homes,
                shops, factories, and field sites evaluate what will work well on the ground.
              </p>
              <p>
                Today the company focuses on rooftop solar systems, solar water pumps, and energy audits,
                with more than 500 projects delivered across Maharashtra.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <img
                src="/imgi_5_img3-s04cSDZm.jpg"
                alt="Solar installation site"
                className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[460px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/55 via-dark/15 to-transparent p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">Pune Base</p>
                <p className="mt-2 max-w-md text-sm text-white/90 sm:text-base">
                  Practical site work, survey, and installation support from Narhe.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={missionRef} className="bg-gray-50 px-4 py-16 md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 sm:gap-8">
          {[
            { icon: Target, title: 'Our Mission', text: 'Deliver solar systems and energy studies that match each site, reduce waste, and make clean energy decisions easier for customers.' },
            { icon: Eye, title: 'Our Vision', text: 'Build a trusted Pune-based company known for practical solar guidance, clean execution, and long-term customer relationships.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              animate={missionInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:border-primary/20 hover:shadow-2xl sm:rounded-3xl sm:p-8 md:p-10"
            >
              <IconBadge icon={item.icon} size="lg" className="mb-5 sm:mb-6 group-hover:scale-110" />
              <h3 className="mb-3 text-xl font-bold text-dark sm:mb-4 sm:text-2xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-custom sm:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={leadersRef} className="bg-dark px-4 py-16 text-white md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={leadersInView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center sm:mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Direct Contacts</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Meet the <span className="text-gradient-amber">Technomania Team</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Reach the team directly for project discussions, site visits, and service support.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {company.contacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 30 }}
                animate={leadersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="rounded-3xl border border-white/8 bg-white/5 p-6 sm:p-8"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-secondary">Direct Contact</p>
                <h3 className="mt-3 text-2xl font-bold">{contact.name}</h3>
                <div className="mt-6 space-y-4 text-white/70">
                  <a href={contact.phoneHref} className="block transition-colors duration-300 hover:text-white">
                    {contact.phone}
                  </a>
                  <a href={contact.emailHref} className="block break-all transition-colors duration-300 hover:text-white">
                    {contact.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="px-4 py-16 md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={timelineInView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center sm:mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Journey</span>
            <h2 className="mt-3 text-3xl font-bold text-dark md:text-4xl">
              Key <span className="text-gradient">Milestones</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-0 top-0 left-1/2 hidden w-0.5 -translate-x-0.5 bg-gray-200 md:block" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`mb-8 flex items-center gap-4 sm:mb-12 sm:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-2xl font-bold text-gradient sm:text-3xl">{item.year}</span>
                  <h3 className="mt-1 text-lg font-bold text-dark sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-custom">{item.desc}</p>
                </div>
                <div className="z-10 hidden h-4 w-4 flex-shrink-0 rounded-full bg-primary ring-4 ring-primary/20 md:flex" />
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="bg-gray-50 px-4 py-16 md:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center sm:mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-bold text-dark md:text-4xl">
              What We <span className="text-gradient">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-500 hover:border-primary/20 hover:shadow-xl sm:rounded-3xl sm:p-8"
              >
                <IconBadge icon={val.icon} size="lg" className="mx-auto mb-4 group-hover:rotate-6 group-hover:scale-110 sm:mb-5" />
                <h3 className="mb-1 text-sm font-bold text-dark sm:mb-2 sm:text-lg">{val.title}</h3>
                <p className="text-xs leading-relaxed text-gray-custom sm:text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
