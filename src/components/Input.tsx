import Editor from "./Editor";
import { twMerge } from "tailwind-merge";

// TODO: add type badge input and file input
interface InputProps {
  className?: string;
  label: string;
  placeholder?: string;
  type?: "text" | "select" | "textarea" | "rich";
  children?: React.ReactNode;
}
export default function Input({
  className,
  label,
  placeholder,
  type = "text",
  children,
}: InputProps) {
  return (
    <label className={twMerge("flex flex-col gap-2", className)}>
      <span className="font-bold">{label}</span>

      {type === "text" && (
        <input
          className="w-full rounded-md bg-black/10 px-4 py-2 text-black outline-black/50 focus:outline"
          placeholder={placeholder || label}
        />
      )}
      {type === "textarea" && (
        <textarea
          className="w-full resize-none rounded-md bg-black/10 px-4 py-2 text-black outline-black/50 focus:outline"
          rows={4}
          placeholder={placeholder || label}
        />
      )}
      {type === "select" && (
        <select className="w-full rounded-md bg-black/10 px-4 py-2 text-black outline-black/50 focus:outline">
          {placeholder && (
            <option value="" defaultChecked>
              {placeholder}
            </option>
          )}
          {children}
        </select>
      )}
      {type === "rich" && <Editor />}
    </label>
  );
}
