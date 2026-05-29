"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm text-white">B</span>
          BunkSafe
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#calculator" className="hover:text-indigo-600 transition-colors">Calculator</a>
          <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link>
          <a href="#calculator"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Calculate Attendance
          </a>
        </div>

        <button type="button" className="min-h-10 min-w-10 p-1 text-gray-500 sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-3 border-t border-gray-100 px-4 pb-4 pt-3 text-sm font-medium text-gray-700 sm:hidden">
          <a href="#calculator" onClick={() => setOpen(false)} className="hover:text-indigo-600">Calculator</a>
          <a href="#faq" onClick={() => setOpen(false)} className="hover:text-indigo-600">FAQ</a>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-indigo-600">About</Link>
        </div>
      )}
    </nav>
  )
}
