import Image from "next/image";
import Header from "./comp/header/header";
import Leftbar from "./comp/leftbar/leftbar";
import Tab from "./comp/Cards/tabOne";
import image1 from "../public/images/music2.jpg";
export default function Home() {
  const cards = [
    {
      number: 1,
      imageSrc: "../public/images/music2.jpg",
      text: "This is the first card",
    },
    {
      number: 2,
      imageSrc: "../public/images/music2.jpg",
      text: "This is the second card",
    },
    {
      number: 3,
      imageSrc: "../public/images/music2.jpg",
      text: "This is the third card",
    },
    {
      number: 4,
      imageSrc: "../public/images/music2.jpg",
      text: "This is the fourth card",
    },
    {
      number: 5,
      imageSrc: "../public/images/music2.jpg",
      text: "This is the fifth card",
    },
  ];
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main content (Leftbar and rest of the content) */}
      <div className="flex flex-grow min-h-0">
        <Leftbar />

        {/* Main content area */}
        <div className="flex-grow p-4 overflow-hidden">
          {/* Tab with dynamic cards */}
          <Tab cards={cards} />
          <Tab cards={cards} />
        </div>
      </div>
    </div>
  );
}
