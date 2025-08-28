import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Clock, Mic, BookOpen, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: <Clock size={18} /> },
    { name: 'Stories', path: '/stories', icon: <BookOpen size={18} /> },
    { name: 'Share', path: '/share', icon: <Mic size={18} /> },
    { name: 'About', path: '/about', icon: <Heart size={18} /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-seashell/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta">
                <Clock className="text-seashell" size={20} />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute border rounded-full -inset-1 border-terracotta/30"
              />
            </motion.div>
            <motion.span 
              className="text-2xl font-semibold font-heading text-void"
              whileHover={{ color: "#C8532E" }}
              transition={{ duration: 0.2 }}
            >
              Rewind The Clock
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <motion.div
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-terracotta'
                      : 'text-void/70 hover:text-terracotta'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </motion.div>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-terracotta"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-terracotta text-seashell px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-terracotta/20 transition-shadow"
            >
              Share Your Story
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="p-2 transition-colors rounded-lg md:hidden bg-void/5 hover:bg-void/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden border rounded-lg shadow-xl md:hidden bg-seashell border-void/10"
            >
              <div className="py-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-6 py-3 transition-colors ${
                        location.pathname === item.path
                          ? 'bg-terracotta/10 text-terracotta'
                          : 'hover:bg-void/5'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="px-6 py-4"
                >
                  <button className="w-full py-3 font-medium rounded-full shadow-lg bg-terracotta text-seashell">
                    Share Your Story
                  </button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;