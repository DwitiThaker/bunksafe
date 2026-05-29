export default function Footer() {
  return (
    <footer className="border-t border-indigo-950 bg-gray-950 px-4 py-10 text-sm text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <p className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-sm">B</span>
            BunkSafe
          </p>
          <p className="max-w-md leading-6">
            The smart attendance planner for students. Calculate attendance percentage, check bunk limits, and keep subject-wise attendance from becoming a surprise attack.
          </p>
          <p className="mt-4 max-w-lg text-xs leading-5 text-gray-500">
            Disclaimer: BunkSafe provides attendance estimates for informational purposes only. Always verify with your institution&apos;s official records before making academic decisions.
          </p>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Tools</p>
          <div className="flex flex-col gap-2 text-gray-400">
            <a href="/75-attendance-calculator" className="hover:text-white">75% calculator</a>
            <a href="/bunk-calculator" className="hover:text-white">Bunk calculator</a>
            <a href="/attendance-shortage-calculator" className="hover:text-white">Shortage calculator</a>
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Company</p>
          <div className="flex flex-col gap-2 text-gray-400">
            <a href="/about" className="hover:text-white">About</a>
            <a href="/contact" className="hover:text-white">Contact</a>
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-gray-500">
        © {new Date().getFullYear()} BunkSafe. Built for students, by someone who also knows the 75% suspense.
      </p>
    </footer>
  )
}
