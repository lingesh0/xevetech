import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Zap, Target, Star, Rocket, Code, Cpu, Database } from 'lucide-react';

export function HeroSection() {
  const floatingIcons = [
    { Icon: Sparkles, delay: 0, x: 20, y: -20, size: 'w-4 h-4 sm:w-6 sm:h-6' },
    { Icon: Zap, delay: 0.5, x: -30, y: 10, size: 'w-6 h-6 sm:w-8 sm:h-8' },
    { Icon: Target, delay: 1, x: 40, y: 30, size: 'w-3 h-3 sm:w-5 sm:h-5' },
    { Icon: Star, delay: 1.5, x: -20, y: -40, size: 'w-3 h-3 sm:w-4 sm:h-4' },
    { Icon: Rocket, delay: 2, x: 60, y: -10, size: 'w-5 h-5 sm:w-7 sm:h-7' },
    { Icon: Code, delay: 2.5, x: -50, y: 50, size: 'w-4 h-4 sm:w-5 sm:h-5' },
    { Icon: Cpu, delay: 3, x: 70, y: -60, size: 'w-3 h-3 sm:w-4 sm:h-4' },
    { Icon: Database, delay: 3.5, x: -80, y: -30, size: 'w-4 h-4 sm:w-6 sm:h-6' },
  ];

  // Scroll functions for buttons
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 200
      }
    }
  };



  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 300
      }
    },
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: { 
        duration: 0.2,
        ease: "easeOut" as const
      }
    },
    tap: { 
      scale: 0.95,
      transition: { 
        duration: 0.1,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20" />
        
        {/* Multiple animated gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl" 
        />
        
        <motion.div 
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl" 
        />

        {/* Additional floating orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 50, 0, -50, 0],
            y: [0, -50, 0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-32 h-32 sm:w-48 sm:h-48 bg-cyan-500/15 rounded-full blur-2xl" 
        />

        {/* Animated grid pattern with enhanced movement */}
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Animated particle field */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              animate={{
                x: [0, Math.random() * 1000 - 500],
                y: [0, Math.random() * 1000 - 500],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced Floating Elements with more variety */}
      <div className="hidden sm:block">
        {floatingIcons.map(({ Icon, delay, x, y, size }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
              x: [x, x + 15, x],
              y: [y, y - 15, y],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 6 + index * 0.5,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.8,
              rotate: 720,
              transition: { duration: 0.8, type: "spring" }
            }}
            className={`absolute text-purple-400/60 hover:text-purple-300 transition-colors cursor-pointer ${size} filter drop-shadow-lg`}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <motion.div variants={badgeVariants}>
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="secondary" className="mb-4 bg-purple-900/30 border-purple-500/50 text-purple-300 text-xs sm:text-sm relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                    animate={{ 
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <Sparkles className="w-3 h-3 mr-1 relative z-10" />
                  <span className="relative z-10">AI-Powered Solutions</span>
                </Badge>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={textVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold"
            >
              Transform Your Business with
              <motion.span 
                className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent relative"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(147, 51, 234, 0.5)",
                      "0 0 40px rgba(147, 51, 234, 0.8)",
                      "0 0 20px rgba(147, 51, 234, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  AI Innovation
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto lg:mx-0"
            >
              Unlock the potential of artificial intelligence with our comprehensive suite of 
              automation tools, data analysis, and intelligent task management solutions.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 glow-purple relative overflow-hidden w-full sm:w-auto shadow-2xl" onClick={scrollToServices}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 w-full sm:w-auto shadow-xl relative overflow-hidden" onClick={scrollToProducts}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                    animate={{ 
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="relative z-10">Watch Demo</span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-400"
            >
              <motion.div 
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      "0 0 5px rgba(34, 197, 94, 0.5)",
                      "0 0 15px rgba(34, 197, 94, 0.8)",
                      "0 0 5px rgba(34, 197, 94, 0.5)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span>24/7 Support</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      "0 0 5px rgba(59, 130, 246, 0.5)",
                      "0 0 15px rgba(59, 130, 246, 0.8)",
                      "0 0 5px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <span>Enterprise Ready</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
            className="relative order-first lg:order-last flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Enhanced rotating rings */}
              <div className="hidden lg:block">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-12 -right-12 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" 
                />
                
                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-8 -left-8 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                />

                {/* Additional floating elements around dashboard */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-3 h-3 bg-purple-500/40 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-500/40 rounded-full blur-sm"
                />
              </div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotateY: [0, 3, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 8,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative z-10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-purple-500/30 glow-purple transform rotate-2 lg:rotate-4 hover:rotate-1 lg:hover:rotate-3 transition-all duration-300"
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.h3 
                      className="font-bold text-slate-200 text-lg sm:text-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      AI Dashboard
                    </motion.h3>
                    <div className="flex space-x-1.5">
                      {['red', 'yellow', 'green'].map((color, index) => (
                        <motion.div 
                          key={color}
                          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 bg-${color}-500 rounded-full`}
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              `0 0 5px rgba(${color === 'red' ? '239, 68, 68' : color === 'yellow' ? '234, 179, 8' : '34, 197, 94'}, 0.5)`,
                              `0 0 15px rgba(${color === 'red' ? '239, 68, 68' : color === 'yellow' ? '234, 179, 8' : '34, 197, 94'}, 0.8)`,
                              `0 0 5px rgba(${color === 'red' ? '239, 68, 68' : color === 'yellow' ? '234, 179, 8' : '34, 197, 94'}, 0.5)`
                            ]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: index * 0.5 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { name: 'Process 1', value: 78, color: 'from-purple-500 to-blue-500' },
                      { name: 'Process 2', value: 92, color: 'from-blue-500 to-cyan-500' },
                      { name: 'Process 3', value: 85, color: 'from-purple-500 to-blue-500' }
                    ].map((process, index) => (
                      <motion.div 
                        key={index} 
                        className="space-y-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex justify-between text-sm sm:text-base text-slate-300 font-medium">
                          <span>{process.name}</span>
                          <motion.span 
                            className="text-purple-300 font-bold"
                            animate={{ 
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          >
                            {process.value}%
                          </motion.span>
                        </div>
                        <div className="relative h-2 sm:h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${process.value}%` }}
                            transition={{ delay: 1 + index * 0.3, duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: false }}
                            className={`h-full bg-gradient-to-r ${process.color} rounded-full relative shadow-lg`}
                          >
                            <motion.div
                              animate={{ 
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.05, 1],
                                x: ['-100%', '100%'],
                              }}
                              transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                delay: index * 0.5
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}