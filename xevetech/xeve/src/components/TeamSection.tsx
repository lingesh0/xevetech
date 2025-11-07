import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { 
  Users, 
  Heart, 
  Target, 
  Award, 
  Linkedin, 
  Twitter, 
  Github,
  Zap,
  Code,
  Palette,
  Database,
  ExternalLink
} from 'lucide-react';

export function TeamSection() {
  const leadership = [
    {
      name: "Lingesh T",
      role: "CEO & Founder",
      photo: "/team/lingesh-t.jpg",
      bio: "Visionary leader with 1+ years of experience in AI and technology. Passionate about making AI accessible to businesses of all sizes.",
      expertise: ["AI Strategy", "Leadership", "Innovation"],
      achievements: "3+ Projects Delivered",
      social: {
        linkedin: "https://www.linkedin.com/in/lingesh-t-a879b5249/",
        twitter: "https://x.com/___lingesh__?s=09",
        github: "https://github.com/lingesh0",
        portfolio: "https://lingesh.vercel.app/"
      }
    },
    {
      name: "Kavivarman S",
      role: "CTO & Co-Founder",
      photo: "/team/sarah-chen.jpg",
      bio: "Technical expert with deep expertise in machine learning and scalable AI systems. Leads our engineering team with innovation and precision.",
      expertise: ["Machine Learning", "System Architecture", "AI Engineering"],
      achievements: "3+ Years Tech Experience",
      social: {
        linkedin: "https://www.linkedin.com/in/kavivarman-s/",
        twitter: "https://x.com/XeveTech",
        github: "https://github.com/xevetech"
      }
    },
    {
      name: "Manoj Vishal",
      role: "CAO & Head of Product",
      photo: "/team/michael-rodriguez.jpg",
      bio: "Product visionary who transforms complex AI solutions into intuitive user experiences. Drives product strategy and user-centric design.",
      expertise: ["Product Strategy", "UX Design", "AI Products"],
      achievements: "10+ Products Launched",
      social: {
        linkedin: "https://www.linkedin.com/in/vishal-m-sri/",
        twitter: "https://x.com/XeveTech",
        github: "https://github.com/xevetech"
      }
    },
    {
      name: "Vinoth",
      role: "Head of Engineering",
      photo: "/team/emily-watson.jpg",
      bio: "Engineering leader with expertise in building scalable AI platforms and managing high-performing development teams.",
      expertise: ["Software Architecture", "Team Leadership", "AI Development"],
      achievements: "3+ Years Engineering",
      social: {
        linkedin: "https://www.linkedin.com/in/vinodhariharan-ravi/",
        twitter: "https://x.com/XeveTech",
        github: "https://github.com/xevetech"
      }
    },
    {
      name: "Praveen",
      role: "Head of Design",
      photo: "/team/david-kim.jpg",
      bio: "Creative director with a passion for user-centered design. Creates beautiful, intuitive interfaces that users love.",
      expertise: ["UX/UI Design", "Design Systems", "Creative Direction"],
      achievements: "50+ Design",
      social: {
        linkedin: "https://www.linkedin.com/in/praveen-arulraj-0902a6256/",
        twitter: "https://x.com/XeveTech",
        github: "https://github.com/xevetech"
      }
    },
    {
      name: "Mujakath Ali",
      role: "Head of Sales",
      photo: "/team/lisa-thompson.jpg",
      bio: "Sales leader with proven track record in B2B technology sales. Builds lasting relationships and drives revenue growth.",
      expertise: ["B2B Sales", "Client Relations", "Revenue Growth"],
      achievements: "$1M+ Revenue Generated",
      social: {
        linkedin: "https://www.linkedin.com/in/mujakath-ali-b48125256/",
        twitter: "https://x.com/XeveTech",
        github: "https://github.com/xevetech"
      }
    },
    {
      name: "Krithick S",
      role: "Head of Marketing",
      photo: "/team/krithick-s.jpg",
      bio: "Marketing strategist with expertise in digital marketing and brand growth. Drives innovative campaigns that connect with audiences and accelerate business growth.",
      expertise: ["Digital Marketing", "Brand Strategy", "Growth Marketing"],
      achievements: "100+ Campaigns Delivered",
      social: {
        linkedin: "https://www.linkedin.com/in/krithick-dev-a44541258/",
        twitter: "https://x.com/XeveTech",
        github: "https://github.com/xevetech"
      }
    }
  ];

  const departments = [
    {
      name: "Engineering",
      icon: Code,
      description: "Building the future of AI technology",
      members: 25,
      focus: ["Machine Learning", "Backend Systems", "AI Infrastructure"]
    },
    {
      name: "Design",
      icon: Palette,
      description: "Creating beautiful, intuitive experiences",
      members: 12,
      focus: ["UX/UI Design", "Visual Design", "Design Systems"]
    },
    {
      name: "Data Science",
      icon: Database,
      description: "Transforming data into insights",
      members: 18,
      focus: ["Data Analysis", "ML Models", "AI Research"]
    },
    {
      name: "Product",
      icon: Target,
      description: "Bringing ideas to life",
      members: 15,
      focus: ["Product Strategy", "User Research", "Product Management"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about AI and its potential to transform businesses"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer service"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great ideas come from great teamwork and diverse perspectives"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge AI solutions"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  useEffect(() => {
    // Debugging: log leadership names so we can confirm Muja is present when this component mounts
    try {
      // eslint-disable-next-line no-console
      console.log('Leadership members:', leadership.map(m => m.name));
    } catch (e) {
      // ignore
    }
  }, []);

  const slugify = (name: string) =>
    name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');

  return (
    <>
      <SEO 
        title="Our Team - AI Experts & Innovators | Xeve Tech Leadership"
        description="Meet Xeve Tech's leadership team including Krithick S (Head of Marketing), Lingesh T (CEO), and our AI experts, data scientists, and technology innovators transforming businesses."
        keywords="Xeve Tech team, Head of Marketing, Krithick S, AI experts, data scientists, technology team, innovation leaders, tech professionals, marketing head, digital marketing expert"
        url="/team"
      />
      <section id="team" className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/50" />
      
      <div className="container mx-auto relative z-10">
        {/* Hero Intro */}
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
              <Users className="w-3 h-3 mr-1" />
              Our Team
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
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          >
            Meet the brilliant minds behind Xeve Tech. Our diverse team of experts is passionate about 
            creating innovative AI solutions that transform businesses and drive growth.
          </motion.p>
        </motion.div>

        {/* Leadership Cards */}
        <motion.div 
          className="mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.h3 
            className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 text-slate-200"
            variants={itemVariants}
          >
            Leadership Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                id={`member-${slugify(member.name)}`}
                data-member={member.name}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:shadow-lg transition-all duration-500 hover:border-purple-500/50 relative overflow-hidden group">
                  {/* Animated background overlay */}
            <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  <CardHeader className="p-4 sm:p-6 text-center">
                    <div className="relative mb-3">
                      <motion.div 
                        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg glow-purple relative overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"
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
                        <span className="text-white font-bold text-base sm:text-lg relative z-10">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </motion.div>
                    </div>
                    <motion.h4 
                      className="text-base sm:text-lg font-bold text-slate-200 mb-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {member.name}
                    </motion.h4>
                    <motion.p 
                      className="text-purple-300 font-medium text-xs sm:text-sm mb-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {member.role}
                    </motion.p>
                    <motion.div
                      className="flex justify-center mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: false }}
                    >
                      <Badge variant="outline" className="bg-green-900/30 border-green-500/50 text-green-300 text-xs">
                        <Award className="w-2 h-2 mr-1" />
                        {member.achievements}
                      </Badge>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <motion.p 
                      className="text-slate-400 text-xs sm:text-sm mb-3 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: false }}
                    >
                      {member.bio}
                    </motion.p>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {member.expertise.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + skillIndex * 0.1 }}
                            viewport={{ once: false }}
                          >
                            <Badge variant="outline" className="bg-purple-900/30 border-purple-500/50 text-purple-300 text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    {/* Social links for each leader */}
                    <div className="mt-4 flex justify-center space-x-3">
                      {member.social?.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn - ${member.name}`}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-colors border border-purple-500/30"
                        >
                          <Linkedin className="w-4 h-4 text-purple-300" />
                        </motion.a>
                      )}
                      {member.social?.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Twitter - ${member.name}`}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-colors border border-purple-500/30"
                        >
                          <Twitter className="w-4 h-4 text-purple-300" />
                        </motion.a>
                      )}
                      {member.social?.github && (
                        <motion.a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub - ${member.name}`}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-colors border border-purple-500/30"
                        >
                          <Github className="w-4 h-4 text-purple-300" />
                        </motion.a>
                      )}
                      {member.social?.portfolio && (
                        <motion.a
                          href={member.social.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Portfolio - ${member.name}`}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center hover:bg-purple-700/50 transition-colors border border-purple-500/30"
                        >
                          <ExternalLink className="w-4 h-4 text-purple-300" />
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Department Sections */}
        <motion.div 
          className="mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.h3 
            className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 text-slate-200"
            variants={itemVariants}
          >
            Our Departments
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                variants={cardVariants}
                whileHover={{ 
                  y: -3,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:shadow-lg transition-all duration-500 hover:border-purple-500/50 relative overflow-hidden group text-center">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  <CardHeader className="p-4 sm:p-6">
                    <motion.div 
                      className="flex justify-center mb-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg glow-purple relative overflow-hidden">
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
                        <dept.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                      </div>
                    </motion.div>
                    <motion.h4 
                      className="text-base sm:text-lg font-bold text-slate-200 mb-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {dept.name}
                    </motion.h4>
                    <motion.p 
                      className="text-slate-400 text-xs sm:text-sm mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: false }}
                    >
                      {dept.description}
                    </motion.p>
                    <motion.div
                      className="flex justify-center mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: false }}
                    >
                      <Badge variant="outline" className="bg-blue-900/30 border-blue-500/50 text-blue-300 text-xs">
                        <Users className="w-2 h-2 mr-1" />
                        {dept.members} Members
                      </Badge>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-1.5">
                      {dept.focus.map((focus, focusIndex) => (
                        <motion.div
                          key={focus}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + focusIndex * 0.1 }}
                          viewport={{ once: false }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full"
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                          <span className="text-slate-300 text-xs">{focus}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Culture */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.h3 
            className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 text-slate-200"
            variants={itemVariants}
          >
            Our Culture & Values
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -3,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:shadow-lg transition-all duration-500 hover:border-purple-500/50 relative overflow-hidden group text-center">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  <CardContent className="p-4 sm:p-6">
                    <motion.div 
                      className="flex justify-center mb-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg glow-purple relative overflow-hidden">
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
                        <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                      </div>
                    </motion.div>
                    <motion.h4 
                      className="text-base sm:text-lg font-bold text-slate-200 mb-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {value.title}
                    </motion.h4>
                    <motion.p 
                      className="text-slate-400 text-xs sm:text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: false }}
                    >
                      {value.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.h3 
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-slate-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Join Our Team
          </motion.h3>
          <motion.p 
            className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          >
            Ready to be part of something amazing? We're always looking for talented individuals 
            who share our passion for innovation and excellence.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 glow-purple relative overflow-hidden shadow-2xl"
              onClick={() => {
                const careersSection = document.getElementById('careers');
                if (careersSection) {
                  careersSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">View Open Positions</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
