export default function Badge({
  text,
  className,
  variant = "default",
}: {
  text: string;
  variant?: "default" | "outline";
  className?: string;
}) {
  const extraClass = {
    default: "bg-primary text-primary-foreground text-xs px-2 py-1 rounded-xl",
    outline: "text-xs px-2 py-1 rounded-xl border",
  };

  return (
    <p
      className={`${extraClass[variant] || extraClass.default} ${
        className ? className : ""
      }`}
    >
      {text}
    </p>
  );
}
