export const metadata = {
  title: "Terms of Use — ColdCopy",
  description: "Terms and conditions for using ColdCopy.pro.",
  alternates: { canonical: "https://coldcopy.pro/terms" },
}

const sections = [
  {
    title: "1. Acceptance",
    content:
      "By using ColdCopy.pro you agree to these terms. If you don't agree, don't use the service.",
  },
  {
    title: "2. What ColdCopy is",
    content:
      "ColdCopy is a writing tool that generates cold email sequences. It does not send emails on your behalf, manage inboxes, or guarantee any business outcome.",
  },
  {
    title: "3. Acceptable use",
    content:
      "You may use ColdCopy to write outreach for legitimate business purposes. You may not use it to generate spam, harass individuals, or violate any applicable law including CAN-SPAM, CASL, or GDPR.",
  },
  {
    title: "4. Subscription and billing",
    content:
      "Subscriptions are managed by Gumroad. Billing, refunds, and cancellations are subject to Gumroad's terms. ColdCopy offers a free first sequence with no credit card required.",
  },
  {
    title: "5. No warranties",
    content:
      'ColdCopy is provided "as is." We make no guarantees about reply rates, email deliverability, or fitness for any particular purpose.',
  },
  {
    title: "6. Limitation of liability",
    content:
      "ColdCopy's liability to you for any claim is limited to the amount you paid us in the 30 days preceding the claim. We are not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "7. Intellectual property",
    content:
      "The sequences generated are yours to use. ColdCopy retains ownership of the platform, UI, and underlying technology.",
  },
  {
    title: "8. Changes to the service",
    content:
      "We may modify or discontinue the service at any time. We'll make reasonable efforts to notify subscribers of material changes.",
  },
  {
    title: "9. Contact",
    content: null,
    email: "info@coldcopy.pro",
  },
]

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <a href="/" className="font-bold text-gray-900 text-lg">ColdCopy</a>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Use</h1>
          <p className="text-sm text-gray-400">Effective date: April 7, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          {sections.map((section) => (
            <section key={section.title} className="space-y-1.5">
              <h2 className="text-base font-semibold text-gray-900">{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.email && (
                <p>
                  <a href={`mailto:${section.email}`} className="text-gray-900 underline">
                    {section.email}
                  </a>
                </p>
              )}
            </section>
          ))}
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
