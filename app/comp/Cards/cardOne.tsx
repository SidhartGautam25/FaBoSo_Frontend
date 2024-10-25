// components/Card.tsx
import React from "react";
import Image from "next/image";

interface CardProps {
  number: number;
  imageSrc: string;
  text: string;
}

const CardOne: React.FC<CardProps> = ({ number, imageSrc, text }) => {
  return (
    <div className="border rounded-lg shadow-lg relative flex flex-col w-56 h-80 overflow-hidden">
      {/* Top-left box with the card number */}
      <div className="absolute top-2 left-2 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center z-10">
        {number}
      </div>

      {/* Image Section */}
      <div className="relative h-1/2">
        <Image
          src={imageSrc}
          alt={`Card ${number}`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 p-4 bg-white">
        <p className="text-gray-700 text-center">{text}</p>
      </div>
    </div>
  );
};

export default CardOne;
