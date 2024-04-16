"use client";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

interface CardData {
  image: string;
  title: string;
  description: string;
  date: string;
}

const Card = ({ image, title, description, date }: CardData) => {
  return (
    <div className="w-[30%] h-[600px]">
      <div className="w-full mb-2">
        {/* change this image and make it jsx item */}
        <Image
          alt="card image"
          src={image}
          // fill={true}
          height={1000}
          width={500}
        />
      </div>
      <div className="text-2xl font-bold leading-10 mb-2">{title}</div>
      <div className="leading-6">{description}</div>
      <div className="text-2xl font-bold leading-10 mt-2">{date}</div>
    </div>
  );
};

const EventsSlider = () => {
  const max: number = 3;
  const [current, setCurrrent] = useState(0);
  const cards = [
    {
      image: "/card1.png",
      title: "College application process",
      description: "For anyone who wants to enroll U.S. colleges.",
      date: "10 Nov 2023",
    },
    {
      image: "/card2.png",
      title: "Annual General Meeting",
      description:
        "MSA at Berkeley will host it’s annual general meeting on the 16th of Nov 2023. ",
      date: "16 Nov 2023",
    },
    {
      image: "/card3.png",
      title: "Winter Break - SKI TRIP",
      description:
        "For every Mongolian ethnic students out there in the west coast of the United States.",
      date: "24 Dec 2023",
    },
  ];
  return (
    <div className="p-40 w-full bg-neutral-100">
      <div className="font-bold text-5xl mb-8">Events</div>
      <div className="flex justify-between">
        <div className="w-[60%]">
          From here you'll find a lively showcase of upcoming and past
          gatherings, cultural celebrations, and academic discussions that bring
          to life the vibrant spirit of the Mongolian Students Association
        </div>
        <div className="flex items-center">
          <div
            className="h-12 border-black border-[1px] rounded-full flex items-center justify-center w-24"
            onClick={() =>
              setCurrrent((prev) => Math.floor((prev - 1 + max) % max))
            }
          >
            <FontAwesomeIcon color="grey" icon={faArrowLeft} />
          </div>
          <div className="mx-4">
            {`${(current + 1).toString().padStart(2, "0")}/${max
              .toString()
              .padStart(2, "0")}`}
          </div>
          <div
            className="h-12 border-black border-[1px] rounded-full flex items-center justify-center w-24"
            onClick={() =>
              setCurrrent((prev) => Math.floor((prev + 1 + max) % max))
            }
          >
            <FontAwesomeIcon color="grey" icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        {cards.map((card: CardData, ind: number) => (
          <Card key={ind} {...card} />
        ))}
      </div>
    </div>
  );
};

export default EventsSlider;
