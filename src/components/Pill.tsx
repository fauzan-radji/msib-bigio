import { twMerge } from "tailwind-merge";

interface PillProps {
  children: React.ReactNode;
  type?: "default" | "warning" | "success";
  className?: string;
}

export default function Pill({
  children,
  type = "default",
  className,
}: PillProps) {
  return (
    <span
      className={twMerge(
        "rounded-full px-4 py-2 text-xs",
        type === "default"
          ? "bg-slate-200 text-slate-800"
          : type === "warning"
            ? "bg-warning-200 text-warning-800"
            : "bg-success-200 text-success-800",
        className,
      )}
    >
      {children}
    </span>
  );
}
