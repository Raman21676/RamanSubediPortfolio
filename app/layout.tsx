import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Optimize font loading with next/font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  preload: true,
});

export const metadata: Metadata = {
  title: 'Raman Subedi | AI Engineer & DevOps Specialist | Python Developer Nepal',
  description: 'Raman Subedi - AI Engineer and DevOps specialist from Nepal. Expertise in Python, Machine Learning, Data Analytics, Docker, CI/CD, and Backend Development. BIT Graduate building scalable intelligent systems.',
  keywords: [
    'Raman Subedi',
    'AI Engineer Nepal',
    'AI Engineer',
    'Machine Learning Engineer',
    'DevOps Engineer',
    'Python Developer',
    'Biratnagar',
    'Kathmandu',
    'Nepal',
  ],
  authors: [{ name: 'Raman Subedi', url: 'https://www.ramansubedi.com' }],
  creator: 'Raman Subedi',
  publisher: 'Raman Subedi',
  metadataBase: new URL('https://www.ramansubedi.com'),
  alternates: {
    canonical: 'https://www.ramansubedi.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ramansubedi.com',
    title: 'Raman Subedi | AI/ML & DevOps Engineer',
    description: 'AI Engineer and DevOps specialist from Nepal with expertise in Python, Machine Learning, Docker, and scalable systems.',
    siteName: 'Raman Subedi Portfolio',
    images: [
      {
        url: '/image2.png',
        width: 1024,
        height: 1536,
        alt: 'Raman Subedi - AI/ML & DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raman Subedi | AI/ML & DevOps Engineer',
    description: 'AI Engineer from Nepal specializing in Python, Machine Learning, and DevOps',
    images: ['/image2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/Raman-Subedi-AI-Engineer.jpg', type: 'image/jpeg' },
    ],
    apple: '/Raman-Subedi-AI-Engineer.jpg',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#0f172a',
    'msapplication-TileColor': '#0f172a',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raman Subedi',
    url: 'https://www.ramansubedi.com',
    image: 'https://www.ramansubedi.com/image2.png',
    jobTitle: 'AI/ML & DevOps Engineer',
    description: 'AI Engineer and DevOps specialist from Nepal with expertise in Python, Machine Learning, and scalable systems',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Professional',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Tribhuvan University',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Nepal',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Biratnagar',
      addressRegion: 'Koshi',
      addressCountry: 'Nepal',
    },
    email: 'ai@ramansubedi.com',
    telephone: '+977-9824370085',
    sameAs: [
      'https://www.linkedin.com/in/raman-subedi-55b13b27b',
      'https://github.com/Raman21676',
      'https://www.ramansubedi.com',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Python Programming',
      'DevOps',
      'Data Analytics',
      'Docker',
      'CI/CD',
      'Backend Development',
    ],
    knowsLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Nepali', alternateName: 'ne' },
      { '@type': 'Language', name: 'German', alternateName: 'de' },
      { '@type': 'Language', name: 'Hindi', alternateName: 'hi' },
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        {/* Preconnect for EmailJS */}
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/image1.png" as="image" type="image/png" />
        <link rel="preload" href="/image2.png" as="image" type="image/png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* PWA tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Raman Subedi" />
        
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
