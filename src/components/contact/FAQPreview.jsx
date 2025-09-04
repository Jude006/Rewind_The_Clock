import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, BookOpen } from 'lucide-react';
import { useState } from 'react';

const FAQPreview = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I share my story on Rewind The Clock?",
      answer: "Sharing your story is simple. Click on the 'Share Your Story' button in the navigation menu, fill out our submission form with your transformative experience, and our team will review it. Once approved, your story will be published for our community to discover and be inspired by."
    },
    {
      question: "Can I share my story anonymously?",
      answer: "Yes, absolutely. We understand that some stories are deeply personal. When submitting your story, you can choose to publish it anonymously. Your privacy and comfort are important to us."
    },
    {
      question: "How long does it take for my story to be published?",
      answer: "Our team reviews each submission to ensure it aligns with our community guidelines. This process typically takes 3-5 business days. You'll receive an email notification once your story is live on our platform."
    },
    {
      question: "What types of stories are you looking for?",
      answer: "We're interested in authentic, transformative life experiences across all themes - resilience, growth, love, courage, overcoming challenges, and personal evolution. What matters most is the authenticity and transformative nature of your experience."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-seashell to-white">
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-terracotta/20">
              <HelpCircle className="mr-2 text-terracotta" size={18} />
              <span className="text-sm font-medium text-terracotta">Common Questions</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl text-void">
              Frequently Asked <span className="text-terracotta">Questions</span>
            </h2>
            <p className="text-lg text-void/70">
              Find quick answers to common questions about sharing and discovering stories.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12 space-y-4"
          >
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="overflow-hidden transition-shadow duration-300 bg-white border shadow-sm rounded-xl border-void/10 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                >
                  <span className="pr-4 text-lg font-medium text-void">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-terracotta" size={24} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-void/70">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Simple CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center px-5 py-3 rounded-lg bg-void/5">
              <BookOpen className="mr-2 text-terracotta" size={20} />
              <p className="text-void">
                Have more questions? Feel free to <a href="/contact" className="font-medium text-terracotta hover:underline">contact us</a> directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;