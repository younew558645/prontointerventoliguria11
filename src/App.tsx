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
    <footer>
      {/* Footer content goes here */}
      <p>© 2024 Pronto Intervento Liguria</p>
    </footer>
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
