// src/components/sections/Leadership/Leadership.jsx
import { motion } from 'framer-motion';
import { Linkedin, Mail, Globe, Quote, Award, Sparkles } from 'lucide-react';

const Leadership = () => {
  const founder = {
    name: "Nicholas Orifa",
    role: "Founder & Visionary Director",
    image: "/images/ceo.jpg",
    bio: "With over 15 years in transformative storytelling and human psychology, Nicholas envisioned a platform where authentic experiences could heal, connect, and inspire global change. His journey from clinical psychology to digital storytelling forms the foundation of our mission to help people rewrite their narratives.",
    philosophy: "Every story has the power to rewind someone's clock of hope and set it forward with renewed purpose. Authenticity is the bridge between struggle and transformation.",
    expertise: [
      "Transformative Storytelling",
      "Clinical Psychology Background",
      "Digital Community Building",
      "Narrative Therapy",
      "Authentic Leadership"
    ],
    social: {
      linkedin: "#",
      email: "Nicholas@rewindtheclock.com",
      website: "#"
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-seashell to-white">
      <div className="container px-4 mx-auto md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 md:mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 rounded-full bg-terracotta/10"
          >
            <Award className="text-terracotta w-8 h-8 md:w-10 md:h-10" />
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-void">
            The <span className="text-terracotta">Visionary</span> Behind Our Mission
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-void/70">
            Meet the passionate founder who transformed a personal vision into a global movement of healing and connection
          </p>
        </motion.div>

        {/* Founder Layout - Premium Design */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:mb-20 lg:grid-cols-3 lg:gap-12">
          {/* Founder Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void/20 to-transparent rounded-2xl" />
              </motion.div>

              {/* Social Links - Fixed for mobile */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute flex justify-center w-full px-4 py-3 -bottom-6"
              >
                <div className="flex space-x-3 px-4 py-2 rounded-full shadow-lg bg-white/95 backdrop-blur-sm">
                  {Object.entries(founder.social).map(([platform, url]) => (
                    <motion.a
                      key={platform}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={platform === 'email' ? `mailto:${url}` : url}
                      className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition-all duration-300 border rounded-full bg-seashell hover:bg-terracotta hover:text-seashell border-void/10"
                    >
                      {platform === 'linkedin' && <Linkedin size={18} className="md:w-5 md:h-5" />}
                      {platform === 'email' && <Mail size={18} className="md:w-5 md:h-5" />}
                      {platform === 'website' && <Globe size={18} className="md:w-5 md:h-5" />}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Founder Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 mt-10 md:mt-0"
          >
            <div className="space-y-6 md:space-y-8">
              {/* Name and Role */}
              <div>
                <h3 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-void">
                  {founder.name}
                </h3>
                <p className="text-lg md:text-xl font-medium text-terracotta">
                  {founder.role}
                </p>
              </div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-base md:text-lg leading-relaxed text-void/70">
                  {founder.bio}
                </p>
              </motion.div>

              {/* Philosophy Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 md:p-8 border-l-4 bg-gradient-to-r from-terracotta/5 to-gold/5 rounded-2xl border-terracotta"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <Quote className="flex-shrink-0 mt-1 text-terracotta w-5 h-5 md:w-6 md:h-6" />
                  <p className="text-lg md:text-xl italic leading-relaxed text-void/80">
                    "{founder.philosophy}"
                  </p>
                </div>
              </motion.div>

              {/* Expertise */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-4 md:p-6 bg-white border shadow-sm rounded-2xl border-void/10"
              >
                <h4 className="flex items-center mb-3 md:mb-4 text-xl font-semibold text-void">
                  <Sparkles className="mr-2 text-gold w-5 h-5" />
                  Areas of Expertise
                </h4>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
                  {founder.expertise.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-terracotta"></div>
                      <span className="text-sm md:text-base text-void/70">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-6 md:p-12 text-center bg-gradient-to-r from-void to-charcoal rounded-3xl text-seashell"
        >
          <h3 className="mb-4 md:mb-6 text-xl md:text-2xl lg:text-3xl font-semibold font-heading">
            A <span className="text-gold">Lifetime Commitment</span> to Transformative Storytelling
          </h3>
          <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-seashell/80">
            "Our mission is to create a sanctuary where every story finds its purpose, every voice is heard, 
            and every experience becomes a stepping stone for someone else's journey toward healing and growth."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;