import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="p-20 bg-neutral-100 w-full flex items-center justify-center">
      <Image alt="team" src="/team.png" width={1000} height={800} />
      <div className="h-[400px] w-[400px] bg-[#23A6F01A] relative">
        <div className="p-10 h-[400px] w-[400px] rounded-3xl border bg-white absolute bottom-[50px] right-[50px] flex flex-col justify-between">
          <div className="flex">
            <div>
              <div className="text-5xl mb-7 leading-10">Our Team</div>
              <div className="leading-8 mr-2">
                We are a team of Mongolian students passionate about making a
                positive change at UC Berkeley and beyond.
              </div>
            </div>
            <Image src={"/mongol.png"} alt="mongol" width={100} height={200} />
          </div>
          <div className="flex">
            <div className="button flex-1">Meet The Team</div>
            <div className="ml-1 border-blue h-12 w-12 border-[1px] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
