export type AttendanceStatus = "safe" | "borderline" | "danger" | "critical" | "no_data"

export interface SubjectResult {
  id: string
  subjectName: string
  totalClasses: number
  attendedClasses: number
  currentPercentage: number
  targetPercentage: number
  canSkip: number
  classesNeeded: number
  projectedAfterAttend: number
  projectedAfterMiss: number
  trend: "rising" | "steady" | "falling"
  explanation: string
  status: AttendanceStatus
  message: string
}

export interface SubjectFormData {
  subjectName: string
  totalClasses: string
  attendedClasses: string
  targetPercentage: string
}
