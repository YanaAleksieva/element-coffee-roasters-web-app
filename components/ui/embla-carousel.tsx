import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./embla-carousel-button";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../../public/images/carousel";
import Image from "next/image";

import classes from "./embla-carousel.module.css";
import EmblaCarouselDots from "./embla-carousel-dots";

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

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
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
    </div>
  );
};

export default EmblaCarousel;
