import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'team', label: 'Team' },
    { id: 'about', label: 'About' },
    { id: 'careers', label: 'Join Team' },
    {id: 'testimonials', label: 'Testimonials'}
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced animation variants
  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    scrolled: {
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -2,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            // variants={logoVariants}
            whileHover="hover"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <motion.div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                animate={{ 
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
              />
              <img 
                src={logo} 
                alt="Xeve Tech Logo" 
                className="w-full h-full object-contain relative z-10"
              />

            </motion.div>
            <motion.span 
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Xeve Tech
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="relative text-slate-300 hover:text-purple-300 transition-colors font-medium group"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" as const }}
                />
                <motion.div
                  className="absolute inset-0 bg-purple-500/10 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" as const }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <motion.button
                  className="p-2 text-slate-300 hover:text-purple-300 transition-colors"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3, ease: "easeOut" as const }}
                >
                  <Menu className="w-6 h-6" />
                </motion.button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50">
                <motion.div
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col space-y-6 p-6"
                >
                  <div className="flex items-center justify-between mb-8">
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <img 
                          src={logo} 
                          alt="Xeve Tech Logo" 
                          className="w-full h-full object-contain relative z-10"
                        />

                      </div>
                      <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Xeve Tech
                      </span>
                    </motion.div>
                    <motion.button
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-slate-300 hover:text-purple-300 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-left text-lg text-slate-300 hover:text-purple-300 transition-colors py-3 px-4 rounded-lg hover:bg-slate-800/50"
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </nav>
                </motion.div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
