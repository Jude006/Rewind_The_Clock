// src/components/sections/AboutBanner/AboutBanner.jsx
import { motion } from 'framer-motion';
import { Heart, Users, Star, ArrowDown } from 'lucide-react';

const AboutBanner = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-void/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-terracotta/20 via-void/40 to-void/90 z-15"></div>
        
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 object-top bg-top "
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        />
        
        {/* Animated elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute w-64 h-64 rounded-full top-1/3 left-1/4 bg-gold/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-terracotta/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-30 px-4 mx-auto text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center px-4 py-2 mb-6 space-x-2 border rounded-full bg-seashell/10 backdrop-blur-sm border-seashell/20"
        >
          <Heart className="text-gold" size={16} />
          <span className="text-sm text-seashell">Our Story of Transformation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl text-seashell"
        >
          The Heart Behind <span className="text-gold">Rewind The Clock</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg leading-relaxed md:text-xl text-seashell/90"
        >
          Where authentic stories become catalysts for change, connection, and collective growth.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center w-6 h-10 border-2 rounded-full border-seashell/30"
          >
            <ArrowDown size={20} className="mt-2 text-seashell" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;