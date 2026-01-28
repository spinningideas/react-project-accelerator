const LogoSimple = ({
  width = 34,
  height = 34,
  primaryColor = "#1976d2",
  secondaryColor = "#43a047",
  className,
  themeIsDark = false,
}: {
  width?: number;
  height?: number;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
  themeIsDark?: boolean;
}) => {
  if (themeIsDark === true) {
    primaryColor = "#bbdefb";
    secondaryColor = "#a5d6a7";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-blocks-icon lucide-blocks"
    >
      <path
        stroke={primaryColor}
        d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
      />
      <rect stroke={secondaryColor} x="14" y="2" width="8" height="8" rx="1" />
    </svg>
  );
};

export default LogoSimple;
