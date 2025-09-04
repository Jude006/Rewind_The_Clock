import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Heart, Users } from 'lucide-react';

const ContactInfo = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="text-terracotta" size={24} />,
      title: "Email Us",
      description: "Send us a message anytime",
      details: "hello@rewindtheclock.com",
      link: "mailto:hello@rewindtheclock.com",
      delay: 0.1
    },
    {
      icon: <Phone className="text-terracotta" size={24} />,
      title: "Call Us",
      description: "Mon-Fri from 9am to 5pm",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      delay: 0.2
    },
    {
      icon: <MapPin className="text-terracotta" size={24} />,
      title: "Visit Us",
      description: "Come say hello at our office",
      details: "123 Storyteller Ave, Narrative City",
      link: "https://maps.google.com",
      delay: 0.3
    },
    {
      icon: <Clock className="text-terracotta" size={24} />,
      title: "Response Time",
      description: "We value your time",
      details: "Typically within 24 hours",
      delay: 0.4
    }
  ];

  const stats = [
    { value: "10K+", label: "Community Members", icon: <Users size={18} /> },
    { value: "500+", label: "Stories Shared", icon: <MessageCircle size={18} /> },
    { value: "98%", label: "Satisfaction Rate", icon: <Heart size={18} /> }
  ];

  return (
    <section className="py-20 bg-seashell">
      <div className="container px-4 mx-auto md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl text-void">
            Multiple Ways to <span className="text-terracotta">Connect</span>
          </h2>
          <p className="text-lg text-void/70">
            We're here to listen, support, and collaborate. Choose the method that works best for you.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-2xl bg-void/5">
                {method.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold font-heading text-void">{method.title}</h3>
              <p className="mb-3 text-void/60">{method.description}</p>
              {method.link ? (
                <a
                  href={method.link}
                  className="font-medium transition-colors text-terracotta hover:text-terracotta/80"
                >
                  {method.details}
                </a>
              ) : (
                <p className="font-medium text-void">{method.details}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-8 bg-white shadow-lg rounded-2xl md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-8 text-2xl font-bold font-heading md:text-3xl text-void">
              Our <span className="text-terracotta">Community</span> in Numbers
            </h3>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-terracotta/10">
                    <span className="text-terracotta">
                      {stat.icon}
                    </span>
                  </div>
                  <p className="mb-2 text-4xl font-bold font-heading text-void">{stat.value}</p>
                  <p className="text-void/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;