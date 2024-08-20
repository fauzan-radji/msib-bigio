import { twMerge } from "tailwind-merge";

interface PaginationProps {
  className?: string;
}

export default function PaginationButton({
  className,
  ...rest
}: PaginationProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        "flex aspect-square w-8 items-center justify-center rounded bg-secondary/50 text-sm text-white",
        className,
      )}
      {...rest}
    />
  );
}
