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
    price: "13",
    image: "images/packages/costa-rica.png",
    imageDetail: "images/labels/costaRica-photo.jpg",
    // location: "Africa",
  },
  // {
  //   id: "p2",
  //   name: "Ethiopia",
  //   origin: "Sidamo",
  //   altitude: "1500-2200м",
  //   varietal: "Heirloom",
  //   process: "Washed",
  //   flavourProfile: "Цветен. Лимонов тарт. Горски плодове.",
  //   description:
  //     "Плътно меко тяло с деликатна и вкусна киселинност; с цветен привкус и нотки на мед, чай и тютюн. Кафето от региона Сидамо в Етиопия се характеризира с богатия сладък и комплексен вкус, средна киселинност, цветен аромат и лек после вкус. Хубавото кафе от Сидамо е добре балансирано с нотки на горски плодове и цитруси с комплексна киселинност. Етиопия е на 5то място сред страните произвеждащи кафе по цял свят. Откакто кафето е открито в Етиопия, страната е известна с едно от най-добрите кафето по цял свят, поддържайки постоянно високо качество и плодородно производство.",
  //   quantity: "200гр",
  //   image: "images/packages/ethiopia.png",
  //   price: "12",
  //   imageDetail: "images/labels/ethiopia-photo.jpg",
  // },
  // {
  //   id: "p3",
  //   name: "Honduras",
  //   origin: "San Pedro de Capucas, Copan",
  //   altitude: "1200-1600м",
  //   varietal: "Caturra, Bourbon",
  //   process: "Washed",
  //   flavourProfile: "Шоколад. Ядки. Ванилия.",
  //   description:
  //     "Средно-плътно тяло с нотки на шоколад и ядки; балансирана киселинност с привкус на праскова и сини сливи. Кафето от регион Копан се характеризира с шоколадов привкус, ванилия и леки нотки на плодове и ядки, мека киселинност и силен аромат.",
  //   quantity: "200гр",
  //   image: "images/packages/honduras.png",
  //   price: "12",
  //   imageDetail: "images/labels/honduras-photo.jpg",
  // },
  // {
  //   id: "p4",
  //   name: "Kanya AA",
  //   origin: "Barichu Gaturiri",
  //   altitude: "1700-1800м",
  //   varietal: "SL28, SL34",
  //   process: "Washed",
  //   flavourProfile: "Билкови и плодови нотки.",
  //   description:
  //     "Копринено тяло с отчетлива киселинност; билкови и плодови нотки, сладкък привкус. Кафето от регион Nyeri в южните склонове на връх Кения се характеризира с плодови нотки и отчетлива киселинност. Могат да се усетят наченки както на горски плодове така и на по-екзотични плодове - ананас, гуава, примесени с билкови нотки поради местоположението на фермата за кафе, познато и като място за събиране на билки. Кения е известна със своите гурме кафета, с изключително качество и вкусов профил. Генерално профил с кафетата от Кения е че колкото е по-голямо кафеното зърно, съдържа толкова повече ценни масла благоприятстващи за вкуса и аромата. Най-големите и най-добрите кафени зърна от Кения се оценяват като Kenya AA, каквото е и кафето от Barichu Gaturiri.",
  //   quantity: "200гр",
  //   image: "images/packages/kenya.png",
  //   price: "12.60",
  //   imageDetail: "images/labels/kenya-photo.jpg",
  // },
  {
    id: "p5",
    name: "Mexico",
    origin: "Chiapas, Fica Las Chicarras",
    altitude: "1250-1600м",
    varietal: "Bourbon, Catimore, Marcellesa",
    process: "Washed",
    flavourProfile: "Млечен шоколад. Канела. Мед.",
    description:
      "Плътно тяло без осезаема киселинност; нотки на праскова и мед, с богат и запомнящ се послевкус. Кафето от регион Чиапас е с високо качество отглеждано в южните части на Мексико. Характеризира се с лека киселинност, деликатен и богат вкус. Кафето е перфектно балансирано с привкус на млечен шоколад и карамел, с нотки на канела и мед.",
    quantity: "200гр",
    image: "images/packages/mexico.png",
    price: "13",
    imageDetail: "images/labels/mexico-photo.jpg",
  },
  {
    id: "p6",
    name: "Nicaragua",
    origin: "Fincas Mierisch",
    altitude: "1100-1600м",
    varietal: "Red Catuai",
    process: "Washed",
    flavourProfile: "Карамел. Кафява захар. Цитруси.",
    description:
      "Нотки на карамел, кафява захар, цитруси, и наситено тяло. Кафето от Finca Mierisch от Никарагуа се характеризира с изчистен профил и ясно изразени вкусови качества - сред тях нотки на карамел, ванилия и ядки. Лека и деликатна киселинност с плътно тяло.",
    quantity: "200гр",
    image: "images/packages/nicaragua.png",
    price: "13",
    imageDetail: "images/labels/nicaragua-photo.jpg",
  },
  {
    id: "p7",
    name: "Papua",
    origin: "Kimel Estate, Waghi Valley",
    altitude: "1580м",
    varietal: "Typica",
    process: "Washed",
    flavourProfile: "Плодови нотки. Портокал. Шоколадов мус.",
    description:
      "Плътно тяло с плодови и шоколадови нотки; деликатен профил с осезаема киселинност и привкус на кайсия, портокал и шоколадов мус. Кафето от Kimel Estate се характеризира с балансиран профил - сладко-тръпчива киселинност с деликатна пикантност и неустоим аромат. Нар, какао, кафява захар, карамфил, цвят от грейпфрут се усещат както в аромата така и във вкуса на кафето. Копринено тяло резониращо перфектно с хармонизирания аромат и вкус. Kimel Estate е ферма намираща се в запасните високопланински райони на Папуа Нова Гвинеа. ",
    quantity: "200гр",
    image: "images/packages/papua.png",
    price: "13",
    imageDetail: "images/labels/papua-photo.jpg",
  },
  // {
  //   id: "p8",
  //   name: "Sumatra",
  //   origin: "Mandheling Organic; Wahana estate",
  //   altitude: "1250-1400м",
  //   varietal: "Catimor. Bourbon",
  //   process: "Sami-Washed",
  //   flavourProfile: "Плодове. Какао. Печени ядки. Кедър.",
  //   description:
  //     "Плътно тяло, с нотки на какао и черен шоколад. Лека киселинност, земен привкус съчетан с приятен мирис на печени ядки и кедър. Кафето от Wahana Estate, Sumatra  се характеризира с плодовите, какаовите, екзотичните и земни нотки - с привкус на диня, ягоди и земни подправки. Ароматът напомня печени ядки, какао и зелена ябълка. Тялото на кафето е плътно със средна киселинност.",
  //   quantity: "200гр",
  //   image: "images/packages/sumatra.png",
  //   price: "12",
  //   imageDetail: "images/labels/sumatra-photo.jpg",
  // },
  /*
  {
    id: "p2",
    name: "El Salvador",
    origin: "Santa Leticia SHG",
    altitude: "1200-1750м",
    varietal: "Pacamara",
    process: "Washed",
    flavourProfile: "Сладък дървесен аромат. Подправки. Кадифено тяло.",
    description:
      "Плътно тяло и деликатна киселинност; сладък плодов и дървесен аромат с много добър послевкус. Кафето от региона Apaneca-Ilamatepec се характеризира с сладък дървесен аромат примесен с подправки - прясно нарязана ела, фурма, шоколад за печене, фрезия, черен пипер на зърна могат да бъдат усетени в аромата на прясно приготвеното кафе. Сладка структура с лека киселинност кадифена текстура. Региона Apaneca-Ilamatepec, Ел Салвадор, е планински и независимо, че височината рядко надхвърля 1400м, районът притежава важни условия за отглеждане на кафе от най-високо качество - вулканична почва, буйна гора и плодородна среда. Ел Салвадор като източник има тенденцията да произвежда сладки, различни и търсени кафето от малки и развиващи се ферми.",
    quantity: "200гр",
    image: "images/packages/el-salvador.png",
    price: "11",
    imageDetail: "images/labels/elSalvador-photo.jpg",
  },
*/
  /*
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
  */

  {
    id: "p9",
    name: "Kanya AA",
    origin: "Mount Kenya",
    altitude: "1750-1900м",
    varietal: "SL28",
    process: "Washed",
    flavourProfile: "Билкови и плодови нотки.",
    description:
      "Копринено тяло с отчетлива киселинност; билкови и плодови нотки, сладкък привкус. Кафето от регион Nyeri в южните склонове на връх Кения се характеризира с плодови нотки и отчетлива киселинност. Могат да се усетят наченки както на горски плодове така и на по-екзотични плодове - ананас, гуава, примесени с билкови нотки поради местоположението на фермата за кафе, познато и като място за събиране на билки. Кения е известна със своите гурме кафета, с изключително качество и вкусов профил. Генерално профил с кафетата от Кения е че колкото е по-голямо кафеното зърно, съдържа толкова повече ценни масла благоприятстващи за вкуса и аромата. Най-големите и най-добрите кафени зърна от Кения се оценяват като Kenya AA, каквото е и кафето от Barichu Gaturiri.",
    quantity: "200гр",
    image: "images/packages/kenya-mountKenya.png",
    price: "14",
    imageDetail: "images/labels/kenya-MountKenya-photo.jpg",
  },
  {
    id: "p10",
    name: "El Salvador",
    origin: "Canton Los Arenales, Sonsonate",
    altitude: "1600-1700м",
    varietal: "Bourbon",
    process: "Washed",
    flavourProfile: "Сладък дървесен аромат. Подправки. Кадифено тяло.",
    description:
      "Плътно тяло и деликатна киселинност; сладък плодов и дървесен аромат с много добър послевкус. Кафето от региона Apaneca-Ilamatepec се характеризира с сладък дървесен аромат примесен с подправки - прясно нарязана ела, фурма, шоколад за печене, фрезия, черен пипер на зърна могат да бъдат усетени в аромата на прясно приготвеното кафе. Сладка структура с лека киселинност кадифена текстура. Региона Apaneca-Ilamatepec, Ел Салвадор, е планински и независимо, че височината рядко надхвърля 1400м, районът притежава важни условия за отглеждане на кафе от най-високо качество - вулканична почва, буйна гора и плодородна среда. Ел Салвадор като източник има тенденцията да произвежда сладки, различни и търсени кафето от малки и развиващи се ферми.",
    quantity: "200гр",
    image: "images/packages/el-salvador-fincaLasNubes.png",
    price: "13",
    imageDetail: "images/labels/elSalvador-FincaLasNubes-photo.jpg",
  },
  {
    id: "p11",
    name: "Columbia",
    origin: "Hulia region",
    altitude: "1350-2000м",
    varietal: "Caturra",
    process: "Washed",
    flavourProfile: "Горски плодове. Карамел.",
    description:
      "Леко кафе с интензивен аромат. Слаба киселинност и усезаема сладост.",
    quantity: "200гр",
    image: "images/packages/columbia.png",
    price: "13",
    imageDetail: "images/labels/columbia-photo.jpg",
  },
  // {
  //   id: "p12",
  //   name: "Rwanda - Ishema",
  //   origin: "Gasetsa, Ngoma District",
  //   altitude: "1500м",
  //   varietal: "Bourbon",
  //   process: "Washed",
  //   flavourProfile: "Плодов. Сливи и круши.",
  //   description:
  //     "Вкусът е чист и добре балансиран. Усезаема киселинност с дълъг, сладък плодов послевкус.",
  //   quantity: "200гр",
  //   image: "images/packages/base-package.png",
  //   price: "13",
  //   imageDetail: "images/labels/rwanda-basic-photo.jpg",
  // },
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
