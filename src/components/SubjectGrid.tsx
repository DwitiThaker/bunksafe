"use client"
import type { SubjectResult } from "@/types"
import ResultCard from "./ResultCard"

interface Props {
  subjects: SubjectResult[]
  onRemove: (id: string) => void
  onClearAll: () => void
}

export default function SubjectGrid({ subjects, onRemove, onClearAll }: Props) {
  if (subjects.length === 0) return null

  const safe = subjects.filter(s => s.status === "safe" || s.status === "borderline").length
  const atRisk = subjects.length - safe

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Revisit dashboard</p>
          <h2 className="text-xl font-bold text-gray-950">Saved Subjects</h2>
          <p className="mt-0.5 text-sm text-gray-500">
            {safe} safe · {atRisk} need attention · saved in this browser
          </p>
        </div>
        <button
          type="button"
          onClick={onClearAll}
          className="text-xs text-red-400 hover:text-red-600 transition-colors font-medium"
        >
          Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map(subject => (
          <div key={subject.id} className="relative group">
            <ResultCard result={subject} compact />
            <button
              type="button"
              onClick={() => onRemove(subject.id)}
              aria-label="Remove subject"
              className="absolute top-3 right-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity
                         w-6 h-6 rounded-full bg-white shadow border border-gray-200 text-gray-400
                         hover:text-red-500 hover:border-red-200 flex items-center justify-center text-xs"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
