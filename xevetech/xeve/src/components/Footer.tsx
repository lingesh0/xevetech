import { motion } from 'framer-motion';
import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { SEO } from '@/components/SEO';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Twitter, 
  Linkedin,
  Instagram,
  Briefcase,
  Users,
  Heart,
  ArrowRight
} from 'lucide-react';

export function Footer() {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      urgent: true,
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      urgent: false,
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      urgent: true,
    },
  ];

  const teamStats = [
    { label: 'Team Members', value: '150+', icon: Users },
    { label: 'Countries', value: '25+', icon: MapPin },
    { label: 'Projects Delivered', value: '500+', icon: Briefcase },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateX: 3,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };



  return (
    <>
      <SEO 
        title="Xeve Tech"
        description="Get in touch with Xeve Tech for AI solutions, career opportunities, and partnership inquiries. Join our team of innovators."
        keywords="contact, careers, job opportunities, AI jobs, tech careers, partnership"
        url="/contact"
      />
      <footer className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-xl">
      {/* Careers Section */}
      <section id="careers" className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge variant="outline" className="mb-4 bg-purple-900/30 border-purple-500/50 text-purple-300 text-xs sm:text-sm">
                <Briefcase className="w-3 h-3 mr-1" />
                Careers
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent font-bold"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Join Our Team
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: false }}
            >
              Help us build the future of AI. We're looking for talented individuals
              who are passionate about technology and innovation.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="text-center"
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg glow-purple relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ 
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-2 text-slate-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-slate-400 text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:shadow-lg transition-all duration-500 hover:border-purple-500/50 relative overflow-hidden group">
                  {/* Animated background overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <motion.h3 
                        className="text-base sm:text-lg text-slate-200 font-semibold"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {job.title}
                      </motion.h3>
                      {job.urgent && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          viewport={{ once: false }}
                        >
                          <Badge variant="destructive" className="text-xs bg-red-900/50 border-red-500/50">
                            Urgent
                          </Badge>
                        </motion.div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                    <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                      {[
                        { icon: null, text: job.department },
                        { icon: MapPin, text: job.location },
                        { icon: null, text: job.type }
                      ].map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                          viewport={{ once: false }}
                          whileHover={{ x: 5 }}
                        >
                          {item.icon ? (
                            <item.icon className="w-3 h-3" />
                          ) : (
                            <motion.div 
                              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full"
                              whileHover={{ scale: 1.5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                          )}
                          <span>{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Apply Now Button*/}
                    <motion.a
                      href="https://forms.gle/VDm85M1ndbPx51fm9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full relative z-20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ 
                        pointerEvents: 'all',
                        position: 'relative',
                        zIndex: 20
                      }}
                    >
                      <Button
                        variant="outline"
                        className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-900/30 hover:border-purple-400/70 hover:text-purple-200 flex items-center justify-center transition-all duration-300 cursor-pointer pointer-events-none"
                        asChild
                      >
                        <span className="flex items-center justify-center w-full h-full">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                      </Button>
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 border-t border-slate-700/50 bg-slate-800/30 relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-center lg:text-left"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Badge variant="outline" className="mb-4 bg-blue-900/30 border-blue-500/50 text-blue-300 text-xs sm:text-sm">
                  <Heart className="w-3 h-3 mr-1" />
                  About Us
                </Badge>
              </motion.div>
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent font-bold"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                About Xeve Tech
              </motion.h2>
              <div className="space-y-4 text-slate-400 text-sm sm:text-base">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.01 }}
                >
                  Xeve Tech is a passionate startup founded by a team of enthusiastic developers and creative minds united by a single vision — to innovate, simplify, and elevate technology for businesses and individuals.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.01 }}
                >
                  Launched in 2025, Xeve Tech began its journey as a collaborative effort among like-minded tech enthusiasts who wanted to solve real-world problems using intelligent, scalable, and user-friendly solutions. Our core belief is that technology should be accessible, efficient, and future-ready — and that's exactly what we strive to deliver in every project.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.01 }}
                >
                  We specialize in AI-integrated full-stack development, offering end-to-end digital solutions, from custom web and mobile applications to intelligent automation tools that empower modern enterprises. Our strength lies in blending cutting-edge innovation with practical usability.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.01 }}
                >
                  At Xeve Tech, we're not just building products — we're building experiences, value, and trust. As we continue to grow, our focus remains on delivering exceptional technology backed by transparency, integrity, and a commitment to excellence.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="relative order-first lg:order-last"
            >
              <div className="relative">
                {/* Multiple rotating rings - Hidden on mobile for performance */}
                <div className="hidden lg:block">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"
                  />
                </div>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 shadow-xl glow-blue">
                    <CardContent className="p-6 sm:p-8">
                      <motion.h3 
                        className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-slate-200"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Get in Touch
                      </motion.h3>
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          { icon: Mail, text: 'xevetech@gmail.com' },
                          { icon: Phone, text: '6382844052' },
                          { icon: MapPin, text: 'Namakkal, Tamilnadu' }
                        ].map((contact, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            viewport={{ once: false }}
                            whileHover={{ x: 5 }}
                          >
                            <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                            <span className="text-slate-300 text-sm sm:text-base">{contact.text}</span>
                          </motion.div>
                        ))}
                      </div>
                      <Separator className="my-4 sm:my-6 bg-slate-700/50" />
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <span className="text-xs sm:text-sm text-slate-400">Follow us:</span>
                        <div className="flex space-x-3">
                          {[
                            { icon: Github, link: 'https://github.com/lingesh007-ai' },
                            { icon: Twitter, link: 'https://x.com/XeveTech' },
                            { icon: Linkedin, link: 'https://www.linkedin.com/company/xeve-tech-solution/' },
                            { icon: Instagram, link: 'https://www.instagram.com/xevetech/' }
                          ].map((social, index) => (
                            <motion.a
                              key={index}
                              href={social.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.2, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-colors border border-purple-500/30"
                            >
                              <social.icon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300" />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-4 sm:py-6 border-t border-slate-700/50 bg-slate-900/80 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <motion.div 
                className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded-md flex items-center justify-center shadow-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5, type: "spring" }
                }}
              >
                <img 
                  src="/src/assets/logo.png" 
                  alt="Xeve Tech Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-xs sm:text-sm text-slate-400">
                © 2025 Xeve Tech. All rights reserved.
              </span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-slate-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              {['Privacy', 'Terms', 'Support'].map((item, index) => (
                <motion.button
                  key={item}
                  className="hover:text-purple-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: false }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
