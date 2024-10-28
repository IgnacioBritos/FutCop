const Nav = () => {
    return (
      <div className="flex justify-between items-center p-4">
        {/* Contenedor vacío para ocupar el espacio izquierdo */}
        <div className="w-1/3"></div>
        
        {/* Formulario centrado */}
        <form className="w-1/3 flex justify-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-8 rounded-l-md border border-gray-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded-r-md"
            disabled
          >
            Buscar
          </button>
        </form>
  
        {/* Enlace de perfil a la derecha */}
        <a href="#" className="w-1/3 text-right pr-4">
          Perfil
        </a>
      </div>
    );
  };
  
  export default Nav;
  
