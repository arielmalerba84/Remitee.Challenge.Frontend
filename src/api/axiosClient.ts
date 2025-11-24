
import axios from "axios";
import { getErrorSetter } from "../context/ErrorContext";

const axiosClient = axios.create({
  baseURL: "https://localhost:7132/api", // o la URL que realmente funcione
  headers: { "Content-Type": "application/json" },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    try {
      const setError = getErrorSetter();
      const backendMsg =
        error?.response?.data?.message ||
        error?.response?.data?.title ||
        error?.response?.data?.errors?.[0]?.description ||
        error?.message;

      if (setError) setError(String(backendMsg ?? "Error inesperado"));
    } catch (e) {
      // no romper el flujo si algo sale mal aquí
      console.error("Error al setear el error global:", e);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
