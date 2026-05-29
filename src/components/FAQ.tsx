"use client"
import { useState } from "react"
import { FAQS } from "@/content/faq"

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 px-4 py-14">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-950">Attendance Calculator FAQs</h2>
        <p className="mb-8 text-center text-sm text-gray-600">
          Search-friendly answers, but written like a human who has seen the 75% spreadsheet.
        </p>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-900 transition-colors hover:text-indigo-600"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{faq.q}</span>
                <span className={`ml-3 shrink-0 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
              {open === i && (
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-label={faq.q}
                  className="border-t border-gray-50 px-5 pb-4 pt-3 text-sm leading-relaxed text-gray-600"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
