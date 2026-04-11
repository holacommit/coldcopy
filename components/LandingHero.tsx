const BEFORE = {
  subject: "Quick question",
  body: "Hi Sarah,\n\nI hope this email finds you well. I wanted to reach out because I think our solution could be a great fit for your store.\n\nWe work with boutiques like yours and I think there's a real opportunity here. Would you be open to a quick 15-minute call?\n\nLooking forward to hearing from you.",
}

const AFTER = {
  subject: "You carry 3 candle brands — none rotate seasonally",
  body: "Sarah, I noticed you stock 3 soy candle brands but none of them swap scents by season. Our fall collection sold out in 11 days at Gather & Co two blocks from you. I'm looking for one more stockist in your neighborhood before October. Want me to send samples?",
}

export function LandingHero({ onTryNow }: { onTryNow: () => void }) {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          Cold email that gets replies
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Book meetings with people{" "}
          <span className="text-gray-400">who&apos;ve never heard of you.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Paste a prospect&apos;s URL — ColdCopy reads their site and writes a personalized 5-email sequence in 8 seconds. Sounds like research. Costs less than one Fiverr sequence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onTryNow}
            className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Write my first sequence free →
          </button>
          <p className="text-sm text-gray-400">
            No signup. No credit card. Ready in 8 seconds.
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
        <p className="text-xs text-red-400">35 min to write • She didn&apos;t reply</p>
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
