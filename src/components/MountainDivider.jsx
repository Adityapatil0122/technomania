export default function MountainDivider() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block" preserveAspectRatio="none"
        style={{ marginBottom: '-1px' }}>
        <path
          d="M0,120 L0,80
             L100,65 L200,75 L280,50 L370,65 L440,35 L520,55
             L600,40 L680,60 L760,30 L840,55 L920,40 L1000,60
             L1080,35 L1160,55 L1240,42 L1320,58 L1400,48 L1440,60 L1440,120 Z"
          fill="rgba(255,255,255,0.25)"
        />
        <path
          d="M0,120 L0,90
             L80,82 L170,92 L240,70 L330,82 L410,55 L490,75
             L570,60 L660,78 L740,48 L830,70 L910,52 L990,72
             L1070,50 L1150,68 L1240,55 L1320,70 L1390,62 L1440,72 L1440,120 Z"
          fill="rgba(255,255,255,0.5)"
        />
        <path
          d="M0,120 L0,100
             L60,96 L150,104 L220,85 L310,96 L390,72 L470,90
             L550,78 L640,92 L720,65 L810,85 L890,70 L970,88
             L1060,68 L1140,82 L1220,72 L1310,85 L1380,78 L1440,86 L1440,120 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
