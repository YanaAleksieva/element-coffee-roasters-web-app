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
          className={classes.embla__dots}
          key={index}
          style={{
            backgroundColor: selectedIndex === index ? "#f2c800" : "#8d7604",
          }}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
};

export default EmblaCarouselDots;
