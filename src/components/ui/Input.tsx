export default function Input({
  placeholder,
  type,
  className,
}: {
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`w-full h-10 rounded-md bg-transparent border border-border focus:outline-none text-sm px-2 ${className}`}
    />
  );
}
