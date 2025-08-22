import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech innovation and business strategy.',
      skills: ['Leadership', 'Strategy', 'Innovation'],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Technical architect specializing in scalable systems and emerging technologies.',
      skills: ['System Design', 'AI/ML', 'Cloud Architecture'],
      image: '',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating exceptional user experiences.',
      skills: ['React', 'Node.js', 'TypeScript'],
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emily Davis',
      role: 'UX/UI Designer',
      bio: 'Creative designer focused on intuitive interfaces and user-centered design.',
      skills: ['UI Design', 'UX Research', 'Prototyping'],
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
      icon: '💡',
    },
    {
      title: 'Quality',
      description: 'Excellence is our standard. We deliver robust, reliable, and high-performance solutions.',
      icon: '⭐',
    },
    {
      title: 'Reliability',
      description: 'Our clients trust us to deliver on time, every time, with consistent quality and support.',
      icon: '🛡️',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your success is our success. We go above and beyond to exceed expectations.',
      icon: '🎯',
    },
  ];

  const whyChooseUs = [
    'Cutting-edge technology expertise',
    'Dedicated support and maintenance',
    'Proven track record of success',
    'Agile development methodology',
    'Transparent communication',
    'Cost-effective solutions',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About CORVI DELTA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We are passionate technologists dedicated to transforming businesses through innovative solutions and exceptional service.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Journey</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  CorviDelta OPC Pvt. Ltd. was born from a simple belief: technology should empower, not overwhelm.
                </p>
                <p>
                  Founded by <b>Khushi Jani</b>, an IT engineer and passionate problem-solver, CorviDelta began as a vision to bridge the gap between ideas and impact. What started as a single person’s dream has evolved into a growing tech company that delivers smart, tailored solutions for startups, businesses, and brands.
                </p>
                <p>
                  <strong>2024 – The Spark:</strong> Khushi laid the foundation of CorviDelta with a clear mission: to create transformative tech solutions that help people grow. The company name reflects precision (Delta: change) and strength (Corvi: inspired by intelligent crows).
                </p>
                <p>
                  <strong>Early 2025 – Establishing Roots:</strong> Official incorporation as CorviDelta OPC Pvt. Ltd., setting up our core services — Website Wizardry, UI/UX Design & App Mockups, Tech Consultation for Startups, Custom Software Solutions, and Brand Identity for Tech Brands.
                </p>
                <p>
                  <strong>Mid 2025 – First Big Wins:</strong> Secured initial projects, built a strong network in Ahmedabad, and collaborated with early-stage startups to bring their products to life. We also created our digital signature certificate (DSC) and formal brand identity with the tagline: “Tech that Transforms, Solutions that Empower.”
                </p>
                <p>
                  <strong>Today – Moving with Purpose:</strong> CorviDelta continues to grow, powered by passion, innovation, and the trust of our clients. Every solution we craft is designed to create measurable impact — helping businesses scale faster and smarter.
                </p>
                <p>
                  This is just the beginning. CorviDelta isn’t just a company; it’s a movement to show that technology, when used right, becomes a force for growth and empowerment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-100">Mission</h4>
                    <p className="text-blue-50">
                      To craft innovative, reliable, and scalable tech solutions that empower startups, businesses, and brands to grow fearlessly. We aim to simplify complex technology, delivering products that create real impact, drive transformation, and unlock new opportunities.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-100">Vision</h4>
                    <p className="text-blue-50">
                      To become a trusted global tech partner known for precision, creativity, and empowerment — building a future where technology works for people, not the other way around. We envision CorviDelta as a hub for innovation that uplifts communities, accelerates dreams, and sets new standards of excellence in IT solutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              The principles that guide every decision we make and every solution we deliver
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              The talented individuals behind our success, bringing expertise, creativity, and passion to every project
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose CORVI DELTA?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                We combine technical expertise with business acumen to deliver solutions that truly make a difference.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Let's discuss how we can help transform your business with innovative technology solutions.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Contact Us Today
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
