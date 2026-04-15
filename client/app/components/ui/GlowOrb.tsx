type GlowOrbProps = {
  className?: string;
  color?: string;
  size?: string;
};

const GlowOrb = ({
  className = "",
  color = "rgba(224, 177, 90, 0.08)",
  size = "400px",
}: GlowOrbProps) => (
  <div
    className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    style={{
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      width: size,
      height: size,
    }}
    aria-hidden
  />
);

export default GlowOrb;
