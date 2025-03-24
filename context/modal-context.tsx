"use client";

import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }
  return context;
} 