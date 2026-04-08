export const metadata = {
  title: "Privacy Policy — ColdCopy",
  description: "How ColdCopy collects, uses, and protects your data.",
  alternates: { canonical: "https://coldcopy.pro/privacy" },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <a href="/" className="font-bold text-gray-900 text-lg">ColdCopy</a>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Effective date: April 7, 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-sm text-gray-600 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">What ColdCopy collects</h2>
            <ul className="space-y-3 list-none pl-0">
              <li>
                <strong className="text-gray-800">Inputs you provide.</strong> URLs, descriptions of your offer, ICP, prospect names and notes. These are sent to Anthropic&apos;s API to generate your sequences and are not stored on our servers.
              </li>
              <li>
                <strong className="text-gray-800">License key.</strong> Stored locally in your browser (LocalStorage). Never sent to our servers except for validation.
              </li>
              <li>
                <strong className="text-gray-800">Free trial status.</strong> Tracked via LocalStorage in your browser. We don&apos;t associate it with any identity.
              </li>
              <li>
                <strong className="text-gray-800">IP address.</strong> Used temporarily (in-memory) to enforce rate limits. Not logged or stored persistently.
              </li>
              <li>
                <strong className="text-gray-800">Analytics.</strong> Google Analytics (GA4) collects anonymized usage data (pages visited, session duration). No personally identifiable information is collected via GA.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">Third-party services</h2>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-medium text-gray-700">Service</th>
                    <th className="text-left px-4 py-2.5 font-medium text-gray-700">Purpose</th>
                    <th className="text-left px-4 py-2.5 font-medium text-gray-700">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      name: "Anthropic",
                      purpose: "Processes your URL/prompt inputs to generate email sequences",
                      url: "anthropic.com/privacy",
                      href: "https://www.anthropic.com/privacy",
                    },
                    {
                      name: "Gumroad",
                      purpose: "Handles all subscription payments and license keys",
                      url: "gumroad.com/privacy",
                      href: "https://gumroad.com/privacy",
                    },
                    {
                      name: "Google Analytics",
                      purpose: "Anonymized usage analytics",
                      url: "policies.google.com/privacy",
                      href: "https://policies.google.com/privacy",
                    },
                    {
                      name: "Vercel",
                      purpose: "Hosting and CDN",
                      url: "vercel.com/legal/privacy-policy",
                      href: "https://vercel.com/legal/privacy-policy",
                    },
                  ].map((row) => (
                    <tr key={row.name} className="bg-white">
                      <td className="px-4 py-2.5 font-medium text-gray-800">{row.name}</td>
                      <td className="px-4 py-2.5 text-gray-600">{row.purpose}</td>
                      <td className="px-4 py-2.5">
                        <a href={row.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 underline">
                          {row.url}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">What we don&apos;t do</h2>
            <p>We don&apos;t sell your data. We don&apos;t build profiles. We don&apos;t store your prospect data.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">Your data, your control</h2>
            <p>You can clear all locally stored data (license key, trial status) at any time by clearing your browser&apos;s LocalStorage.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">Contact</h2>
            <p>
              Questions about this policy?{" "}
              <a href="mailto:info@coldcopy.pro" className="text-gray-900 underline">
                info@coldcopy.pro
              </a>
            </p>
          </section>

        </div>

        <footer className="text-center text-xs text-gray-400 space-y-1 pt-8 border-t border-gray-100">
          <p>
            <a href="/" className="hover:text-gray-600">ColdCopy</a>
            {" · "}
            <a href="/privacy" className="hover:text-gray-600">Privacy Policy</a>
            {" · "}
            <a href="/terms" className="hover:text-gray-600">Terms of Use</a>
            {" · "}
            <a href="/data-compliance" className="hover:text-gray-600">Data Compliance</a>
          </p>
        </footer>
      </div>
    </main>
  )
}
