// src/components/ReviewsSection.tsx
import React from 'react';


const ReviewsSection: React.FC = () => {
  const ratingChanged = (newRating: number) => {
    console.log(newRating); // Puoi inviare il valore della valutazione a un server, per esempio.
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-12 text-dark">Cosa dicono i nostri clienti</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
           
          </div>
          <p className="text-center text-gray-600">
            "Servizio eccellente! I professionisti sono arrivati puntuali e hanno risolto il problema rapidamente. Consigliatissimi!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
