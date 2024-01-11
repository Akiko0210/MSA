import Image from "next/image"
import carousel1 from "../../public/carousel1.png"
import carousel2 from "../../public/carousel2.png"


export const Carousel = () => {
  return (
    <div>
        <Image alt="Carousel1" src={carousel1} fill={true}></Image>
        <Image alt="Carousel2" src={carousel2} fill={true}></Image>
        {/* <Image src={"/carousel2.png"}></Image> */}
    </div>
  )
}
