import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [subscriberCount, setSubscriberCount] = useState<number>(0);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const categories = [
    "All",
    "Web Development",
    "AI & Technology",
    "Mobile Apps",
    "Design",
    "Business",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the latest trends shaping web development, from AI integration to progressive web apps and beyond.",
      content:
        "Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly...",
      category: "Web Development",
      author: "Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true,
    },
    {
      id: 2,
      title: "AI Integration in Modern Applications: A Practical Guide",
      excerpt:
        "Learn how to effectively integrate AI capabilities into your applications with real-world examples and best practices.",
      content:
        "Artificial Intelligence is no longer a futuristic concept but a practical tool that can enhance modern applications...",
      category: "AI & Technology",
      author: "Michael Rodriguez",
      date: "2025-01-12",
      readTime: "12 min read",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile-First Design: Best Practices for 2025",
      excerpt:
        "Discover essential mobile-first design principles that ensure your app provides excellent user experience across all devices.",
      content:
        "With mobile usage continuing to dominate, mobile-first design has become more critical than ever...",
      category: "Mobile Apps",
      author: "Emily Davis",
      date: "2025-01-10",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 4,
      title: "Building Scalable React Applications: Architecture Patterns",
      excerpt:
        "Master the art of building scalable React applications with proven architecture patterns and best practices.",
      content:
        "As React applications grow in complexity, having a solid architecture becomes crucial for maintainability...",
      category: "Web Development",
      author: "Alex Johnson",
      date: "2025-01-08",
      readTime: "10 min read",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 5,
      title: "The Psychology of UX Design: Creating Intuitive Interfaces",
      excerpt:
        "Understand the psychological principles that make interfaces intuitive and how to apply them in your designs.",
      content:
        "Great UX design goes beyond aesthetics; it understands human psychology and behavior patterns...",
      category: "Design",
      author: "Emily Davis",
      date: "2025-01-05",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 6,
      title:
        "Digital Transformation: A Strategic Approach for Businesses",
      excerpt:
        "Learn how to successfully navigate digital transformation with a strategic approach that delivers measurable results.",
      content:
        "Digital transformation is not just about adopting new technologies; it is about fundamentally changing how businesses operate...",
      category: "Business",
      author: "David Kumar",
      date: "2025-01-03",
      readTime: "9 min read",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
  ];

  useEffect(() => {
    const savedCount = localStorage.getItem("subscriberCount");
    const subscribed = localStorage.getItem("isSubscribed");

    if (savedCount) setSubscriberCount(Number(savedCount));
    if (subscribed === "true") setIsSubscribed(true);
  }, []);

  const handleSubscribe = () => {
    if (!isSubscribed) {
      const newCount = subscriberCount + 1;
      setSubscriberCount(newCount);
      setIsSubscribed(true);

      localStorage.setItem("subscriberCount", newCount.toString());
      localStorage.setItem("isSubscribed", "true");
    } else {
      const newCount = subscriberCount > 0 ? subscriberCount - 1 : 0;
      setSubscriberCount(newCount);
      setIsSubscribed(false);

      localStorage.setItem("subscriberCount", newCount.toString());
      localStorage.setItem("isSubscribed", "false");
    }
  };

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            Insights & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Stay updated with the latest trends in technology, development
            insights, and industry news from the{" "}
            <span className="font-semibold text-blue-600">
              CORVI DELTA
            </span>{" "}
            team.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-gray-50 dark:bg-gray-800 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                    <div className="flex items-center">
                      <UserIcon className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300"
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">
                No articles found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Read More Popup */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh] shadow-xl"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                By {selectedPost.author} · {selectedPost.readTime}
              </p>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {selectedPost.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Subscribe to our newsletter and get the latest insights,
            updates, and exclusive content straight to your inbox.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubscribe}
              className={`px-6 py-3 rounded-lg font-semibold text-white text-lg shadow-md transition-colors duration-300 ${
                isSubscribed
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
            >
              {isSubscribed ? "Unsubscribe " : "Subscribe"}
            </motion.button>

            <p className="text-blue-100 text-sm mt-4">
              {subscriberCount}{" "}
              {subscriberCount === 1 ? "subscriber" : "subscribers"} so far
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
