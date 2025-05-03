import type React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import CallButton from '../components/CallButton';

const SpurgoPage: React.FC = () => {
  return (
    <Layout>
      <Hero
        title="SERVIZIO SPURGO"
        backgroundImage="/images/spurgo11.png"
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-dark">Contattaci!</h3>
              <p className="text-gray-600 mb-4">
                Puoi iniziare subito chiamando i nostri operatori telefonici, in modo da metterti in contatto facilmente con i tecnici specializzati in spurgo e disostruzione più vicini, in qualsiasi momento di bisogno, anche durante gli orari notturni, i fine settimana e le festività.
              </p>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-dark">Specifica la zona!</h3>
              <p className="text-gray-600 mb-4">
                Operiamo nella maggior parte delle Regioni d'Italia, collaborando con tecnici specializzati in spurgo e disostruzione per intervenire rapidamente in caso di emergenze. Visualizza l'elenco completo di tutte le città in cui siamo attivi.
              </p>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-dark">Richiedi un Intervento!</h3>
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
          <h2 className="text-3xl font-bold mb-6 text-dark">Servizio Spurgo e Disostruzione 24 ore su 24</h2>
          <div className="prose max-w-full text-gray-600">
            <p className="mb-4">
              I problemi di scarichi intasati, fognature bloccate o tubazioni ostruite possono causare gravi disagi e situazioni di emergenza in case, condomini o edifici commerciali. Il nostro servizio di spurgo e disostruzione è disponibile 24 ore su 24, 7 giorni su 7, per risolvere rapidamente qualsiasi problema.
            </p>
            <p className="mb-4">
              Grazie ad attrezzature all'avanguardia e a un team di tecnici altamente specializzati, siamo in grado di intervenire con efficacia su ogni tipo di ostruzione, dalle più semplici alle più complesse, garantendo sempre risultati ottimali e soluzioni durature.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-dark">Cause comuni di ostruzioni e intasamenti</h3>
            <p className="mb-4">
              Le ostruzioni di scarichi e tubazioni possono essere causate da diversi fattori. Ecco i più comuni:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accumulo di residui di sapone, capelli e altri materiali nei sifoni</li>
              <li>Deposito di grasso e residui di cibo nelle tubazioni della cucina</li>
              <li>Oggetti estranei caduti accidentalmente negli scarichi</li>
              <li>Radici di alberi che penetrano nelle tubazioni sotterranee</li>
              <li>Materiali non biodegradabili gettati nel WC</li>
              <li>Deterioramento e cedimenti delle tubazioni dovuti all'età o alla corrosione</li>
            </ul>
            <p className="mb-4">
              Il nostro servizio di spurgo professionale è in grado di risolvere efficacemente tutti questi problemi, eliminando completamente le ostruzioni e ripristinando il corretto funzionamento degli impianti di scarico.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/images/spurgo.png" alt="Disostruzione Scarichi" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-dark">DISOSTRUZIONE SCARICHI</h3>
              <p className="text-gray-600 text-sm">
                Interventi rapidi e risolutivi per liberare scarichi, lavandini, WC, pozzetti e tubazioni di ogni tipo da qualsiasi tipo di ostruzione, con attrezzature professionali e tecniche all'avanguardia.
              </p>
            </div>

            <div className="text-center">
              <img src="/images/spurgo.png" alt="Spurgo Fognature" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-dark">SPURGO FOGNATURE</h3>
              <p className="text-gray-600 text-sm">
                Pulizia e svuotamento di fognature, fosse biologiche, pozzetti e vasche con automezzi dotati di potenti pompe aspiranti, in grado di risolvere anche le situazioni più complesse.
              </p>
            </div>

            <div className="text-center">
              <img src="/images/spurgo.png" alt="Videoispezioni" className="w-20 h-20 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-dark">VIDEOISPEZIONI</h3>
              <p className="text-gray-600 text-sm">
                Controllo dello stato delle tubazioni mediante telecamere specializzate, per individuare con precisione ostruzioni, rotture o altri problemi e intervenire in modo mirato senza opere murarie invasive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8 text-dark">DOVE OPERIAMO | SERVIZIO SPURGO</h2>

          {/* Sezione della Mappa e Lista delle città */}
      <section className="map-section py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          {/* Lista delle città */}
          <div className="cities-list w-full lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-3xl font-semibold mb-4 text-dark">Operiamo Tutta Liguria 
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card per ogni città con i comuni al suo interno */}
          <div className="city-card bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-lg text-dark mb-2">Savona</h4>
            <p className="text-gray-600">Pietra Ligure - Varazze - Celle Ligure - Albisola Superiore - Albisola Marina - Noli - ecc.</p>
          </div>
          <div className="city-card bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-lg text-dark mb-2">Genova</h4>
            <p className="text-gray-600">Pra - Nervi - Pegli - Voltri - Sturla - Albaro - San Fruttuoso - Sampierdarena - ecc.</p>
          </div>
          <div className="city-card bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-lg text-dark mb-2">La Spezia</h4>
            <p className="text-gray-600">Portovenere - Lerici - Santo Stefano di Magra - Sarzana - Arcola - ecc.</p>
          </div>
          <div className="city-card bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-lg text-dark mb-2">Imperia</h4>
            <p className="text-gray-600">Sanremo - Oneglia - Diano Marina - Taggia - Ventimiglia - Pieve di Teco - ecc.</p>
          </div>
          <div className="city-card bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-lg text-dark mb-2">Alassio</h4>
            <p className="text-gray-600">Laigueglia - Albenga - Ceriale - Andora - ecc.</p>
          </div>
        </div>
          </div>

          {/* Foto della Mappa */}
          <div className="map-image w-full lg:w-1/2">
            <img
              src="/images/mappa.jpg"  
              alt="Mappa della Liguria"
              className="w-full h-auto rounded-none" /* Rimosso il bordo */
            />
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

export default SpurgoPage;
