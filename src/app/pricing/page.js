import Link from 'next/link'

export default function Page() {
  return (
<div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-gray-50">
  <div className="mx-auto max-w-4xl text-center">
    <h2 className="mt-14 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Pricing</h2>
  </div>
  <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">Simple plans. Start for free, upgrade later.</p>
  <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
    <div className="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-gray-900">Free</span>
      </p>
      <p className="mt-6 text-base/7 text-gray-600">The perfect plan if you&#039;re just want to monitor one endpoint.</p>
      <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-gray-950" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          1 website or API endpoint
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-gray-950" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          5, 10 or 15 min fequency
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-gray-950" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Multi-region monitoring
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-gray-950" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Email alerts
        </li>
      </ul>
      <a href="#" aria-describedby="tier-free" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-200 hover:ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 sm:mt-10">Get started today</a>
    </div>
    <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
      <h3 id="tier-pro" className="text-base/7 font-semibold text-gray-200">Pro</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-white">$7</span>
        <span className="text-base text-gray-400">/month</span>
      </p>
      <p className="mt-6 text-base/7 text-gray-300">When you need multiple monitors and integrations.</p>
      <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Unlimited websites or API endpoints
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          5, 10 or 15 min frequency
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Multi-region monitoring
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Email, Slack and Phone alerts
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Integrations
        </li>
      </ul>
      <a href="https://app.lurk.to/signup" aria-describedby="tier-pro" className="mt-8 block rounded-md bg-gray-100 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200 sm:mt-10">Get started today</a>
    </div>
  </div>
  <div className="mx-auto max-w-4xl mt-32 px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">FAQs</h2>
        <p className="mt-4 text-pretty text-base/7 text-gray-600">What you need to know about Lurk.  </p>
      </div>
      <div className="mt-10 lg:col-span-7 lg:mt-0">
        <dl className="space-y-10">
          <div>
            <dt className="text-base/7 font-semibold text-gray-900">Who are we?</dt>
            <dd className="mt-2 text-base/7 text-gray-600">Well, actually, it should who are you? I'm <a href="https://x.com/gadgick" className="font-semibold text-gray-900 border-b border-gray-700 border-dashed hover:border-0">Nic</a>, and I wanted to build a super simple monitoring app to check my own websites.</dd>
          </div>
          <div>
            <dt className="text-base/7 font-semibold text-gray-900">What is a monitor?</dt>
            <dd className="mt-2 text-base/7 text-gray-600">It's basically a website or API endpoint that can be checked via a URL. We run a simple URL fetch to the URL from our locations, store the response code and the time it took to load.</dd>
          </div>
          <div>
            <dt className="text-base/7 font-semibold text-gray-900">What are the limits?</dt>
            <dd className="mt-2 text-base/7 text-gray-600">As a free user, you start with 1 monitor that can be checked every 5 minutes. You can upgrade at any time. </dd>
          </div>
          <div>
            <dt className="text-base/7 font-semibold text-gray-900">Where do you monitor from?</dt>
            <dd className="mt-2 text-base/7 text-gray-600">We currently monitor from two regions: fra (Frankfurt, EU) and ore (Oregon, US). More locations are being added as we grow.</dd>
          </div>
          <div>
            <dt className="text-base/7 font-semibold text-gray-900">Do I need a card to sign up?</dt>
            <dd className="mt-2 text-base/7 text-gray-600">Nope. Just create an account, and away you go, start monitoring. You can also cancel at any time (we do not offer refunds).</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>


  );
}