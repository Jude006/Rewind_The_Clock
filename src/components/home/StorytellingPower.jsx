// src/components/sections/StorytellingPower/StorytellingPower.jsx
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Mic,
  Share2,
  Clock
} from 'lucide-react';
import Button from '../common/Button';

const StorytellingPower = () => {
  const features = [
    {
      icon: <BookOpen className="text-terracotta" size={24} />,
      title: "Authentic Experiences",
      description: "Real stories from real people. No filters, no polish—just raw, authentic experiences that resonate deeply.",
      delay: 0.1
    },
    {
      icon: <Heart className="text-terracotta" size={24} />,
      title: "Emotional Connection",
      description: "Forge genuine connections through shared experiences. Stories that touch the heart and transform perspectives.",
      delay: 0.2
    },
    {
      icon: <Sparkles className="text-terracotta" size={24} />,
      title: "Transformative Impact",
      description: "Discover how others overcame challenges. Find inspiration and courage to write your own transformative story.",
      delay: 0.3
    },
    {
      icon: <Users className="text-terracotta" size={24} />,
      title: "Supportive Community",
      description: "Join a compassionate community where every voice matters and every story contributes to collective growth.",
      delay: 0.4
    }
  ];

  const stats = [
    { number: "92%", label: "of users feel inspired after reading stories" },
    { number: "85%", label: "report positive life changes" },
    { number: "10K+", label: "lives transformed through shared experiences" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="py-20 overflow-hidden bg-seashell">
      <div className="container px-4 mx-auto md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-terracotta/10"
          >
            <Sparkles className="text-terracotta" size={32} />
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-void">
            The Transformative Power of{" "}
            <span className="text-transparent bg-gradient-to-r from-terracotta to-gold bg-clip-text">
              Storytelling
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-void/70">
            Stories have the unique ability to heal, connect, and transform. 
            They bridge gaps between strangers and turn experiences into wisdom.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={feature.delay}
              className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl group hover:-translate-y-2"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-flex items-center justify-center mb-6 transition-colors rounded-full w-14 h-14 bg-terracotta/10 group-hover:bg-terracotta/20"
              >
                {feature.icon}
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold font-heading text-void">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-void/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="p-8 mb-16 bg-gradient-to-r from-void to-charcoal rounded-3xl md:p-12 text-seashell"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold md:text-5xl font-heading text-gold">
                  {stat.number}
                </div>
                <p className="text-seashell/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="mb-6 text-2xl font-semibold font-heading md:text-3xl text-void">
            Ready to Begin Your Journey?
          </h3>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              icon={<Share2 size={20} />}
              iconPosition="right"
              className="px-8 py-4 text-lg"
            >
              Share Your Story
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={20} />}
              className="px-8 py-4 text-lg border-void text-void hover:bg-void hover:text-seashell"
            >
              Explore Stories
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute left-10 top-1/4"
      >
        <Clock size={120} className="text-terracotta/20" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute right-10 bottom-1/4"
      >
        <BookOpen size={120} className="text-gold/20" />
      </motion.div>
    </section>
  );
};

export default StorytellingPower;