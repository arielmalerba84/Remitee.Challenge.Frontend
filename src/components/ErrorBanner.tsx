// src/components/ErrorBanner.tsx
import { useEffect, useState } from "react";
import { useError } from "../context/ErrorContext";

export const ErrorBanner = () => {
  const { error, clearError } = useError();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setVisible(true);
      const t = setTimeout(() => {
        setVisible(false);
        clearError();
      }, 5000); // visible 5s
      return () => clearTimeout(t);
    }
  }, [error, clearError]);

  if (!error) return null;

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white p-4 rounded shadow z-50 transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex-1">{error}</div>
        <button onClick={() => { clearError(); setVisible(false); }} className="font-bold">X</button>
      </div>
    </div>
  );
};
