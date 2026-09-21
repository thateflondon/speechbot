interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles = "rounded-xl font-medium text-base h-[52px] flex items-center justify-center";
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-light)] shadow-[0px_4px_8px_0px_rgba(28,27,67,0.3)]",
    secondary: "bg-[var(--color-dark-secondary)] text-[var(--color-light)]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
