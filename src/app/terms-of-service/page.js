import Image from "next/image";
import Link from 'next/link'

export default function Page() {
  return (
    <div className="bg-gray-50">
    <div className="mx-auto max-w-3xl text-base/7 text-zinc-700 pt-32">
    <p className="text-base/7 font-semibold text-zinc-600">November, 2024</p>
    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Terms of Service</h1>
    <div className="mt-10 max-w-2xl">
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">1. Acceptance of Terms</h2>
        <p className="mt-2 mb-10">By accessing or using Lurk.to ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use or access the Service.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">2. Eligibility</h2>
        <p className="mt-2 mb-10">You must be at least 18 years old to use this Service. By using Lurk.to, you represent and warrant that you have the right, authority, and capacity to enter into this agreement on behalf of yourself or the entity you represent.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">3. User Account</h2>
        <ol className="list-decimal list-inside mt-2 mb-10">
            <li className="py-1"><strong>Registration:</strong> You might need to create an account to use some features of the Service. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.</li>
            <li className="py-1"><strong>Accuracy of Information:</strong> You agree to provide current, complete, and accurate information for your account.</li>
        </ol>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">4. Use of Service</h2>
        <p className="mt-2"><strong>License:</strong> Subject to these Terms, Lurk Software Limited grants you a limited, non-exclusive, revocable license to use the Service for your personal, and business use.</p>
        <p className="mt-4"><strong>Restrictions:</strong> You agree not to:</p>
        <ol className="list-disc list-inside mt-2 mb-10">
            <li className="py-1">Use the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
            <li className="py-1">Attempt to gain unauthorized access to the Service or its systems.</li>
            <li className="py-1">Interfere with, disrupt, or create an undue burden on the Service.</li>
            <li className="py-1">Use any automated systems like bots or scrapers to access or use the Service.</li>
        </ol>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">5. User Content</h2>
        <p className="mt-2"><strong>Responsibility:</strong> You are solely responsible for the content you post or share on or through the Service.</p>
        <p className="mt-2 mb-10"><strong>Rights:</strong> By posting content, you grant us a non-exclusive, worldwide, royalty-free, sublicensable license to use, reproduce, modify, and distribute such content.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">6. Intellectual Property</h2>
        <p className="mt-2 mb-10">All rights, title, and interest in and to the Service, including any content, technology, software, and branding, are and will remain the exclusive property of Lurk Software Limited.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">7. Payment</h2>
        <p className="mt-2 mb-10">If the Service requires payment, you agree to pay all fees associated with your use of the Service. Fees are non-refundable except as required by law or as otherwise stated in our refund policy.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">8. Termination</h2>
        <p className="mt-2 mb-10">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">9. Disclaimer of Warranties</h2>
        <p className="mt-2 mb-10">The Service is provided "as is" and "as available" without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">10. Limitation of Liability</h2>
        <p className="mt-2 mb-10">In no event shall Lurk Software Limited, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">11. Governing Law</h2>
        <p className="mt-2 mb-10">These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">12. Changes to Terms</h2>
        <p className="mt-2 mb-10">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>

        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">13. Contact Us</h2>
        <p className="mt-2">If you have any questions about these Terms, please contact us at:</p>
        <ul className="list-disc list-inside mt-2 mb-6">
            <li>Email: [support@lurk.to]</li>
        </ul>
        <p className="mt-2 mb-10">By using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
    </div>
    </div>
    </div>
  );
}
