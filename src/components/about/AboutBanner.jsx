// src/components/sections/AboutBanner/AboutBanner.jsx
import { motion } from 'framer-motion';
import { Heart, ArrowDown } from 'lucide-react';

const AboutBanner = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] md:min-h-[60vh] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-void/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-terracotta/20 via-void/40 to-void/90 z-15"></div>
        
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center md:bg-top"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        />
        
        {/* Animated elements - Moved further down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full top-3/4 left-1/4 md:top-2/3 bg-gold/20 blur-xl md:blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute w-40 h-40 md:w-96 md:h-96 rounded-full bottom-1/4 right-1/4 md:right-1/4 bg-terracotta/20 blur-xl md:blur-3xl"
        />
      </div>

      {/* Content - Now with proper spacing */}
      <div className="container relative z-30 px-4 mx-auto text-center md:px-6 mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 space-x-2 border rounded-full bg-seashell/10 backdrop-blur-sm border-seashell/20"
        >
          <Heart className="text-gold w-3 h-3 md:w-4 md:h-4" />
          <span className="text-xs md:text-sm text-seashell">Our Story of Transformation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 md:mb-6 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-heading text-seashell px-4"
        >
          The Heart Behind <span className="text-gold block md:inline-block">Rewind The Clock</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-sm md:text-lg leading-relaxed text-seashell/90 px-4 md:px-0 mb-8 md:mb-12"
        >
          Where authentic stories become catalysts for change, connection, and collective growth.
        </motion.p>
      </div>

      {/* Scroll indicator - Now completely separate from content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 mt-auto"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center w-6 h-8 md:w-6 md:h-10 border-2 rounded-full border-seashell/30"
        >
          <ArrowDown size={16} className="mt-1 md:mt-2 text-seashell" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutBanner;