// src/components/sections/HowItWorks/HowItWorks.jsx
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Upload, 
  Users, 
  Sparkles,
  Target,
  Heart,
  Shield,
  ArrowRight
} from 'lucide-react';
import Button from '../common/Button';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <PenTool className="text-terracotta" size={24} />,
      title: "Share Your Authentic Story",
      description: "Share your raw, genuine experiences—both challenges and triumphs. Your authentic story has the power to liberate others from limiting beliefs and inspire positive action.",
      delay: 0.1
    },
    {
      step: "02",
      icon: <Upload className="text-terracotta" size={24} />,
      title: "We Review with Care",
      description: "Our team ensures every story aligns with our values of resilience, growth, and positive impact. We maintain the highest standards of authenticity and emotional resonance.",
      delay: 0.2
    },
    {
      step: "03",
      icon: <Users className="text-terracotta" size={24} />,
      title: "Connect with Our Community",
      description: "Your story reaches thousands seeking guidance. Through shared experiences, we build a supportive community that celebrates diversity and promotes understanding.",
      delay: 0.3
    },
    {
      step: "04",
      icon: <Sparkles className="text-terracotta" size={24} />,
      title: "Inspire Transformative Action",
      description: "Witness how your journey empowers others to embrace their God-given potential and make formidable positive impacts in their own lives and communities.",
      delay: 0.4
    }
  ];

  const values = [
    {
      icon: <Shield className="text-gold" size={20} />,
      title: "Authenticity",
      description: "Genuine stories that build trust and form deep connections"
    },
    {
      icon: <Target className="text-gold" size={20} />,
      title: "Purpose",
      description: "Focused on liberating from limiting beliefs and embracing potential"
    },
    {
      icon: <Heart className="text-gold" size={20} />,
      title: "Impact",
      description: "Creating positive, sustainable change through shared experiences"
    }
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
    hidden: { y: 50, opacity: 0 },
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
    <section className="py-20 bg-gradient-to-b from-seashell to-white">
      <div className="container px-4 mx-auto md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-terracotta/10"
          >
            <Target className="text-terracotta" size={32} />
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-void">
            How We <span className="text-terracotta">Transform Lives</span> Through Stories
          </h2>
          <p className="text-lg leading-relaxed text-void/70">
            Our proven process ensures every story shared contributes to our mission of disseminating 
            proven information that liberates and empowers our community to embrace their God-given potential.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-12 mb-20 lg:grid-cols-2"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={step.delay}
              className="relative group"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-16 w-24 h-0.5 bg-terracotta/20 group-last:hidden" />
              )}
              
              <div className="flex items-start space-x-6">
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors rounded-full bg-terracotta/10 group-hover:bg-terracotta/20"
                >
                  <span className="text-2xl font-bold font-heading text-terracotta">
                    {step.step}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-lg bg-gold/10 group-hover:bg-gold/20">
                    {step.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold font-heading text-void">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-void/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="p-8 mb-16 bg-gradient-to-r from-void to-charcoal rounded-3xl md:p-12 text-seashell"
        >
          <h3 className="mb-12 text-2xl font-semibold text-center font-heading md:text-3xl">
            Our <span className="text-gold">Core Values</span> in Storytelling
          </h3>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 text-center bg-seashell/10 rounded-2xl backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gold/20">
                  {value.icon}
                </div>
                <h4 className="mb-2 text-lg font-semibold font-heading">
                  {value.title}
                </h4>
                <p className="text-sm text-seashell/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <blockquote className="mb-8 text-xl italic leading-relaxed font-heading md:text-2xl text-void/80">
            "Through tenaciousness, steadfastness, and deliberate actions, we share proven experiences 
            that transform limiting beliefs into limitless possibilities."
          </blockquote>
          <p className="text-void/60">
            — Rewind The Clock Mission
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="mb-6 text-2xl font-semibold font-heading md:text-3xl text-void">
            Ready to Share Your Transformative Journey?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-void/70">
            Join our community of storytellers who are making a formidable positive impact on the planet 
            through their authentic experiences.
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            className="px-8 py-4 text-lg"
          >
            Begin Your Story
          </Button>
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
        <PenTool size={120} className="text-terracotta/20" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute right-10 bottom-1/4"
      >
        <Sparkles size={120} className="text-gold/20" />
      </motion.div>
    </section>
  );
};

export default HowItWorks;