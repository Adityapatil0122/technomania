import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PageTransition from '../components/PageTransition';
import CTASection from '../components/CTASection';
import { Eye, GearSix, GlobeHemisphereWest, Leaf, Target, Trophy, UsersThree } from '@phosphor-icons/react';
import MountainDivider from '../components/MountainDivider';
import IconBadge from '../components/IconBadge';

const timeline = [
  { year: '2016', title: 'Started Out', desc: 'Set up Technomania Energy LLP in Pune with a goal to make solar energy simple and affordable.' },
  { year: '2018', title: '100 Installations Done', desc: 'Hit our first big milestone — 100 homes running on solar across Maharashtra.' },
  { year: '2020', title: 'Went Commercial', desc: 'Started working with businesses and factories, taking on bigger projects.' },
  { year: '2022', title: 'Added Wind & Storage', desc: 'Brought in wind turbines and battery systems to offer more options.' },
  { year: '2024', title: '500+ Projects', desc: 'Crossed 500 completed installations with over 2500 kW of capacity installed.' },
];

const values = [
  { icon: Leaf, title: 'Sustainability', desc: 'We design every system with the environment in mind — clean energy that lasts.' },
  { icon: GearSix, title: 'Innovation', desc: 'We keep up with the latest tech so you always get the best equipment available.' },
  { icon: UsersThree, title: 'Customer First', desc: 'Your needs come first. We listen, plan, and deliver what works for you.' },
  { icon: GlobeHemisphereWest, title: 'Real Impact', desc: 'Every project means less pollution and lower bills — that\'s how we measure success.' },
];

export default function About() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: storyRef, inView: storyInView } = useScrollAnimation();
  const { ref: missionRef, inView: missionInView } = useScrollAnimation();
  const { ref: timelineRef, inView: timelineInView } = useScrollAnimation(0.05);
  const { ref: valuesRef, inView: valuesInView } = useScrollAnimation(0.05);

  return (
    <PageTransition>
      {/* Hero Banner */}
      <section ref={heroRef} className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('/imgi_4_img2-qR01P7nz.jpg')] bg-cover bg-center opacity-10" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-primary-light font-semibold text-sm tracking-wider uppercase"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4 sm:mb-6"
        >
          Powering a <span className="text-gradient-amber">Greener</span> Future
        </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Since 2016, we've been helping homes and businesses across Maharashtra
            switch to clean energy — and save money doing it.
          </motion.p>
        </div>
        <MountainDivider />
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-6 leading-tight">
              From a Small Team to <span className="text-gradient">500+ Projects</span>
            </h2>
            <div className="space-y-4 text-gray-custom leading-relaxed">
              <p>
                We started in 2016 in Pune with a simple idea: make solar energy easy and affordable
                for regular people and businesses in Maharashtra.
              </p>
              <p>
                Back then it was just a small team of people who really believed in clean energy.
                Today, we do everything from solar panels and wind turbines to battery storage
                and full energy management.
              </p>
              <p>
                We've done over 500 projects, installed more than 2500 kW of capacity, and helped
                hundreds of families and businesses cut their electricity costs. And we're just getting started.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=500&fit=crop"
              alt="Solar farm"
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
          {[
            { icon: Target, title: 'Our Mission', text: 'Make clean energy simple, affordable, and reliable for every home and business. We want our customers to save money and help the environment at the same time.' },
            { icon: Eye, title: 'Our Vision', text: 'To become the go-to energy company in India — where anyone can easily switch to solar and clean power without the hassle or confusion.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              animate={missionInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500
                         border border-gray-100 hover:border-primary/20 group"
            >
              <IconBadge icon={item.icon} size="lg" className="mb-5 sm:mb-6 group-hover:scale-110" />
              <h3 className="text-xl sm:text-2xl font-bold text-dark mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-gray-custom leading-relaxed text-sm sm:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3">
              Key <span className="text-gradient">Milestones</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`flex items-center gap-4 sm:gap-8 mb-8 sm:mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-2xl sm:text-3xl font-bold text-gradient">{item.year}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-dark mt-1">{item.title}</h3>
                  <p className="text-gray-custom text-sm mt-2">{item.desc}</p>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 flex-shrink-0 z-10" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3">
              What We <span className="text-gradient">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center shadow-sm hover:shadow-xl
                           transition-all duration-500 group border border-gray-100 hover:border-primary/20"
              >
                <IconBadge
                  icon={val.icon}
                  size="lg"
                  className="mx-auto mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-6"
                />
                <h3 className="text-sm sm:text-lg font-bold text-dark mb-1 sm:mb-2">{val.title}</h3>
                <p className="text-gray-custom text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
