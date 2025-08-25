import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";

const Clients: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: 'Ravi Sharma',
      role: 'CTO, NexaTech',
      company: 'NexaTech',
      content: 'CORVI DELTA transformed our digital presence completely. Their expertise in modern web technologies and attention to detail resulted in a 150% increase in user engagement. The team was professional, responsive, and delivered ahead of schedule.',
      rating: 5,
      image: 'https://img.icons8.com/color/96/000000/company.png', 
      projectType: 'Web Development',
    },
    {
      id: 2,
      name: 'Ananya Iyer',
      role: 'Founder, AIWorks',
      company: 'AIWorks',
      content: 'Working with CORVI DELTA on our AI-powered analytics platform was exceptional. They not only understood our complex requirements but also provided valuable insights that improved our original concept. The results exceeded all expectations.',
      rating: 5,
      image: 'https://img.icons8.com/color/96/000000/artificial-intelligence.png',
      projectType: 'AI & Machine Learning',
    },
    {
      id: 3,
      name: 'Karan Mehta',
      role: 'Product Manager, FlowData',
      company: 'FlowData',
      content: 'The mobile app CORVI DELTA developed for us has been a game-changer. User adoption rates are through the roof, and the app consistently receives 5-star reviews. Their UX expertise really shows in the final product.',
      rating: 5,
      image: 'https://img.icons8.com/color/96/000000/mobile-app.png',
      projectType: 'Mobile Development',
    },
    {
      id: 4,
      name: 'Priya Nair',
      role: 'VP of Technology, CloudNova',
      company: 'CloudNova',
      content: 'CORVI DELTA helped us migrate to the cloud seamlessly. Their expertise in DevOps and cloud architecture ensured zero downtime during the transition. Our infrastructure is now 40% more efficient and significantly more scalable.',
      rating: 5,
      image: 'https://img.icons8.com/color/96/000000/cloud.png',
      projectType: 'Cloud & DevOps',
    },
    {
      id: 5,
      name: 'Arjun Reddy',
      role: 'Marketing Director, ShopEase',
      company: 'ShopEase',
      content: 'The e-commerce platform CORVI DELTA built for us has revolutionized our business. Sales have increased by 200% since launch, and customer satisfaction scores are at an all-time high. Exceptional work!',
      rating: 5,
      image: 'https://img.icons8.com/color/96/000000/shopping-cart.png',
      projectType: 'E-commerce',
    },
  ];
  

  const caseStudies = [
    {
      title: 'Smart Recipe App',
      client: 'Internal Project',
      challenge: 'Traditional PHP apps required external servers like XAMPP, making setup bulky and less portable.',
      solution: 'Built a lightweight PHP-based recipe management app with built-in server support for seamless usage.',
      results: [
        'Improved setup efficiency (no XAMPP required)',
        'Scalable structure for managing recipes',
        'Modern UI for better user engagement',
        'Showcased CorviDelta’s technical depth in PHP/MySQL solutions',
      ],
      image: 'https://media.istockphoto.com/id/486507818/photo/person-at-breakfast-looking-at-recipe-app-on-digital-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=m27Cd53AipvCjkfQsvpQP9I2545gaqramVUBF0KZRF0=',
    },
    {
      title: 'Usverse – Long Distance Relationship App',
      client: 'Usverse (Dating & Connectivity Startup)',
      challenge: 'Couples in long-distance relationships lacked an engaging, user-friendly digital platform to stay connected.',
      solution: 'Designed an interactive UI/UX for an app featuring shared activities, personalized moments, and chat integration.',
      results: [
        'Created visually engaging user flows',
        'Improved emotional engagement through design',
        'Positioned the app for successful launch',
        'Established Usverse as a promising digital product',
      ],
      image: 'https://plus.unsplash.com/premium_photo-1718138656404-1089825cde0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZyUyMGRpc3RhbmNlfGVufDB8fDB8fHww',
    },
    {
      title: "Lawyer’s Professional Website",
      client: 'Independent Lawyer (Ahmedabad)',
      challenge: 'The lawyer lacked a professional digital presence to showcase expertise and attract clients.',
      solution: 'Developed a responsive WordPress website optimized for branding, lead generation, and mobile accessibility.',
      results: [
        'Enhanced professional credibility online',
        'Improved lead generation through optimized contact flow',
        'Mobile-friendly design increased accessibility',
        'Delivered scalable platform for future content expansion',
      ],
      image: 'https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'CorviDelta Branding Kit',
      client: 'CorviDelta OPC Pvt. Ltd.',
      challenge: 'CorviDelta needed a strong and consistent brand identity across digital and offline platforms.',
      solution: 'Designed a complete branding kit including logo, tagline, typography, and color palette.',
      results: [
        'Established a consistent visual identity',
        'Strengthened trust and recognition',
        'Enabled cohesive marketing campaigns',
        'Improved recall value of the CorviDelta brand',
      ],
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our Clients & Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Trusted by innovative companies worldwide to deliver exceptional technology solutions
          </motion.p>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Trusted by Leading Companies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300"
            >
              We're proud to work with innovative organizations across various industries
            </motion.p>
          </div>

         
        
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Client Testimonials
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Hear what our clients have to say about their experience working with CORVI DELTA
            </motion.p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-xl"
            >
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 text-center mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].projectType}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Detailed case studies showcasing measurable results and business impact
            </motion.p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">
                    {study.client}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <motion.div
                          key={result}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: resultIndex * 0.1 }}
                          className="flex items-center bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {result}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Elevate Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-indigo-100 max-w-2xl mx-auto mb-10"
          >
            Partner with CORVI DELTA to build innovative, scalable, and impactful digital solutions that drive real results.
          </motion.p>
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Project
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Clients;
