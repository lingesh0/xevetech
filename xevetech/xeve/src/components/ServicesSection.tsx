import { motion } from 'framer-motion';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { 
  Bot, 
  BarChart3, 
  Eye,
  ShoppingCart,
  Code,
  Cloud,
  ArrowRight 
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: 'AI-Powered Chatbots & Automation',
      description: 'We develop intelligent chatbots and virtual assistants to streamline your business processes.',
      features: [
        '24/7 customer support bots (Web, WhatsApp, Messenger)',
        'Lead generation & onboarding automation',
        'Smart HR/recruitment chatbots'
      ],
      color: 'from-purple-600 to-purple-400',
      badge: '',
      delay: 0.1,
    },
    {
      icon: BarChart3,
      title: 'AI-Based Data Analytics & Dashboards',
      description: 'Make smarter decisions with powerful analytics tools that visualize and predict business trends.',
      features: [
        'Real-time dashboards',
        'Predictive analytics (sales, churn, behavior)',
        'Business intelligence for startups & enterprises'
      ],
      color: 'from-blue-600 to-blue-400',
      badge: '',
      delay: 0.2,
    },
    {
      icon: Eye,
      title: 'Computer Vision & Image Intelligence',
      description: 'Unlock insights from images and videos using AI-powered computer vision.',
      features: [
        'Face and object detection',
        'License plate recognition (ALPR)',
        'OCR document parsing'
      ],
      color: 'from-green-600 to-green-400',
      badge: '',
      delay: 0.3,
    },
    {
      icon: ShoppingCart,
      title: 'AI for E-Commerce & Retail',
      description: 'Enhance customer experience and operational efficiency in your online store or retail chain.',
      features: [
        'Product recommendation engines',
        'Inventory prediction & automation',
        'Chat-based shopping assistants'
      ],
      color: 'from-orange-600 to-orange-400',
      badge: '',
      delay: 0.4,
    },
    {
      icon: Code,
      title: 'Full-Stack Development with AI Integration',
      description: 'We build scalable web & mobile applications with built-in AI capabilities.',
      features: [
        'MERN/MEAN stack development',
        'AI-API integrations (Python, Node.js, FastAPI)',
        'Cross-platform mobile apps (React Native, Flutter)'
      ],
      color: 'from-indigo-600 to-indigo-400',
      badge: '',
      delay: 0.5,
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'We help you deploy, scale, and manage AI products on secure and efficient cloud platforms.',
      features: [
        'AWS / GCP deployment',
        'CI/CD pipeline setup',
        'Containerization (Docker/Kubernetes)'
      ],
      color: 'from-cyan-600 to-cyan-400',
      badge: '',
      delay: 0.6,
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -15 },
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
      y: -15,
      scale: 1.03,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const iconVariants = {
    hover: { 
      scale: 1.3, 
      rotate: 360,
      transition: { 
        duration: 0.6,
        ease: "easeInOut" as const
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      x: 10,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
      <SEO 
        title="AI Services & Solutions"
        description="Discover our comprehensive AI services including automation, data analysis, machine learning, and intelligent task management solutions for your business."
        keywords="AI services, automation solutions, data analysis, machine learning, business intelligence, process automation"
        url="/services"
      />
      <section id="services" className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/30" />
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        animate={{ 
          opacity: [0.3, 1, 0.3],
          scaleX: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
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
              Our Core Services
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
            Xeve Tech – Our Core Services
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          >
            We deliver cutting-edge AI solutions that transform businesses and drive innovation across industries.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="h-full relative overflow-hidden border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:border-purple-500/50">
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
                
                <CardHeader className="relative p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
                    >
                      {/* Icon background animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        animate={{ 
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: service.delay
                        }}
                      />
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                    </motion.div>
                    <Badge variant="secondary" className="text-lg bg-transparent border-0">
                      {service.badge}
                    </Badge>
                  </div>
                  
                  <motion.h3
                    className="group-hover:text-purple-300 transition-colors text-slate-200 text-base sm:text-lg font-semibold"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.title}
                  </motion.h3>
                </CardHeader>
                
                <CardContent className="relative space-y-3 sm:space-y-4 p-4 sm:p-6">
                  <motion.p 
                    className="text-slate-400 text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: service.delay + 0.2 }}
                    viewport={{ once: false }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-purple-300 mb-3">Features:</h4>
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        variants={featureVariants}
                        whileHover="hover"
                        className="flex items-start space-x-2 text-xs sm:text-sm text-slate-500 group/feature"
                      >
                        <motion.div 
                          className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <span className="group-hover/feature:text-slate-300 transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: service.delay + 0.3 }}
                    viewport={{ once: false }}
                    className="pt-3 sm:pt-4"
                  >
                    <motion.button 
                      className="group/btn flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors text-xs sm:text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-medium">Learn More</span>
                      <motion.div
                        className="group-hover/btn:translate-x-1 transition-transform"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative elements - Hidden on mobile for performance */}
        <div className="hidden lg:block">
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-10 w-4 h-4 bg-purple-500/30 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              y: [10, -10, 10],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-6 h-6 bg-blue-500/30 rounded-full blur-sm"
          />
        </div>
      </div>
    </section>
    </>
  );
}