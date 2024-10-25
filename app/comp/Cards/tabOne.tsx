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
  title: string;
}

const TabOne: React.FC<TabProps> = ({ cards, title }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-2xl font-bold mb-1">{title}</h1>
      <div className="flex flex-wrap gap-4">
        {cards.map((card) => (
          <CardOne
            key={card.number}
            number={card.number}
            imageSrc={card.imageSrc}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default TabOne;
