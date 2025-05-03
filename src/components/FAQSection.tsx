import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between active and inactive
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-12 text-dark">Domande Frequenti</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ items */}
          {[
            {
              question: 'Quanto tempo ci vuole per arrivare?',
              answer:
                'I nostri tecnici arrivano in media entro 30 minuti in città principali. Per le zone più lontane, possiamo arrivare in 60 minuti.',
            },
            {
              question: 'Cosa faccio se il mio impianto non funziona e non so dove chiamare?',
              answer:
                'Puoi chiamarci subito al nostro numero o tramite WhatsApp. Valuteremo la situazione e invieremo il tecnico più vicino disponibile.',
            },
            {
              question: 'Posso richiedere un intervento per un piccolo guasto durante il fine settimana?',
              answer:
                'Sì! Offriamo servizi 24 ore su 24, 7 giorni su 7, quindi puoi contare su di noi anche nei fine settimana e festivi.',
            },
            {
              question: 'Offrite assistenza anche per lavori non urgenti?',
              answer:
                'Sì, oltre agli interventi urgenti, offriamo anche servizi programmati come manutenzione e riparazioni su appuntamento.',
            },
            {
              question: 'Quali sono i costi per un intervento?',
              answer:
                'Il costo dipende dal tipo di intervento. Ti forniremo sempre un preventivo gratuito prima di iniziare il lavoro.',
            },
            {
              question: 'Devo preparare qualcosa prima che il tecnico arrivi?',
              answer:
                'Non è necessario fare nulla di particolare, ma se possibile, assicurati di avere accesso all\'area da riparare e di fornirci dettagli sul problema.',
            },
          ].map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3
                onClick={() => toggleAnswer(index)}
                className="text-xl font-semibold mb-2 text-dark flex items-center cursor-pointer hover:text-primary"
              >
                <span className="text-primary mr-2">{activeIndex === index ? '-' : '+'}</span>
                {item.question}
              </h3>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{
                  maxHeight: activeIndex === index ? '500px' : '0', // Imposta una max-height fissa per evitare problemi
                }}
              >
                <p className="text-gray-600 text-sm mt-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
