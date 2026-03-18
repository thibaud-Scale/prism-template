import GlassCard from "./GlassCard";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard
      hover
      as="article"
      className="group overflow-hidden"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-prism-accent-purple/30 via-prism-accent-blue/20 to-prism-accent-teal/30 transition-transform duration-500 group-hover:scale-105" />
        {/* Placeholder pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
        </div>
        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-prism-bg to-transparent" />
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-prism-text-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-prism-text-secondary leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-prism-text-muted border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
