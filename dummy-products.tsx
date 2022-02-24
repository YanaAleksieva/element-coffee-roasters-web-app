const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Ethiopia",
    origin: "Sidamo",
    altitude: "1500-2200м",
    varietal: "Heirloom",
    process: "Washed",
    flavourProfile: "Цветен. Лимонов тарт. Горски плодове.",
    description:
      "Плътно меко тяло с деликатна и вкусна киселинност; с цветен привкус и нотки на мед, чай и тютюн. More description with great words for Ehiopia to be added later!",
    quantity: "200гр",
    price: "11лв",
    image: "images/ethiopia-photo.png",
   // location: "Africa",
  },
  {
    id: "p2",
    name: "Ethiopia2",
    origin: "Sidamo",
    altitude: "1500-2200м",
    varietal: "Heirloom",
    process: "Washed",
    flavourProfile: "Цветен. Лимонов тарт. Горски плодове.",
    description:
      "Плътно меко тяло с деликатна и вкусна киселинност; с цветен привкус и нотки на мед, чай и тютюн. More description with great words for Ehiopia to be added later!",
    quantity: "200гр",
    image: "images/ethiopia-photo.png",
    price: "11лв",
  },

  {
    id: "p3",
    name: "Ethiopia3",
    origin: "Sidamo",
    altitude: "1500-2200м",
    varietal: "Heirloom",
    process: "Washed",
    flavourProfile: "Цветен. Лимонов тарт. Горски плодове.",
    description:
      "Плътно меко тяло с деликатна и вкусна киселинност; с цветен привкус и нотки на мед, чай и тютюн. More description with great words for Ehiopia to be added later!",
    quantity: "200гр",
    image: "images/ethiopia-photo.png",
    price: "11лв",
  },
  
  {
    id: "p4",
    name: "Ethiopia4",
    origin: "Sidamo",
    altitude: "1500-2200м",
    varietal: "Heirloom",
    process: "Washed",
    flavourProfile: "Цветен. Лимонов тарт. Горски плодове.",
    description:
      "Плътно меко тяло с деликатна и вкусна киселинност; с цветен привкус и нотки на мед, чай и тютюн. More description with great words for Ehiopia to be added later!",
    quantity: "200гр",
    image: "images/ethiopia-photo.png",
    price: "11лв",
  },
  {
    id: "p5",
    name: "Ethiopia5",
    origin: "Sidamo",
    altitude: "1500-2200м",
    varietal: "Heirloom",
    process: "Washed",
    flavourProfile: "Цветен. Лимонов тарт. Горски плодове.",
    description:
      "Плътно меко тяло с деликатна и вкусна киселинност; с цветен привкус и нотки на мед, чай и тютюн. More description with great words for Ehiopia to be added later!",
    quantity: "200гр",
    image: "images/ethiopia-photo.png",
    price: "11лв",
  },
  {
    id: "p6",
    name: "Ethiopia6",
    origin: "Sidamo",
    altitude: "1500-2200м",
    varietal: "Heirloom",
    process: "Washed",
    flavourProfile: "Цветен. Лимонов тарт. Горски плодове.",
    description:
      "Плътно меко тяло с деликатна и вкусна киселинност; с цветен привкус и нотки на мед, чай и тютюн. More description with great words for Ehiopia to be added later!",
    quantity: "200гр",
    image: "images/ethiopia-photo.png",
    price: "11лв",
  },
  {
    id: "p7",
    name: "Ethiopia7",
    origin: "Sidamo",
    altitude: "1500-2200м",
    varietal: "Heirloom",
    process: "Washed",
    flavourProfile: "Цветен. Лимонов тарт. Горски плодове.",
    description:
      "Плътно меко тяло с деликатна и вкусна киселинност; с цветен привкус и нотки на мед, чай и тютюн. More description with great words for Ehiopia to be added later!",
    quantity: "200гр",
    image: "images/ethiopia-photo.png",
    price: "11лв",
  },
];

/*
// Might be used later for filter on Location - Africa, Central America, Pacific
export function getFeaturedEvents() {
  return DUMMY_PRODUCTS.filter((product) => product.location === "African");
}

*/
export function getAllProducts() {
  return DUMMY_PRODUCTS;
}

export function getProductById(id: string) {
  return DUMMY_PRODUCTS.find((product) => product.id === id);
}
