import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — LinkX",
  description: "Terms and Conditions for using LinkX.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <section className="rounded-3xl bg-gray-900/80 shadow-xl ring-1 ring-white/5 p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-center">
            Terms and Conditions
          </h1>

          <p className="mt-3 text-sm text-gray-400 text-center">
            Last updated: September 26, 2025
          </p>

          <p className="mt-8 text-gray-300 leading-relaxed">
            Welcome to Zaplink (“we”, “our”, or “the Service”). By using our platform located at zaplink.com (the “Site”), you (“the user”) agree to comply with these Terms and Conditions. If you do not agree, please do not use the Service.
          </p>

          <hr className="my-8 border-gray-700/60" />

          <h2 className="text-xl font-semibold text-white">Purpose of the Service</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
          Zaplink provides a tool to shorten links for easier use and sharing.
          We reserve the right to modify, suspend, or discontinue the Service, in whole or in part, at any time without prior notice.
          </p>

          <hr className="my-8 border-gray-700/60" />

          <h2 className="text-xl font-semibold text-white">Permitted Use</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
          You agree to:
            <ul className="list-disc pl-5 space-y-2">
                <li>Use Zaplink only for legal and legitimate purposes.</li>
                <li>Not use the Service to redirect to websites that:</li>
                <li className="ml-5">Contain malware, viruses, or malicious software.</li>
                <li className="ml-5">Promote illegal activities, violence, hate, harassment, or discrimination.</li>
                <li className="ml-5">Include child sexual abuse material, exploitation, or offensive content.</li>
                <li className="ml-5">Infringe copyright, trademarks, or other intellectual property rights.</li>
                <li>Not tamper with, attempt to disrupt, or compromise the security of the Service.</li>
            </ul>

        
          </p>

          <hr className="my-8 border-gray-700/60" />

          <h2 className="text-xl font-semibold text-white">User Responsibilityy</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
                <li>Each link generated is the sole responsibility of the user who creates and shares it.</li>
                <li>Zaplink is not responsible for the content of destination websites.</li>
                <li>The user agrees to hold Zaplink harmless from any claims by third parties resulting from misuse of the Service.</li>
            </ul>
          </p>

          <hr className="my-8 border-gray-700/60" />

          <h2 className="text-xl font-semibold text-white">Limitations and Suspension</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
          We may suspend or remove links and/or user accounts if we detect:
            <ul className="list-disc pl-5 space-y-2">
                <li>Misuse, abuse, or illegal use of the Service.</li>
                <li>Violation of these Terms and Conditions.</li>
                <li>Excessive traffic that affects the stability of the platform.</li>
            </ul>
          </p>

          <hr className="my-8 border-gray-700/60" />

          <h2 className="text-xl font-semibold text-white">Intellectual Property</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
                <li>The software, design, and logos of Zaplink are the exclusive property of the platform.</li>
                <li>The user retains all rights to the content to which their links redirect, but declares that they are authorized to share it.</li>
            </ul>
          </p>

          <hr className="my-8 border-gray-700/60" />

          <h2 className="text-xl font-semibold text-white">Privacy and Data</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
                <li>Zaplink may collect technical data (such as clicks, anonymized IP addresses, approximate geolocation, etc.) for statistics and service improvement.</li>
                <li>The processing of personal information is governed by our Privacy Policy (published separately).</li>
            </ul>
          </p>

          <hr className="my-8 border-gray-700/60" />
          <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
                <li>Zaplink does not guarantee continuous availability or error-free operation of the Service.</li>
                <li>We are not responsible for financial losses, indirect damages, or disruptions arising from the use or inability to use the platform.</li>
            </ul>
          </p>

          <hr className="my-8 border-gray-700/60" />
          <h2 className="text-xl font-semibold text-white">Modifications</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
                <li>Zaplink may update these Terms and Conditions at any time. The “Last updated” date will reflect the changes. Users are encouraged to review this document periodically.</li>
            </ul>
          </p>

          <hr className="my-8 border-gray-700/60" />
          <h2 className="text-xl font-semibold text-white">Governing Law</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
                <li>These Terms and Conditions shall be governed by and construed in accordance with the laws of [your country]. Any disputes shall be subject to the jurisdiction of the courts of [your city or country].</li>
            </ul>
          </p>
        </section>
      </div>
    </main>
  );
}
