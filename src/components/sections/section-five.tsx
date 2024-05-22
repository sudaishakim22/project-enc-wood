"use client";

import React from "react";

import EncDeckingProfilOne from "../../../public/assets/image/enc-decking-profil-1.png";
import EncFlooringProfilTwo from "../../../public/assets/image/enc-flooring-profil-2.png";
import { Text, Image, Button } from "@chakra-ui/react";

const SectionFive = () => {
  const handleOpenChatWA = () => {
    window.open(`https://wa.me/+6281932888647`, "_blank");
  };
  return (
    <>
      <div className="w-full md:h-[100vh] p-20 flex flex-col gap-10 md:gap-24 justify-center items-center bg-enc-light-grey">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-3/4 flex justify-center">
            <Image
              src={EncDeckingProfilOne.src}
              alt="Enc Decking Profil 1"
              className="w-full lg:w-3/4"
            />
          </div>
          <div className="w-full flex justify-center items-center lg:w-1/4">
            <Text className="text-2xl lg:text-3xl">Enc Decking Profil 1</Text>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-3/4 flex justify-center">
            <Image
              src={EncFlooringProfilTwo.src}
              alt="Enc Flooring Profil 1"
              className="w-full lg:w-3/4"
            />
          </div>
          <div className="w-full flex justify-center items-center lg:w-1/4">
            <Text className="text-2xl lg:text-3xl">Enc Flooring Profil 2</Text>
          </div>
        </div>
      </div>
      <div className="w-full py-10 px-5 flex justify-center items-center">
        <Button
          size="md"
          className="w-full h-[53px] md:w-[306px] md:!h-[65px] !bg-enc-green !font-normal !text-white"
          onClick={() => handleOpenChatWA()}
        >
          Check Availability And Inquire
        </Button>
      </div>
    </>
  );
};

export default SectionFive;
