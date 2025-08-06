import { motion } from 'framer-motion';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SEO } from '@/components/SEO';
import { 
  CheckSquare,
  Users,
  FileText,
  MessageSquare,
  ExternalLink,
  Star,
  Clock,
  Bell
} from 'lucide-react';

export function ProductsSection() {
  const products = [
    {
      title: 'Xeve TaskAI',
      subtitle: 'Smart Task Management System',
      category: 'Productivity',
      description: 'An AI-driven task and project manager built for individuals, teams, and businesses.',
      features: [
        'AI-powered task prioritization and deadline suggestions',
        'Natural language task entry (e.g., "Remind me to send report every Monday")',
        'Smart reminders and daily/weekly summaries',
        'Team performance tracking and auto-scheduling',
        'Integration with Slack, Email, Google Calendar, etc.'
      ],
      integrations: ['Slack', 'Email', 'Google Calendar'],
      icon: CheckSquare,
      color: 'from-purple-600 to-purple-400',
      badge: '📊',
      popular: true,
    },
    {
      title: 'Skillflow',
      subtitle: 'AI-Based Skill Matrix & Workforce Optimizer',
      category: 'HR Tech',
      description: 'A dynamic skill tracking and team skill mapping platform for HR, L&D, and project allocation.',
      features: [
        'Visual skill matrix for teams and departments',
        'AI suggestions for training based on gaps',
        'Auto-matching employees to projects based on skills and experience',
        'Skill growth tracking and personalized learning paths (LMS integration)'
      ],
      integrations: ['LMS Systems', 'HR Platforms', 'Project Management'],
      icon: Users,
      color: 'from-blue-600 to-blue-400',
      badge: '👥',
      popular: false,
    },
    {
      title: 'XeveDoc',
      subtitle: 'AI Document Analyzer & Insights Extractor',
      category: 'Documentation',
      description: 'A tool that uses NLP and OCR to extract key insights from unstructured documents.',
      features: [
        'Extracts data from invoices, resumes, contracts, PDFs, and reports',
        'Smart tagging and document categorization',
        'AI-based summarization & keyword detection',
        'Data export to Excel/CRM/Databases'
      ],
      integrations: ['Excel', 'CRM Systems', 'Databases'],
      icon: FileText,
      color: 'from-green-600 to-green-400',
      badge: '📄',
      popular: false,
    },
    {
      title: 'XeveBot',
      subtitle: 'Custom AI Chatbot Builder',
      category: 'Automation',
      description: 'No-code/low-code platform to build intelligent, domain-specific bots for customer support, HR, sales, and internal helpdesks.',
      features: [
        'Drag-and-drop chatbot builder with training capabilities',
        'Multilingual NLP support',
        'Context-aware responses',
        'Analytics dashboard for chat insights',
        'Integrates with websites, WhatsApp, Messenger, and mobile apps'
      ],
      integrations: ['Websites', 'WhatsApp', 'Messenger', 'Mobile Apps'],
      icon: MessageSquare,
      color: 'from-orange-600 to-orange-400',
      badge: '💬',
      popular: true,
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateY: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.15,
      rotateY: 10,
      transition: { 
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
      <SEO 
        title="AI Products & Platforms"
        description="Explore our innovative AI products and platforms designed to streamline operations, enhance productivity, and drive business growth."
        keywords="AI products, software platforms, business tools, productivity solutions, enterprise software"
        url="/products"
      />
      <section id="products" className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50" />
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        animate={{ 
          opacity: [0.3, 1, 0.3],
          scaleX: [0, 1, 0]
        }}
        transition={{
          duration: 4,
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
            <Badge variant="outline" className="mb-4 bg-yellow-900/30 border-yellow-500/50 text-yellow-300 text-xs sm:text-sm">
              <Clock className="w-3 h-3 mr-1" />
              Coming Soon
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
            Revolutionary AI Products
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          >
            We're building the next generation of AI-powered tools that will transform how you work, collaborate, and grow your business.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group h-full"
            >
              <Card className="h-full overflow-hidden border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-500/50 relative flex flex-col">
                {/* Coming Soon Badge */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                  <Badge variant="secondary" className="bg-yellow-900/50 text-yellow-300 border-yellow-500/50">
                    <Clock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                </div>

                {/* Popular badge */}
                {product.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: false }}
                  >
                    <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 border-0 shadow-lg text-xs">
                      <Star className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                      Popular
                    </Badge>
                  </motion.div>
                )}

                {/* Image container */}
                <div className="relative flex-shrink-0">
                  <div className="relative h-32 sm:h-40 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                    <motion.div
                      variants={imageVariants}
                      whileHover="hover"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <product.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 shadow-lg glow-purple text-xs sm:text-sm">
                          <Bell className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Join Waitlist
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                <CardHeader className="p-3 sm:p-4 flex-shrink-0">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
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
                              delay: 0.5
                            }}
                          />
                          <product.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white relative z-10" />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Badge variant="secondary" className="text-xs bg-slate-700/50 text-slate-300 border-slate-600">
                            {product.category}
                          </Badge>
                        </motion.div>
                      </div>
                      <div>
                        <motion.h3
                          className="group-hover:text-blue-300 transition-colors text-slate-200 text-base sm:text-lg font-semibold"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {product.title}
                        </motion.h3>
                        <p className="text-purple-400 text-sm">{product.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-2 sm:space-y-3 p-3 sm:p-4 flex-grow flex flex-col">
                  <motion.p 
                    className="text-slate-400 text-xs sm:text-sm flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: false }}
                  >
                    {product.description}
                  </motion.p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-purple-300">Features:</h4>
                    <div className="grid grid-cols-1 gap-1.5">
                      {product.features.map((feature) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          viewport={{ once: false }}
                          whileHover={{ x: 5 }}
                          className="flex items-start space-x-2 text-xs text-slate-500 group/feature"
                        >
                          <motion.div 
                            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                          <span className="group-hover/feature:text-slate-300 transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-slate-700/50" />

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-purple-300">Integrations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.integrations.map((integration) => (
                        <Badge 
                          key={integration}
                          variant="outline" 
                          className="text-xs bg-slate-700/50 border-slate-600/50 text-slate-300"
                        >
                          {integration}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-purple-500/50 text-purple-300 hover:bg-purple-900/30"
                    >
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Join Waitlist
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-slate-400 hover:text-purple-300"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 glow-blue relative overflow-hidden w-full sm:w-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <Bell className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform relative z-10" />
              <span className="relative z-10">Join Waitlist</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements - Hidden on mobile for performance */}
        <div className="hidden lg:block">
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-32 right-16 w-5 h-5 bg-purple-500/30 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              y: [15, -15, 15],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-32 left-16 w-6 h-6 bg-blue-500/30 rounded-full blur-sm"
          />
        </div>
      </div>
    </section>
    </>
  );
}