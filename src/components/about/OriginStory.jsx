import { motion } from 'framer-motion';
import { Clock, Heart, Target, Users, Sparkles, ArrowRight } from 'lucide-react';

const OriginStory = () => {
  const milestones = [
    {
      year: "2018",
      title: "The Spark of Inspiration",
      description: "The initial concept was born from personal experiences with transformative storytelling and its healing power.",
      icon: <Sparkles className="text-terracotta" size={24} />
    },
    {
      year: "2020",
      title: "Platform Development",
      description: "Months of dedicated work to create a sanctuary for authentic stories and genuine connections.",
      icon: <Clock className="text-terracotta" size={24} />
    },
    {
      year: "2022",
      title: "Global Community Launch",
      description: "Officially opened to the world, welcoming storytellers from every corner of the globe.",
      icon: <Users className="text-terracotta" size={24} />
    },
    {
      year: "2024",
      title: "10,000+ Lives Transformed",
      description: "Reached a significant milestone of impacting thousands through shared experiences.",
      icon: <Heart className="text-terracotta" size={24} />
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gold/10"
          >
            <Target className="text-gold" size={36} />
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold font-heading md:text-5xl text-void">
            Our <span className="text-terracotta">Journey</span> of Purpose
          </h2>
          <p className="text-xl leading-relaxed text-void/70">
            From a single vision to a global movement—how Rewind The Clock became a sanctuary for transformative stories
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 w-1 h-full lg:left-1/2 lg:-translate-x-1/2 bg-gradient-to-b from-terracotta/20 to-gold/20"></div>
          
          {/* Milestones */}
          <div className="space-y-12 lg:space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Year Indicator */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-6 lg:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-terracotta/10"
                  >
                    <span className="text-2xl font-bold text-terracotta">{milestone.year}</span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 transition-all duration-300 shadow-sm bg-seashell rounded-2xl hover:shadow-md"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-terracotta/10">
                      {milestone.icon}
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-void">
                      {milestone.title}
                    </h3>
                    <p className="leading-relaxed text-void/70">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 top-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className="w-6 h-6 border-4 border-white rounded-full shadow-lg bg-terracotta"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="p-12 bg-gradient-to-r from-void/5 to-gold/5 rounded-3xl">
            <h3 className="mb-6 text-2xl font-semibold md:text-3xl font-heading text-void">
              Why <span className="text-terracotta">Our Story</span> Matters
            </h3>
            <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-void/70">
              "Our journey mirrors the very transformations we facilitate—proof that with vision, dedication, 
              and authentic storytelling, we can create spaces where healing and growth become possible for everyone."
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-medium transition-all duration-300 bg-white border rounded-full shadow-sm text-terracotta hover:shadow-md border-terracotta/20"
            >
              Read Our Full Story
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginStory;