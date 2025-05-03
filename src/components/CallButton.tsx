import type React from 'react';

interface CallButtonProps {
  phoneNumber?: string;
  className?: string;
}

const CallButton: React.FC<CallButtonProps> = ({
  phoneNumber = "377 094 3352",
  className = ""
}) => {
  const buttonClasses =
    "flex items-center justify-center text-lg bg-primary py-3 px-8 rounded-md hover:bg-primary-dark transition-all duration-300 ease-in-out animate__animated animate__fadeIn";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`${buttonClasses} ${className}`}
    >
      <span className="mr-2">✆</span>
      <span>CHIAMA SUBITO! {phoneNumber}</span>
    </a>
  );
};

export default CallButton;