import type { Technology } from '../types/technology'
import TechnologyCard from './TechnologyCard.tsx'

interface TechnologyGridProps {
  technologies: Technology[]
  stackIds: Set<string>
  onAdd: (tech: Technology) => void
}

export default function TechnologyGrid({ technologies, stackIds, onAdd }: TechnologyGridProps) {
  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
        Explore the <span className="text-gradient">Technologies</span>
      </h2>
      <p className="mt-2 max-w-xl text-sm text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            isAdded={stackIds.has(tech.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  )
}
