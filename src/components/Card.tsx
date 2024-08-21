import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        "mt-8 rounded-xl border border-black/10 px-8 py-6 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
