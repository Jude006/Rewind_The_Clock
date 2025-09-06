// src/components/auth/Login.jsx
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
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
              <LogIn className="text-terracotta" size={32} />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-center font-heading text-void">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-center text-void/60">
            Sign in to share your transformative story
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
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
                  placeholder="Enter your password"
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 rounded text-terracotta focus:ring-terracotta/50 border-void/20"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-void/60">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-terracotta hover:text-terracotta/80">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition-colors duration-200 border border-transparent rounded-lg group bg-terracotta hover:bg-terracotta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta/50"
            >
              Sign In
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-void/60">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-terracotta hover:text-terracotta/80">
                Sign up now
              </Link>
            </p>
          </div>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-void/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-void/60">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium transition-colors duration-200 bg-white border rounded-lg shadow-sm border-void/20 text-void hover:bg-void/5"
            >
              Google
            </button>
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium transition-colors duration-200 bg-white border rounded-lg shadow-sm border-void/20 text-void hover:bg-void/5"
            >
              Facebook
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;