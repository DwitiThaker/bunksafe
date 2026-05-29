export const SEO_PAGES = {
  "75-attendance-calculator": {
    title: "75 Attendance Calculator",
    description: "Calculate 75% attendance, safe bunks, and classes needed to recover college attendance.",
    h1: "75 Attendance Calculator",
    intro: "Use this 75 attendance calculator to check your current percentage, safe bunk count, and classes needed to reach the common college attendance requirement.",
    target: "75",
    sections: [
      "A 75% attendance rule means you must attend at least 75 out of every 100 classes in that subject. The exact number changes as more classes are held.",
      "If you are below 75%, you need consecutive attended classes to recover because total classes keep increasing too.",
    ],
  },
  "80-attendance-calculator": {
    title: "80 Attendance Calculator",
    description: "Calculate 80% attendance, bunk limits, and recovery classes for stricter college rules.",
    h1: "80 Attendance Calculator",
    intro: "Use this calculator when your college, subject, or faculty requires 80% attendance instead of the usual 75%.",
    target: "80",
    sections: [
      "An 80% rule gives you less bunk buffer than 75%, so checking before you miss class is more important.",
      "Enter your subject numbers and set the target to 80 to see the exact attendance shortage or safe bunk count.",
    ],
  },
  "bunk-calculator": {
    title: "Bunk Calculator",
    description: "Free bunk calculator to know how many classes you can miss without attendance shortage.",
    h1: "Bunk Calculator",
    intro: "Plan your bunks with actual math. Check how many classes you can miss while staying above your target attendance.",
    target: "75",
    sections: [
      "A bunk calculator works best when you calculate subject-wise attendance instead of relying on overall attendance.",
      "Use the safe bunk count as a buffer, not a challenge. Once you hit the borderline zone, attend first and bunk later.",
    ],
  },
  "attendance-shortage-calculator": {
    title: "Attendance Shortage Calculator",
    description: "Calculate attendance shortage and find how many consecutive classes you need to attend.",
    h1: "Attendance Shortage Calculator",
    intro: "Below target? This shortage calculator explains how many consecutive classes you need to attend to recover.",
    target: "75",
    sections: [
      "Attendance shortage happens when your attended classes are lower than the minimum required percentage.",
      "Recovery requires consecutive attendance because every new class increases both your attended count and total class count.",
    ],
  },
  "classes-needed-calculator": {
    title: "Classes Needed Calculator",
    description: "Find classes needed for 75 attendance or any target percentage using BunkSafe.",
    h1: "Classes Needed for Attendance Calculator",
    intro: "Find exactly how many upcoming classes you need to attend to reach 75%, 80%, or your custom target.",
    target: "75",
    sections: [
      "The classes needed number is not random. It solves how many future classes must be attended without another miss.",
      "If your result says 6 classes needed, it means the next 6 classes should be attended consecutively.",
    ],
  },
} as const

export type SeoPageSlug = keyof typeof SEO_PAGES
