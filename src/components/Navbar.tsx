import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-600 p-4 fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo o nome della tua attività */}
        <div className="text-white text-2xl font-bold">
          <a href="/">Pronto Intervento Liguria</a>
        </div>
        {/* Menu Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white"
          aria-expanded={isMenuOpen ? "true" : "false"} // Aggiunto aria-expanded per l'accessibilità
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex justify-center space-x-6 mt-4 lg:mt-0 transition-all duration-300 ease-in-out`} // Aggiunta una transizione fluida
      >
        <a href="/idraulico" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg">
          Idraulico
        </a>
        <a href="/elettricista" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg">
          Elettricista
        </a>
        <a href="/fabbro" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg">
          Fabbro
        </a>
        <a href="/caldaie" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg">
          Caldaie
        </a>
        <a href="/condizionatori" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg">
          Condizionatori
        </a>
        <a href="/spurgo" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg">
          Spurgo
        </a>
      </div>
    </nav>
  );
};

