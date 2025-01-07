// modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 overflow-y-auto pt-20">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg relative max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white"
        >
          ✕
        </button>
        <div className="modal-children-container p-3">{children}</div>
      </div>
    </div>
  );
}
