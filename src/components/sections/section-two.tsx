import React from "react";
import Carousel, { ISlides } from "../ui/carousel/carousel";
import SliderImageOne from "../../../public/assets/image/slider-image-1.png";
import SliderImageTwo from "../../../public/assets/image/slider-image-2.png";
import SliderImageThree from "../../../public/assets/image/slider-image-3.png";
import { Button } from "@chakra-ui/react";

const slides: ISlides[] = [
  {
    src: SliderImageOne,
    alt: "Slider Image 1",
  },
  {
    src: SliderImageTwo,
    alt: "Slider Image 1",
  },
  {
    src: SliderImageThree,
    alt: "Slider Image 1",
  },
];

const SectionTwo = () => {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <Carousel slides={slides} hasArrow={false} />
      <div className="w-full md:w-3/5 p-6 md:px-16 md:py-20 flex flex-col gap-8 bg-enc-light-grey">
        <div>
          <h1 className="font-medium text-6xl mb-5">Elevating Woodcraft</h1>
        </div>
        <div>
          <p>
            Handling woodworking from the upstream has been our strong point. By
            handling orders for exports and local projects, we know what the
            market wants. However as we surf through the deeps of the forest, we
            notice that the woodcraft industry is more than just “what the
            market wants” it is far more complex than that. In summary there are
            still so many variables that makes a certain types of wood is a
            valuable one.
            <br />
            <br />
            Did you know that a same type of wood that grows on a different type
            of soil and environment can change the overall characteristics of
            density and colours. Not to forget there are still so many type of
            solid wood we can bring into the table but rest easy, we are here to
            brings you the finest solid wood working possible.
            <br />
            <br /> A formula one car without a race car driver are not gonna win
            championships. As the student of the game we are learning everyday
            to become the best in woodcraft installation. All sort of challenges
            passes by as we hone our skills to make the cleanest and most
            effective way out of any situation.
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <Button
            size="md"
            height="48px"
            width="200px"
            // variant={"outline"}
            backgroundColor={"transparent"}
            className="!border-2 !border-enc-green !font-normal !text-enc-black"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
