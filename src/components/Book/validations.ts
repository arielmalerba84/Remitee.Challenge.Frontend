
export interface BookValidationResult {
  isValid: boolean;
  errors: {
    titulo?: string;
    descripcion?: string;
    añoPublicacion?: string;
  };
}

export const validateBook = async (data: {
  titulo: string;
  descripcion: string;
  añoPublicacion: string; // string para input
}): Promise<BookValidationResult> => {
  const errors: { titulo?: string; descripcion?: string; añoPublicacion?: string } = {};

  // Título: obligatorio y máximo 100 caracteres
  if (!data.titulo?.trim()) {
    errors.titulo = "El campo Título es obligatorio.";
  } else if (data.titulo.trim().length > 100) {
    errors.titulo = "El campo Título no debe superar los 100 caracteres.";
  }

  // Descripción: obligatorio y máximo 150 caracteres
  if (!data.descripcion?.trim()) {
    errors.descripcion = "El campo Descripción es obligatorio.";
  } else if (data.descripcion.trim().length > 150) {
    errors.descripcion = "El campo Descripción no debe superar los 150 caracteres.";
  }

  // Año de publicación: obligatorio y <= año actual
  const añoNum = Number(data.añoPublicacion);
  if (!data.añoPublicacion?.trim()) {
    errors.añoPublicacion = "El año de publicación es obligatorio.";
  } else if (isNaN(añoNum)) {
    errors.añoPublicacion = "El año de publicación debe ser un número válido.";
  } else if (añoNum > new Date().getFullYear()) {
    errors.añoPublicacion = `El año de publicación no puede ser mayor a ${new Date().getFullYear()}`;
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};
