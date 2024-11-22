import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-50">
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
              <p className="px-10 mt-2 mb-6 max-w-lg text-sm/6 text-gray-600">Your services are monitored from multiple regions worldwide, ensuring comprehensive coverage.</p>
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
              <p className="px-10 mt-2 mb-6 max-w-lg text-sm/6 text-gray-600">Get instant alerts through email, Slack, or SMS when your monitoring detects any issues.</p>
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
              <p className="px-10 mt-2 mb-6 max-w-lg text-sm/6 text-gray-600">Easily integrate with tools like PagerDuty for incident management or Sorry™ for status page updates. </p>
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
  </div>
  );
}
