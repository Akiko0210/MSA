"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

const NavLink = ({
  name,
  url,
  index,
  active,
  setActive,
}: {
  name: string;
  url: string;
  index: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Link
      href={url}
      className={`w-20 text-center ${
        index === active ? `text-black` : `text-grey`
      }`}
      onClick={() => {
        setActive(index);
      }}
    >
      {name}
    </Link>
  );
};

const Navbar = () => {
  const elements: { name: string; url: string }[] = [
    { name: "Home", url: "/" },
    { name: "Team", url: "/team" },
    { name: "News", url: "/news" },
    { name: "Events", url: "/events" },
    { name: "Gallery", url: "/gallery" },
  ];
  const [active, setActive] = useState<number>(0);
  return (
    <div className="flex justify-between px-12 items-center border-y h-[10%]">
      <Link href="/">
        <Image src="/logo.png" height={200} width={200} alt="logo" />
      </Link>
      <div className="flex items-center">
        {elements.map(
          ({ name, url }: { name: string; url: string }, index: number) => {
            return (
              <NavLink
                key={index}
                name={name}
                url={url}
                index={index}
                active={active}
                setActive={setActive}
              />
            );
          }
        )}
      </div>
      <button className="button">Contact</button>
    </div>
  );
};

export default Navbar;
