import Image from "next/image";
import { Carousel } from "./components/Carousel";
import Rectangle from "./components/Rectangle";
import Team from "./components/Team";
import EventsSlider from "./components/EventsSlider";
import Consul from "./components/Consul";
// import

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col flex-wrap items-center overflow-y-auto overflow-x-hidden relative">
      <Carousel />
      {/* < */}
      <Rectangle
        image="/rectangle1.png"
        title="Welcome to the Home of all Mongol Students"
        description="Our mission is to share and protect Mongolian culture while fostering a supportive and inclusive community for students and faculty at the University of California Berkeley."
      />
      <Team />
      <EventsSlider />
      {/* <Consul /> */}
    </main>
  );
}
