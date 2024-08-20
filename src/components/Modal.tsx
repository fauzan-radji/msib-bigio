import { FaTimes } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  className?: string;
}

export default function Modal({
  children,
  isOpen,
  close,
  className,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  return (
    isOpen && (
      <div
        ref={overlayRef}
        className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur"
        onClick={(e) => {
          if (e.target !== overlayRef.current) return;

          close();
        }}
      >
        <div
          className={twMerge(
            "relative w-full max-w-md rounded-md bg-white px-8 py-6 shadow",
            className,
          )}
        >
          <button
            className="absolute right-6 top-6 p-2 hover:text-danger-500"
            onClick={close}
          >
            <FaTimes />
          </button>

          {children}
        </div>
      </div>
    )
  );
}
