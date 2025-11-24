
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type SuccessContextType = {
  message: string | null;
  setMessage: (msg: string | null, duration?: number) => void;
  clearMessage: () => void;
};

const SuccessContext = createContext<SuccessContextType | undefined>(undefined);

export const SuccessProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessageState] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    if (!message) return;
    const id = window.setTimeout(() => setMessageState(null), 3000);
    setTimeoutId(id);
    return () => {
      window.clearTimeout(id);
      setTimeoutId(null);
    };
  }, [message]);

  const setMessage = (msg: string | null, duration?: number) => {
    setMessageState(msg);
    if (duration) {
      const id = window.setTimeout(() => setMessageState(null), duration);
      setTimeoutId(id);
    }
  };

  const clearMessage = () => {
    if (timeoutId) window.clearTimeout(timeoutId);
    setMessageState(null);
  };

  return (
    <SuccessContext.Provider value={{ message, setMessage, clearMessage }}>
      {children}
    </SuccessContext.Provider>
  );
};

export const useSuccess = () => {
  const context = useContext(SuccessContext);
  if (!context) throw new Error("useSuccess debe usarse dentro de SuccessProvider");
  return context;
};
