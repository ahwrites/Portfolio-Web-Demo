import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AH Jubaer — AI Builder & Full-Stack Developer',
  description: 'I design, build, and ship AI-powered products, SaaS platforms, and premium digital experiences.',
  openGraph: {
    title: 'AH Jubaer — AI Builder & Full-Stack Developer',
    description: 'I design, build, and ship AI-powered products, SaaS platforms, and premium digital experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#0A0A0A] text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
