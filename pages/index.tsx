import type { NextPage } from "next";
import EmblaCarousel from "../components/ui/embla-carousel";

const HomePage: NextPage = () => {
  const SLIDE_COUNT = 7;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return <EmblaCarousel slides={slides} />;
};

export default HomePage;
