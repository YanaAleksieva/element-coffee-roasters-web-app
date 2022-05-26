const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Costa Rica",
    origin: "Colibri SHB Organic",
    altitude: "1200-1500м",
    varietal: "Caturra, Catuai",
    process: "Washed",
    flavourProfile: "Цветен. Лимонови нотки. Шоколадово тяло.",
    description:
      "Цветни и лимонови нотки, деликатна киселинност с кремообразно шоколадово тяло. Кафето от региона Таразу в Коста Рика се характеризира с богат аромат напомнящ на цитрусова градина, давайки му балансиран вкус и свежа нотка. Това кафе съчетава сладост и киселинност, с леко и гладко тяло, средна към висока киселинност и запомнящ се после вкус. Коста Рика е на 14то място сред страните произвеждащи кафе по цял свят. Там има над 30 000 ферми в 21 региона намиращи се между 1200 и 1800м надморска височина, и всяка финка произвеждаща кафе със специфична киселинност, тяло и аромат. Докато вулканичната дейност често разрушава кафените насаждения, вулканичните изригвания всъщност са причината за обогатяването на почвата и специфичния вкус на кафето от Коста Рика.",
    quantity: "200гр",
    price: "11",
    image: "images/packages/costa-rica.png",
    imageDetail: "images/labels/costaRica-photo.jpg",
    // location: "Africa",
  },
  {
    id: "p2",
    name: "El Salvador",
    origin: "Santa Leticia SHG",
    altitude: "1200-1750м",
    varietal: "Pacamara",
    process: "Washed",
    flavourProfile: "Сладък дървесен аромат.",
    description:
      "Плътно тяло и деликатна киселинност; сладък плодов и дървесен аромат с много добър послевкус. Кафето от региона Apaneca-Ilamatepec се характеризира с сладък дървесен аромат примесен с подправки - прясно нарязана ела, фурма, шоколад за печене, фрезия, черен пипер на зърна могат да бъдат усетени в аромата на прясно приготвеното кафе. Сладка структура с лека киселинност кадифена текстура. Региона Apaneca-Ilamatepec, Ел Салвадор, е планински и независимо, че височината рядко надхвърля 1400м, районът притежава важни условия за отглеждане на кафе от най-високо качество - вулканична почва, буйна гора и плодородна среда. Ел Салвадор като източник има тенденцията да произвежда сладки, различни и търсени кафето от малки и развиващи се ферми.",
    quantity: "200гр",
    image: "images/packages/el-salvador.png",
    price: "11",
    imageDetail: "images/labels/elSalvador-photo.jpg",
  },

  {
    id: "p3",
    name: "Ethiopia",
    origin: "Sidamo",
    altitude: "1500-2200м",
    varietal: "Heirloom",
    process: "Washed",
    flavourProfile: "Цветен. Лимонов тарт. Горски плодове.",
    description:
      "Плътно меко тяло с деликатна и вкусна киселинност; с цветен привкус и нотки на мед, чай и тютюн. More description with great words for Ehiopia to be added later!",
    quantity: "200гр",
    image: "images/packages/ethiopia.png",
    price: "11",
    imageDetail: "images/labels/ethiopia-photo.jpg",
  },

  {
    id: "p4",
    name: "Guatemala",
    origin: "Antigua Los Volcanes, Cuidad Vieja",
    altitude: "1500м",
    varietal: "Bourbon, Typica",
    process: "Washed",
    flavourProfile: "Шоколадови нотки. Флорален привкус.",
    description:
      "Леки, но отчетливи шоколадови нотки с флорални привкус. More description with great words for Guatemala to be added later!",
    quantity: "200гр",
    image: "images/packages/guatemala.png",
    price: "11",
    imageDetail: "images/labels/guatemala-photo.jpg",
  },
  {
    id: "p5",
    name: "Honduras",
    origin: "San Pedro de Capucas, Copan",
    altitude: "1200-1600м",
    varietal: "Caturra, Bourbon",
    process: "Washed",
    flavourProfile: "Шоколад. Ядки. Праскови. Сливи.",
    description:
      "Средно-плътно тяло с нотки на шоколад и ядки; балансирана киселинност с привкус на праскова и сини сливи. More description with great words for Honduras to be added later!",
    quantity: "200гр",
    image: "images/packages/honduras.png",
    price: "11",
    imageDetail: "images/labels/honduras-photo.jpg",
  },
  {
    id: "p6",
    name: "Kanya AA",
    origin: "Barichu Gaturiri",
    altitude: "1700-1800м",
    varietal: "SL28, SL34",
    process: "Washed",
    flavourProfile: "Билкови и плодови нотки.",
    description:
      "Копринено тяло с отчетлива киселинност; билкови и плодови нотки, сладкък привкус. More description with great words for Kenya to be added later!",
    quantity: "200гр",
    image: "images/packages/kenya.png",
    price: "12",
    imageDetail: "images/labels/kenya-photo.jpg",
  },
  {
    id: "p7",
    name: "Mexico",
    origin: "Chiapas, Fica Las Chicarras",
    altitude: "1250-1600м",
    varietal: "Bourbon, Catimore, Marcellesa",
    process: "Washed",
    flavourProfile: "Праскови. Мед.",
    description:
      "Плътно тяло без киселинност; нотки на праскова и мед, с богат и запомнящ се послевкус. More description with great words for Mexico to be added later!",
    quantity: "200гр",
    image: "images/packages/mexico.png",
    price: "11",
    imageDetail: "images/labels/mexico-photo.jpg",
  },
  {
    id: "p8",
    name: "Nicaragua",
    origin: "Fincas Mierisch",
    altitude: "1100-1600м",
    varietal: "Red Catuai",
    process: "Washed",
    flavourProfile: "Карамел. Кафява захар. Цитруси.",
    description:
      "Нотки на карамел, кафява захар, цитруси, и наситено тяло.. More description with great words for Nicaragua to be added later!",
    quantity: "200гр",
    image: "images/packages/nicaragua.png",
    price: "11",
    imageDetail: "images/labels/nicaragua-photo.jpg",
  },
  {
    id: "p9",
    name: "Papua",
    origin: "Kimel Estate, Waghi Valley",
    altitude: "1580м",
    varietal: "Typica",
    process: "Washed",
    flavourProfile: "Плодови нотки. Кайсии. Портокал. Шоколадов мус.",
    description:
      "Плътно тяло с плодови и шоколадови нотки; деликатен профил с лека киселинност и привкус на кайсия, портокал и шоколадов мус. More description with great words for Papua to be added later!",
    quantity: "200гр",
    image: "images/packages/papua.png",
    price: "11",
    imageDetail: "images/labels/papua-photo.jpg",
  },
  {
    id: "p10",
    name: "Sumatra",
    origin: "Mandheling Organic; Wahana estate",
    altitude: "1250-1400м",
    varietal: "Catimor. Bourbon",
    process: "Sami-Washed",
    flavourProfile: "Какао. Черен шоколад. Печени ядки. Кедър",
    description:
      "Плътно тяло, с нотки на какао и черен шоколад. Лека киселинност, земен привкус съчетан с приятен мирис на печени ядки и кедър. More description with great words for Sumatra to be added later!",
    quantity: "200гр",
    image: "images/packages/sumatra.png",
    price: "11",
    imageDetail: "images/labels/sumatra-photo.jpg",
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
