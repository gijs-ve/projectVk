type ArrowIconProps = {
  className?: string;
};

const ArrowIcon = ({ className }: ArrowIconProps) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className={className}
    role="presentation"
  >
    <path
      d="M5 12h14m0 0-6-6m6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
