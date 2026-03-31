"use client"

import { useEffect, useState } from "react"

const PHASES = [
  { label: "Researching prospect…", duration: 5000 },
  { label: "Writing your sequence…", duration: Infinity },
]

export function LoadingState() {
  const [phaseIndex, setPhaseIndex] = useState(0)

  useEffect(() => {
    const phase = PHASES[phaseIndex]
    if (phase.duration === Infinity) return

    const timer = setTimeout(() => {
      setPhaseIndex((prev) => Math.min(prev + 1, PHASES.length - 1))
    }, phase.duration)

    return () => clearTimeout(timer)
  }, [phaseIndex])

  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-gray-600 animate-pulse">{PHASES[phaseIndex].label}</p>
    </div>
  )
}
