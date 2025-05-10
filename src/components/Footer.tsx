import React from 'react';
import CookieConsent from './CookieConsent'; // Importa il componente dei cookie
import { Link } from 'react-router-dom'; // Importa Link da React Router

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sezione "Pronto Intervento Liguria" */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pronto Intervento Liguria</h3>
            <p className="text-gray-300">
              Servizi di pronto intervento disponibili 24 ore su 24, 7 giorni su 7 in tutta la Liguria.
            </p>
          </div>

          {/* Sezione Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="/intervento-idraulico" className="text-gray-300 hover:text-primary">Idraulico</a></li>
              <li><a href="/intervento-elettricista" className="text-gray-300 hover:text-primary">Elettricista</a></li>
              <li><a href="/intervento-fabbro" className="text-gray-300 hover:text-primary">Fabbro</a></li>
              <li><a href="/caldaie" className="text-gray-300 hover:text-primary">Caldaie</a></li>
              <li><a href="/condizionatori" className="text-gray-300 hover:text-primary">Condizionatori</a></li>
              <li><a href="/spurgo" className="text-gray-300 hover:text-primary">Spurgo</a></li>
            </ul>
          </div>

          {/* Sezione Contatti */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-primary mr-2">✆</span>
                <a href="tel:3770943352" className="text-gray-300 hover:text-primary">+393770943352</a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✉</span>
                <a href="mailto:info@prontointerventoliguria.it" className="text-gray-300 hover:text-primary">info@prontointerventoliguria.it</a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✉</span>
                <a href="mailto:assistenza@prontointerventoliguria.it" className="text-gray-300 hover:text-primary">assistenza@prontointerventoliguria.it</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separatore e link ai documenti legali */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
          <div className="mb-2">
            <Link to="/cookies" className="hover:text-primary">Cookie Policy</Link> |
            <Link to="/termini-e-condizioni" className="hover:text-primary mx-2">Termini e Condizioni</Link> |
            <Link to="/privacy-policy" className="hover:text-primary mx-2">Privacy Policy</Link> |
            <Link to="/contatti" className="hover:text-primary mx-2">Contatti</Link> |
            <Link to="/blog" className="hover:text-primary mx-2">Blog</Link> |
            <Link to="/sitemap" className="hover:text-primary">Sitemap</Link>
          </div>
          <p>© {new Date().getFullYear()} Pronto Intervento Liguria – Tutti i diritti riservati</p>
        </div>
      </div>

      {/* Aggiungi il componente del consenso ai cookie qui */}
      <CookieConsent />
    </footer>
  );
};

export default Footer;
