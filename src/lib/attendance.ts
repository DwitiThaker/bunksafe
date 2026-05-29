import type { AttendanceStatus, SubjectResult } from "@/types";

const MESSAGES: Record<AttendanceStatus, string[]> = {
  safe: [
    "You can skip {skip} more {name} classes safely. Don't start celebrating too hard.",
    "{name} attendance is healthy. {skip} guilt-free absences banked. Spend them wisely.",
    "Solid work on {name}. You've earned {skip} skips — your future lazy self is grateful.",
    "{skip} free passes for {name}. Just don't use them all on the same week.",
    "You're comfortably above target in {name}. {skip} skips available. Stay humble.",
  ],
  borderline: [
    "You can afford {skip} more skip(s) for {name}, but you're walking a tightrope. One wrong move.",
    "{name} is teetering at the edge. {skip} slip(s) allowed. That's it. Not a single class more.",
    "Technically safe for {name} with {skip} skip(s) to spare. Technically. That word is doing a lot of heavy lifting here.",
    "The math says {skip} skip(s) for {name}. The math is not your therapist though.",
    "No skips left for {name}. Your attendance is basically a house of cards — don't breathe too hard.",
  ],
  danger: [
    "Attend the next {needed} {name} classes to reach {target}%. Survival mode: ON.",
    "{name} is flashing red. You need {needed} consecutive classes. No bunking. No excuses.",
    "Your {name} attendance is giving 'academic probation' energy. Attend {needed} more. Immediately.",
    "{needed} straight {name} classes stand between you and 75%. Time to discover punctuality.",
    "Red alert for {name}. Attend {needed} in a row and maybe — MAYBE — you'll be okay.",
  ],
  critical: [
    "Attend the next {needed} {name} classes to reach {target}%. This is not a drill. This is your future.",
    "{name} attendance: {pct}%. That's rough. You need {needed} consecutive classes. Start yesterday.",
    "Your {name} attendance is basically a ghost story. {needed} classes in a row — no exceptions.",
    "Critical condition on {name}. {needed} classes needed to see the light at {target}%. Go.",
    "If {name} attendance were a patient, it would be in the ICU. Attend {needed} classes. Stat.",
  ],
  no_data: [
    "No classes held for {name} yet. Blank slate — try not to ruin it on day one.",
    "{name} hasn't started yet. Infinite potential. Limited time to squander it.",
  ],
};

function pickMessage(
  templates: string[],
  vars: Record<string, string | number>,
): string {
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ""));
}

export function calculateAttendance(
  id: string,
  subjectName: string,
  totalClasses: number,
  attendedClasses: number,
  targetPercentage = 75,
): SubjectResult {
  const name = subjectName.trim() || "this subject";

  if (totalClasses === 0) {
    return {
      id,
      subjectName: name,
      totalClasses: 0,
      attendedClasses: 0,
      currentPercentage: 0,
      targetPercentage,
      canSkip: 0,
      classesNeeded: 0,
      projectedAfterAttend: 100,
      projectedAfterMiss: 0,
      trend: "steady",
      explanation: `Once ${name} starts, enter classes held and attended to calculate your attendance percentage.`,
      status: "no_data",
      message: pickMessage(MESSAGES.no_data, { name }),
    };
  }

  const target = targetPercentage / 100;
  // Formula: current % = (attended / total) × 100
  const currentPercentage = (attendedClasses / totalClasses) * 100;

  let canSkip = 0;
  let classesNeeded = 0;

  if (currentPercentage >= targetPercentage) {
    // Solve: attended / (total + n) >= target  →  n ≤ (attended − target×total) / target
    canSkip = Math.max(
      0,
      Math.floor((attendedClasses - target * totalClasses) / target),
    );
  } else {
    // Solve: (attended + n) / (total + n) >= target  →  n ≥ (target×total − attended) / (1 − target)
    classesNeeded =
      target < 1
        ? Math.ceil((target * totalClasses - attendedClasses) / (1 - target))
        : 9999;
  }

  const buffer = currentPercentage - targetPercentage;
  const status: AttendanceStatus =
    buffer >= 10
      ? "safe"
      : buffer >= 0
        ? "borderline"
        : buffer >= -10
          ? "danger"
          : "critical";

  const projectedAfterAttend =
    ((attendedClasses + 1) / (totalClasses + 1)) * 100;
  const projectedAfterMiss = (attendedClasses / (totalClasses + 1)) * 100;
  const trend =
    classesNeeded > 0 ? "rising" : canSkip > 0 ? "steady" : "falling";

  const explanation =
    classesNeeded > 0
      ? `You need to attend the next ${classesNeeded} consecutive ${classesNeeded === 1 ? "class" : "classes"} to reach ${targetPercentage}% attendance.`
      : canSkip > 0
        ? `You can miss ${canSkip} ${canSkip === 1 ? "class" : "classes"} and still stay at or above ${targetPercentage}% attendance.`
        : `You are just at the ${targetPercentage}% line. Attend the next class before planning a bunk.`;

  const message = pickMessage(MESSAGES[status], {
    name,
    pct: currentPercentage.toFixed(1),
    target: targetPercentage.toFixed(0),
    skip: canSkip,
    needed: classesNeeded,
  });

  return {
    id,
    subjectName: name,
    totalClasses,
    attendedClasses,
    currentPercentage: Math.round(currentPercentage * 100) / 100,
    targetPercentage,
    canSkip,
    classesNeeded,
    projectedAfterAttend: Math.round(projectedAfterAttend * 100) / 100,
    projectedAfterMiss: Math.round(projectedAfterMiss * 100) / 100,
    trend,
    explanation,
    status,
    message,
  };
}

export const STATUS_CONFIG = {
  safe: {
    label: "Safe",
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-200",
    pct: "text-green-600",
  },
  borderline: {
    label: "Borderline",
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    border: "border-yellow-200",
    pct: "text-yellow-600",
  },
  danger: {
    label: "Danger",
    bg: "bg-orange-100",
    text: "text-orange-700",
    border: "border-orange-200",
    pct: "text-orange-600",
  },
  critical: {
    label: "Critical",
    bg: "bg-red-100",
    text: "text-red-700",
    border: "border-red-200",
    pct: "text-red-600",
  },
  no_data: {
    label: "No Data",
    bg: "bg-gray-100",
    text: "text-gray-600",
    border: "border-gray-200",
    pct: "text-gray-500",
  },
} as const;
