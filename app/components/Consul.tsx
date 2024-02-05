import Image from "next/image";
import React from "react";

const Consul = () => {
  return (
    <div className="p-40 w-full h-[800px] relative">
      <Image alt="consul" src={"/consul.png"} fill={true} />
    </div>
  );
};

export default Consul;
