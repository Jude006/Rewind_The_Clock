import { motion } from 'framer-motion';
import { Heart, Users, Star, ArrowRight, MessageCircle, BookOpen } from 'lucide-react';
import Button from '../common/Button';

const JoinMovement = () => {
  const waysToJoin = [
    {
      icon: <BookOpen className="text-terracotta" size={24} />,
      title: "Share Your Story",
      description: "Contribute your authentic experiences to inspire others on their journey",
      color: "bg-terracotta/10"
    },
    {
      icon: <MessageCircle className="text-terracotta" size={24} />,
      title: "Engage with Community",
      description: "Connect with fellow storytellers and support each other's growth",
      color: "bg-gold/10"
    },
    {
      icon: <Heart className="text-terracotta" size={24} />,
      title: "Support Our Mission",
      description: "Help us reach more people by sharing our platform with others",
      color: "bg-void/10"
    }
  ];

  const communityStats = [
    { number: "10K+", label: "Active Community Members" },
    { number: "47", label: "Countries Represented" },
    { number: "98%", label: "Positive Impact Reported" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-seashell">
      <div className="container px-4 mx-auto md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-terracotta/10"
          >
            <Users className="text-terracotta" size={36} />
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold font-heading md:text-5xl text-void">
            Join Our <span className="text-terracotta">Global Movement</span>
          </h2>
          <p className="text-xl leading-relaxed text-void/70">
            Become part of a community that believes in the transformative power of authentic storytelling
          </p>
        </motion.div>

        {/* Ways to Join */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3"
        >
          {waysToJoin.map((way, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="p-8 text-center transition-all duration-300 bg-white shadow-sm rounded-2xl hover:shadow-md"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`inline-flex items-center justify-center w-16 h-16 ${way.color} rounded-2xl mb-6`}
              >
                {way.icon}
              </motion.div>
              <h3 className="mb-4 text-2xl font-semibold text-void">
                {way.title}
              </h3>
              <p className="leading-relaxed text-void/70">
                {way.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="p-12 mb-16 bg-gradient-to-r from-void to-charcoal rounded-3xl text-seashell"
        >
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-2 text-4xl font-bold md:text-5xl font-heading text-gold">
                  {stat.number}
                </div>
                <p className="text-seashell/80">{stat.label}</p>
              </motion.div>
            ))}
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
          <div className="p-12 bg-white border shadow-lg rounded-3xl border-void/10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gold/10"
            >
              <Star className="text-gold" size={32} />
            </motion.div>
            
            <h3 className="mb-4 text-2xl font-semibold md:text-3xl font-heading text-void">
              Ready to Make a Difference?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-void/70">
              Join thousands of storytellers who are transforming lives through the power of authentic experiences
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="px-8 py-4 text-lg"
              >
                Start Your Journey
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="px-8 py-4 text-lg border-void text-void hover:bg-void hover:text-seashell"
              >
                Learn More
              </Button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              viewport={{ once: true }}
              className="mt-6 text-sm text-void/50"
            >
              No story is too small. Every experience matters.
            </motion.p>
          </div>
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <blockquote className="max-w-2xl mx-auto text-lg italic text-void/60">
            "The most powerful stories aren't those with perfect endings, but those with authentic beginnings."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinMovement;