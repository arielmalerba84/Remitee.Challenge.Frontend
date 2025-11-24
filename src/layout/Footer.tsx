const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 text-center text-sm">
      <div className="flex justify-center items-center space-x-6 mb-2 flex-wrap">
        <a href="https://www.linkedin.com/company/remitee/?originalSubdomain=ar" target="_blank" rel="noreferrer" className="hover:text-white">
          Linkedin
        </a>
        <a href="mailto:soporte@remitee.com?subject=Atención a clientes" className="hover:text-white">
          Soporte al cliente
        </a>
        <a href="https://business.remitee.com/políticas-de-privacidad" target="_blank" rel="noreferrer" className="hover:text-white">
          Políticas de privacidad
        </a>
        <a href="https://business.remitee.com/t-c" target="_blank" rel="noreferrer" className="hover:text-white">
          Términos & Condiciones
        </a>
      </div>
      &copy; {new Date().getFullYear()} Remitee. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
