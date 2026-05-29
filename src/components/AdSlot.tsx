interface Props {
  label?: string
}

export default function AdSlot({ label = "Future sponsor space" }: Props) {
  return (
    <aside className="mx-auto max-w-3xl px-4 py-6" aria-label={label}>
      <div className="rounded-2xl border border-dashed border-gray-200 bg-white px-5 py-6 text-center text-xs font-medium text-gray-400">
        {label} · non-intrusive placement reserved
      </div>
    </aside>
  )
}
