"use client"
import { useState, useEffect } from "react"
import type { SubjectResult } from "@/types"
import Calculator from "@/components/Calculator"
import SubjectGrid from "@/components/SubjectGrid"

const STORAGE_KEY = "bunksafe_subjects"

interface Props {
  initialTarget?: string
}

export default function ClientShell({ initialTarget }: Props) {
  const [subjects, setSubjects] = useState<SubjectResult[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    window.setTimeout(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) setSubjects(JSON.parse(saved))
      } catch {
        // ignore malformed storage
      }
      setHydrated(true)
    }, 0)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subjects))
  }, [subjects, hydrated])

  function addSubject(result: SubjectResult) {
    setSubjects(prev => [result, ...prev])
  }

  function removeSubject(id: string) {
    setSubjects(prev => prev.filter(s => s.id !== id))
  }

  function clearAllSubjects() {
    setSubjects([])
  }

  return (
    <>
      <Calculator onAddSubject={addSubject} initialTarget={initialTarget} />
      {hydrated && subjects.length > 0 && (
        <SubjectGrid
          subjects={subjects}
          onRemove={removeSubject}
          onClearAll={clearAllSubjects}
        />
      )}
    </>
  )
}
