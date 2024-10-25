// components/Card.tsx
import React from "react";
import image1 from "../../../public/images/music2.jpg";
import Image from "next/image";

interface CardProps {
  number: number;
  imageSrc: string;
  text: string;
}

const CardOne: React.FC<CardProps> = ({ number, imageSrc, text }) => {
  return (
    <div className="border rounded-lg shadow-lg h-80 overflow-hidden relative">
      {/* Top-left box with the card number */}
      <div className="absolute top-2 left-2 bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
        {number}
      </div>

      {/* Top half: Image */}
      <div className="h-1/2 bg-gray-200">
        {/* <Image
          src={image1}
          alt={`Card ${number}`}
          layout="fill" // Allows responsive resizing
          objectFit="cover" // Ensures the image fills the container
          className="rounded-t-lg"
        /> */}
      </div>

      {/* Bottom half: Text */}
      <div className="h-1/2 p-4 bg-white">
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default CardOne;
