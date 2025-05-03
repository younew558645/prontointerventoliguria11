import React from 'react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 text-gray-700">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>

      <p className="mb-4">
        Questo sito utilizza cookie tecnici e, previo consenso, cookie di terze parti per finalità statistiche e di marketing.
        I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell’utente, dove vengono memorizzati per
        essere poi ritrasmessi agli stessi siti alla visita successiva.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Tipologie di cookie utilizzati</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Cookie tecnici:</strong> necessari al funzionamento del sito e per consentire la navigazione.</li>
        <li><strong>Cookie funzionali:</strong> permettono di ricordare le preferenze dell’utente.</li>
        <li><strong>Cookie di terze parti:</strong> usati da strumenti come Google Maps o WhatsApp.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cookie di terze parti</h2>
      <p className="mb-4">
        Il sito utilizza servizi esterni che possono installare cookie:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li><a href="https://policies.google.com/technologies/cookies?hl=it" target="_blank" className="text-blue-600 underline">Google Maps</a></li>
        <li><a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" className="text-blue-600 underline">WhatsApp</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Gestione dei cookie</h2>
      <p className="mb-4">
        Puoi gestire o disabilitare i cookie tramite le impostazioni del browser che stai utilizzando. La disattivazione
        dei cookie tecnici può compromettere alcune funzionalità del sito.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contatti</h2>
      <p className="mb-4">
        Per ulteriori informazioni sulla nostra Cookie Policy, puoi contattarci via email all'indirizzo:
        <strong> info@prontointerventoliguria.it</strong>
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-all"
      >
        Torna indietro
      </button>
    </div>
  );
};

export default CookiePolicy;
