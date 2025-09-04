import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      handleSubmit(e);
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
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
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl text-void">
              Send Us a <span className="text-terracotta">Message</span>
            </h2>
            <p className="text-lg text-void/70">
              Have questions or want to share your story? We'd love to hear from you.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 shadow-lg bg-seashell rounded-2xl md:p-10"
          >
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center p-4 mb-6 border border-green-200 rounded-lg bg-green-50"
              >
                <CheckCircle className="mr-3 text-green-600" size={20} />
                <p className="text-green-800">Message sent successfully! We'll get back to you soon.</p>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center p-4 mb-6 border border-red-200 rounded-lg bg-red-50"
              >
                <AlertCircle className="mr-3 text-red-600" size={20} />
                <p className="text-red-800">Something went wrong. Please try again.</p>
              </motion.div>
            )}

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-void">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User size={18} className="text-void/40" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                    //   value={formData.name}
                    //   onChange={handleChange}
                      required
                      className="w-full py-3 pl-10 pr-4 transition-all duration-200 border rounded-lg border-void/20 focus:ring-2 focus:ring-terracotta/50 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-void">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail size={18} className="text-void/40" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                    //   value={formData.email}
                    //   onChange={handleChange}
                      required
                      className="w-full py-3 pl-10 pr-4 transition-all duration-200 border rounded-lg border-void/20 focus:ring-2 focus:ring-terracotta/50 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Subject Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-void">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                //   value={formData.subject}
                //   onChange={handleChange}
                  required
                  className="w-full px-4 py-3 transition-all duration-200 border rounded-lg border-void/20 focus:ring-2 focus:ring-terracotta/50 focus:border-transparent"
                  placeholder="What is your message about?"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-void">
                  Your Message *
                </label>
                <div className="relative">
                  <div className="absolute pointer-events-none top-3 left-3">
                    <MessageSquare size={18} className="text-void/40" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    // value={formData.message}
                    // onChange={handleChange}
                    required
                    rows={5}
                    className="w-full py-3 pl-10 pr-4 transition-all duration-200 border rounded-lg resize-none border-void/20 focus:ring-2 focus:ring-terracotta/50 focus:border-transparent"
                    placeholder="Share your thoughts, questions, or story..."
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full px-6 py-4 text-lg font-medium rounded-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-void/30 cursor-not-allowed'
                      : 'bg-terracotta text-seashell hover:bg-terracotta/90 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 rounded-full border-seashell/30 border-t-seashell animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>

              {/* Privacy Note */}
              <motion.p
                variants={itemVariants}
                className="text-sm text-center text-void/50"
              >
                We respect your privacy and will never share your information with third parties.
              </motion.p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;