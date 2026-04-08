export const metadata = {
  title: "Data Compliance — ColdCopy",
  description: "GDPR and CCPA compliance information for ColdCopy.pro users.",
  alternates: { canonical: "https://coldcopy.pro/data-compliance" },
}

const gdprRights = [
  { right: "Access", description: "Request a copy of any personal data we hold about you." },
  { right: "Erasure", description: "Request deletion of your data." },
  { right: "Portability", description: "Receive your data in a portable format." },
  { right: "Objection", description: "Object to processing based on legitimate interest." },
  { right: "Withdraw consent", description: "Where processing is consent-based, you may withdraw at any time." },
]

const retentionData = [
  {
    data: "Inputs (URLs, prompts)",
    retention: "Not retained — processed in real-time via Anthropic API and discarded.",
  },
  {
    data: "IP addresses",
    retention: "Held in memory for rate limiting only. Not logged. Reset on server restart.",
  },
  {
    data: "License key",
    retention: "Stored in your browser's LocalStorage only. Gumroad retains a hashed validation record per their terms.",
  },
  {
    data: "Analytics",
    retention: "Retained by Google per their data retention settings (default: 14 months).",
  },
]

export default function DataCompliance() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <a href="/" className="font-bold text-gray-900 text-lg">ColdCopy</a>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Data Compliance</h1>
          <p className="text-sm text-gray-400">Effective date: April 7, 2026</p>
        </div>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

          <section className="space-y-2">
            <p>
              ColdCopy is designed to minimize data collection. We don&apos;t store your prospect data, we don&apos;t build user profiles, and we don&apos;t sell personal information to anyone.
            </p>
          </section>

          {/* GDPR */}
          <section className="space-y-4">
            <h2 className="text-base font-semibold text-gray-900">GDPR — European users</h2>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">Lawful basis for processing</h3>
              <ul className="space-y-2 list-none pl-0">
                <li>
                  <strong className="text-gray-800">Contract performance —</strong> Inputs you submit (URLs, prompt text) are processed to deliver the service you requested.
                </li>
                <li>
                  <strong className="text-gray-800">Legitimate interest —</strong> Analytics (Google Analytics) are used to understand how the product is used.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">Your rights under GDPR</h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-xs">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-2.5 font-medium text-gray-700 w-1/3">Right</th>
                      <th className="text-left px-4 py-2.5 font-medium text-gray-700">What it means</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {gdprRights.map((row) => (
                      <tr key={row.right} className="bg-white">
                        <td className="px-4 py-2.5 font-medium text-gray-800">{row.right}</td>
                        <td className="px-4 py-2.5 text-gray-600">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400">
                Since we don&apos;t store your inputs server-side, most of your data lives in your browser (LocalStorage) and is under your direct control.
              </p>
            </div>
          </section>

          {/* CCPA */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">CCPA — California residents</h2>
            <p>You have the right to:</p>
            <ul className="space-y-1.5 pl-4 list-disc">
              <li>Know what personal information we collect and how it&apos;s used.</li>
              <li>Request deletion of your personal information.</li>
              <li>Opt out of the sale of your personal information.</li>
            </ul>
            <div className="bg-gray-900 text-white text-xs font-medium px-4 py-3 rounded-xl">
              We do not sell personal information. Ever.
            </div>
          </section>

          {/* Data retention */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-gray-900">Data retention</h2>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-2.5 font-medium text-gray-700 w-1/3">Data type</th>
                    <th className="text-left px-4 py-2.5 font-medium text-gray-700">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {retentionData.map((row) => (
                    <tr key={row.data} className="bg-white">
                      <td className="px-4 py-2.5 font-medium text-gray-800">{row.data}</td>
                      <td className="px-4 py-2.5 text-gray-600">{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-gray-900">Data requests</h2>
            <p>
              To exercise any of your rights, email us at{" "}
              <a href="mailto:info@coldcopy.pro" className="text-gray-900 underline">
                info@coldcopy.pro
              </a>
              . We&apos;ll respond within 30 days.
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
