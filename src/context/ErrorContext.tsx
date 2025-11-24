
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type ErrorContextType = {
  error: string | null;
  setError: (msg: string | null) => void;
  clearError: () => void;
};

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

// setter global accesible por axiosClient
let globalSetter: ((msg: string | null) => void) | null = null;
export const getErrorSetter = () => globalSetter;

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setErrorState] = useState<string | null>(null);

  useEffect(() => {
    globalSetter = setErrorState;
    return () => {
      globalSetter = null;
    };
  }, []);

  const setError = (msg: string | null) => setErrorState(msg);
  const clearError = () => setErrorState(null);

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) throw new Error("useError debe usarse dentro de ErrorProvider");
  return context;
};
