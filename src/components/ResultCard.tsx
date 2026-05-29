import type { SubjectResult } from "@/types"
import { STATUS_CONFIG } from "@/lib/attendance"

interface Props {
  result: SubjectResult
  onAddSubject?: () => void
  compact?: boolean
}

export default function ResultCard({ result, onAddSubject, compact = false }: Props) {
  const cfg = STATUS_CONFIG[result.status]
  const icon = result.status === "safe" ? "✓" : result.status === "borderline" ? "!" : result.status === "no_data" ? "i" : "!"
  const trendLabel = result.trend === "rising" ? "Recovery mode" : result.trend === "steady" ? "Stable buffer" : "No buffer"

  return (
    <div className={`w-full rounded-2xl border ${cfg.border} bg-white ${compact ? "p-4" : "p-5 sm:p-6"} shadow-sm`}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Attendance result</p>
          <h3 className={`truncate font-bold ${compact ? "text-base" : "text-xl"} text-gray-950`}>
            {result.subjectName}
          </h3>
        </div>
        <span className={`inline-flex shrink-0 items-center gap-1 rounded-full border ${cfg.border} ${cfg.bg} px-2.5 py-1 text-xs font-semibold ${cfg.text}`}>
          <span aria-hidden="true">{icon}</span>
          {cfg.label}
        </span>
      </div>

      <div className="mb-4 grid grid-cols-[1fr_auto] items-end gap-3">
        <div>
          <p className="text-sm font-medium text-gray-500">Current attendance</p>
          <div className={`font-extrabold ${compact ? "text-4xl" : "text-5xl"} ${cfg.pct} leading-none`}>
            {result.status === "no_data" ? "-" : `${result.currentPercentage.toFixed(1)}%`}
          </div>
        </div>
        <div className="text-right text-xs text-gray-500">
          <p>{result.attendedClasses} / {result.totalClasses}</p>
          <p>target {result.targetPercentage}%</p>
        </div>
      </div>

      {result.status !== "no_data" && (
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-indigo-50 p-3">
            <div className="text-xs font-medium text-indigo-700">Safe bunk count</div>
            <div className="mt-1 text-2xl font-extrabold text-indigo-700">{result.canSkip}</div>
          </div>
          <div className="rounded-xl bg-gray-50 p-3">
            <div className="text-xs font-medium text-gray-600">Projected after miss</div>
            <div className="mt-1 text-2xl font-extrabold text-gray-900">
              {result.projectedAfterMiss.toFixed(1)}%
            </div>
          </div>
          <div className="rounded-xl bg-gray-50 p-3">
            <div className="text-xs font-medium text-gray-600">If you attend next</div>
            <div className="mt-1 text-2xl font-extrabold text-gray-900">
              {result.projectedAfterAttend.toFixed(1)}%
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-3">
            <div className="text-xs font-medium text-violet-700">Trend</div>
            <div className="mt-1 text-sm font-bold text-violet-800">{trendLabel}</div>
          </div>
        </div>
      )}

      <p className={`text-sm font-medium text-gray-700 ${compact ? "" : "border-t border-gray-100 pt-4"}`}>
        {result.explanation}
      </p>
      <p className="mt-2 text-sm italic text-gray-500">
        {result.message}
      </p>

      {onAddSubject && (
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button
            onClick={onAddSubject}
            className="min-h-11 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100"
          >
            + Save Subject
          </button>
          <button
            type="button"
            onClick={() => {
              const text = `${result.subjectName}: ${result.currentPercentage.toFixed(1)}% attendance. ${result.explanation}`
              if (navigator.share) {
                navigator.share({ title: "BunkSafe attendance result", text }).catch(() => undefined)
              } else {
                navigator.clipboard?.writeText(text)
              }
            }}
            className="min-h-11 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-indigo-200 hover:text-indigo-700"
          >
            Share Result
          </button>
        </div>
      )}
    </div>
  )
}
