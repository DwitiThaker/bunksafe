const examples = [
  {
    title: "Basic percentage",
    body: "If 40 classes were held and you attended 30, your attendance percentage is (30 / 40) x 100 = 75%. That is exactly on the common college minimum.",
  },
  {
    title: "Bunk scenario",
    body: "If you attended 36 out of 40 classes, you are at 90%. At a 75% target, you can miss a few upcoming classes before the percentage drops to the danger line.",
  },
  {
    title: "Recovery scenario",
    body: "If you attended 25 out of 40 classes, you are at 62.5%. You cannot fix that with one class. You need consecutive attended classes because both attended and total classes increase together.",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white px-4 py-14">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Guide</p>
        <h2 className="mt-1 text-3xl font-extrabold text-gray-950">How Attendance Calculation Works</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
          BunkSafe is built for students who want a clear attendance percentage calculator, bunk calculator, and attendance shortage calculator in one place. The math is simple, but the decision is not always obvious when your college has a 75% or 80% rule.
        </p>

        <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
          <h3 className="text-lg font-bold text-gray-950">Attendance percentage formula</h3>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Attendance percentage = (classes attended / total classes held) x 100. This should be calculated subject-wise because each subject has a different number of lectures, labs, tutorials, and practical sessions.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {examples.map(example => (
            <article key={example.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <h3 className="text-base font-bold text-gray-950">{example.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{example.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-gray-950">How many classes can I miss?</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              When your current attendance is above the target, BunkSafe calculates how many future classes you can miss while staying above the minimum attendance requirement. This is your safe bunk count. It is useful for planning leaves, events, travel, or the occasional strategic sleep-in.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-950">Classes needed for 75 attendance</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              When attendance is below target, the calculator shows the number of consecutive classes you need to attend. For example, “You need to attend the next 6 consecutive classes to reach 75% attendance.” That wording matters because skipping any class during recovery changes the calculation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-950">Minimum attendance rules</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Many Indian colleges use 75% as the minimum attendance requirement, but some departments use 80% or allow relaxation through medical certificates or official participation. BunkSafe lets you change the target percentage so the calculation matches your actual rule.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-950">Subject-wise attendance tracking</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Overall attendance can hide subject shortages. A student may be safe overall but short in one lab or theory paper. Save each subject to create a small revisit dashboard in your browser and check the subjects that need attention first.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
