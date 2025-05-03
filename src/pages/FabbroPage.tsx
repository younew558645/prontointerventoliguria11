import React, { useState, useEffect } from 'react'; 
import Layout from '../layouts/Layout'; 
import Hero from '../components/Hero'; 
import CallButton from '../components/CallButton';
import L from 'leaflet';

const FabbroPage: React.FC = () => {
  const [visibleProvince, setVisibleProvince] = useState<string | null>(null);

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

  const toggleProvince = (provinceName: string) => {
    setVisibleProvince((prev) => (prev === provinceName ? null : provinceName));
  };

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
      <Hero
        title="PRONTO INTERVENTO FABBRO?"
        backgroundImage="/images/fabbro2.png"
      />

      {/* Intro Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Contattaci Section */}
      <div className="md:col-span-1 text-center">
        <h3 className="text-xl font-bold mb-4 text-dark">Contattaci!</h3>
        <img 
          src="/images/phone-call.png" 
          alt="Contattaci" 
          className="w-24 h-24 mx-auto mb-4" 
        />
        <p className="text-gray-600 mb-4">
          Puoi iniziare subito chiamando i nostri operatori telefonici, in modo da metterti in contatto facilmente con il fabbro più vicino, in qualsiasi momento di bisogno, anche durante gli orari notturni, i fine settimana e le festività.
        </p>
      </div>

      {/* Specifica la zona Section */}
      <div className="md:col-span-1 text-center">
        <h3 className="text-xl font-bold mb-4 text-dark">Specifica la zona!</h3>
        <img 
          src="/images/map2.png" 
          alt="Specifica la zona" 
          className="w-24 h-24 mx-auto mb-4" 
        />
        <p className="text-gray-600 mb-4">
          Operiamo nella maggior parte delle Regioni d'Italia, collaborando con fabbri su questo settore per assistere nelle situazioni di emergenza. Visualizza l'elenco completo di tutte le città in cui siamo attivi.
        </p>
      </div>

      {/* Richiedi un Intervento Section */}
      <div className="md:col-span-1 text-center">
        <h3 className="text-xl font-bold mb-4 text-dark">Richiedi un Intervento!</h3>
        <img 
          src="/images/emergency.png" 
          alt="Richiedi Intervento" 
          className="w-24 h-24 mx-auto mb-4" 
        />
        <p className="text-gray-600 mb-4">
          I nostri operatori possono aiutare i clienti con le loro richieste per interventi immediati, prenotazione di chiamate e altre domande sui servizi richiesti. Miriamo a rispondere alle chiamate tempestivamente, 24h non stop!
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Main Content */}
      <section className="py-12 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-dark">Pronto Intervento Fabbro 24H</h2>
          <div className="prose max-w-full text-gray-600">
            <p className="mb-4">
              Il nostro team di esperti professionisti è disponibile 24 ore su 24 per fornire un servizio rapido di assistenza per serrature, porte, finestre e molto altro. Siamo pronti ad intervenire in qualsiasi situazione di emergenza, come chiavi perse, porte bloccate o serrature danneggiate.
            </p>
            <p className="mb-4">
              Hai bisogno di un fabbro professionale nella tua città? Siamo qui per te 24 ore su 24, 7 giorni su 7. Offriamo pronto intervento per apertura porte, sostituzione serrature e molto altro. Contattaci subito!
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-dark">Quando chiamare un fabbro d'emergenza?</h3>
            <p className="mb-4">
              Ci sono diverse situazioni in cui potresti aver bisogno di un fabbro d'emergenza. Ecco alcune delle più comuni:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Chiavi smarrite o dimenticate all'interno di casa</li>
              <li>Serrature bloccate o danneggiate</li>
              <li>Porta d'ingresso che non si apre o non si chiude correttamente</li>
              <li>Sostituzione di una serratura dopo un tentativo di effrazione</li>
              <li>Installazione di porte blindate o sistemi di sicurezza</li>
            </ul>
            <p className="mb-4">
              In questi casi, un fabbro esperto può risolvere il problema rapidamente, minimizzando il disagio e ripristinando la sicurezza della tua abitazione.
            </p>
          </div>

          <div className="mt-10 text-center">
            <CallButton className="text-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-10 text-dark">SERVIZI CHE OFFRIAMO</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="/images/fabbro.png" alt="Apertura Casseforti" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-dark">APERTURA CASSEFORTI</h3>
              <p className="text-gray-600 text-sm">
                La ditta Pronto Intervento Fabbro ha grande competenza in materia ed è in grado, tramite i suoi operatori, di aprire la cassaforte senza alcuno scasso e senza rompere la serratura.
              </p>
            </div>

            <div className="text-center">
              <img src="/images/fabbro.png" alt="Persiane e Tapparelle" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-dark">PERSIANE E TAPPARELLE</h3>
              <p className="text-gray-600 text-sm">
                La ditta Pronto Intervento Fabbro è disponibile 24 ore su 24 per 365 giorni all'anno per la riparazione veloce delle tapparelle di ogni tipo e materiale, ma anche per la loro sostituzione nel caso si rendesse necessario.
              </p>
            </div>

            <div className="text-center">
              <img src="/images/fabbro.png" alt="Riparazione Serrature" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-dark">RIPARAZIONE SERRATURE</h3>
              <p className="text-gray-600 text-sm">
                La riparazione o la sostituzione della serratura avviene in modo veloce ed entro poco dalla chiamata del cliente, così da ridurre al minimo gli svantaggi che derivano da questa operazione.
              </p>
            </div>

            <div className="text-center">
              <img src="/images/fabbro.png" alt="Montaggio Porte Blindate" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-dark">MONTAGGIO PORTE BLINDATE</h3>
              <p className="text-gray-600 text-sm">
                Grazie al Pronto Intervento Fabbro puoi contare su professionisti del settore che sapranno aprire ogni tipo di porta, anche quelle blindate più resistenti, senza alcuno scasso e danno per la serratura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8 text-dark">DOVE OPERIAMO | FABBRO IN ZONA</h2>

          <section className="map-section py-16">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
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
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${visibleProvince === province.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="mt-4 text-gray-600 pl-6">
                          {province.cities.join(' - ')}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="map-image w-full lg:w-1/2">
                <div id="map" className="w-full h-96 rounded-lg shadow-lg"></div>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <CallButton className="text-lg" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FabbroPage;
