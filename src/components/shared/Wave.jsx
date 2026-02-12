/**
 * Single subtle wave divider - Deel-style: clean, minimal, one curve
 * Used only above footer for content → dark section transition
 */
export function Wave() {
  return (
    <div className="absolute left-0 right-0 top-0 w-full overflow-hidden pointer-events-none" style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wave-footer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave-footer)"
          d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
