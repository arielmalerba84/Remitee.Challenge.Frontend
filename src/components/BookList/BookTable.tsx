// src/components/BookList/BookTable.tsx
import type { Book } from "../../api/bookService";

interface Props {
  books: Book[];
}

const BookTable = ({ books }: Props) => {
  if (!books || books.length === 0)
    return (
      <div className="p-6 text-center text-gray-400">No se encontraron libros.</div>
    );

  return (
    <table className="w-full text-left border-collapse rounded-xl overflow-hidden bg-gray-800 text-white">
      <thead className="bg-gray-700 text-gray-200">
        <tr>
          <th className="p-3 border-b border-gray-600">Título</th>
          <th className="p-3 border-b border-gray-600">Descripción</th>
          <th className="p-3 border-b border-gray-600">Año</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id} className="hover:bg-gray-700 border-b border-gray-600">
            <td className="p-3">{book.titulo}</td>
            <td className="p-3">{book.descripcion}</td>
            <td className="p-3">{book.añoPublicacion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
