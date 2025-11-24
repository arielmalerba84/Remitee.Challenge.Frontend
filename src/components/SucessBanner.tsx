// src/components/SuccessBanner.tsx
import { useSuccess } from "../context/SucessContext";
import { useState, useEffect } from "react";

export const SuccessBanner = () => {
  const { message, clearMessage } = useSuccess();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2800);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-4 rounded shadow z-50 transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
    >
      {message}
      <button className="ml-4 font-bold" onClick={clearMessage}>
        X
      </button>
    </div>
  );
};
