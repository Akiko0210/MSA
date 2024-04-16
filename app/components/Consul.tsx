import Image from "next/image";
import React from "react";

const Consul = () => {
  return (
    <div className="p-40 w-full h-[800px] flex justify-between">
      <div className="relative z-20 h-full">
        <div className="-z-10 h-[3px] w-52 bg-blue absolute rotate-45 rounded -right-20 top-5" />
        <div className="-z-10 h-[3px] w-40 bg-blue absolute rotate-45 rounded -right-4 top-8" />
        <Image
          className="rounded-3xl z-20"
          alt="consul"
          src={"/consul.png"}
          height={100}
          width={600}
        />
        <div className="-z-10 h-[3px] w-52 bg-blue absolute rotate-45 rounded -left-28 bottom-20" />
        <div className="-z-10 h-[3px] w-40 bg-blue absolute rotate-45 rounded -left-12 bottom-24" />
        <div className="-z-10 h-[3px] w-80 bg-blue absolute rotate-45 rounded -left-24 bottom-28" />
      </div>
      <div className="w-[500px] h-[400px] ml-20 flex flex-col justify-between">
        <div className="text-blue">Consul General</div>
        <div className="bold text-4xl font-semibold">
          Consul General's Message Mongolian Youth Initiative
        </div>
        <div>
          <div className="text-balance font-roboto text-lg font-thin">
            “We deeply value the Mongolian Students Association at UC Berkeley
            for their exceptional dedication to promoting and preserving our
            rich Mongolian heritage. Their efforts in building a vibrant
            community and fostering cultural understanding are truly commendable
            and play a crucial role in enriching the cultural tapestry of the
            university."
          </div>
          <div className="font-semibold font-roboto">Munkhbaatar Begzjav</div>
        </div>
      </div>
    </div>
  );
};

export default Consul;
