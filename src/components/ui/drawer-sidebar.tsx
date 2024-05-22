"use client";

import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import EncLogo from "../../../public/assets/image/enc-solid-wood-logo.png";
import MenuIcon from "../../../public/assets/icons/icon-menu.png";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export interface IDrawerSidebar {
  listMenu: string[];
  sectionIds: string[];
  activeIndex: number;
  handleSetActive: (index: number) => void;
}

const DrawerSidebar: React.FC<IDrawerSidebar> = ({
  listMenu,
  sectionIds,
  activeIndex,
  handleSetActive,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="sm:hidden w-7 h-7">
        <button type="button" onClick={onOpen}>
          <Image src={MenuIcon} alt="menu-icon" />
        </button>
        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <div className="w-40 h-8">
                <Image src={EncLogo} alt="enc-logo" />
              </div>
            </DrawerHeader>
            <DrawerBody className="flex flex-col gap-5">
              {listMenu.map((item, index) => (
                <ScrollLink
                  key={index}
                  to={sectionIds[index]}
                  smooth={true}
                  duration={500}
                  className={`py-1 px-8 cursor-pointer ${
                    activeIndex === index ? "border-b-2 border-black" : ""
                  }`}
                  onSetActive={() => handleSetActive(index)}
                  onClick={() => handleSetActive(index)}
                >
                  {item}
                </ScrollLink>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default DrawerSidebar;
