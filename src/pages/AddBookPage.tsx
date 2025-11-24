
import { useNavigate } from "react-router-dom";
import Layout from "@/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorBanner } from "../components/ErrorBanner";
import BookForm, { BookFormValues } from "../components/Book/BookForm";
import { useError } from "../context/ErrorContext";
import { useSuccess } from "../context/SucessContext";
import bookService from "../api/bookService";
import { validateBook } from "../components/Book/validations";

const AddBookPage = () => {
  const navigate = useNavigate();
  const { setError } = useError();
  const { setMessage } = useSuccess();

  const handleSubmit = async (
    values: BookFormValues,
    setFieldErrors: (errors: Record<string, string>) => void
  ) => {
    // Validación local
    const validation = await validateBook(values);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }

    // Convertir año a número para backend
    const añoNum = Number(values.añoPublicacion);

    try {
      await bookService.createBook({
        titulo: values.titulo,
        descripcion: values.descripcion,
        añoPublicacion: añoNum,
      });
      setMessage("Libro insertado correctamente 🎉");
      navigate("/");
    } catch (err: any) {
      const response = err?.response;
      if (response?.data?.errors) {
        // Backend -> errores por campo
        const errors: Record<string, string> = {};
        for (const errItem of response.data.errors) {
          const key = errItem.fieldName.charAt(0).toLowerCase() + errItem.fieldName.slice(1);
          errors[key] = errItem.description;
        }
        setFieldErrors(errors);
      } else {
        // Errores no estructurados o problemas de conexión
        setError(err?.message || "Error creando el libro");
      }
    }
  };

  return (
    <Layout>
      <ErrorBanner />
      <div className="flex flex-col items-center justify-start w-full mt-10">
        <Card className="w-full max-w-2xl p-10 shadow-2xl rounded-3xl bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Agregar nuevo libro</CardTitle>
          </CardHeader>
          <CardContent>
            <BookForm onSubmit={handleSubmit} onCancel={() => navigate("/")} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AddBookPage;
