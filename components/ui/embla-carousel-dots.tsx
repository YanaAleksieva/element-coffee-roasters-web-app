import classes from "./embla-carousel-dots.module.css";

type Dots = {
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void | undefined;
};

const EmblaCarouselDots = (props: Dots) => {
  const { scrollSnaps, selectedIndex, scrollTo } = props;
  
  return (
    <div className={classes.embla__navigator}>
      {scrollSnaps.map((_, index) => (
        <div
          className={`${selectedIndex === index ? classes.embla__dots__active : classes.embla__dots}`}
          key={index}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
};

export default EmblaCarouselDots;
