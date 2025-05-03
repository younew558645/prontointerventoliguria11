import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaWrench, FaTools, FaFireExtinguisher, FaThermometer, FaWind } from 'react-icons/fa';

const MobileMenu = ({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean; toggleMenu: () => void }) => {
  return (
    <nav
      id="mobile-menu"
      className={`md:hidden bg-white py-4 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
      } overflow-hidden`}
    >
      <ul className="flex flex-col items-start space-y-6 text-dark pl-6">
        <li className="flex items-center space-x-3">
          <FaHome className="text-primary" />
          <Link to="/" className="hover:text-primary transition-colors duration-300">
            Home
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          <FaWrench className="text-primary" />
          <Link to="/intervento-idraulico" className="hover:text-primary transition-colors duration-300">
            Idraulico
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          <FaTools className="text-primary" />
          <Link to="/intervento-elettricista" className="hover:text-primary transition-colors duration-300">
            Elettricista
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          <FaFireExtinguisher className="text-primary" />
          <Link to="/intervento-fabbro" className="hover:text-primary transition-colors duration-300">
            Fabbro
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          <FaThermometer className="text-primary" />
          <Link to="/caldaie" className="hover:text-primary transition-colors duration-300">
            Caldaie
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          <FaWind className="text-primary" />
          <Link to="/condizionatori" className="hover:text-primary transition-colors duration-300">
            Condizionatori
          </Link>
        </li>
        <li className="flex items-center space-x-3">
          <FaTools className="text-primary" />
          <Link to="/spurgo" className="hover:text-primary transition-colors duration-300">
            Spurgo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg py-4 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div
          className={`logo transition-all duration-500 ${
            isMenuOpen ? 'absolute top-2 left-1/2 transform -translate-x-1/2' : 'relative left-0'
          }`}
        >
          <Link to="/">
            <img src="/images/logo.png" alt="Pronto Intervento Liguria" className="h-12" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center absolute right-4 top-4">
          <button
            onClick={toggleMenu}
            className="text-dark text-3xl transition-transform duration-300 transform hover:scale-110"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-controls="mobile-menu"
          >
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="flex items-center text-dark hover:text-primary transition-colors duration-300"
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/intervento-idraulico"
            className="flex items-center text-dark hover:text-primary transition-colors duration-300"
          >
            <FaWrench className="mr-2" /> Idraulico
          </Link>
          <Link
            to="/intervento-elettricista"
            className="flex items-center text-dark hover:text-primary transition-colors duration-300"
          >
            <FaTools className="mr-2" /> Elettricista
          </Link>
          <Link
            to="/intervento-fabbro"
            className="flex items-center text-dark hover:text-primary transition-colors duration-300"
          >
            <FaFireExtinguisher className="mr-2" /> Fabbro
          </Link>
          <Link
            to="/caldaie"
            className="flex items-center text-dark hover:text-primary transition-colors duration-300"
          >
            <FaThermometer className="mr-2" /> Caldaie
          </Link>
          <Link
            to="/condizionatori"
            className="flex items-center text-dark hover:text-primary transition-colors duration-300"
          >
            <FaWind className="mr-2" /> Condizionatori
          </Link>
          <Link
            to="/spurgo"
            className="flex items-center text-dark hover:text-primary transition-colors duration-300"
          >
            <FaTools className="mr-2" /> Spurgo
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
