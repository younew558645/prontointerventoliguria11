import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 text-gray-700">
      <h1 className="text-3xl font-bold mb-6">Termini e Condizioni d'Uso</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Importanti informazioni legali</h2>
        <p>
          Questa pagina descrive le condizioni generali di utilizzo dei servizi offerti da <strong>Pronto Intervento Liguria</strong> tramite il sito <strong>www.prontointerventoliguria.it</strong>. Accedendo al sito, l'utente accetta automaticamente i termini qui descritti. Se non si accettano questi termini, l'utente è pregato di non utilizzare il sito.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Definizioni</h2>
        <ul className="list-disc ml-6">
          <li><strong>Professionista:</strong> Tecnico indipendente che offre servizi di pronto intervento attraverso il sito.</li>
          <li><strong>Utente:</strong> Persona che richiede un servizio tramite il sito.</li>
          <li><strong>Servizio:</strong> Attività di collegamento tra utenti e tecnici indipendenti, facilitata dal sito.</li>
          <li><strong>Intervento:</strong> Lavoro che viene svolto dal tecnico sotto la sua responsabilità.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Informazioni su Pronto Intervento Liguria</h2>
        <p>
          Il sito è gestito da <strong>Younes En Najjary</strong>.  
          Contatti: <br />
          Email: <strong>info@prontointerventoliguria.it</strong><br />
          Telefono: <strong>377 094 3352</strong>
        </p>
        <p>© {new Date().getFullYear()} Pronto Intervento Liguria – Tutti i diritti riservati.<br />
          <strong>P.IVA 01920890090</strong> – Proprietario: <strong>Younes En Najjary</strong>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Finalità del Servizio</h2>
        <p>
          <strong>Pronto Intervento Liguria</strong> funge da piattaforma di collegamento tra utenti e tecnici indipendenti. Il contratto di prestazione dei servizi (l'intervento) viene stipulato direttamente tra l'utente e il tecnico che accetta la richiesta di intervento.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Disponibilità del Servizio</h2>
        <p>
          L'accesso al sito e ai suoi servizi può essere sospeso o modificato senza preavviso. <strong>Pronto Intervento Liguria</strong> non garantisce la disponibilità continua del servizio né si assume responsabilità per eventuali interruzioni.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pagamento per i Servizi</h2>
        <p>
          Il collegamento tra utente e tecnico tramite il sito è gratuito per l'utente. Tuttavia, il pagamento per l'intervento richiesto viene effettuato direttamente tra l'utente e il tecnico. <strong>Pronto Intervento Liguria</strong> non è responsabile per la gestione delle transazioni finanziarie.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Responsabilità</h2>
        <p>
          <strong>Pronto Intervento Liguria</strong> svolge esclusivamente un'attività di collegamento e supporto organizzativo tra utenti e tecnici indipendenti.  
          L'intervento richiesto viene svolto interamente sotto la responsabilità esclusiva del tecnico che ha accettato la richiesta.  
          <strong>Pronto Intervento Liguria</strong> non è in alcun modo responsabile per:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>La qualità, correttezza o risultato finale dell'intervento eseguito</li>
          <li>Eventuali danni materiali o personali derivanti dal servizio</li>
          <li>Ritardi, omissioni, negligenze o errori da parte del tecnico</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Diritti di Proprietà Intellettuale</h2>
        <p>
          Tutti i contenuti presenti nel sito (compresi testi, immagini, loghi, software e altri materiali) sono di proprietà di <strong>Pronto Intervento Liguria</strong> o dei rispettivi titolari dei diritti d'autore. È vietato copiare, riprodurre, distribuire, o utilizzare questi contenuti senza esplicita autorizzazione scritta.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Trattamento dei Dati Personali</h2>
        <p>
          Raccogliamo e trattiamo i dati personali degli utenti solo per finalità strettamente connesse alla gestione delle richieste di intervento, nel rispetto della normativa sulla protezione dei dati personali (Regolamento UE 2016/679 - GDPR). Per maggiori dettagli su come gestiamo i tuoi dati, consulta la nostra <a href="/privacy-policy" className="text-blue-600">Privacy Policy</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Link di Terze Parti</h2>
        <p>
          Il sito può contenere link a siti web di terze parti. <strong>Pronto Intervento Liguria</strong> non è responsabile per i contenuti di questi siti, né per i danni o le perdite derivanti dall'uso di tali siti. I link sono forniti solo per comodità e non implicano approvazione o patrocinio da parte di <strong>Pronto Intervento Liguria</strong>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Modifiche ai Termini e Condizioni</h2>
        <p>
          <strong>Pronto Intervento Liguria</strong> si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina, e la data dell'ultima revisione sarà aggiornata di conseguenza. L'uso continuato del sito dopo la pubblicazione delle modifiche implica l'accettazione dei nuovi Termini e Condizioni.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Legge Applicabile e Foro Competente</h2>
        <p>
          I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia derivante dall'uso del sito, il foro competente sarà quello di <strong>Savona</strong>, Italia.
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-500">
        Ultima revisione: 3 marzo 2025
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

export default TermsAndConditions;
