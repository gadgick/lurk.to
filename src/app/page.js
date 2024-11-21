import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
  <div className="bg-gray-50">
    <header>
      <nav className="fixed left-1/2 transform -translate-x-1/2 w-full my-5 max-w-3xl z-50 bg-white border rounded-full">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <Link href="/"><Image
              src="/logo.png"
              alt="Lurk logo"
              height={100}
              width={75}
              priority
            /></Link>

            <div className="hidden md:flex justify-center space-x-10 text-sm font-medium">
                <Link href="/features" className="text-zinc-800 rounded-full px-3 py-2 hover:bg-zinc-50 transition duration-300">Features</Link>
                <Link href="/pricing" className="text-zinc-800 rounded-full px-3 py-2 hover:bg-zinc-50 transition duration-300">Pricing</Link>
                <Link href="/docs" className="text-zinc-800 rounded-full px-3 py-2 hover:bg-zinc-50 transition duration-300">Docs</Link>
            </div>

            <button className="px-4 py-2 bg-zinc-50 text-sm font-medium text-zinc-800 rounded-full hover:bg-zinc-100 transition duration-300">
                Log in
            </button>
        </div>
      </nav>
    </header>
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-40">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        </div>
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Monitoring websites in the shadows</h1>
          <p className="mt-6 text-pretty text-lg font-normal text-zinc-700 sm:text-xl/8 max-w-2xl mx-auto">Enjoy a monitoring service that silently watches over your websites and APIs for any anomalies or downtime.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-3xl bg-zinc-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join the waitlist</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
        <div className="relative lg:col-span-3 bg-white bg-gradient-to-br from-white to-zinc-50 border border-zinc-200 rounded-tl-xl">
          <div className="pt-4">
            <p className="px-10 mt-2 text-lg font-medium tracking-tight text-gray-950">Response Codes</p>
            <p className="px-10 mt-2 mb-6 max-w-lg text-sm/6 text-gray-600">Instantly find out if your site or API isn't returning a 200 OK status helping to stay ahead of issues.</p>
            <Image
              src="/bento_response.png"
              alt="Reponse codes"
              height={320}
              width={700}
              priority
              className="object-fill object-center mt-16"
            />
          </div>
        </div>
        <div className="relative lg:col-span-3 bg-white bg-gradient-to-bl from-white to-zinc-50 border border-zinc-200 rounded-tr-xl">
          <div className="pt-4">
            <p className="px-10 mt-2 text-lg font-medium tracking-tight text-gray-950">Performance Insights</p>
            <p className="px-10 mt-2 mb-6 max-w-lg text-sm/6 text-gray-600">Understand performance trends of your websites & APIs to optimise user experience over time.</p>
            <Image
              src="/bento_performance.png"
              alt="Performance chart"
              height={320}
              width={700}
              priority
              className="object-fill object-center mt-16"
            />
          </div>
        </div>
        <div className="relative lg:col-span-2 bg-white bg-gradient-to-bl from-white to-zinc-50 border border-zinc-200 rounded-bl-xl">
          <div className="pt-4">
            <p className="px-10 mt-2 text-lg font-medium tracking-tight text-gray-950">Global Reach</p>
            <p className="px-10 mt-2 mb-6 max-w-lg text-sm/6 text-gray-60">Your services are monitored from multiple regions worldwide, ensuring comprehensive coverage.</p>
            <Image
              src="/bento_global.png"
              alt="Global map"
              height={200}
              width={350}
              priority
              className="object-fill object-center mt-12"
            />
          </div>
        </div>
        <div className="relative lg:col-span-2 bg-white bg-gradient-to-t from-white to-zinc-50 border border-zinc-200">
          <div className="pt-4">
            <p className="px-10 mt-2 text-lg font-medium tracking-tight text-gray-950">Stay Informed</p>
            <p className="px-10 mt-2 mb-6 max-w-lg text-sm/6 text-gray-60">Get instant alerts through email, Slack, or SMS when your monitoring detects any issues.</p>
            <Image
              src="/bento_alerts.png"
              alt="Alerts flow"
              height={200}
              width={350}
              priority
              className="object-fill object-center mt-12"
            />
          </div>
        </div>
        <div className="relative lg:col-span-2 bg-white bg-gradient-to-br from-white to-zinc-50 border border-zinc-200 rounded-br-xl">
          <div className="pt-4">
            <p className="px-10 mt-2 text-lg font-medium tracking-tight text-gray-950">Connect with Tools</p>
            <p className="px-10 mt-2 mb-6 max-w-lg text-sm/6 text-gray-60">Easily integrate with tools like PagerDuty for incident management or Sorry™ for status page updates. </p>
            <Image
              src="/bento_tools.png"
              alt="Connect with tools"
              height={200}
              width={350}
              priority
              className="object-fill object-center mt-12"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden py-24 sm:py-32">
  <div className="mx-auto max-w-6xl md:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
      <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A simple dashboard</p>
          <p className="mt-6 text-lg/8 text-gray-600">Use our dashboard for effortless monitoring. Instantly see your websites' and APIs' status, delve into performance trends, and customise your alerts to ensure you're always one step ahead.</p>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
            <div className="relative">
              <dt className="inline font-semibold text-gray-900">
              Real-time Overview. 
              </dt>
              <dd className="inline ml-2">See your services' status in real-time, ensuring you're never caught off guard.</dd>
            </div>
            <div className="relative">
              <dt className="inline font-semibold text-gray-900">
               Historical Insights.
              </dt>
              <dd className="inline ml-2"> Review past performance to predict and prevent future issues.</dd>
            </div>
            <div className="relative">
              <dt className="inline font-semibold text-gray-900">
                Custom Alerts.
              </dt>
              <dd className="inline ml-2"> Tailor notifications to your needs, keeping you informed without the noise.</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="sm:px-6 lg:px-0">
      <div className="relative isolate overflow-hidden px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-200">
          <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
            <img src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png" alt="Product screenshot" width="2432" height="1442" className="-mb-12 w-[57rem] max-w-none rounded-tl-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    <footer className="mt-24 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-8 pb-8 sm:pt-12 sm:pb-8 lg:px-8">
        <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
          <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Docs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <span className="sr-only">X</span>
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <span className="sr-only">GitHub</span>
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; 2024 Lurk Software Limited. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}
