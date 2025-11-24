// src/components/BookList/BookList.tsx
import { useBooks } from "../../hooks/useBooks";
import BookFilter from "./BookFilter";
import BookTable from "./BookTable";
import Pagination from "./Pagination";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export const BookList = () => {
  const { books, loading, pageNumber, totalPages, goToPage, filters, applyFilters } =
    useBooks();

  return (
    <div className="flex justify-center p-6 min-h-screen bg-gray-900">
      <Card className="w-full max-w-5xl p-6 shadow-lg rounded-2xl bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Libros</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <BookFilter filters={filters} onChange={applyFilters} />
          {loading && <p className="text-white text-center">Cargando...</p>}
          {!loading && <BookTable books={books} />}
          <div className="flex justify-center">
            <Pagination page={pageNumber} totalPages={totalPages} onChange={goToPage} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
