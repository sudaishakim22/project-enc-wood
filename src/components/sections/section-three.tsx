"use client";

import React, { useEffect, useState } from "react";
import Carousel from "../ui/carousel/carousel";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

// Product Images
import ProductImgOne from "../../../public/assets/image/product-one.png";
import ProductImgTwo from "../../../public/assets/image/product-two.png";
import ProductImgThree from "../../../public/assets/image/product-three.png";
import ProductImgFour from "../../../public/assets/image/product-four.png";
import ProductImgFive from "../../../public/assets/image/product-five.png";
import ProductImgSix from "../../../public/assets/image/product-six.png";

const productList = [
  {
    krikis: [
      {
        name: "Flooring",
        value: "1,5cm x 9cm x 30-120cm",
      },
      {
        name: "Decking",
        value: "1,9cm x 9cm x 90-390cm",
      },
      {
        name: "Lumberceiling",
        value: "1,2cm x 9cm x 150-240cm",
      },
      {
        name: "Wall & Cladding",
        value: "1,2cm x 9cm x 90-150cm",
      },
    ],
  },
  {
    bengkirai: [
      {
        name: "Flooring",
        value: "N/A",
      },
      {
        name: "Decking",
        value: "1,9cm x 9cm x 90-390cm",
      },
      {
        name: "Lumberceiling",
        value: "1,2cm x 9cm x 150-240cm",
      },
      {
        name: "Wall & Cladding",
        value: "1,2cm x 9cm x 90-150cm",
      },
    ],
  },
  {
    merbau: [
      {
        name: "Flooring",
        value: "1,5cm x 9cm x 30-120cm",
      },
      {
        name: "Decking",
        value: "1,9cm x 9cm x 90-390cm",
      },
      {
        name: "Lumberceiling",
        value: "1,2cm x 9cm x 150-240cm",
      },
      {
        name: "Wall & Cladding",
        value: "1,2cm x 9cm x 90-150cm",
      },
    ],
  },
  {
    jati: [
      {
        name: "Flooring",
        value: "N/A",
      },
      {
        name: "Decking",
        value: "1,9cm x 9cm x 90-390cm",
      },
      {
        name: "Lumberceiling",
        value: "1,2cm x 9cm x 150-240cm",
      },
      {
        name: "Wall & Cladding",
        value: "1,2cm x 9cm x 90-150cm",
      },
    ],
  },
  {
    ulin: [
      {
        name: "Flooring",
        value: "1,5cm x 9cm x 30-120cm",
      },
      {
        name: "Decking",
        value: "1,9cm x 9cm x 90-390cm",
      },
      {
        name: "Lumberceiling",
        value: "1,2cm x 9cm x 150-240cm",
      },
      {
        name: "Wall & Cladding",
        value: "1,2cm x 9cm x 90-150cm",
      },
    ],
  },
  {
    keruing: [
      {
        name: "Flooring",
        value: "1,5cm x 9cm x 30-120cm",
      },
      {
        name: "Decking",
        value: "1,9cm x 9cm x 90-390cm",
      },
      {
        name: "Lumberceiling",
        value: "1,2cm x 9cm x 150-240cm",
      },
      {
        name: "Wall & Cladding",
        value: "1,2cm x 9cm x 90-150cm",
      },
    ],
  },
];

