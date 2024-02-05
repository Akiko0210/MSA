import Image from "next/image";
import React from "react";

const Rectangle = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex py-20 w-[1400px] flex-row items-center justify-around z-20">
      <div className="h-[200px] w-[200px] relative">
        <Image alt="rectangle" src={image} fill={true} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-4xl mb-8">{title}</div>
        <div className="w-[800px]">{description}</div>
      </div>
    </div>
  );
};

export default Rectangle;
