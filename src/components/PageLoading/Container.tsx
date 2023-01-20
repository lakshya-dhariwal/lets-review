export const Container: React.FC<{
  animationDuration: number;
  children: any;
  isFinished: boolean;
}> = ({ animationDuration, children, isFinished }) => (
  <div
    className="pointer-events-none"
    style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);
