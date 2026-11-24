export default function SectionHeading({ id, title, subtitle, light = false, className = '' }) {
  return (
    <div className={`mb-12 max-w-2xl md:mb-16 ${className}`}>
      <h2
        id={id}
        className={`text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-ink-soft'}`}>{subtitle}</p>
      )}
    </div>
  )
}
