import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CpuChipIcon,
  CloudIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import Button from "../components/Button";
import AnimatedCounter from "../components/AnimatedCounter";

// ✅ Make sure the filename matches EXACTLY (case-sensitive for Vercel)
import corviLogo from "../assets/Corvi-Delta-Logo-Black.png";

const Home: React.FC = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: "Web Development",
      description:
        "Modern web applications using React, Node.js, and cutting-edge technologies.",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: PaintBrushIcon,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that enhance user experience and engagement.",
    },
    {
      icon: CpuChipIcon,
      title: "AI & Automation",
      description: "Intelligent solutions that automate processes and drive efficiency.",
    },
    {
      icon: CloudIcon,
      title: "Cloud & DevOps",
      description:
        "Scalable cloud infrastructure and streamlined deployment processes.",
    },
    {
      icon: MegaphoneIcon,
      title: "Digital Marketing",
      description:
        "SEO-optimized strategies that boost your online presence and reach.",
    },
  ];

  const stats = [
    { number: 0, suffix: "+", label: "Years Experience" },
    { number: 10, suffix: "+", label: "Projects Completed" },
    { number: 10, suffix: "+", label: "Happy Clients" },
    { number: 5, suffix: "+", label: "Countries Served" },
  ];

  const aboutItems = [
    {
      title: "Our Vision",
      description:
        "To be the leading technology partner that transforms businesses through innovation and excellence.",
      icon: "🎯",
    },
    {
      title: "Our Mission",
      description:
        "Delivering cutting-edge solutions that empower our clients to achieve their goals and exceed expectations.",
      icon: "🚀",
    },
    {
      title: "Our Values",
      description:
        "Innovation, Quality, Reliability, and Customer Satisfaction drive everything we do.",
      icon: "💎",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-blue-600 dark:text-blue-400">Tech</span>{" "}
                That{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Transforms
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                Solutions That{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Empower
                </span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl">
                We create cutting-edge digital solutions that drive innovation,
                enhance user experiences, and deliver exceptional results for
                businesses across the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  <Link to="/about">Know More</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center bg-black rounded-2xl shadow-lg overflow-hidden">
                <motion.img
                  src={corviLogo}
                  alt="Corvi Delta Logo"
                  className="w-3/4 h-auto object-contain"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">🚀</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About CORVI DELTA
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We are passionate technologists dedicated to solving complex
              problems with innovative solutions. Our expertise spans modern web
              development, mobile applications, AI automation, and digital
              transformation.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions designed to drive your business
              forward
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how CORVI DELTA can help you achieve your goals with
            cutting-edge technology solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="secondary" size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
