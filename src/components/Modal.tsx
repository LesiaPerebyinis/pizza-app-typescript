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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
   
      <div
        className="bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-xl max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#4a0d0b] hover:text-[#b66d3e]"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );

}
