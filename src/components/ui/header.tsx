"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import EncLogo from "../../../public/assets/image/enc-solid-wood-logo.png";
import DrawerSidebar from "./drawer-sidebar";
import { Link as ScrollLink } from "react-scroll";

const listMenu = ["Home", "Product", "Contact Us"];
const sectionIds = ["jumbotron", "section-three", "contact-us"];

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActive = (index: number) => {
    setActiveIndex(index);

    if (index == 2) {
      window.open(`https://wa.me/+6281932888647`, "_blank");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map((id) => document.getElementById(id));
      const offsets = sections.map(
        (section) => section?.getBoundingClientRect().top
      );
      const index = offsets.findIndex(
        (offset) => offset && offset >= 0 && offset <= window.innerHeight / 2
      );
      if (index !== -1 && index !== activeIndex) {
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <div className="flex justify-between items-center px-4 lg:px-8  py-6 z-[999] bg-[#fff] fixed top-0 left-0 w-full">
      <div className="w-40 h-8">
        <Image src={EncLogo} alt="enc-logo" />
      </div>
      <nav className="hidden sm:flex items-center justify-center">
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
      </nav>
      <DrawerSidebar
        listMenu={listMenu}
        sectionIds={sectionIds}
        activeIndex={activeIndex}
        handleSetActive={handleSetActive}
      />
    </div>
  );
};

export default Header;
