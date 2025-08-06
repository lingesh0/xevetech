import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProductsSection } from '@/components/ProductsSection';
import { TeamSection } from '@/components/TeamSection';
import { Footer } from '@/components/Footer';
import { SEO, SEOConfigs } from '@/components/SEO';
import { Toaster } from 'sonner';

export default function App() {
  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.add('dark');
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Particle animation variants
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  // Floating elements data
  const floatingElements = [
    { id: 1, x: '10%', y: '20%', delay: 0, size: 'w-4 h-4' },
    { id: 2, x: '80%', y: '30%', delay: 1, size: 'w-6 h-6' },
    { id: 3, x: '20%', y: '70%', delay: 2, size: 'w-3 h-3' },
    { id: 4, x: '70%', y: '80%', delay: 3, size: 'w-5 h-5' },
    { id: 5, x: '50%', y: '10%', delay: 4, size: 'w-4 h-4' },
  ];

  return (
    <HelmetProvider>
      <SEO {...SEOConfigs.home} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Xeve Tech",
          "url": "https://xeve-tech.com",
          "description": "AI-powered business solutions and innovation company",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://xeve-tech.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Xeve Tech",
            "logo": {
              "@type": "ImageObject",
              "url": "https://xeve-tech.com/logo.png"
            }
          },
          "sameAs": [
            "https://twitter.com/xevetech",
            "https://linkedin.com/company/xevetech",
            "https://github.com/lingesh007-ai"
          ]
        })}
      </script>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-background text-foreground overflow-x-hidden dark"
      >
      {/* Enhanced Background with Multiple Layers */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" 
        />
        
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" 
        />

        {/* Floating particles */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            variants={particleVariants}
            animate="animate"
            style={{
              left: element.x,
              top: element.y,
            }}
            className={`absolute ${element.size} bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-sm`}
          />
        ))}

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <Header />
      
      <main className="pt-16 relative z-10">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <TeamSection />
      </main>
      
      <Footer />
      <Toaster />
      
      {/* Enhanced scroll to top button with advanced animations */}
      <motion.button
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)"
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 border-2 border-purple-400/30 hover:border-purple-400/60"
        viewport={{ once: false }}
        style={{
          boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
        }}
      >
        <motion.div
          animate={{ 
            y: [-2, 2, -2],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="text-xl font-bold"
        >
          ↑
        </motion.div>
        
        {/* Pulsing ring effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute inset-0 border-2 border-purple-400/50 rounded-full"
        />
      </motion.button>

      {/* Cursor trail effect */}
      <motion.div
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed w-4 h-4 bg-purple-500/20 rounded-full pointer-events-none z-50"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </motion.div>
    </HelmetProvider>
  );
}