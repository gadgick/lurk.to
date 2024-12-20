import Link from 'next/link'

export default function Page() {
  return (
    <div className="px-6 py-32 mx-auto max-w-3xl sm:py-48 lg:px-8 bg-gray-50">
        <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Changelog</h1>
        <p className="mt-4 text-pretty text-xl text-gray-500 sm:text-lg/8">All the latest updates, improvements, and fixes with Lurk</p>
        <ul role="list" className="mt-16 space-y-6">
        <li className="relative flex gap-x-4">
            <div className="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
            <div className="w-px bg-gray-200"></div>
            </div>
            <div className="relative flex size-6 flex-none items-center justify-center">
            <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
            </div>
            <time dateTime="2024-12-17" className="flex-none py-0.5 text-sm/5 text-gray-500">Dec 17, 2024</time>
            <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200 bg-white">
            <div className="flex justify-between gap-x-4">
                <div className="text-lg ftext-gray-900 font-semibold">New location: Oregon (ore)</div>
            </div>
            <p className="mt-3 text-sm/6 text-gray-500">In addition to the default location, Frankfurt (fra), we have added a second location to run checks on endpoints. The location is in Oregon, US, and the shortcode is ore.</p>
            <p className="mt-3 text-sm/6 text-gray-500">Endpoints are now checked from locations in Europe and the United States, with more being added shortly.</p>
            
            <div className="flex justify-between gap-x-4 mt-8">
                <div className="text-lg ftext-gray-900 font-semibold">Forgot password</div>
            </div>
            <p className="mt-3 text-sm/6 text-gray-500">It happens sometimes: you forget your password or your password manager didn't save it. We've now implemented the ability to reset your password.</p>

            <div className="flex justify-between gap-x-4 mt-8">
                <div className="text-lg ftext-gray-900 font-semibold">Edit monitor</div>
            </div>
            <p className="mt-3 text-sm/6 text-gray-500">You can now edit an existing monitor, such as the URL, frequency and which email address to notify.</p>
            </div>
        </li>
        <li className="relative flex gap-x-4">
            <div className="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
            <div className="w-px bg-gray-200"></div>
            </div>
            <div className="relative flex size-6 flex-none items-center justify-center">
            <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
            </div>
            <time dateTime="2024-12-17" className="flex-none py-0.5 text-sm/5 text-gray-500">Dec 15, 2024</time>
            <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200 bg-white">
            <div className="flex justify-between gap-x-4">
                <div className="text-lg ftext-gray-900 font-semibold">Updated response time charts</div>
            </div>
            <p className="mt-3 text-sm/6 text-gray-500">We've improved the charts that display the response times on the monitors dashboard and the monitor view. It's visually pleasing, and uses a better API endpoint to render quicker.</p>
            </div>
        </li>
        </ul>

    </div>

  );
}