export const FAQS = [
  {
    q: "How is attendance percentage calculated?",
    a: "Attendance percentage is calculated with the formula: classes attended divided by total classes held, multiplied by 100. For example, if you attended 30 out of 40 classes, your attendance is 75%. BunkSafe uses this same formula and also calculates your safe bunk count and recovery classes.",
  },
  {
    q: "How many classes can I bunk with 75% attendance?",
    a: "The number of classes you can bunk depends on your current attended classes and total classes held. If you are above 75%, the calculator checks how many future classes you can miss while still staying at or above the 75% attendance requirement.",
  },
  {
    q: "How many classes are needed to recover attendance?",
    a: "If your attendance is below the target, you need to attend consecutive upcoming classes. For a 75% target, BunkSafe solves the recovery formula and tells you something clear, such as: you need to attend the next 6 consecutive classes to reach 75% attendance.",
  },
  {
    q: "What is the minimum attendance required in college?",
    a: "Many Indian colleges and universities use 75% as the minimum attendance rule, but the exact requirement can be 65%, 75%, 80%, or another number depending on your institution, subject, and department. Always confirm the official rule with your college.",
  },
  {
    q: "How to calculate attendance subject-wise?",
    a: "Calculate each subject separately because every subject has its own total classes and attended classes. Add one subject in BunkSafe, save it, then repeat for the next subject to build a simple attendance dashboard in your browser.",
  },
  {
    q: "Can I maintain 75% attendance easily?",
    a: "Yes, if you keep a buffer. The safest habit is to check attendance before skipping, not after. If your attendance is near 75%, attend the next few classes first. If you have a strong buffer, BunkSafe shows how many classes you can miss without falling short.",
  },
] as const
