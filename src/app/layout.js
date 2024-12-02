import { Inter } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';
import Image from "next/image";
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Lurk - Monitor Websites & APIs",
  description: "Monitor your websites and APIs with ease. Lurk.to provides silent, proactive surveillance for performance, downtime, and security, ensuring you're always informed with minimal effort.",
  keywords: "website monitoring, api monitoring, site performance, uptime, downtime, security alerts, response time, global monitoring, real-time notifications",
  twitter: {
      card: 'summary_large_image',
      title: 'Lurk: Silent Website Monitoring',
      description: 'Discover Lurk, your discreet tool for keeping your websites and APIs under surveillance. Get notified about performance or downtime issues before your users.',
      creator: '@lurkmonitor',
      images: ['https://lurk.to/twitter-image.png'],
    },
  openGraph: {
    title: 'Lurk - Your Shadow for Website & API Monitoring',
    description: 'Keep your digital services under constant watch with Lurk. Enjoy real-time monitoring, performance insights, and instant notifications to maintain control without the noise.',
    url: 'https://lurk.to',
    siteName: 'Lurk.to',
    images: [
      {
        url: 'https://lurk.to/opengraph-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
      },
      
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.seline.so/seline.js"
          data-token="78f00599666f1f5"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
      <header>
        <nav className="fixed left-1/2 transform -translate-x-1/2 w-full my-5 max-w-80 z-50 bg-white border rounded-full md:max-w-3xl">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <Link href="/"><Image
                src="/logo.png"
                alt="Lurk logo"
                height={100}
                width={75}
                priority
              /></Link>

              <button className="px-4 py-2 bg-zinc-50 text-sm font-medium text-zinc-800 rounded-full hover:bg-zinc-100 transition duration-300">
                  Log in
              </button>
          </div>
        </nav>
      </header>
        {children}
        <footer className="mt-24 border-t border-zinc-200">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-8 pb-8 sm:pt-12 sm:pb-8 lg:px-8">
            <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
            <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            </nav>
            <div className="mt-16 flex justify-center gap-x-10">
              <a href="https://x.com/LurkMonitor" target="_blank" className="text-gray-600 hover:text-gray-800">
                <span className="sr-only">X</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>
              <a href="https://bsky.app/profile/lurk.to" target="_blank" className="text-gray-600 hover:text-gray-800">
                <span className="sr-only">GitHub</span>
                <svg role="img" viewBox="0 0 24 24" className="size-6" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>
              </a>
            </div>
            <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; 2024 Lurk Software Limited. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}