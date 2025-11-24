// src/components/Book/BookForm.tsx
import React, { useState } from "react";

export type BookFormValues = {
  titulo: string;
  autor: string;
  descripcion: string;
  añoPublicacion: string;
};

type Props = {
  onSubmit: (values: BookFormValues, setFieldErrors: (e: Record<string, string>) => void) => Promise<void>;
  onCancel?: () => void;
};

const BookForm = ({ onSubmit, onCancel }: Props) => {
  const [values, setValues] = useState<BookFormValues>({
    titulo: "",
    autor: "",
    descripcion: "",
    añoPublicacion: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // limpiar error del campo al editar
    setFieldErrors((fe) => {
      const { [name]: _, ...rest } = fe;
      return rest;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit(values, setFieldErrors);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Título</label>
        <input
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          className={`w-full mt-1 p-2 rounded ${fieldErrors.titulo ? "border border-red-400" : "border border-gray-600"}`}
        />
        {fieldErrors.titulo && <p className="text-red-400 text-sm mt-1">{fieldErrors.titulo}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Autor</label>
        <input
          name="autor"
          value={values.autor}
          onChange={handleChange}
          className="w-full mt-1 p-2 rounded border border-gray-600"
        />
        {fieldErrors.autor && <p className="text-red-400 text-sm mt-1">{fieldErrors.autor}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Descripción</label>
        <textarea
          name="descripcion"
          value={values.descripcion}
          onChange={handleChange}
          className={`w-full mt-1 p-2 rounded ${fieldErrors.descripcion ? "border border-red-400" : "border border-gray-600"}`}
          rows={4}
        />
        {fieldErrors.descripcion && <p className="text-red-400 text-sm mt-1">{fieldErrors.descripcion}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Año de publicación</label>
        <input
          name="añoPublicacion"
          type="number"
          value={values.añoPublicacion}
          onChange={handleChange}
          className={`w-full mt-1 p-2 rounded ${fieldErrors.añoPublicacion ? "border border-red-400" : "border border-gray-600"}`}
        />
        {fieldErrors.añoPublicacion && <p className="text-red-400 text-sm mt-1">{fieldErrors.añoPublicacion}</p>}
      </div>

      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-600 text-white"
          disabled={submitting}
        >
          Cancelar
        </button>
        <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white" disabled={submitting}>
          {submitting ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
