import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, EyeIcon } from '@heroicons/react/24/outline';

const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = ['All', 'Web Apps', 'Mobile Apps', 'AI Projects', 'Design'];
  const projects = [
    // ---- Custom Projects from Description ----
    {
      id: 101,
      title: 'Smart Recipe App',
      category: 'Web Apps',
      description: 'A PHP-based recipe management app with built-in server support (no XAMPP required).',
      fullDescription:
        'A lightweight recipe management web app built in PHP with built-in server support. It allows seamless browsing, adding, and editing recipes with a modern UI. Designed to showcase CorviDelta’s ability to build scalable apps with optimized performance.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS','javaScript'],
      image: 'https://media.istockphoto.com/id/486507818/photo/person-at-breakfast-looking-at-recipe-app-on-digital-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=m27Cd53AipvCjkfQsvpQP9I2545gaqramVUBF0KZRF0=',
      client: 'Internal Project',
      testimonial: 'Showcases CorviDelta’s ability to build lightweight yet scalable applications with optimized performance.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 102,
      title: 'Usverse – Long Distance Relationship App',
      category: 'Mobile Apps',
      description: 'UI/UX design for an app helping long-distance couples stay connected.',
      fullDescription:
        'Designed UI/UX and product workflow for a platform that helps long-distance couples stay connected with shared activities, chats, and personalized moments. Built to create an engaging and user-friendly experience.',
      technologies: ['Figma', 'Adobe XD', 'UI/UX'],
      image: 'https://images.pexels.com/photos/5076515/pexels-photo-5076515.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Usverse (Dating & Connectivity Startup)',
      testimonial: 'Created an engaging and user-friendly interface that positioned Usverse as a promising product for future launch.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 103,
      title: "Lawyer’s Professional Website",
      category: 'Web Apps',
      description: 'A clean, responsive WordPress portfolio website for a lawyer.',
      fullDescription:
        'Developed a professional WordPress-based website to highlight legal expertise and services. Optimized for personal branding, lead generation, and responsive performance across devices.',
      technologies: [ 'React','Node','mongoDb','express','javascript'],
      image: 'https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      client: 'Independent Lawyer (Ahmedabad)',
      testimonial: 'Enhanced the client’s digital credibility and attracted targeted inquiries.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 104,
      title: 'CorviDelta Branding Kit',
      category: 'Design',
      description: 'In-house branding kit including logo, tagline, and color palette.',
      fullDescription:
        'Created the complete brand identity of CorviDelta including logo design, tagline, typography, and color palette. The identity reflects precision, innovation, and trust, ensuring consistency across platforms.',
      technologies: ['Figma', 'Adobe Illustrator', 'Photoshop'],
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'CorviDelta OPC Pvt. Ltd.',
      testimonial: 'Built a consistent brand presence across all platforms, strengthening recognition and marketing readiness.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },

    // ---- Existing Demo Projects ----
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Apps',
      description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.',
      fullDescription:
        'This comprehensive e-commerce solution includes features like user authentication, shopping cart, payment gateway integration, admin dashboard, order tracking, and inventory management. Built with a focus on performance and user experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'TechMart Inc.',
      testimonial:
        'CORVI DELTA delivered an exceptional e-commerce platform that exceeded our expectations. Sales increased by 40% within the first quarter.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
  
  
    {
      id: 2,
      title: 'Brand Identity & UX Design',
      category: 'Design',
      description: 'Complete brand identity redesign and user experience optimization for a growing startup.',
      fullDescription:
        'This project involved comprehensive brand strategy, logo design, website redesign, and user experience optimization. The new design system improved brand recognition and user engagement significantly.',
      technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'After Effects'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'InnovateTech',
      testimonial:
        'The new brand identity perfectly captures our vision. User engagement increased by 60% and our conversion rate improved by 35%.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
   
  ];
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore our diverse range of successful projects and see how we've helped businesses transform through technology
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-3">
                          <motion.button
                            onClick={() => setSelectedProject(project.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <EyeIcon className="w-5 h-5" />
                          </motion.button>
                          <motion.a
                            href={project.liveUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.client}
                      </span>
                      <button
                        onClick={() => setSelectedProject(project.id)}
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                          {project.category}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h2>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <motion.a
                            href={project.liveUrl}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                            View Live
                          </motion.a>
                          <motion.a
                            href={project.caseStudyUrl}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            Case Study
                          </motion.a>
                        </div>
                      </div>

                      <div>
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {project.fullDescription}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Client</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">{project.client}</p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Client Testimonial</h3>
                          <p className="text-gray-700 dark:text-gray-300 italic">
                            "{project.testimonial}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;