export default function SectionDivider({ flip = false, color = '#f9fafb', className = '' }) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
        <path
          d="M0,50 C360,10 720,70 1080,30 C1260,10 1380,40 1440,50 L1440,80 L0,80 Z"
          fill={color}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
