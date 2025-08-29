// src/components/sections/Stories/StoriesDiscover.jsx
import { motion } from 'framer-motion';
import { Filter, Search, Clock, Heart, MessageCircle, Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Stories = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Stories' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'recent', label: 'Most Recent' },
    { id: 'audio', label: 'Audio Stories' },
    { id: 'resilience', label: 'Resilience' },
    { id: 'growth', label: 'Growth' },
    { id: 'love', label: 'Love & Relationships' },
    { id: 'courage', label: 'Courage' }
  ];

  const stories = [
    {
      id: 1,
      title: "How I Found Strength After Loss",
      excerpt: "After losing everything, I discovered a resilience I never knew I had within me...",
      author: "Sarah Chen",
      readTime: "8 min read",
      category: "Resilience",
      likes: 243,
      comments: 42,
      hasAudio: true,
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
      isFeatured: true
    },
    {
      id: 2,
      title: "From Addiction to Redemption",
      excerpt: "My journey through darkness and the light that guided me home to recovery...",
      author: "Michael Rodriguez",
      readTime: "12 min read",
      category: "Growth",
      likes: 187,
      comments: 31,
      hasAudio: true,
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600",
      isFeatured: false
    },
    {
      id: 3,
      title: "The Day Everything Changed",
      excerpt: "A single moment that transformed my perspective on life and purpose forever...",
      author: "Emma Wilson",
      readTime: "6 min read",
      category: "Transformation",
      likes: 321,
      comments: 56,
      hasAudio: false,
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
      isFeatured: true
    },
    {
      id: 4,
      title: "Breaking Free from Fear",
      excerpt: "How I overcame anxiety and learned to embrace uncertainty with open arms...",
      author: "James Thompson",
      readTime: "10 min read",
      category: "Courage",
      likes: 156,
      comments: 28,
      hasAudio: true,
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600",
      isFeatured: false
    },
    {
      id: 5,
      title: "Rediscovering Love After Heartbreak",
      excerpt: "My journey of healing and learning to love again after profound loss...",
      author: "Lisa Martinez",
      readTime: "14 min read",
      category: "Love",
      likes: 278,
      comments: 67,
      hasAudio: false,
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
      isFeatured: true
    },
    {
      id: 6,
      title: "Embracing My Authentic Self",
      excerpt: "The liberating journey of shedding expectations and embracing my true identity...",
      author: "Alex Johnson",
      readTime: "9 min read",
      category: "Growth",
      likes: 198,
      comments: 34,
      hasAudio: true,
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600",
      isFeatured: false
    }
  ];

  return (
    <section className="py-12 bg-seashell">
      <div className="container px-4 mx-auto md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold font-heading md:text-5xl text-void">
            Discover <span className="text-terracotta">Transformative</span> Stories
          </h1>
          <p className="text-xl text-void/70">
            Explore authentic experiences that inspire change, foster connection, and transform perspectives
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sticky z-10 p-6 mb-12 bg-white shadow-lg top-4 rounded-2xl"
        >
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute transform -translate-y-1/2 left-4 top-1/2 text-void/40" size={20} />
              <input
                type="text"
                placeholder="Search stories, topics, or authors..."
                className="w-full py-3 pl-12 pr-4 border rounded-full border-void/20 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
              />
            </div>

            {/* Filter Button */}
            <button className="flex items-center px-6 py-3 space-x-2 transition-colors rounded-full bg-terracotta text-seashell hover:bg-terracotta/90">
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Filter Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-4"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-terracotta text-seashell'
                    : 'bg-void/5 text-void/70 hover:bg-void/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {stories.map((story) => (
            <motion.article
              key={story.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              {/* Story Image */}
              <div className="relative h-48 overflow-hidden">
                <img
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
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full top-4 right-4 bg-gold/90">
                    <Play size={16} className="ml-1 text-void" />
                  </div>
                )}

                {/* Featured Badge */}
                {story.isFeatured && (
                  <div className="absolute top-14 left-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gold text-void">
                      Featured
                    </span>
                  </div>
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

                <h3 className="mb-3 text-xl font-semibold transition-colors font-heading text-void hover:text-terracotta">
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

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 font-medium transition-all duration-300 bg-white border rounded-full text-void border-void/20 hover:bg-void hover:text-seashell">
            Load More Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;