interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={`glass rounded-2xl ${
        hover
          ? "transition-all duration-300 hover:bg-glass-hover hover:border-white/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-prism-accent-purple/5"
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
