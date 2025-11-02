import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title = "AkibWorks - Professional Web Development & Design Services",
  description = "Expert web developer with 5+ years of experience. Creating clean, modern websites for businesses with complete setup and deployment. Fast delivery, affordable pricing.",
  keywords = "web development, website design, react developer, business websites, e-commerce, SEO, responsive design, professional websites",
  image = "/og-image.jpg",
  url = "https://akibworks.com"
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AkibWorks",
    "description": description,
    "url": url,
    "logo": `${url}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "akibworks@gmail.com",
      "contactType": "Customer Service"
    },
    "founder": {
      "@type": "Person",
      "name": "Akib",
      "jobTitle": "Web Developer"
    },
    "areaServed": "India",
    "serviceType": [
      "Web Development",
      "Website Design", 
      "E-commerce Development",
      "SEO Services"
    ]
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AkibWorks" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="AkibWorks" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
