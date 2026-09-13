import type { Technology } from '../types/technology'

interface YourStackProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  const count = stack.length

  return (
    <aside className="sticky top-20 h-fit rounded-xl2 border border-gray-100 bg-white p-5 shadow-card">
      <h3 className="text-base font-bold text-ink">Your Stack</h3>
      <p className="mt-1 text-xs text-gray-400">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {count === 0 ? (
          <p className="rounded-lg border border-dashed border-gray-200 py-8 text-center text-sm text-gray-400">
            Your stack is empty.
          </p>
        ) : (
          stack.map((tech) => (
            <div key={tech.id} className="flex items-center gap-3 rounded-lg border border-gray-100 p-3">
              <img src={tech.icon} alt={tech.name} className="h-8 w-8 flex-shrink-0 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="flex-shrink-0 text-gray-400 transition hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {count > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  )
}
