import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CpuChipIcon,
  CloudIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      id: 0,
      icon: CodeBracketIcon,
      title: 'Web Development',
      shortDescription: 'Modern web applications using cutting-edge technologies',
      fullDescription: 'We create responsive, scalable, and high-performance web applications using the latest technologies. Our expertise includes React, Node.js, TypeScript, and modern frameworks that ensure your web presence stands out.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
      industries: ['E-commerce', 'Healthcare', 'Finance', 'Education', 'SaaS'],
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'API Integration',
        'Real-time Features',
        'SEO Optimization',
        'Performance Optimization',
      ],
    },
    {
      id: 1,
      icon: DevicePhoneMobileIcon,
      title: 'Mobile App Development',
      shortDescription: 'Native and cross-platform mobile solutions',
      fullDescription: 'Build engaging mobile experiences for iOS and Android platforms. We develop both native and cross-platform applications that deliver exceptional user experiences and seamless performance.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'Native Modules'],
      industries: ['Retail', 'Healthcare', 'Social Media', 'Fintech', 'Gaming'],
      features: [
        'Cross-platform Development',
        'Native Performance',
        'Push Notifications',
        'Offline Support',
        'App Store Optimization',
        'Analytics Integration',
      ],
    },
    {
      id: 2,
      icon: PaintBrushIcon,
      title: 'UI/UX Design',
      shortDescription: 'Beautiful, intuitive designs that enhance user experience',
      fullDescription: 'Create stunning user interfaces and seamless user experiences that engage your audience. Our design process focuses on usability, accessibility, and conversion optimization.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer', 'After Effects'],
      industries: ['Technology', 'Healthcare', 'E-commerce', 'Education', 'Entertainment'],
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Interaction Design',
        'Usability Testing',
        'Design Systems',
      ],
    },
    {
      id: 3,
      icon: CpuChipIcon,
      title: 'AI & Automation',
      shortDescription: 'Intelligent solutions that automate and optimize processes',
      fullDescription: 'Leverage artificial intelligence and machine learning to automate processes, gain insights, and create intelligent applications that adapt and learn from user behavior.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Langchain', 'Pandas', 'Scikit-learn'],
      industries: ['Manufacturing', 'Healthcare', 'Finance', 'Retail', 'Logistics'],
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'Process Automation',
      ],
    },
    {
      id: 4,
      icon: CloudIcon,
      title: 'Cloud & DevOps',
      shortDescription: 'Scalable infrastructure and streamlined deployment',
      fullDescription: 'Design and implement robust cloud infrastructure with automated deployment pipelines. We ensure your applications are scalable, secure, and highly available.',
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI'],
      industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'Media'],
      features: [
        'Cloud Migration',
        'Container Orchestration',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Security & Compliance',
      ],
    },
    {
      id: 5,
      icon: MegaphoneIcon,
      title: 'Digital Marketing & SEO',
      shortDescription: 'Boost your online presence and reach',
      fullDescription: 'Increase your digital footprint with comprehensive SEO strategies, content marketing, and digital campaigns that drive traffic, engagement, and conversions.',
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEMrush', 'Ahrefs', 'Mailchimp'],
      industries: ['E-commerce', 'Healthcare', 'Real Estate', 'Education', 'Professional Services'],
      features: [
        'Search Engine Optimization',
        'Content Marketing',
        'Social Media Marketing',
        'Pay-Per-Click Advertising',
        'Email Marketing',
        'Analytics & Reporting',
      ],
    },
  ];

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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to transform your business and drive growth
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedService(service.id)}
                  className={`group cursor-pointer p-8 rounded-xl transition-all duration-300 ${
                    selectedService === service.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 shadow-lg border-2 border-blue-200 dark:border-blue-700'
                      : 'bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow hover:shadow-lg'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${
                      selectedService === service.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-600 text-white group-hover:bg-blue-700'
                    }`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>
                  <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                    selectedService === service.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.shortDescription}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    {React.createElement(services[selectedService].icon, {
                      className: 'w-10 h-10 text-blue-600 dark:text-blue-400 mr-4'
                    })}
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {services[selectedService].title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    {services[selectedService].fullDescription}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services[selectedService].features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-3">
                      {services[selectedService].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Industries We Serve</h3>
                    <div className="flex flex-wrap gap-3">
                      {services[selectedService].industries.map((industry) => (
                        <span
                          key={industry}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-700/50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Ready to Get Started?</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Let's discuss how our {services[selectedService].title.toLowerCase()} services can help transform your business.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        navigate('/contact', { state: { service: services[selectedService].title } })
                      }
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              A proven methodology that ensures successful project delivery from concept to completion
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your requirements, understand your goals, and define project scope.', icon: '🔍' },
              { step: '02', title: 'Planning', description: 'Create detailed project roadmap, choose technologies, and plan timeline.', icon: '📋' },
              { step: '03', title: 'Development', description: 'Build your solution using agile methodology with regular updates and feedback.', icon: '⚙️' },
              { step: '04', title: 'Delivery', description: 'Deploy, test, and launch your solution with ongoing support and maintenance.', icon: '🚀' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-bold px-2 py-1 rounded-full">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
