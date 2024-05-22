"use client";

import React from "react";

import EncLogo from "../../../public/assets/image/enc-solid-wood-logo.png";
import Image from "next/image";
import { Stack, Text } from "@chakra-ui/react";

//icons
import { BsInstagram, BsTiktok, BsWhatsapp, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const scrollToElement = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-10 p-4 md:p-20 border-t-2 border-black">
      <div className="w-full md:w-3/4 flex flex-col gap-10">
        <div className="w-40 h-8">
          <Image src={EncLogo} alt="enc-logo" />
        </div>
        <Text className="w-full md:w-1/2">
          Handling woodworking from the upstream has been our strong point. By
          handling orders for exports and local projects, we know what the
          market wants. However as we surf through the deeps of the forest, we
          notice that the woodcraft industry is more than just “what the market
          wants” it is far more complex than that. In summary there are still so
          many variables that makes a certain types of wood is a valuable one.
        </Text>
        <Text>&#169; 2024 ENC</Text>
      </div>
      <div className="w-full md:w-1/4">
        <Stack spacing={4} className="md:mt-20">
          <Text
            className="cursor-pointer"
            onClick={() => scrollToElement("jumbotron")}
          >
            Home
          </Text>
          <Text
            className="cursor-pointer"
            onClick={() => scrollToElement("section-three")}
          >
            Product
          </Text>
          <Text
            className="cursor-pointer"
            onClick={() =>
              window.open(`https://wa.me/+6281932888647`, "_blank")
            }
          >
            Contact Us
          </Text>
          <Stack spacing={4} direction={"row"} className="mt-10 md:mt-20">
            <BsInstagram />
            <BsTiktok />
            <BsWhatsapp />
            <BsFacebook />
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Footer;
