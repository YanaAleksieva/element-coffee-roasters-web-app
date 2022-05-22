import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import EmblaCarouselDots from "./embla-carousel-dots";
import { PrevButton, NextButton } from "./embla-carousel-button";

import { mediaByIndex } from "../../public/images/carousel";

import classes from "./embla-carousel.module.css";

type Carousel = {
  slides: number[];
};

const EmblaCarousel = (props: Carousel) => {
  const { slides } = props;

  const [viewportRef, embla] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={viewportRef}>
        <div className={classes.embla__container}>
          {slides.map((index) => (
            <div className={classes.embla__slide} key={index}>
              <div className={classes.embla__slide__inner}>
                <Image
                  className={classes.embla__slide__img}
                  src={mediaByIndex(index)}
                  alt="coffee"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className={classes.embla__slide__text}>
                  <p>
                    Изключително кафе, прясно изпечено и доставено до вашата
                    врата
                  </p>
                  <h2>Кафе пекарна в Стара Загора</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EmblaCarouselDots
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
      />
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
