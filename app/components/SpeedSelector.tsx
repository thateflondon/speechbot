interface SpeedSelectorProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
}

export default function SpeedSelector({
  value,
  onChange,
  options,
  className = "",
}: SpeedSelectorProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-2.5 py-2 rounded-lg font-medium text-sm transition-colors ${
            value === option
              ? "bg-[var(--color-dark-primary)] text-[var(--color-light)]"
              : "text-[var(--color-light)] hover:bg-[var(--color-dark-primary)]/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
