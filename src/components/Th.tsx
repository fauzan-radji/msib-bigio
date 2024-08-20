import { twMerge } from "tailwind-merge";

interface ThProps {
  children: React.ReactNode;
  className?: string;
}

export default function Th({ children, className }: ThProps) {
  return (
    <th className={twMerge("px-2 py-2 text-start", className)}>{children}</th>
  );
}
