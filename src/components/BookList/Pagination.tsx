// src/components/BookList/Pagination.tsx
import { Button } from "@/components/ui/button";

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, onChange }: Props) => (
  <div className="flex justify-center gap-2 mt-4">
    <Button disabled={page <= 1} onClick={() => onChange(page - 1)} className="bg-gray-700 hover:bg-gray-600 text-white">
      Anterior
    </Button>
    <span className="px-4 py-2 text-white">
      Página {page} de {totalPages}
    </span>
    <Button disabled={page >= totalPages} onClick={() => onChange(page + 1)} className="bg-gray-700 hover:bg-gray-600 text-white">
      Siguiente
    </Button>
  </div>
);

export default Pagination;
