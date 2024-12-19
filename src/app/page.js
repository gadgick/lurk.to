'use client';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {

  return (
    <div className="bg-gray-50">
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-5xl font-bold text-pretty text-gray-900 sm:text-6xl">Keep your websites running smoothly</h1>
              <p className="mt-8 text-pretty text-lg font-normal text-gray-600 leading-relaxed sm:text-xl">Are you frustrated with downtime, slow response times, or SSL certificate hassles? Lurk offers real-time monitoring to keep you one step ahead.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://app.lurk.to/signup" className="px-6 py-3 bg-gray-900 text-base font-medium text-white rounded-full hover:bg-gray-700 transition duration-300">
                  Start for free
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-200/5 p-2 ring-1 ring-inset ring-gray-700/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                src="/lurk_dashboard.png"
                alt="Lurk dashboard"
                height={2423}
                width={1442}
                priority
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="features" className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mx-auto max-w-4xl sm:text-center">
    <h2 className="mb-2 text-pretty text-lg font-medium tracking-loose text-gray-600 sm:text-balance sm:text-xl">Monitoring</h2>
    <p className="mt-3 mb-12 text-3xl font-medium text-gray-950 text-pretty tracking-tight">Keeping your websites and APIs in check, 24/7.</p>
    <div className="mx-auto space-y-4">
      <div className="bg-white ring-1 ring-gray-200 p-8 rounded-lg shadow">
        <Image
          src="/graphs.png"
          alt="Latency trending graphs"
          height={60}
          width={1442}
          priority
          className="w-full mb-12"
        />
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Latency Trends</h2>
        <p className="text-gray-600">Track response times worldwide to catch regional slowdowns instantly.</p>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-1/2 bg-white ring-1 ring-gray-200 pb-8 rounded-lg shadow">
          <Image
            src="/mon_codes.png"
            alt="Detecting error codes"
            height={100}
            width={500}
            priority
            className="w-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Detecting Errors</h2>
          <p className="text-gray-600">Monitor endpoint status codes to spot any non-200 responses.</p>
        </div>
        <div className="w-full sm:w-1/2 bg-white ring-1 ring-gray-200 pb-8 rounded-lg shadow">
          <Image
            src="/mon_regions.png"
            alt="Multiple locations"
            height={100}
            width={500}
            priority
            className="w-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Multi-Location Checks</h2>
          <p className="text-gray-600">Monitoring from two regions for coverage. More coming soon.</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <div id="alerting" className="mx-auto max-w-7xl mt-32 mb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="mb-2 text-pretty text-lg font-medium tracking-loose text-gray-600 sm:text-balance sm:text-xl">Alerting</h2>
          <p className="mt-3 mb-12 text-3xl font-medium text-gray-950 text-pretty tracking-tight">Notifying you the moment it matters.</p>
          <div className="mx-auto p-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4">
            <div className="bg-white ring-1 ring-gray-200 px-4 pb-8 pt-4 rounded-lg shadow">
              <Image
                src="/alert_email.png"
                alt="Email"
                height={80}
                width={80}
                priority
                className="mx-auto"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Email</h2>
              <p className="text-gray-600">Clutter-free emails when your site is down or back up.</p>
            </div>
            <div className="bg-white ring-1 ring-gray-200 px-4 pb-8 pt-4 rounded-lg shadow">
              <Image
                src="/alert_slack.png"
                alt="Slack"
                height={80}
                width={80}
                priority
                className="mx-auto"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Slack</h2>
              <p className="text-gray-600">Alerts pop into your channels for team collaboration.</p>
            </div>
            <div className="bg-white ring-1 ring-gray-200 px-4 pb-8 pt-4 rounded-lg shadow">
              <Image
                src="/alert_phone.png"
                alt="Phone"
                height={80}
                width={80}
                priority
                className="mx-auto"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Phone</h2>
              <p className="text-gray-600">We'll call you when a monitor goes down.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
