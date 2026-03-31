const BEFORE = {
  subject: "Quick question",
  body: "Hi Sarah,\n\nI hope this email finds you well. I wanted to reach out because I think our solution could be a great fit for your company.\n\nWe help businesses like yours improve their customer success metrics. Would you be open to a quick 15-minute call to discuss how we might be able to help?\n\nLooking forward to hearing from you.",
}

const AFTER = {
  subject: "Noticed something on your site",
  body: "Sarah — your onboarding flow stops at step 3. Most users who don't complete that step churn in 30 days.\n\nWe fixed that exact problem for Loom and Notion. Reduced their 30-day churn by 23% in one quarter.\n\nWorth a 20-minute call this week?",
}

export function LandingHero({ onTryNow }: { onTryNow: () => void }) {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          Outreach writer on-demand
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          A full 5-email sequence,{" "}
          <span className="text-gray-400">personalized to every prospect</span>{" "}
          — in 8 seconds.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Stop leaving follow-ups unwritten. Paste a URL, get a complete sequence. Send from wherever you already work.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onTryNow}
            className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Try free — no signup →
          </button>
          <p className="text-sm text-gray-400">
            A Fiverr copywriter charges $75/sequence. We charge $19/month — cancel anytime.
          </p>
        </div>
      </div>

      <BeforeAfter />
    </div>
  )
}

function BeforeAfter() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="border border-red-100 bg-red-50 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
            ✗ Without ColdCopy
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 font-medium">Subject</p>
          <p className="text-sm text-gray-700 font-medium">{BEFORE.subject}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 font-medium">Body</p>
          <p className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">{BEFORE.body}</p>
        </div>
        <p className="text-xs text-red-400">45 min to write • Sounds like everyone else</p>
      </div>

      <div className="border border-green-100 bg-green-50 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
            ✓ With ColdCopy
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 font-medium">Subject</p>
          <p className="text-sm text-gray-700 font-medium">{AFTER.subject}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 font-medium">Body</p>
          <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{AFTER.body}</p>
        </div>
        <p className="text-xs text-green-600">8 seconds • Sounds like 20 min of research</p>
      </div>
    </div>
  )
}
