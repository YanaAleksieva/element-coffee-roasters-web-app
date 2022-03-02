import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./embla-carousel-button";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../../public/images/carousel";
import Image from "next/image";

import classes from "./embla-carousel.module.css";

type Carousel = {
  slides: number[];
};

const EmblaCarousel = (props: Carousel) => {
  const { slides } = props;

  const [viewportRef, embla] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

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
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
