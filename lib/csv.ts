// Generates and triggers a CSV download from an Email array.
// Column format matches Instantly/Lemlist/Saleshandy import schema.
// Runs entirely client-side — no server round-trip.

import type { Email } from "./parser"

const CSV_HEADERS = ["step", "subject", "body", "wait_days"]

export function downloadSequenceCsv(emails: Email[], filename = "coldcopy-sequence.csv"): void {
  const csv = buildCsvString(emails)
  triggerDownload(csv, filename)
}

export function buildCsvString(emails: Email[]): string {
  const rows = emails.map((email, index) => [
    String(index + 1),
    escapeCsvField(email.subject),
    escapeCsvField(email.body),
    String(email.wait_days),
  ])

  return [CSV_HEADERS, ...rows]
    .map((row) => row.join(","))
    .join("\n")
}

function escapeCsvField(value: string): string {
  // Wrap in quotes and escape internal quotes — handles commas and newlines in email bodies
  return `"${value.replace(/"/g, '""')}"`
}

function triggerDownload(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
