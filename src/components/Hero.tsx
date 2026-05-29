export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-4 py-10 sm:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center md:text-left">
          <span className="mb-4 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            Free · No login · Student-safe math
          </span>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-950 sm:text-5xl">
            Attendance Calculator & Bunk Planner
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg md:mx-0">
            Calculate attendance percentage, track subject-wise attendance, and know exactly how many classes you can miss.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#calculator"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-colors hover:bg-indigo-700 sm:w-auto"
            >
              Open Calculator
            </a>
            <span className="text-sm font-medium text-gray-500">Used by students across colleges</span>
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-100 bg-white p-4 shadow-xl shadow-indigo-100/70">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Live preview</p>
              <h2 className="text-lg font-bold text-gray-950">DBMS Attendance</h2>
            </div>
            <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              Safe
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-gray-50 p-3">
              <p className="text-xs text-gray-500">Current</p>
              <p className="mt-1 text-2xl font-extrabold text-gray-950">82.5%</p>
            </div>
            <div className="rounded-xl bg-indigo-50 p-3">
              <p className="text-xs text-indigo-700">Can miss</p>
              <p className="mt-1 text-2xl font-extrabold text-indigo-700">4</p>
            </div>
            <div className="rounded-xl bg-violet-50 p-3">
              <p className="text-xs text-violet-700">Target</p>
              <p className="mt-1 text-2xl font-extrabold text-violet-700">75%</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-gray-700">Projected after 1 bunk</span>
              <span className="font-bold text-green-700">80.5%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white">
              <div className="h-full w-[82%] rounded-full bg-indigo-600" />
            </div>
            <p className="mt-3 text-sm text-gray-600">
              You are above the 75% line. Spend those bunks like a limited edition currency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
