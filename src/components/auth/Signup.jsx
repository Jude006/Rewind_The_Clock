// src/components/auth/Signup.jsx
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-seashell sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-10 space-y-8 bg-white shadow-lg rounded-2xl"
      >
        <div>
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-16 h-16 bg-terracotta/10 rounded-2xl">
              <UserPlus className="text-terracotta" size={32} />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-center font-heading text-void">
            Join Our Community
          </h2>
          <p className="mt-2 text-sm text-center text-void/60">
            Create an account to share your transformative stories
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-void">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="w-5 h-5 text-void/40" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="relative block w-full py-3 pl-10 pr-3 border rounded-lg appearance-none border-void/20 placeholder-void/40 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-void">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-void/40" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="relative block w-full py-3 pl-10 pr-3 border rounded-lg appearance-none border-void/20 placeholder-void/40 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-void">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-void/40" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="relative block w-full py-3 pl-10 pr-10 border rounded-lg appearance-none border-void/20 placeholder-void/40 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-void/40" />
                  ) : (
                    <Eye className="w-5 h-5 text-void/40" />
                  )}
                </button>
              </div>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-void">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-void/40" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="relative block w-full py-3 pl-10 pr-3 border rounded-lg appearance-none border-void/20 placeholder-void/40 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="w-4 h-4 rounded text-terracotta focus:ring-terracotta/50 border-void/20"
            />
            <label htmlFor="terms" className="block ml-2 text-sm text-void/60">
              I agree to the{' '}
              <a href="#" className="text-terracotta hover:text-terracotta/80">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-terracotta hover:text-terracotta/80">
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition-colors duration-200 border border-transparent rounded-lg group bg-terracotta hover:bg-terracotta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta/50"
            >
              Create Account
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-void/60">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-terracotta hover:text-terracotta/80">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;