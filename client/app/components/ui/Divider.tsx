type DividerProps = {
  className?: string;
};

const Divider = ({ className = "" }: DividerProps) => (
  <div className={`flex items-center gap-4 ${className}`} aria-hidden>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    <div className="h-1.5 w-1.5 rotate-45 bg-brand-accent/40" />
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-border to-transparent" />
  </div>
);

export default Divider;
