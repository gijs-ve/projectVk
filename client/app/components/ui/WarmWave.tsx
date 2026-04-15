type WarmWaveProps = {
  flip?: boolean;
  className?: string;
  color?: string;
};

const WarmWave = ({ flip, className = "", color = "var(--color-brand-bg)" }: WarmWaveProps) => (
  <div
    className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    aria-hidden
  >
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="block h-[40px] w-full sm:h-[56px] lg:h-[72px]"
    >
      <path
        d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,80 L0,80 Z"
        fill={color}
      />
      <path
        d="M0,52 C200,68 400,32 720,52 C1040,72 1240,28 1440,52 L1440,80 L0,80 Z"
        fill={color}
        opacity="0.5"
      />
    </svg>
  </div>
);

export default WarmWave;
