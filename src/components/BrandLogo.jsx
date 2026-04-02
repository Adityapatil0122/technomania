import { company } from '../data/company';

const sizeMap = {
  nav: {
    wrapper: 'gap-3',
    badge: 'h-11 w-11 sm:h-12 sm:w-12',
    title: 'text-[0.92rem] sm:text-[1.02rem] tracking-[0.16em]',
    subtitle: 'text-[0.58rem] sm:text-[0.64rem] tracking-[0.48em]',
  },
  hero: {
    wrapper: 'gap-4 sm:gap-5',
    badge: 'h-[4.5rem] w-[4.5rem] sm:h-[5.5rem] sm:w-[5.5rem] md:h-24 md:w-24',
    title: 'text-[1.5rem] sm:text-[1.9rem] md:text-[2.1rem] tracking-[0.18em]',
    subtitle: 'text-[0.72rem] sm:text-[0.82rem] md:text-[0.9rem] tracking-[0.62em]',
  },
  footer: {
    wrapper: 'gap-3',
    badge: 'h-12 w-12',
    title: 'text-[1rem] tracking-[0.16em]',
    subtitle: 'text-[0.62rem] tracking-[0.46em]',
  },
  preloader: {
    wrapper: 'gap-4',
    badge: 'h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20',
    title: 'text-[1.2rem] sm:text-[1.45rem] tracking-[0.18em]',
    subtitle: 'text-[0.68rem] sm:text-[0.74rem] tracking-[0.58em]',
  },
};

export default function BrandLogo({
  alt = company.name,
  className = '',
  layout = 'horizontal',
  size = 'nav',
  theme = 'onDark',
}) {
  const config = sizeMap[size] ?? sizeMap.nav;
  const isStacked = layout === 'stacked';
  const titleTone = theme === 'onLight' ? 'text-primary' : 'text-secondary';
  const subtitleTone = theme === 'onLight' ? 'text-primary-light' : 'text-white/76';
  const badgeTone = theme === 'onLight'
    ? 'bg-white shadow-[0_18px_40px_rgba(7,41,66,0.12)] ring-1 ring-primary/10'
    : 'bg-white/95 shadow-[0_20px_40px_rgba(4,27,44,0.28)] ring-1 ring-white/12';

  return (
    <div
      className={`inline-flex ${isStacked ? 'flex-col items-center text-center' : 'items-center'} ${config.wrapper} ${className}`.trim()}
      aria-label={alt}
    >
      <span className={`flex shrink-0 items-center justify-center rounded-[28%] ${badgeTone} ${config.badge}`}>
        <img
          src={company.mark}
          alt={alt}
          className="block h-[72%] w-[72%] object-contain"
        />
      </span>

      <span className={`flex min-w-0 flex-col ${isStacked ? 'items-center' : 'items-start'}`}>
        <span className={`font-heading font-black uppercase leading-none ${titleTone} ${config.title}`}>
          {company.brandTitle}
        </span>
        <span className={`mt-1 font-heading font-semibold uppercase leading-none ${subtitleTone} ${config.subtitle}`}>
          {company.brandSubtitle}
        </span>
      </span>
    </div>
  );
}
