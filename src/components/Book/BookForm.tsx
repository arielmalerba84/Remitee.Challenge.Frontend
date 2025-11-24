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

    // limpiar error al editar
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

  const baseInput = "w-full mt-1 p-2 rounded bg-gray-700 text-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* TÍTULO */}
      <div>
        <label className="block text-sm font-medium">Título</label>
        <input
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          className={`${baseInput} ${fieldErrors.titulo ? "border border-red-400" : "border border-gray-600"}`}
        />
        {fieldErrors.titulo && <p className="text-red-400 text-sm mt-1">{fieldErrors.titulo}</p>}
      </div>

      {/* AUTOR */}
      <div>
        <label className="block text-sm font-medium">Autor</label>
        <input
          name="autor"
          value={values.autor}
          onChange={handleChange}
          className={`${baseInput} border border-gray-600`}
        />
        {fieldErrors.autor && <p className="text-red-400 text-sm mt-1">{fieldErrors.autor}</p>}
      </div>

      {/* DESCRIPCIÓN */}
      <div>
        <label className="block text-sm font-medium">Descripción</label>
        <textarea
          name="descripcion"
          value={values.descripcion}
          onChange={handleChange}
          rows={4}
          className={`${baseInput} ${fieldErrors.descripcion ? "border border-red-400" : "border border-gray-600"}`}
        />
        {fieldErrors.descripcion && <p className="text-red-400 text-sm mt-1">{fieldErrors.descripcion}</p>}
      </div>

      {/* AÑO (texto, NO number) */}
      <div>
        <label className="block text-sm font-medium">Año de publicación</label>
        <input
          name="añoPublicacion"
          type="text"   // ← pedido
          value={values.añoPublicacion}
          onChange={handleChange}
          className={`${baseInput} ${fieldErrors.añoPublicacion ? "border border-red-400" : "border border-gray-600"}`}
        />
        {fieldErrors.añoPublicacion && <p className="text-red-400 text-sm mt-1">{fieldErrors.añoPublicacion}</p>}
      </div>

      {/* BOTONES */}
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          disabled={submitting}
          className="px-4 py-2 rounded bg-gray-600 text-white"
        >
          Cancelar
        </button>

        <button
          type="submit"
          disabled={submitting}
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          {submitting ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
