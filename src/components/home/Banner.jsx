import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, BookOpen } from 'lucide-react';
import Button from '../common/Button';

const Banner = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-void/70"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-terracotta/10 via-void/30 to-void/80"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-gold/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-terracotta/20 blur-3xl"
        />
        
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="object-cover w-full h-full"
          poster="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <source 
            src="https://player.vimeo.com/external/469022360.sd.mp4?s=3b9aace4c256d430a56e3c8b15b1e1b1f2d5c2c3&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
            }}
          />
        </motion.video>
      </div>

      <div className="container relative z-30 px-4 mx-auto md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 mb-6 space-x-2 border rounded-full bg-seashell/10 backdrop-blur-sm border-seashell/20"
          >
            <Star className="text-gold" size={16} />
            <span className="text-sm text-seashell">Where authentic stories transform lives</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-bold leading-tight font-heading md:text-6xl lg:text-7xl text-seashell"
          >
            Share and Discover
            <motion.span
              initial={{ backgroundPositionX: '100%' }}
              animate={{ backgroundPositionX: '0%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="bg-gradient-to-r from-gold to-terracotta bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              {" "}Transformative Stories
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-seashell/90"
          >
            Experience the power of authentic human stories. No filters, no polish—just real experiences that inspire change, foster connection, and transform perspectives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="px-8 py-4 text-lg"
            >
              Share Your Story
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Play size={20} />}
              className="px-8 py-4 text-lg bg-seashell/10 hover:bg-seashell/20 border-seashell/20"
            >
              Watch Introduction
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid max-w-2xl grid-cols-1 gap-8 mx-auto md:grid-cols-3"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 space-x-2">
                <Users className="text-terracotta" size={24} />
                <span className="text-3xl font-bold font-heading text-gold">10K+</span>
              </div>
              <p className="text-seashell/70">Community Members</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 space-x-2">
                <BookOpen className="text-terracotta" size={24} />
                <span className="text-3xl font-bold font-heading text-gold">2K+</span>
              </div>
              <p className="text-seashell/70">Authentic Stories</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 space-x-2">
                <Star className="text-terracotta" size={24} />
                <span className="text-3xl font-bold font-heading text-gold">98%</span>
              </div>
              <p className="text-seashell/70">Positive Impact</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute z-30 transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center w-6 h-10 border-2 rounded-full border-seashell/30"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 mt-2 rounded-full bg-seashell"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;