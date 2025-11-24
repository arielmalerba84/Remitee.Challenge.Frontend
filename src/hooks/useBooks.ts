
import { useEffect, useState, useRef } from "react";
import bookService, { type Book, type Filters } from "@/api/bookService";
import { useError } from "../context/ErrorContext";

export const useBooks = (pageSize: number = 10) => {
  const { setError, clearError } = useError();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState<Filters>({});

  const debounceRef = useRef<number | null>(null);

  const fetchBooks = async (p = pageNumber, f = filters) => {
    try {
      clearError();
      setLoading(true);
      const resp = await bookService.getBooks(p, pageSize, f);
      setBooks(resp.items);
      setTotalPages(Math.max(1, Math.ceil(resp.totalCount / pageSize)));
    } catch (err: any) {
      setError(err?.message || "Error cargando libros");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // debounce for filters/page changes
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => fetchBooks(pageNumber, filters), 250);
    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, filters]);

  return {
    books,
    loading,
    pageNumber,
    totalPages,
    filters,
    setFilters,
    fetchBooks,
    goToPage: (page: number) => {
      if (page < 1 || page > totalPages) return;
      setPageNumber(page);
    },
    applyFilters: (newFilters: Filters) => {
      setFilters(newFilters);
      setPageNumber(1);
    },
  };
};
