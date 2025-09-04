import { motion } from 'framer-motion';
import { Mail, MessageCircle, Heart, ArrowDown, Users, Star, Clock } from 'lucide-react';

const ContactBanner = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] overflow-hidden">
      {/* Background with sophisticated overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-void/90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/30 via-void/50 to-gold/20 z-15"></div>
        
        {/* Premium background image */}
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "brightness(0.7) contrast(1.1)"
          }}
        />
        
        {/* Animated gradient elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          className="absolute rounded-full w-80 h-80 -top-40 -left-20 bg-terracotta/40 blur-4xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.6 }}
          className="absolute rounded-full w-96 h-96 -bottom-40 -right-20 bg-gold/30 blur-4xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-seashell/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-30 px-4 mx-auto text-center md:px-6">
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center px-5 py-3 mb-8 space-x-3 border shadow-lg rounded-2xl bg-seashell/10 backdrop-blur-md border-seashell/20"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta/20">
            <MessageCircle className="text-terracotta" size={18} />
          </div>
          <span className="text-sm font-medium text-seashell">Your Voice Matters</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 text-5xl font-bold leading-tight font-heading md:text-6xl lg:text-7xl text-seashell"
        >
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-gold">Connect</span> & Create
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-seashell/90"
        >
          Share your story, ask questions, or explore how we can collaborate to inspire transformation.
        </motion.p>

        {/* Stats ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center px-4 py-2 rounded-full bg-seashell/10 backdrop-blur-sm">
            <Users size={16} className="mr-2 text-gold" />
            <span className="text-sm font-medium text-seashell">10K+ Community Members</span>
          </div>
          <div className="flex items-center px-4 py-2 rounded-full bg-seashell/10 backdrop-blur-sm">
            <Star size={16} className="mr-2 text-gold" />
            <span className="text-sm font-medium text-seashell">500+ Stories Shared</span>
          </div>
          <div className="flex items-center px-4 py-2 rounded-full bg-seashell/10 backdrop-blur-sm">
            <Clock size={16} className="mr-2 text-gold" />
            <span className="text-sm font-medium text-seashell">24h Response Time</span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="flex items-center px-8 py-4 font-medium transition-all duration-300 rounded-full bg-terracotta text-seashell hover:bg-terracotta/90 hover:shadow-lg">
            <Mail size={20} className="mr-2" />
            Send Message
          </button>
          <button className="flex items-center px-8 py-4 font-medium transition-all duration-300 bg-transparent border rounded-full text-seashell border-seashell/30 hover:bg-seashell/10 hover:shadow-lg">
            Explore Stories
          </button>
        </motion.div>

        {/* Premium scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="mb-2 text-sm font-medium text-seashell/70">Scroll to connect</span>
            <div className="flex justify-center w-8 h-12 border-2 rounded-full border-seashell/40">
              <ArrowDown size={20} className="mt-2 text-seashell" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;

// Contact Information - Display contact methods (email, phone, address)

// Contact Form - Form for users to send messages

// FAQ Preview - Show frequently asked questions with link to full FAQ page

// Community CTA - 