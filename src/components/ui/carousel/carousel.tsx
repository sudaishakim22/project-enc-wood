"use client";

import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image, { StaticImageData } from "next/image";

import "./carousel.css";

export interface ISlides {
  src: string | StaticImageData;
  alt: string;
}

export interface ICarousel {
  hasArrow?: boolean;
  hasIndicators?: boolean;
  slides: ISlides[] | React.JSX.Element[];
  show?: number;
}

const Carousel: React.FC<ICarousel> = ({
  hasArrow = true,
  hasIndicators = true,
  slides,
  show = 1,
}) => {
  const [slide, setSlide] = useState(0);
  const totalGroups = Math.ceil(slides.length / show);

  const nextSlide = () => {
    // setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    setSlide((prevSlide) =>
      prevSlide + show >= slides.length ? 0 : prevSlide + show
    );
  };

  const prevSlide = () => {
    // setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    if (slide == 0) {
      return;
    }
    setSlide((prevSlide) =>
      prevSlide - show < 0 ? slides.length - show : prevSlide - show
    );
  };

  const goToGroup = (groupIndex: number) => {
    setSlide(groupIndex * show);
  };

  const isSlidesArray = (slides: any[]): slides is ISlides[] => {
    return slides.every((slide) => {
      return typeof slide === "object" && slide.hasOwnProperty("src");
    });
  };

  if (isSlidesArray(slides)) {
    return (
      <div className="carousel">
        {hasArrow && (
          <AiOutlineLeft onClick={prevSlide} className="arrow arrow-left" />
        )}

        {slides.slice(slide, slide + show).map((item, idx) => {
          return (
            <Image src={item.src} alt={item.alt} key={idx} className="slide" />
          );
        })}
        {hasArrow && (
          <AiOutlineRight onClick={nextSlide} className="arrow arrow-right" />
        )}
        <span className="indicators">
          {Array.from({ length: totalGroups }).map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide / show === idx
                    ? "indicator"
                    : "indicator indicator-inactive"
                }
                onClick={() => goToGroup(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    );
  }

  return (
    <div className="!w-full carousel">
      {hasArrow && (
        <AiOutlineLeft onClick={prevSlide} className="arrow arrow-left" />
      )}

      <div className="flex gap-6 p-4 mb-8">
        {slides.slice(slide, slide + show).map((item, idx) => {
          return (
            <div key={idx} className="slide">
              {item}
            </div>
          );
        })}
      </div>
      {hasArrow && (
        <AiOutlineRight onClick={nextSlide} className="arrow arrow-right" />
      )}
      {hasIndicators && (
        <span className="indicators">
          {Array.from({ length: totalGroups }).map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide / show === idx
                    ? "indicator"
                    : "indicator indicator-inactive"
                }
                onClick={() => goToGroup(idx)}
              ></button>
            );
          })}
        </span>
      )}

      {/* <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span> */}
    </div>
  );
};

export default Carousel;
