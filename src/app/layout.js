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
  title: "Lurk -  Real-Time Website & API Monitoring",
  description: "Ensure your websites and APIs are always up, fast, and secure with Lurk's real-time monitoring. Get instant alerts and prevent downtime.",
  keywords: "website monitoring, api monitoring, site performance, uptime, downtime, security alerts, response time, global monitoring, real-time notifications",
  twitter: {
      card: 'summary_large_image',
      title: 'Lurk: Real-Time Website & API Monitoring',
      description: 'Monitor your sites for downtime, latency, and SSL issues. Instant alerts via email, Slack, or phone. Join Lurk for free monitoring.',
      creator: '@lurkmonitor',
      images: ['https://lurk.to/twitter-image.png'],
    },
  openGraph: {
    title: 'Lurk: Real-Time Website & API Monitoring',
    description: 'Real-time monitoring for your websites and APIs with instant notifications for downtime, slow responses, and SSL health. Try Lurk for free.',
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
      <body className={`${inter.className} bg-gray-50`}>
      <header>
      <nav className="fixed left-1/2 transform -translate-x-1/2 w-full my-5 max-w-80 z-50 bg-white border rounded-full md:max-w-3xl">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Lurk logo"
                height={100}
                width={75}
                priority
              />
            </Link>
          </div>
          <div className="items-center space-x-4 hidden md:flex">
            <Link href="/pricing" className="px-4 py-2 text-sm text-gray-800 font-medium rounded-full hover:bg-gray-50 transition duration-300">Pricing</Link>
            <Link href="/changelog" className="px-4 py-2 text-sm text-gray-800 font-medium rounded-full hover:bg-gray-50 transition duration-300">Changelog</Link>
          </div>
          <div className="flex items-center">
            <Link href="https://app.lurk.to/" className="px-4 py-2 bg-gray-900 text-sm font-medium text-white rounded-full hover:bg-gray-700 transition duration-300">
              Sign in
            </Link>
          </div>
        </div>
      </nav>
      </header>
        {children}
        <footer className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mt-24 border-t border-gray-900/10 pt-12 xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
                      src="/icon.png"
                      alt="Lurk icon"
                      height={30}
                      width={30}
                      priority
                    />
            <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-950">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/pricing" className="text-sm/6 text-gray-600 hover:text-gray-900">Pricing</Link></li>
                  <li><Link href="https://app.lurk.to/" className="text-sm/6 text-gray-600 hover:text-gray-900">Sign in</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-950">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="#" className="text-sm/6 text-gray-600 hover:text-gray-900">Contact</Link></li>
                  <li><Link href="/changelog" className="text-sm/6 text-gray-600 hover:text-gray-900">Changelog</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-950">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/terms-of-service" className="text-sm/6 text-gray-600 hover:text-gray-900">Terms of service</Link></li>
                  <li><Link href="/privacy-policy" className="text-sm/6 text-gray-600 hover:text-gray-900">Privacy policy</Link></li>
                </ul>
              </div>
            </div>
            </div>
            <div className="mt-12 border-t border-gray-900/10 py-8 md:flex md:items-center md:justify-between">
              <div className="flex gap-x-6 md:order-2">
                <Link href="https://x.com/lurkmonitor" className="text-gray-600 hover:text-gray-800">
                  <span className="sr-only">X</span>
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                  </svg>
                </Link>
                <Link href="https://github.com/lurk-software" className="text-gray-600 hover:text-gray-800">
                  <span className="sr-only">GitHub</span>
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">&copy; 2024 Lurk Software Limited. All rights reserved.</p>
            </div>
          </div>
      </footer>
      </body>
    </html>
  );
}