// src/components/sections/TransformativeImpact/TransformativeImpact.jsx
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Globe,
  Target,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
  Award,
  Calendar
} from 'lucide-react';
import Button from '../common/Button';

const TransformativeImpact = () => {
  const testimonials = [
    {
      quote: "Sharing my story here helped me heal and unexpectedly became a beacon of hope for others facing similar battles.",
      author: "Maria Rodriguez",
      role: "Cancer Survivor & Advocate",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "This platform didn't just tell me I could overcome—it showed me through real stories of people who actually did.",
      author: "James Wilson",
      role: "Entrepreneur & Mentor",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "Reading these authentic experiences gave me the courage to leave my corporate job and pursue my passion for teaching.",
      author: "Sarah Chen",
      role: "Former Executive, Now Educator",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const impactStats = [
    { number: "10,000+", label: "Lives Transformed", icon: <Heart className="text-terracotta" size={20} /> },
    { number: "2,500+", label: "Stories Shared", icon: <Quote className="text-terracotta" size={20} /> },
    { number: "98%", label: "Report Positive Change", icon: <Target className="text-terracotta" size={20} /> },
    { number: "47", label: "Countries Reached", icon: <Globe className="text-terracotta" size={20} /> }
  ];

  const finalCTA = {
    title: "Your Story Can Change Someone's Life Today",
    description: "Join thousands who have turned their experiences into beacons of hope, resilience, and transformation.",
    button: "Share Your Transformative Journey"
  };

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
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-seashell">
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
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gold/10"
          >
            <Award className="text-gold" size={32} />
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-void">
            The <span className="text-terracotta">Ripple Effect</span> of Transformative Stories
          </h2>
          <p className="text-lg leading-relaxed text-void/70">
            Every story shared creates waves of change, touching lives across the globe and liberating others 
            to embrace their God-given potential through proven experiences and authentic connections.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-8 mb-20 lg:grid-cols-4"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 text-center transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-12 h-12 mx-auto mb-4 transition-colors rounded-full bg-terracotta/10 group-hover:bg-terracotta/20"
              >
                {stat.icon}
              </motion.div>
              <div className="mb-2 text-3xl font-bold md:text-4xl font-heading text-void">
                {stat.number}
              </div>
              <p className="text-sm font-medium text-void/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="mb-12 text-2xl font-semibold text-center font-heading md:text-3xl text-void">
            Real <span className="text-terracotta">Transformations</span>, Real People
          </h3>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl group"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-void">{testimonial.author}</h4>
                    <p className="text-sm text-void/60">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="mb-3 text-terracotta/30" size={24} />
                <p className="mb-4 italic leading-relaxed text-void/70">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current text-gold" size={16} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Reinforcement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative p-8 mb-16 overflow-hidden bg-gradient-to-r from-void to-charcoal rounded-3xl md:p-12 text-seashell"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10">
              <Quote size={120} />
            </div>
            <div className="absolute bottom-10 right-10">
              <Heart size={120} />
            </div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <Sparkles className="mx-auto mb-6 text-gold" size={32} />
            <h3 className="mb-6 text-2xl font-semibold font-heading md:text-3xl">
              Our Promise: <span className="text-gold">Authenticity That Transforms</span>
            </h3>
            <p className="mb-6 leading-relaxed text-seashell/80">
              We remain steadfast in our mission to disseminate proven information that liberates our audience 
              from limiting beliefs. Through tenacious storytelling and deliberate action, we celebrate the 
              diversity of human experience while fostering understanding and positive impact.
            </p>
            <div className="flex items-center justify-center space-x-4 text-seashell/60">
              <Calendar size={16} />
              <span className="text-sm">Founded on the principle that every story matters</span>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 bg-white border shadow-2xl rounded-3xl md:p-12 border-void/10">
            <h3 className="mb-4 text-2xl font-semibold font-heading md:text-3xl text-void">
              {finalCTA.title}
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-void/70">
              {finalCTA.description}
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="px-8 py-4 text-lg"
              >
                {finalCTA.button}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="px-8 py-4 text-lg border-void text-void hover:bg-void hover:text-seashell"
              >
                Read Impact Stories
              </Button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="mt-6 text-sm text-void/50"
            >
              Join 10,000+ others making a formidable positive impact on the planet
            </motion.p>
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
        <Sparkles size={120} className="text-terracotta/20" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute right-10 bottom-1/4"
      >
        <Users size={120} className="text-gold/20" />
      </motion.div>
    </section>
  );
};

export default TransformativeImpact;