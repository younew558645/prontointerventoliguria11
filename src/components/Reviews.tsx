import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Aggiungi le icone delle frecce
import { Swiper as SwiperType } from 'swiper'; // Importa il tipo Swiper


const Reviews = () => {
  // Tipizzazione corretta per useRef
  const swiperRef = useRef<SwiperType | null>(null); // Definisci il tipo per swiperRef

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Scorrere alla recensione precedente
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Scorrere alla recensione successiva
    }
  };

  return (
    <section id="reviews" className="py-10 bg-gray-50 mt-10 rounded-lg shadow-lg max-w-4xl mx-auto relative">
      <h2 className="text-3xl text-gray-900 font-semibold text-center mb-8">Cosa dicono i nostri clienti</h2>

      {/* Swiper Container per le recensioni */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Associa il riferimento al componente Swiper
        spaceBetween={50} // Spazio tra le recensioni
        slidesPerView={1} // Mostra 1 recensione per volta
        loop={true} // Loop infinito delle recensioni
        autoplay={{ delay: 3000 }} // Tempo tra un passaggio e l'altro
        pagination={{ clickable: true }} // Abilita la navigazione con i puntini
        className="mySwiper"
      >
        {/* Prima recensione */}
        <SwiperSlide>
          <div className="review bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 mb-4">
              <img
                src="/images/cliente1.jpg"
                alt="Giovanni"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="stars text-yellow-500 mb-4 text-xl" aria-label="5 stelle">
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
            </div>
            <p className="text-lg text-gray-800 italic">
              "Servizio fantastico! Sono arrivati in tempo e hanno risolto il problema velocemente. Li consiglio vivamente!" - Giovanni, Savona
            </p>
          </div>
        </SwiperSlide>

        {/* Seconda recensione */}
        <SwiperSlide>
          <div className="review bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 mb-4">
              <img
                src="/images/cliente2.jpg"
                alt="Alessandra"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="stars mb-4 text-xl" aria-label="4 stelle">
              <span className="star text-yellow-500">&#9733;</span> {/* Stella piena */}
              <span className="star text-yellow-500">&#9733;</span> {/* Stella piena */}
              <span className="star text-yellow-500">&#9733;</span> {/* Stella piena */}
              <span className="star text-yellow-500">&#9733;</span> {/* Stella piena */}
              <span className="star text-gray-400">&#9734;</span> {/* Stella vuota */}
            </div>
            <p className="text-lg text-gray-800 italic">
              "Un'esperienza molto positiva! Il team è stato professionale, cordiale e ha risolto tutto in poco tempo. Eccellente!" - Alessandra, Genova
            </p>
          </div>
        </SwiperSlide>

        {/* Terza recensione */}
        <SwiperSlide>
          <div className="review bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 mb-4">
              <img
                src="/images/cliente3.jpg"
                alt="Marco"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="stars text-yellow-500 mb-4 text-xl" aria-label="5 stelle">
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
            </div>
            <p className="text-lg text-gray-800 italic">
              "Servizio impeccabile! Sono arrivati in anticipo e hanno risolto il mio problema in un attimo. Non potrei essere più soddisfatto!" - Marco, Imperia
            </p>
          </div>
        </SwiperSlide>

        {/* Quarta recensione */}
        <SwiperSlide>
          <div className="review bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 mb-4">
              <img
                src="/images/cliente4.jpg"
                alt="Luca"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="stars mb-4 text-xl" aria-label="4 stelle">
              <span className="star text-yellow-500">&#9733;</span> {/* Stella piena */}
              <span className="star text-yellow-500">&#9733;</span> {/* Stella piena */}
              <span className="star text-yellow-500">&#9733;</span> {/* Stella piena */}
              <span className="star text-yellow-500">&#9733;</span> {/* Stella piena */}
              <span className="star text-gray-400">&#9734;</span> {/* Stella vuota */}
            </div>
            <p className="text-lg text-gray-800 italic">
              "Professionisti nel loro lavoro! Molto rapidi, precisi e simpatici. Consigliatissimi!" - Luca, Varazze
            </p>
          </div>
        </SwiperSlide>

        {/* Quinta recensione */}
        <SwiperSlide>
          <div className="review bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 mb-4">
              <img
                src="/images/cliente5.jpg"
                alt="Laura"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="stars text-yellow-500 mb-4 text-xl" aria-label="5 stelle">
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
              <span className="star">&#9733;</span> {/* Stella piena */}
            </div>
            <p className="text-lg text-gray-800 italic">
              "Ho chiamato per un'emergenza e sono arrivati subito! Hanno risolto il problema in modo rapido e preciso. Servizio eccellente!" - Laura, Albenga
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

       {/* Freccia sinistra */}
      <button
        className="arrow left-0"
        onClick={goToPrevSlide} // Scorrere alla recensione precedente
      >
        <FaArrowLeft />
      </button>

      {/* Freccia destra */}
      <button
        className="arrow right-0"
        onClick={goToNextSlide} // Scorrere alla recensione successiva
      >
        <FaArrowRight />
      </button>
    </section>
  );
};

export default Reviews;