import { twMerge } from "tailwind-merge";

interface TdProps {
  children: React.ReactNode;
  className?: string;
}

export default function Td({ children, className }: TdProps) {
  return <td className={twMerge("px-2 py-1", className)}>{children}</td>;
}
