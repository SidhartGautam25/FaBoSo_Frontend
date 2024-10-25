// components/Tab.tsx
import React from "react";
import CardOne from "./cardOne";

interface CardItem {
  number: number;
  imageSrc: string;
  text: string;
}

interface TabProps {
  cards: CardItem[];
}

const TabOne: React.FC<TabProps> = ({ cards }) => {
  return (
    <div className="flex w-full h-full">
      {cards.map((card) => (
        <div key={card.number} className="flex-1 ">
          <CardOne
            number={card.number}
            imageSrc={card.imageSrc}
            text={card.text}
          />
        </div>
      ))}
    </div>
  );
};

export default TabOne;
