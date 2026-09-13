import type { Technology } from '../types/technology'

interface TechnologyCardProps {
  tech: Technology
  isAdded: boolean
  onAdd: (tech: Technology) => void
}

const BADGE_STYLES: Record<string, string> = {
  Popular: 'bg-blue-50 text-blue-600',
  Versatile: 'bg-emerald-50 text-emerald-600',
  Fast: 'bg-orange-50 text-orange-600',
  Standard: 'bg-emerald-50 text-emerald-600',
  'Top SQL': 'bg-blue-50 text-blue-600',
  Cache: 'bg-pink-50 text-pink-600',
  Ubiquitous: 'bg-amber-50 text-amber-600',
  Essential: 'bg-blue-50 text-blue-600',
  Robust: 'bg-orange-50 text-orange-600',
  Modern: 'bg-cyan-50 text-cyan-600',
  Containers: 'bg-gray-100 text-gray-600',
}

export default function TechnologyCard({ tech, isAdded, onAdd }: TechnologyCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } = tech
  const badgeClass = BADGE_STYLES[badge] ?? 'bg-pink-50 text-pink-600'

  return (
    <div className="flex flex-col rounded-xl2 border border-gray-100 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <img src={icon} alt={`${name} logo`} className="h-10 w-10 object-contain" loading="lazy" />
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeClass}`}>
          {badge}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-ink">{name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-gray-500">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium text-gray-600">{category}</span>
        <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium text-gray-600">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-ink">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b">
            <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
          </svg>
          {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? 'mt-4 w-full cursor-not-allowed rounded-lg bg-gray-200 py-2.5 text-sm font-semibold text-gray-500'
            : 'mt-4 w-full rounded-lg bg-ink py-2.5 text-sm font-semibold text-white transition hover:opacity-85'
        }
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}
