interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 ${alignment}`}>
      {eyebrow && (
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-prism-accent-purple">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold md:text-4xl text-prism-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-prism-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
