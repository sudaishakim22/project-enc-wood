import React from "react";
import Carousel from "../ui/carousel/carousel";
import { Text, Image, Stack, Button } from "@chakra-ui/react";

import Product2A from "../../../public/assets/image/product-2a.png";
import Product2B from "../../../public/assets/image/product-2b.png";
import Product2C from "../../../public/assets/image/product-2c.png";
import Product2D from "../../../public/assets/image/product-2d.png";
import Product2E from "../../../public/assets/image/product-2e.png";
import Product2F from "../../../public/assets/image/product-2f.png";

import { BsFillStarFill } from "react-icons/bs";

const dataProducts = [
  {
    name: "Krikis",
    origin: "North Maluku",
    hardness: 5,
    durability: 5,
    lifeSpan: "approx 10+ years (depends on surrounding and treatment)",
    description: `In the world of wood working business krikis is known to be one of
        the most beautiful types of wood exist. This underrated wood remain
        lowkey in the public eye due to its rarity and it was just several
        years back this wood is open for legally sold in the market. It has
        a very tight fiber component which makes the surface very smooth for
        flooring, and if it gets wet the surface shows its true color to a
        more vibrant red it has a great durability, hardness and a very
        unique one of a kind pattern.`,
    productImg: Product2A.src,
  },
  {
    name: "Bengkirai",
    origin: "Borneo",
    hardness: 4,
    durability: 3,
    lifeSpan: "approx 7-10++ years (depends on surrounding and treatment)",
    description: `Known to be a cheaper alternative from ulin, in terms of hardness it is safe to say it has a hardness close to ulin. With its rough surface it has a natural anti-slip feature. A great decking for outdoor with more affordable price point.`,
    productImg: Product2B.src,
  },
  {
    name: "Jati",
    origin: "Java",
    hardness: 3,
    durability: 3,
    lifeSpan: "approximately 10+ years (depends on surrounding and treatment)",
    description: `The beauty of its organic curvy pattern has been known for decades. The trend that started in the 80s made Jati quite in demand and rare, consequently driving its price up to fantastic level. Does its visual appeal outweigh its technical specifications? Yes, it is simply that beautiful.`,
    productImg: Product2C.src,
  },
  {
    name: "Ulin",
    origin: "Borneo",
    hardness: 5,
    durability: 5,
    lifeSpan: "approximately 10+ years (depends on surrounding and treatment)",
    description: `Even the toughest, strongest warrior might find something to learn from this wood. Ulin gets stronger and darker when they get exposed to water, making it suitable for extreme outdoor use. Its specifications have been tested and trusted in docking and railway structures. These extreme applications give Ulin a rugged and tough appearance, making it the perfect complement to industrial and brutal aesthetics.`,
    productImg: Product2D.src,
  },
  {
    name: "Merbau",
    origin: "Papua",
    hardness: 4,
    durability: 4,
    lifeSpan: "approximately 10+ years (depends on surrounding and treatment)",
    description: `The all rounder, Merbau have a straight dark texture resulted from its dark sap, it’s textures are mostly neat and complement the geometry of the room, can be coated to make it look more vibrant or darker.`,
    productImg: Product2E.src,
  },
  {
    name: "Kruing",
    origin: "Borneo",
    hardness: 3,
    durability: 3,
    lifeSpan: "approx 7-10++ years (depends on surrounding and treatment)",
    description: `It is fair to say that Keruing is an entry level to the solid-wood game. It is quite durable and has some hardness into it. It is still harder the most wood`,
    productImg: Product2F.src,
  },
];

const SectionFour = () => {
  const slidesData = dataProducts.map((d) => (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-4 px-8 justify-between">
      <div className="w-full lg:w-1/2">
        <Text fontSize={"6xl"} fontWeight={500} textAlign={"left"} mb={5}>
          {d.name}
        </Text>
        <Stack spacing={2}>
          <Text>Origin: {d.origin}</Text>
          <Text display={"flex"} alignItems={"center"} gap={1}>
            Hardness:
            <span className="flex gap-1">
              {Array.from(Array(d.hardness), (e) => (
                <BsFillStarFill
                  key={d.name + e}
                  style={{ width: "10px", height: "10px" }}
                />
              ))}
            </span>
          </Text>
          <Text display={"flex"} alignItems={"center"} gap={1}>
            Durability:
            <span className="flex gap-1">
              {Array.from(Array(d.durability), (e) => (
                <BsFillStarFill
                  key={d.name + e}
                  style={{ width: "10px", height: "10px" }}
                />
              ))}
            </span>
          </Text>
          <Text>Life span: {d.lifeSpan}</Text>
          <Text>{d.description}</Text>
        </Stack>
        <div className="w-full mt-5">
          <Button
            size="md"
            height="48px"
            backgroundColor={"transparent"}
            className="w-full lg:w-[200px] !border-2 !border-enc-green !font-normal !text-enc-black"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src={d.productImg}
          alt="ENC Krikis Description"
          className="w-full"
        />
      </div>
    </div>
  ));

  return (
    <div className="w-[100%] m-auto lg:p-10">
      <Carousel hasArrow={true} slides={slidesData} hasIndicators={false} />
    </div>
  );
};

export default SectionFour;
