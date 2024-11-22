import Image from "next/image";
import Link from 'next/link'

export default function Page() {
  return (
    <div className="bg-gray-50">
    <div className="mx-auto max-w-3xl text-base/7 text-zinc-700 pt-32">
    <p className="text-base/7 font-semibold text-zinc-600">November, 2024</p>
    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Privacy Policy</h1>
    <p className="mt-6 text-xl/8">Welcome to Lurk.to, provided by Lurk Software Limited ("we", "us", "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our software as a service (SaaS) platform.</p>
        <div className="mt-10 max-w-2xl">
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Information We Collect</h2>
        <ol className="list-decimal list-inside mt-2 mb-10">
            <li className="py-1"><strong>Account Information:</strong> When you register an account, we collect personal information like your name, email address, and payment information.</li>
            <li className="py-1"><strong>Usage Data:</strong> We automatically collect information about your use of our services, which might include logs of when you use the service, features you access, and performance data.</li>
            <li className="py-1"><strong>Cookies and Similar Technologies:</strong> We use cookies to recognize you when you visit our site. You can disable these cookies through your browser settings, but this might affect your user experience.</li>
            <li className="py-1"><strong>Device Information:</strong> Details about the device you use to access our services, like device type, operating system, unique device identifiers, and IP address.</li>
        </ol>
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">How We Use Your Information</h2>
        <ol className="list-disc list-inside mt-2 mb-10">
            <li className="py-1"><strong>To Provide and Maintain Our Service:</strong> Including processing transactions, sending service-related announcements, and providing customer support.</li>
            <li className="py-1"><strong>For Analytics and Improvement:</strong> To understand how our service is used so we can improve it.</li>
            <li className="py-1"><strong>For Marketing:</strong> If you've opted in, we might send you promotional materials. You can opt out at any time.</li>
            <li className="py-1"><strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, or enforce our agreements. </li>
        </ol>
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Disclosure of Your Information</h2>
        <ol className="list-disc list-inside mt-2 mb-10">
            <li className="py-1"><strong>Service Providers:</strong> We might share your information with third parties who help us operate our service, like data storage, sending emails, or processing payments.</li>
            <li className="py-1"><strong>Legal Reasons: </strong> We will disclose information if required by law or in response to valid legal requests like subpoenas.</li>
            <li className="py-1"><strong>Business Transfers: </strong> In connection with any merger, sale of company assets, or acquisition.</li>
        </ol>
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Data Security</h2>
        <p className="mt-2 mb-10">We take reasonable measures to help protect your personal information from unauthorized access or disclosure. However, no internet transmission or electronic storage method is completely secure, so we cannot guarantee absolute security.</p>
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Your Rights</h2>
        <ol className="list-disc list-inside mt-2 mb-10">
            <li className="py-1"><strong>Access:</strong> You can request to know what personal data we hold about you.</li>
            <li className="py-1"><strong>Correction: </strong> If you believe that any information we hold about you is inaccurate or incomplete, you can ask us to correct or update it.</li>
            <li className="py-1"><strong>Deletion: </strong> You can ask us to delete your data, subject to certain exceptions for legal reasons.</li>
            <li className="py-1"><strong>Data Portability: </strong> You can request a copy of your data in a common format.</li>
        </ol>
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Changes to This Privacy Policy</h2>
        <p className="mt-2 mb-10">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Changes to This Privacy Policy</h2>
        <p className="mt-2">If you have any questions about this Privacy Policy, please contact us at:</p>
        <ol className="list-disc list-inside">
            <li className="py-1">Email: [support@lurk.to (mailto:support@lurk.to)]</li>
        </ol>
        <p className="mt-2 mb-10">By using Lurk.to, you consent to this Privacy Policy. If you do not agree, please do not use our service. </p>
        </div>
    </div>
    </div>
  );
}
