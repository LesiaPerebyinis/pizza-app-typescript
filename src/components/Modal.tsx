import { createPortal } from "react-dom";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: IModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-10 w-screen h-screen bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white flex flex-col items-center p-6 rounded-lg shadow-xl w-full max-w-[90%] sm:max-w-md relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-dark hover:text-accent"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );

}
