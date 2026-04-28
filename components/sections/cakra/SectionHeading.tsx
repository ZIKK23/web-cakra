type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="chip inline-flex rounded-full px-4 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-[#c5a059]">
        {eyebrow}
      </span>
      <h2 className="font-serif text-3xl leading-tight text-balance text-[#f4ebd0] sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-[#d6c8ad] sm:text-base">
        {description}
      </p>
    </div>
  );
}
