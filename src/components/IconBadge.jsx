export default function IconBadge({
  icon: Icon,
  size = 'md',
  tone = 'primary',
  className = '',
  iconClassName = '',
  weight = 'duotone',
}) {
  const sizes = {
    xs: 'w-8 h-8 rounded-xl text-[0.95rem]',
    sm: 'w-10 h-10 rounded-xl text-base',
    md: 'w-12 h-12 rounded-2xl text-[1.15rem]',
    lg: 'w-14 h-14 rounded-[1.35rem] text-[1.45rem]',
    xl: 'w-16 h-16 rounded-[1.55rem] text-[1.85rem]',
  };

  const tones = {
    primary: 'bg-primary/12 text-primary border border-primary/15 shadow-[0_12px_30px_rgba(21,153,70,0.14)]',
    light: 'bg-white text-primary border border-primary/12 shadow-[0_12px_30px_rgba(21,153,70,0.12)]',
    muted: 'bg-gray-50 text-primary border border-gray-100',
    dark: 'bg-white/10 text-primary-light border border-white/12 backdrop-blur-sm',
    secondary: 'bg-secondary/18 text-primary border border-primary/10 shadow-[0_12px_30px_rgba(21,153,70,0.12)]',
  };

  return (
    <span
      className={[
        'inline-flex items-center justify-center shrink-0 transition-transform duration-300',
        sizes[size] || sizes.md,
        tones[tone] || tones.primary,
        className,
      ].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <Icon className={['w-[1em] h-[1em]', iconClassName].filter(Boolean).join(' ')} weight={weight} />
    </span>
  );
}
