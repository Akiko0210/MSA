"use client";
import Image from "next/image";
import React, { useState } from "react";

const Corner = () => {
  return (
    <div className={``}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0V24C24 10.7452 13.2548 0 0 0L24 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

interface Image {
  image: string;
  title: string;
  date: string;
}

const Card = ({ data }: { data: Image }) => {
  return (
    <div className="">
      <div className="relative">
        <div className="relative h-[300px] rounded-3xl overflow-hidden">
          <Image fill src={data.image} alt="img" />
        </div>
        <div className="absolute right-0 top-0 flex flex-col items-end">
          <div className="flex">
            <Corner />
            <div className="h-16 w-16 flex rounded-bl-3xl justify-center items-center bg-white">
              <div className="h-12 w-12 rounded-full bg-blue flex justify-center items-center">
                <Image src={"/Arrow 1.svg"} alt="img" height={15} width={15} />
              </div>
            </div>
          </div>
          <Corner />
        </div>
        {/* <Corner top={16} right={0} /> */}
      </div>
      <div className="font-roboto text-md font-bold my-2">{data.title}</div>
      <div className="font-roboto font-medium text-[#41495D] text-sm ">
        {data.date}
      </div>
    </div>
  );
};

const CardLine = ({
  image1,
  image2,
  reverse = false,
}: {
  image1: Image;
  image2: Image;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex mt-10 ${reverse && "flex-row-reverse"} justify-between`}
    >
      <div className="w-1/2">
        <Card data={image1} />
      </div>
      <div className="w-2/5">
        <Card data={image2} />
      </div>
    </div>
  );
};

const LatestNews = () => {
  const [active, setActive] = useState(0);
  const images: Image[] = [
    {
      image: "/news1.png",
      title:
        "Pope praises Mongolia's tradition of religious freedom from times of Genghis Khan at start of visit",
      date: "2023/12/04",
    },
    {
      image: "/news2.png",
      title: "PelanMongolia is home to the world’s first national park",
      date: "2023/12/04",
    },
    {
      image: "/news4.png",
      title:
        "Mongolia: Emmanuel Macron supports controversial uranium mining during official visit",
      date: "2023/12/04",
    },
    {
      image: "/news3.png",
      title: "New UNESCO Biosphere Reserves in Asia",
      date: "2023/12/04",
    },
  ];
  return (
    <div className="w-full p-40">
      <div className="text-4xl">Latest News</div>
      <div className="flex justify-between">
        <div className="w-8/12">
          Join our newsletter to get the latest news and updates on Mongolian
          student life at the University of California Berkeley and Mongolia.
        </div>
        <div className="flex rounded-full border-2 p-2">
          {["Student", "Events", "Cultural"].map(
            (name: string, index: number) => {
              return (
                <div
                  key={index}
                  className={`${
                    index == active && "bg-blue text-white"
                  } p-3 cursor-pointer w-20 text-center rounded-full leading-3`}
                  onClick={() => setActive(index)}
                >
                  {name}
                </div>
              );
            }
          )}
        </div>
      </div>
      <CardLine image1={images[0]} image2={images[1]} />
      <CardLine image1={images[2]} image2={images[3]} reverse={true} />
    </div>
  );
};

export default LatestNews;
