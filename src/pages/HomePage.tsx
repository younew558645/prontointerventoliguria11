import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importa lo stile di Leaflet
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Reviews from '../components/Reviews';
import FAQSection from '../components/FAQSection';

const HomePage: React.FC = () => {
  const [visibleProvince, setVisibleProvince] = useState<string | null>(null);

  const toggleProvince = (province: string) => {
    setVisibleProvince(visibleProvince === province ? null : province);
  };

  const services = [
    {
      title: 'Pronto Intervento Idraulico',
      imageSrc: '/images/idraulico.png',
      link: '/intervento-idraulico',
    },
    {
      title: 'Pronto Intervento Elettricista',
      imageSrc: '/images/elettricista.png',
      link: '/intervento-elettricista',
    },
    {
      title: 'Pronto Intervento Fabbro',
      imageSrc: '/images/fabbro.png',
      link: '/intervento-fabbro',
    },
    {
      title: 'Riparazione Caldaie',
      imageSrc: '/images/caldaie.png',
      link: '/caldaie',
    },
    {
      title: 'Servizio Condizionatori',
      imageSrc: '/images/condizionatori.png',
      link: '/condizionatori',
    },
    {
      title: 'Servizio Spurgo',
      imageSrc: '/images/spurgo.png',
      link: '/spurgo',
    },
  ];

  const provinces = [
    {
      name: 'Provincia di Genova (GE)',
      cities: [
        'Genova', 'Arenzano', 'Bogliasco', 'Busalla', 'Camogli', 'Campo Ligure', 'Campomorone',
        'Carasco', 'Casarza Ligure', 'Chiavari', 'Cicagna', 'Cogoleto', 'Davagna', 'Lavagna',
        'Leivi', 'Moneglia', 'Ne', 'Pieve Ligure', 'Rapallo', 'Recco', 'Ronco Scrivia',
        'Santa Margherita Ligure', 'Santo Stefano d\'Aveto', 'Savignone', 'Sestri Levante',
        'Serra Riccò', 'Sori', 'Torriglia', 'Uscio', 'Zoagli',
      ],
    },
    {
      name: 'Provincia di Savona (SV)',
      cities: [
        'Savona', 'Albenga', 'Alassio', 'Altare', 'Andora', 'Bergeggi', 'Borghetto Santo Spirito',
        'Borgio Verezzi', 'Bormida', 'Cairo Montenotte', 'Calice Ligure', 'Carcare', 'Celle Ligure',
        'Ceriale', 'Cisano sul Neva', 'Finale Ligure', 'Giusvalla', 'Loano', 'Millesimo', 'Noli',
        'Orco Feglino', 'Pietra Ligure', 'Quiliano', 'Spotorno', 'Stella', 'Tovo San Giacomo',
        'Varazze', 'Vado Ligure',
      ],
    },
    {
      name: 'Provincia di Imperia (IM)',
      cities: [
        'Imperia', 'Sanremo', 'Ventimiglia', 'Bordighera', 'Camporosso', 'Castellaro', 'Ceriana',
        'Civezza', 'Diano Marina', 'Dolcedo', 'Ospedaletti', 'Pieve di Teco', 'Pontedassio',
        'Riva Ligure', 'Taggia (Arma di Taggia)', 'Vallecrosia', 'Vasia',
      ],
    },
    {
      name: 'Provincia della Spezia (SP)',
      cities: [
        'La Spezia', 'Ameglia', 'Arcola', 'Beverino', 'Bonassola', 'Brugnato', 'Carro',
        'Deiva Marina', 'Follo', 'Lerici', 'Levanto', 'Monterosso al Mare', 'Pignone',
        'Portovenere', 'Riomaggiore', 'Rocchetta di Vara', 'Sarzana', 'Santo Stefano di Magra',
        'Sesta Godano', 'Vernazza', 'Varese Ligure', 'Vezzano Ligure', 'Zignago',
      ],
    },
  ];

  useEffect(() => {
    const map = L.map('map', { attributionControl: false }).setView([44.3168, 8.4302], 8); // Centro Liguria

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Crea un'icona personalizzata per il marker
    const customIcon = new L.Icon({
      iconUrl: '/images/marker-icon.png', // Puoi usare una tua immagine per il pin
      iconSize: [32, 32], // Dimensioni dell'icona
      iconAnchor: [16, 32], // Punti di ancoraggio
      popupAnchor: [0, -32], // Ancoraggio del popup
    });

    const cities = [
      { name: 'Genova', coords: [44.4056, 8.9463] },
      { name: 'Savona', coords: [44.3091, 8.4772] },
      { name: 'La Spezia', coords: [44.1071, 9.8285] },
      { name: 'Imperia', coords: [43.8896, 8.0386] },
    ];

    // Aggiungi i marker con l'icona personalizzata per ogni città
    cities.forEach((city) => {
      L.marker(city.coords as [number, number], { icon: customIcon })
        .addTo(map)
        .bindPopup(`<b>${city.name}</b><br>Intervento disponibile!`);
    });
  }, []);
  
  return (
    <Layout>
      <Hero title="PRONTO INTERVENTO LIGURIA 24" />

      {/* Sezione dei Servizi */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-4 text-dark">Pronto Intervento 24H</h2>
          <p className="text-center mb-12 text-gray-600">Troviamo il professionista che stai cercando!</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                imageSrc={service.imageSrc}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sezione delle Recensioni */}
      <Reviews />

      {/* Sezione delle Domande Frequenti (FAQ) */}
      <FAQSection />

      {/* Sezione della Mappa e Lista delle città */}
      <section className="map-section py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          {/* Lista delle province */}
          <div className="cities-list w-full lg:w-4/5 mb-8 bg-gray-50 px-10 py-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-6 text-dark text-center">Operiamo Tutta Liguria</h3>
            <ul className="space-y-6">
              {provinces.map((province) => (
                <li key={province.name}>
                  <button
                    onClick={() => toggleProvince(province.name)}
                    className="flex items-center justify-between font-semibold text-lg text-dark w-full text-left hover:text-primary transition-colors"
                  >
                    <span className="flex items-center gap-4">
                      <img src="/images/location-icon.png" alt="Location Icon" className="w-8 h-8" /> {province.name}
                    </span>
                    <span className="text-sm">{visibleProvince === province.name ? '▲ Nascondi' : '▼ Mostra'}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      visibleProvince === province.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{
                      maxHeight: visibleProvince === province.name ? '300px' : '0', // Set max-height dynamically
                    }}
                  >
                    <p className="mt-4 text-gray-600 pl-6">
                      {province.cities.join(' - ')}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mappa */}
          <div className="map-image w-full lg:w-1/2">
            <div id="map" className="w-full h-96 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
