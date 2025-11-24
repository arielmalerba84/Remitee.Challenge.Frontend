
import type { Filters } from "../../api/bookService";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

const BookFilter = ({ filters, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({
      ...filters,
      [name]: name === "añoPublicacion" ? (value ? Number(value) : undefined) : value,
    });
  };

  return (
    <div className="p-4 bg-gray-700 rounded-xl shadow mb-4 space-y-4 w-full">
      {/* Buscador global */}
      <div className="relative w-full">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
        <Input
          name="titulo"
          placeholder="Buscar libro..."
          value={filters.titulo || ""}
          onChange={handleChange}
          className="w-full pl-12 bg-gray-600 text-white placeholder-gray-400"
        />
      </div>

      {/* Filtros específicos: descripción y año */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="relative w-full">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
          <Input
            name="descripcion"
            placeholder="Descripción"
            value={filters.descripcion || ""}
            onChange={handleChange}
            className="w-full pl-12 bg-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div className="relative w-full">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
          <Input
            name="añoPublicacion"
            type="number"
            placeholder="Año"
            value={filters.añoPublicacion || ""}
            onChange={handleChange}
            className="w-full pl-12 bg-gray-600 text-white placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default BookFilter;
