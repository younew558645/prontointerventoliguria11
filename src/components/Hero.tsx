import type React from 'react';
import CallButton from './CallButton';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle = "Pronto intervento rapido e professionale 24 ore su 24 per ogni emergenza!",
  backgroundImage = "/images/slider.jpg"
}) => {
  const buttonClasses =
    "flex items-center justify-center text-lg bg-primary py-3 px-8 rounded-md hover:bg-primary-dark transition-all duration-300 ease-in-out animate__animated animate__fadeIn";

  return (
    <div
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-50" />
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn shadow-lg">{title}</h1>
        {subtitle && <p className="text-xl mb-8 animate__animated animate__fadeIn">{subtitle}</p>}
        <div className="flex flex-col items-center space-y-4">
          <CallButton className={buttonClasses} />
          <a
            href="https://wa.me/+393770943352?text=Ciao,%20ho%20bisogno%20di%20un%20pronto%20intervento.%20Mi%20puoi%20aiutare?"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClasses} flex items-center justify-center bg-green-500 hover:bg-green-600`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 mr-2"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.106 1.515 5.845L0 24l6.348-1.497A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.803 17.197c-.247.694-1.44 1.36-2.01 1.447-.514.078-1.18.11-1.91-.12-.44-.14-1.01-.33-1.74-.65-3.07-1.33-5.07-4.56-5.23-4.79-.16-.23-1.25-1.66-1.25-3.17 0-1.51.79-2.26 1.07-2.57.28-.31.62-.39.83-.39.21 0 .42.002.6.01.19.01.45-.073.71.54.27.62.92 2.14 1 2.3.08.16.13.35.03.56-.1.21-.15.34-.3.52-.15.18-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.75 1.23 1.6 2 .99.88 1.83 1.16 2.12 1.29.29.13.46.11.63-.07.17-.18.73-.85.93-1.14.2-.29.4-.24.67-.14.27.1 1.7.8 1.99.94.29.14.49.21.56.33.07.12.07.71-.18 1.4z" />
            </svg>
            <span>Chatta subito su WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
