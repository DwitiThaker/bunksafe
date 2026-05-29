"use client"
import { useState } from "react"
import type { SubjectFormData, SubjectResult } from "@/types"
import { calculateAttendance } from "@/lib/attendance"
import ResultCard from "./ResultCard"

interface Props {
  onAddSubject: (result: SubjectResult) => void
  initialTarget?: string
}

const DEFAULT_FORM: SubjectFormData = {
  subjectName: "",
  totalClasses: "",
  attendedClasses: "",
  targetPercentage: "75",
}

export default function Calculator({ onAddSubject, initialTarget = DEFAULT_FORM.targetPercentage }: Props) {
  const [form, setForm] = useState<SubjectFormData>({ ...DEFAULT_FORM, targetPercentage: initialTarget })
  const [result, setResult] = useState<SubjectResult | null>(null)
  const [errors, setErrors] = useState<Partial<SubjectFormData>>({})

  function validate(): boolean {
    const e: Partial<SubjectFormData> = {}
    if (!form.subjectName.trim()) e.subjectName = "Subject name is required"
    const total = Number(form.totalClasses)
    const attended = Number(form.attendedClasses)
    const target = Number(form.targetPercentage)
    if (form.totalClasses === "" || isNaN(total) || total < 0) e.totalClasses = "Enter a valid number ≥ 0"
    if (form.attendedClasses === "" || isNaN(attended) || attended < 0) e.attendedClasses = "Enter a valid number ≥ 0"
    if (!isNaN(total) && !isNaN(attended) && attended > total) e.attendedClasses = "Cannot exceed total classes"
    if (isNaN(target) || target < 1 || target > 100) e.targetPercentage = "Enter a value between 1–100"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    const res = calculateAttendance(
      crypto.randomUUID(),
      form.subjectName.trim(),
      Number(form.totalClasses),
      Number(form.attendedClasses),
      Number(form.targetPercentage),
    )
    setResult(res)
  }

  function handleReset() {
    setForm({ ...DEFAULT_FORM, targetPercentage: initialTarget })
    setResult(null)
    setErrors({})
  }

  const inputClass = (field: keyof SubjectFormData) =>
    `w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-800 bg-white transition-colors
     focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
     ${errors[field] ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-gray-300"}`

  return (
    <section id="calculator" className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
      <div className="mx-auto mb-6 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Attendance calculator</p>
        <h2 className="mt-1 text-2xl font-bold text-gray-950 sm:text-3xl">Plan each subject before the panic starts</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Enter classes held, classes attended, and your required percentage. BunkSafe shows current attendance, safe bunk count, recovery classes, and projected attendance.
        </p>
      </div>

      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-gray-100 sm:p-7">
        <form onSubmit={handleCalculate} noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="subjectName" className="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
              <input
                id="subjectName"
                type="text"
                placeholder="e.g. DBMS, Mathematics"
                className={inputClass("subjectName")}
                value={form.subjectName}
                onChange={e => setForm(f => ({ ...f, subjectName: e.target.value }))}
              />
              {errors.subjectName && <p className="text-red-500 text-xs mt-1">{errors.subjectName}</p>}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="totalClasses" className="block text-sm font-medium text-gray-700 mb-1">Total Classes Held</label>
                <input
                  id="totalClasses"
                  type="number" min="0" placeholder="e.g. 40"
                  className={inputClass("totalClasses")}
                  value={form.totalClasses}
                  onChange={e => setForm(f => ({ ...f, totalClasses: e.target.value }))}
                />
                {errors.totalClasses && <p className="text-red-500 text-xs mt-1">{errors.totalClasses}</p>}
              </div>
              <div>
                <label htmlFor="attendedClasses" className="block text-sm font-medium text-gray-700 mb-1">Classes Attended</label>
                <input
                  id="attendedClasses"
                  type="number" min="0" placeholder="e.g. 30"
                  className={inputClass("attendedClasses")}
                  value={form.attendedClasses}
                  onChange={e => setForm(f => ({ ...f, attendedClasses: e.target.value }))}
                />
                {errors.attendedClasses && <p className="text-red-500 text-xs mt-1">{errors.attendedClasses}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="targetPercentage" className="block text-sm font-medium text-gray-700 mb-1">
                Target Attendance %
                <span className="text-gray-400 font-normal ml-1">(default 75)</span>
              </label>
              <input
                id="targetPercentage"
                type="number" min="1" max="100" placeholder="75"
                className={inputClass("targetPercentage")}
                value={form.targetPercentage}
                onChange={e => setForm(f => ({ ...f, targetPercentage: e.target.value }))}
              />
              {errors.targetPercentage && <p className="text-red-500 text-xs mt-1">{errors.targetPercentage}</p>}
            </div>

            <button
              type="submit"
              className="hidden w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 sm:block"
            >
              Calculate Attendance
            </button>
          </div>
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(17,24,39,0.08)] backdrop-blur sm:hidden">
            <button
              type="submit"
              className="min-h-12 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200"
            >
              Calculate Attendance
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-6">
            <ResultCard
              result={result}
              onAddSubject={() => {
                onAddSubject(result)
                handleReset()
              }}
            />
            <button
              onClick={handleReset}
              className="mt-3 w-full py-2 text-xs text-gray-400 transition-colors hover:text-gray-600"
            >
              Clear
            </button>
            <div className="mt-4 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-4 py-5 text-center text-xs font-medium text-gray-400">
              Future ad space · placed away from the calculator flow
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
