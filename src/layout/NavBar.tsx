import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-white">
          Remitee
        </Link>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Libros
          </Link>
          <Link to="/add-book" className="hover:text-blue-400 transition-colors">
            Agregar Libro
          </Link>
          <a
            href="https://business.remitee.com/blog"
            target="_blank"
            className="hover:text-blue-400 transition-colors"
            rel="noreferrer"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
