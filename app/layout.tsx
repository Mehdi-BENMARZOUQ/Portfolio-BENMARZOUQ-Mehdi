import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BENMARZOUQ MEHDI',
  description: 'Welcome to my portfolio! 👋 I’m a passionate full-stack developer and engineering student specializing in building modern, scalable, and user-friendly web applications. Explore my projects, skills, and experience.',
  keywords: [
    'BENMARZOUQ MEHDI',
    'Full-Stack Developer',
    'Engineering Student',
    'Web Development',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Portfolio',
    'Software Engineer',
  ],
  authors: [{ name: 'BENMARZOUQ MEHDI', url: 'https://portfolio-benmarzouq-mehdi.vercel.app/' }],
  openGraph: {
    title: 'BENMARZOUQ MEHDI - Full-Stack Developer & Engineering Student',
    description: 'Welcome to my portfolio! 👋 I’m a passionate full-stack developer and engineering student specializing in building modern, scalable, and user-friendly web applications.',
    url: 'https://portfolio-benmarzouq-mehdi.vercel.app/',
    siteName: 'BENMARZOUQ MEHDI Portfolio',
    images: [
      {
        url: 'https://portfolio-benmarzouq-mehdi.vercel.app/Benmarzouq-Mehdi.png',
        width: 1200,
        height: 630,
        alt: 'BENMARZOUQ MEHDI Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BENMARZOUQ MEHDI - Full-Stack Developer & Engineering Student',
    description: 'Welcome to my portfolio! 👋 I’m a passionate full-stack developer and engineering student specializing in building modern, scalable, and user-friendly web applications.',
    images: ['https://portfolio-benmarzouq-mehdi.vercel.app/Benmarzouq-Mehdi.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Benmarzouq-Mehdi-favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
