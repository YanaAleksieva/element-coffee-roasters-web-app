import media1 from "./coffee-beans.png";
import media2 from "./turkish-coffee.png";
import media3 from "./espresso.png";
import media4 from "./aeropress.png";
import media5 from "./moka-pot.png";
import media6 from "./filter.png";
import media7 from "./french-press.png";

export const media = [media1, media2, media3, media4, media5, media6, media7];
export const mediaByIndex = (index: number) => media[index % media.length];
