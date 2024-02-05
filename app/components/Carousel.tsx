"use client";

import Image from "next/image";
import carousel1 from "../../public/carousel1.png";
import carousel2 from "../../public/carousel2.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export const Carousel = () => {
  const images = ["/carousel1.png", "/carousel2.png"];
  // const images = [carousel1, carousel2];
  const [index, setIndex] = useState(0);
  return (
    <div className="relative h-screen w-screen">
      <div className="h-[30px] w-[30px] border-2 border-grey rounded-full absolute z-10 cursor-pointer left-[30px] top-1/2 translate-y-[-50%] flex items-center justify-center">
        <FontAwesomeIcon
          color="grey"
          // size={30 as unknown as SizeProp}
          // fontSize={30}
          onClick={() => {
            setIndex((prev) =>
              Math.floor((prev - 1 + images.length) % images.length)
            );
          }}
          icon={faArrowLeft}
        />
      </div>
      <Image
        className="bg-cover bg-center duration-500"
        alt="Carousel1"
        src={images[index]}
        fill={true}
      />
      <div className="h-[30px] w-[30px] border-2 border-grey rounded-full absolute z-10 cursor-pointer right-[30px] top-1/2 translate-y-[-50%] -translate-x-full flex items-center justify-center">
        <FontAwesomeIcon
          color="grey"
          // size={30 as unknown as SizeProp}
          // fontSize={30}
          onClick={() => {
            setIndex((prev) =>
              Math.floor((prev + 1 + images.length) % images.length)
            );
          }}
          icon={faArrowRight}
        />
      </div>
    </div>
  );
};
