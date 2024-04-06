import Image from "next/image";
import React from "react";

const Consul = () => {
  return (
    <div className="p-40 w-full h-[800px] flex justify-between">
      <div className="relative z-20">
        <div className="z-10 h-1 w-52 bg-blue absolute rotate-45 rounded -right-20" />
        <div className="z-10 h-1 w-40 bg-blue absolute rotate-45 rounded -right-16 top-5" />
        <Image
          className="rounded-3xl"
          alt="consul"
          src={"/consul.png"}
          height={100}
          width={700}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Consul;
