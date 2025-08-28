// src/components/common/Footer/Footer.jsx
import { motion } from 'framer-motion';
import { 
  Clock, 
  Heart, 
  Mail, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Explore: [
      { name: 'Featured Stories', path: '/stories?filter=featured' },
      { name: 'Latest Stories', path: '/stories?filter=latest' },
      { name: 'Popular Stories', path: '/stories?filter=popular' },
      { name: 'Audio Stories', path: '/stories?filter=audio' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Mission', path: '/about#mission' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
    Community: [
      { name: 'Share Your Story', path: '/share' },
      { name: 'Community Guidelines', path: '/guidelines' },
      { name: 'Subscribe', path: '/subscribe' },
      { name: 'Contribute', path: '/contribute' },
    ]
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, url: 'https://instagram.com' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com' },
    { icon: <Youtube size={20} />, url: 'https://youtube.com' },
    { icon: <Mail size={20} />, url: 'mailto:hello@rewindtheclock.com' },
  ];

  return (
    <footer className="pt-16 pb-8 bg-void text-seashell">
      <div className="container px-4 mx-auto md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link to="/" className="inline-flex items-center mb-6 space-x-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-terracotta">
                <Clock className="text-seashell" size={24} />
              </div>
              <span className="text-2xl font-semibold font-heading">
                Rewind The Clock
              </span>
            </Link>
            <p className="max-w-md mb-6 leading-relaxed text-seashell/70">
              A sanctuary for transformative stories. Share and discover authentic experiences 
              that inspire change and foster connection.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full bg-void/50 border-seashell/20 hover:bg-terracotta hover:border-terracotta"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-lg font-semibold font-heading text-gold">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 transition-colors text-seashell/70 hover:text-terracotta group"
                    >
                      <span>{link.name}</span>
                      <motion.span
                        initial={{ width: 0 }}
                        whileHover={{ width: 16 }}
                        className="h-px transition-all duration-300 bg-terracotta group-hover:width-4"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between pt-8 border-t border-seashell/20 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-sm text-seashell/50 md:mb-0"
          >
            © {currentYear} Rewind The Clock. All rights reserved.
          </motion.p>
          
          <div className="flex items-center space-x-6 cursor-pointer">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 transition-colors cursor-pointer text-seashell/50 hover:text-terracotta group"
            >
              <span className="text-sm">Back to top</span>
              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center justify-center w-8 h-8 transition-colors border rounded-full border-seashell/20 group-hover:border-terracotta group-hover:bg-terracotta/10"
              >
                <ArrowUp size={16} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-8"
      >
        <Heart size={100} className="text-terracotta/20" />
      </motion.div>
    </footer>
  );
};

export default Footer;