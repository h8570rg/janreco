const getTextBouncingStyle = (i: number) =>
  ({
    animationDelay: `${i * 0.1}s`,
  } as React.CSSProperties);

export const BouncingText = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  return (
    <div className={className}>
      {text.split("").map((t, i) => (
        <span
          key={i}
          className="inline-block animate-waviy"
          style={getTextBouncingStyle(i)}
        >
          {t}
        </span>
      ))}
    </div>
  );
};