const SectionThree = () => {
  const windowInnerWitdh = window.innerWidth;
  const [width, setWidth] = useState(windowInnerWitdh);
  const breakpoint = 876;

  const handleOpenChatWA = () => {
    window.open(`https://wa.me/+6281932888647`, "_blank");
  };

  const slides = [
    <div>
      <Card maxW="sm" className="!bg-[#ebf1eb]">
        <CardBody>
          <Image src={ProductImgOne.src} alt="ENC Krikis" />
          <Stack mt="6" spacing="3">
            <Heading size="md">ENC Krikis</Heading>
            <Text>Natural Finish & UV Coat (Flooring)</Text>
            {productList[0].krikis?.map(({ name, value }, index) => (
              <div className="grid grid-cols-5 gap-1" key={"krikis" + index}>
                <Text className="col-span-2">{name}</Text>
                <Text className="col-span-3 text-right">{value}</Text>
              </div>
            ))}
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              size="md"
              height="48px"
              width="200px"
              backgroundColor={"transparent"}
              className="!border-2 !border-enc-green !font-normal !text-enc-black"
              onClick={handleOpenChatWA}
            >
              Inquire
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>,
    <div>
      <Card maxW="sm" className="!bg-[#ebf1eb]">
        <CardBody>
          <Image src={ProductImgTwo.src} alt="ENC Bengkirai" />
          <Stack mt="6" spacing="3">
            <Heading size="md">ENC Bengkirai</Heading>
            <Text>Natural Finish</Text>
            {productList[1].bengkirai?.map(({ name, value }, index) => (
              <div className="grid grid-cols-5 gap-1" key={"bengkirai" + index}>
                <Text className="col-span-2">{name}</Text>
                <Text className="col-span-3 text-right">{value}</Text>
              </div>
            ))}
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              size="md"
              height="48px"
              width="200px"
              backgroundColor={"transparent"}
              className="!border-2 !border-enc-green !font-normal !text-enc-black"
              onClick={handleOpenChatWA}
            >
              Inquire
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>,
    <div>
      <Card maxW="sm" className="!bg-[#ebf1eb]">
        <CardBody>
          <Image src={ProductImgThree.src} alt="ENC Krikis" />
          <Stack mt="6" spacing="3">
            <Heading size="md">ENC Merbau</Heading>
            <Text>Natural Finish & UV Coat (Flooring)</Text>
            {productList[2].merbau?.map(({ name, value }, index) => (
              <div className="grid grid-cols-5 gap-1" key={"merbau" + index}>
                <Text className="col-span-2">{name}</Text>
                <Text className="col-span-3 text-right">{value}</Text>
              </div>
            ))}
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              size="md"
              height="48px"
              width="200px"
              backgroundColor={"transparent"}
              className="!border-2 !border-enc-green !font-normal !text-enc-black"
              onClick={handleOpenChatWA}
            >
              Inquire
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>,
    <div>
      <Card maxW="sm" className="!bg-[#ebf1eb]">
        <CardBody>
          <Image src={ProductImgFour.src} alt="ENC Krikis" />
          <Stack mt="6" spacing="3">
            <Heading size="md">ENC Jati</Heading>
            <Text>Natural Finish</Text>
            {productList[3].jati?.map(({ name, value }, index) => (
              <div className="grid grid-cols-5 gap-1" key={"jati" + index}>
                <Text className="col-span-2">{name}</Text>
                <Text className="col-span-3 text-right">{value}</Text>
              </div>
            ))}
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              size="md"
              height="48px"
              width="200px"
              backgroundColor={"transparent"}
              className="!border-2 !border-enc-green !font-normal !text-enc-black"
              onClick={handleOpenChatWA}
            >
              Inquire
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>,
    <div>
      <Card maxW="sm" className="!bg-[#ebf1eb]">
        <CardBody>
          <Image src={ProductImgFive.src} alt="ENC Krikis" />
          <Stack mt="6" spacing="3">
            <Heading size="md">ENC Ulin</Heading>
            <Text>Natural Finish & UV Coat (Flooring)</Text>
            {productList[4].ulin?.map(({ name, value }, index) => (
              <div className="grid grid-cols-5 gap-1" key={"ulin" + index}>
                <Text className="col-span-2">{name}</Text>
                <Text className="col-span-3 text-right">{value}</Text>
              </div>
            ))}
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              size="md"
              height="48px"
              width="200px"
              backgroundColor={"transparent"}
              className="!border-2 !border-enc-green !font-normal !text-enc-black"
              onClick={handleOpenChatWA}
            >
              Inquire
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>,
    <div>
      <Card maxW="sm" className="!bg-[#ebf1eb]">
        <CardBody>
          <Image src={ProductImgSix.src} alt="ENC Krikis" />
          <Stack mt="6" spacing="3">
            <Heading size="md">ENC Keruing</Heading>
            <Text>Natural Finish & UV Coat (Flooring)</Text>
            {productList[5].keruing?.map(({ name, value }, index) => (
              <div className="grid grid-cols-5 gap-1" key={"keruing" + index}>
                <Text className="col-span-2">{name}</Text>
                <Text className="col-span-3 text-right">{value}</Text>
              </div>
            ))}
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              size="md"
              height="48px"
              width="200px"
              backgroundColor={"transparent"}
              className="!border-2 !border-enc-green !font-normal !text-enc-black"
              onClick={handleOpenChatWA}
            >
              Inquire
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>,
  ];

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleDownloadPdf = () => {
    // using Java Script method to get PDF file
    fetch("/assets/Enc-ProductCatalog.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Enc-ProductCatalog.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="w-[90%] m-auto py-10">
      <Carousel
        hasArrow={true}
        slides={slides}
        show={width < breakpoint ? 1 : 3}
      />
      <div className="w-full text-center mt-4 md:px-36">
        <Button
          size="md"
          height="40px"
          width={"100%"}
          className="!bg-enc-green !font-normal !text-white"
          onClick={handleDownloadPdf}
        >
          Download Our Catalogue PDF
        </Button>
      </div>
    </div>
  );
};

export default SectionThree;
