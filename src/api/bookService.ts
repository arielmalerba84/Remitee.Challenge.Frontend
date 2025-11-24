
import axiosClient from "@/api/axiosClient";

export interface Book {
  id?: number;
  titulo: string;
  descripcion: string;
  añoPublicacion: number;
}

export interface PaginatedBooks {
  items: Book[];
  pageNumber: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface Filters {
  titulo?: string;
  descripcion?: string;
  añoPublicacion?: number;
}

const bookService = {
  getBooks: async (pageNumber: number, pageSize: number, filters?: Filters): Promise<PaginatedBooks> => {
    const params = new URLSearchParams({
      PageNumber: pageNumber.toString(),
      PageSize: pageSize.toString(),
    });
    if (filters?.titulo) params.append("titulo", filters.titulo);
    if (filters?.descripcion) params.append("descripcion", filters.descripcion);
    if (filters?.añoPublicacion !== undefined)
      params.append("añoPublicacion", filters.añoPublicacion.toString());

    const { data } = await axiosClient.get(`/Book/GetAllWithPagination?${params.toString()}`);
    return data;
  },

  createBook: async (book: Book): Promise<Book> => {
    const { data } = await axiosClient.post("/Book/AddBook", book);
    return data;
  },
};

export default bookService;
