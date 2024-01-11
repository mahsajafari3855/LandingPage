import React from "react";
import Image from "next/image";

interface CustomButtonProps {
  iconSrc: string;
  label: string;
  backgroundColor: string;
  textColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  iconSrc,
  label,
  backgroundColor,
  textColor,
}) => {
  return (
    <button
      className={`rounded-full px-4 py-2 m-1 bg-${backgroundColor} text-${textColor}`}
    >
      <div className="flex items-center">
        <Image src={iconSrc} alt="Your Image" sizes="1" />
        <p className="ml-2">{label}</p>
      </div>
    </button>
  );
};

export default CustomButton;
