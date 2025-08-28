// src/components/sections/FeaturedStories/FeaturedStories.jsx
import { motion } from 'framer-motion';
import { 
  Clock, 
  Heart, 
  Play,
  ArrowRight,
  BookOpen,
  Star,
  MessageCircle
} from 'lucide-react';
import Button from '../common/Button';

const FeaturedStories = () => {
  const stories = [
    {
      id: 1,
      title: "How I Found Courage After Loss",
      excerpt: "After losing everything, I discovered strength I never knew I had...",
      author: "Sarah Johnson",
      readTime: "8 min read",
      category: "Resilience",
      likes: 243,
      comments: 42,
      hasAudio: true,
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "From Addiction to Redemption",
      excerpt: "My journey through darkness and the light that guided me home...",
      author: "Michael Chen",
      readTime: "12 min read",
      category: "Recovery",
      likes: 187,
      comments: 31,
      hasAudio: true,
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "The Day Everything Changed",
      excerpt: "A single moment that transformed my perspective on life forever...",
      author: "Emma Rodriguez",
      readTime: "6 min read",
      category: "Transformation",
      likes: 321,
      comments: 56,
      hasAudio: false,
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
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
    <section className="py-20 bg-white">
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
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gold/10"
          >
            <Star className="text-gold" size={32} />
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-void">
            Featured <span className="text-terracotta">Transformative</span> Stories
          </h2>
          <p className="text-lg leading-relaxed text-void/70">
            Discover powerful journeys of transformation, resilience, and hope. 
            These carefully selected stories have touched thousands of lives.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              variants={itemVariants}
              className="overflow-hidden transition-all duration-300 shadow-lg group bg-seashell rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              {/* Story Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={story.image}
                  alt={story.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-terracotta text-seashell">
                    {story.category}
                  </span>
                </div>

                {/* Audio Indicator */}
                {story.hasAudio && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute flex items-center justify-center w-10 h-10 rounded-full top-4 right-4 bg-gold/90"
                  >
                    <Play size={16} className="ml-1 text-void" />
                  </motion.div>
                )}
              </div>

              {/* Story Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center text-sm text-void/60">
                    <Clock size={14} className="mr-1" />
                    {story.readTime}
                  </span>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-void/60">
                      <Heart size={14} className="mr-1" />
                      {story.likes}
                    </span>
                    <span className="flex items-center text-sm text-void/60">
                      <MessageCircle size={14} className="mr-1" />
                      {story.comments}
                    </span>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold transition-colors font-heading text-void group-hover:text-terracotta">
                  {story.title}
                </h3>

                <p className="mb-4 text-void/60 line-clamp-2">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-void">
                    {story.author}
                  </span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm font-medium text-terracotta hover:text-terracotta/80"
                  >
                    Read Story
                    <ArrowRight size={16} className="ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="primary"
            size="lg"
            icon={<BookOpen size={20} />}
            iconPosition="right"
            className="px-8 py-4 text-lg"
          >
            Explore All Stories
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute left-10 bottom-1/4"
      >
        <BookOpen size={120} className="text-terracotta/20" />
      </motion.div>
    </section>
  );
};

export default FeaturedStories;