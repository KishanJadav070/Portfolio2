import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

// ✅ Correct way: Import image from src/assets
import FounderImage from "../assets/f.jpeg"; // adjust path if needed

const About: React.FC = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: "KHUSHI JANI",
      role: "CEO & Founder",
      bio: "Visionary leader with 6 months of experience in tech innovation and business strategy. Founded by Khushi Jani, an IT engineer and passionate problem-solver, CorviDelta began as a vision to bridge the gap between ideas and impact. What started as a single person’s dream has now evolved into a growing tech company, delivering smart and tailored solutions.",
      skills: ["Leadership", "Strategy", "Innovation"],
      image: FounderImage, // ✅ use imported image
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      icon: "💡",
    },
    {
      title: "Quality",
      description:
        "Excellence is our standard. We deliver robust, reliable, and high-performance solutions.",
      icon: "⭐",
    },
    {
      title: "Reliability",
      description:
        "Our clients trust us to deliver on time, every time, with consistent quality and support.",
      icon: "🛡️",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your success is our success. We go above and beyond to exceed expectations.",
      icon: "🎯",
    },
  ];

  const whyChooseUs = [
    "Cutting-edge technology expertise",
    "Dedicated support and maintenance",
    "Proven track record of success",
    "Agile development methodology",
    "Transparent communication",
    "Cost-effective solutions",
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
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About CORVI DELTA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We are passionate technologists dedicated to transforming
              businesses through innovative solutions and exceptional service.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Journey
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-base md:text-lg">
                <p>
                  CorviDelta OPC Pvt. Ltd. was born from a simple belief:
                  technology should empower, not overwhelm.
                </p>
                <p>
                  Founded by <b>Khushi Jani</b>, an IT engineer and passionate
                  problem-solver, CorviDelta began as a vision to bridge the gap
                  between ideas and impact.
                </p>
                <p>
                  <strong>2024 – The Spark:</strong> Foundation with a clear
                  mission: to create transformative tech solutions that help
                  people grow.
                </p>
                <p>
                  <strong>Early 2025 – Establishing Roots:</strong> Official
                  incorporation with core services like Website Wizardry,
                  UI/UX, Tech Consultation, and Custom Software Solutions.
                </p>
                <p>
                  <strong>Mid 2025 – First Big Wins:</strong> Secured initial
                  projects, networked in Ahmedabad, and created our digital
                  signature certificate (DSC) with the tagline: {" "}
                  <i>“Tech that Transforms, Solutions that Empower.”</i>
                </p>
                <p>
                  <strong>Today – Moving with Purpose:</strong> Growing rapidly
                  with client trust, passion, and innovation.
                </p>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-100">
                      Mission
                    </h4>
                    <p className="text-blue-50">
                      To craft innovative, reliable, and scalable tech solutions
                      that empower startups, businesses, and brands.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-100">
                      Vision
                    </h4>
                    <p className="text-blue-50">
                      To become a trusted global tech partner known for
                      precision, creativity, and empowerment.
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
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              The principles that guide every decision we make and every
              solution we deliver
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
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transform transition duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
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
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Meet The Founder
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              The talented individual behind our success, bringing expertise,
              creativity, and passion to every project.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 max-w-sm mx-auto"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose CORVI DELTA?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                We combine technical expertise with business acumen to deliver
                solutions that truly make a difference.
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
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
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
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Let's discuss how we can help transform your business with
                    innovative technology solutions.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contact")}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
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
