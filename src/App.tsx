import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IdraulicoPage from './pages/IdraulicoPage';
import ElettrecistaPage from './pages/ElettrecistaPage';
import FabbroPage from './pages/FabbroPage';
import CaldaiePage from './pages/CaldaiePage';
import CondizionatoriPage from './pages/CondizionatoriPage';
import SpurgoPage from './pages/SpurgoPage';
import ContattiPage from './pages/ContattiPage';
import CookiePolicy from './pages/CookiePolicy';
import TermsAndConditions from './pages/TermsAndConditions';

const Footer = () => {
  return (
    <div>
      {/* Pulsante Chiama ora (solo su mobile) */}
      <a
        href="tel:+393770943352"
        className="fixed bottom-20 right-4 bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transform transition-all duration-300 z-50 block md:hidden flex items-center justify-center space-x-2"
      >
        <span className="text-lg">✆</span>
        <span className="text-sm">Chiama ora</span>
      </a>

      {/* Bottone WhatsApp fisso in basso a destra */}
      <a
        href="https://wa.me/393770943352?text=Ciao%2C%20ho%20bisogno%20di%20un%20pronto%20intervento.%20Mi%20puoi%20aiutare%3F"
        className="fixed bottom-4 right-4 bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transform transition-all duration-300 z-50 flex items-center justify-center space-x-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-lg">💬</span>
        <span className="text-sm">WhatsApp</span>
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intervento-idraulico" element={<IdraulicoPage />} />
        <Route path="/intervento-elettricista" element={<ElettrecistaPage />} />
        <Route path="/intervento-fabbro" element={<FabbroPage />} />
        <Route path="/caldaie" element={<CaldaiePage />} />
        <Route path="/condizionatori" element={<CondizionatoriPage />} />
        <Route path="/spurgo" element={<SpurgoPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/termini-e-condizioni" element={<TermsAndConditions />} />
      </Routes>
      <Footer /> {/* Footer che contiene i pulsanti */}
    </Router>
  );
}

export default App;
