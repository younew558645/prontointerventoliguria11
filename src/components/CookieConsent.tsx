import type React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-4">
            <h3 className="font-bold text-lg mb-2">Questo sito web utilizza i cookie</h3>
            <p className="text-sm text-gray-600 mb-2">
              Utilizziamo i cookie per personalizzare contenuti e annunci e migliorare la tua esperienza sul nostro sito.
              Condividiamo inoltre informazioni con i nostri partner che si occupano di analisi dei dati web e social media e per
              mostrarti pubblicità associata alla tua ricerca.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Proseguendo con la navigazione dichiaro di aver preso visione dei{' '}
              <Link to="/termini-e-condizioni" className="text-primary hover:underline">
                termini e condizioni di servizio
              </Link>{' '}
              e della{' '}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy di Google
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={acceptNecessary}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm"
              >
                Solo necessari
              </button>
              <button
                onClick={decline}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded text-sm"
              >
                Rifiuta
              </button>
              <button
                onClick={() => {}}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded text-sm"
              >
                Impostazioni cookie
              </button>
            </div>
          </div>
          <button
            onClick={acceptAll}
            className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded text-sm whitespace-nowrap"
          >
            ACCETTA TUTTI I COOKIE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
