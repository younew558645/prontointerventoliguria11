import type React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageSrc, link }) => {
  return (
    <Link to={link} className="block transition-transform duration-300 hover:-translate-y-2">
      <div className="bg-white p-6 rounded-lg shadow-md text-center h-full flex flex-col items-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-20 h-20 object-contain sm:w-24 md:w-28 mb-4" // Responsività per l'immagine
        />
        <h3 className="text-xl font-semibold text-dark">{title}</h3>
      </div>
    </Link>
  );
};

export default ServiceCard;

{/* Pulsante Chiama ora */}
<a
  href="tel:3770943352"
  className="btn-service call-now sm:text-sm md:text-base lg:text-lg"
>
  <i className="fas fa-phone sm:text-sm md:text-lg lg:text-xl"></i> {/* Riduci la dimensione delle icone in modalità mobile */}
  Chiamar ora
</a>

{/* Pulsante WhatsApp */}
<a
  href="https://wa.me/3770943352"
  className="btn-service whatsapp sm:text-sm md:text-base lg:text-lg"
>
  <i className="fab fa-whatsapp sm:text-sm md:text-lg lg:text-xl"></i> {/* Riduci la dimensione delle icone in modalità mobile */}
  WhatsApp
</a>
