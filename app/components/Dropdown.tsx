import Image from "next/image";
import expandDown from "@/public/assets/expand-down.svg"

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label: string;
  className?: string;
}

export default function Dropdown({
  value,
  onChange,
  options,
  label,
  className = "",
}: DropdownProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <p className="text-[var(--color-light)] font-medium text-base whitespace-nowrap">
        {label}
      </p>
      <div className="relative max-w-[80px]">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none bg-transparent text-[var(--color-light)] font-medium text-base pr-8 focus:outline-none cursor-pointer w-full overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {options.map((option) => (
            <option key={option} value={option} className="bg-[var(--color-dark-secondary)]">
              {option}
            </option>
          ))}
        </select>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src={expandDown}
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
