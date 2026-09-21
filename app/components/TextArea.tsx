interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function TextArea({
  value,
  onChange,
  placeholder = "Enter your text",
  className = "",
}: TextAreaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full h-[175px] bg-[var(--color-dark-secondary)] border-2 border-[var(--color-accent)] rounded-xl p-5 text-[var(--color-light)] font-medium resize-none focus:outline-none focus:border-[var(--color-primary)] ${className}`}
    />
  );
}
