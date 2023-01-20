export const Bar: React.FC<{ animationDuration: number; progress: number }> = ({
  animationDuration,
  progress,
}) => (
  <div
    className="bg-main h-1 w-full left-0 top-0 fixed z-50"
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    }}
  ></div>
);
