import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

export function SEO({
  title = "Xeve Tech - AI-Powered Business Solutions & Innovation",
  description = "Transform your business with Xeve Tech's cutting-edge AI solutions. We provide automation tools, data analysis, and intelligent task management for modern enterprises.",
  keywords = "AI solutions, business automation, data analysis, artificial intelligence, machine learning, enterprise software, digital transformation, tech consulting",
  image = "https://xeve-tech.com/og-image.jpg",
  url = "https://xeve-tech.com/",
  type = "website",
  author = "Xeve Tech",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData
}: SEOProps) {
  const fullTitle = title.includes('Xeve Tech') ? title : `${title} | Xeve Tech`;
  const fullUrl = url.startsWith('http') ? url : `https://xeve-tech.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://xeve-tech.com${image}`;

  useEffect(() => {
    // Update page title for screen readers
    document.title = fullTitle;
  }, [fullTitle]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Xeve Tech" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Predefined SEO configurations for different pages
export const SEOConfigs = {
  home: {
    title: "Xeve Tech - AI-Powered Business Solutions & Innovation",
    description: "Transform your business with Xeve Tech's cutting-edge AI solutions. We provide automation tools, data analysis, and intelligent task management for modern enterprises.",
    keywords: "AI solutions, business automation, data analysis, artificial intelligence, machine learning, enterprise software, digital transformation, tech consulting",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Xeve Tech",
      "url": "https://xeve-tech.com",
      "description": "AI-powered business solutions and innovation company",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://xeve-tech.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  services: {
    title: "AI Services & Solutions",
    description: "Discover our comprehensive AI services including automation, data analysis, machine learning, and intelligent task management solutions for your business.",
    keywords: "AI services, automation solutions, data analysis, machine learning, business intelligence, process automation",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "AI Services",
      "description": "Comprehensive AI services and solutions",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "AI Automation",
          "description": "Intelligent process automation solutions"
        },
        {
          "@type": "Service",
          "position": 2,
          "name": "Data Analysis",
          "description": "Advanced data analytics and insights"
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "Machine Learning",
          "description": "Custom ML models and algorithms"
        }
      ]
    }
  },
  products: {
    title: "AI Products & Platforms",
    description: "Explore our innovative AI products and platforms designed to streamline operations, enhance productivity, and drive business growth.",
    keywords: "AI products, software platforms, business tools, productivity solutions, enterprise software",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "AI Products",
      "description": "Innovative AI products and platforms",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "position": 1,
          "name": "Xeve AI Platform",
          "description": "Comprehensive AI platform for businesses"
        },
        {
          "@type": "SoftwareApplication",
          "position": 2,
          "name": "Data Analytics Suite",
          "description": "Advanced analytics and reporting tools"
        }
      ]
    }
  },
  team: {
    title: "Our Team - AI Experts & Innovators",
    description: "Meet our team of AI experts, data scientists, and technology innovators who are passionate about transforming businesses through cutting-edge solutions.",
    keywords: "AI experts, data scientists, technology team, innovation leaders, tech professionals",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Xeve Tech Team",
      "description": "Team of AI experts and innovators",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Expert Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Consulting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical Implementation"
            }
          }
        ]
      }
    }
  },
  about: {
    title: "About Xeve Tech - Our Mission & Vision",
    description: "Learn about Xeve Tech's mission to democratize AI technology and our vision for a future where every business can leverage the power of artificial intelligence.",
    keywords: "about us, company mission, AI vision, technology innovation, business transformation",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Xeve Tech",
      "description": "AI-powered business solutions company",
      "foundingDate": "2024",
      "mission": "Democratize AI technology for businesses",
      "vision": "Future where every business can leverage AI"
    }
  }
}; 