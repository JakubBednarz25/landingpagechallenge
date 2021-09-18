const palettes = [
  ["#FF0000", "#FF0000", "#B62A8F", "#6D4B9A", "#325082", "#2F4858"],
  ["#FF0000", "#FF006F", "#DC00C9", "#4A62FF", "#0082FF", "#008BE4"],
  ["#FF0000", "#E8A392", "#FFE6D9", "#5AB7D4"],
  ["#FF0000", "#5AB7D4", "#C2F9FF", "#487E91"],
  ["#0000FF", "#8774A6", "#F9EAFF", "#66BAA8"],
  ["#0000FF", "#AFA8BA", "#7B7485", "#D60000", "#FF0000"],
  ["#0000FF", "#76ADBF", "#362B48"],
  ["#0000FF", "#E39DFF", "#3FBEA7", "#1E1926"],
  ["#0000FF", "#D6E8EF", "#2A849B"],
  ["#0000FF", "#764100", "#006AC5"],
  ["#FFFF00", "#C6C188", "#F7F2CB", "#005248"],
  ["#FFFF00", "#494738", "#AEAC99", "#00FEF9", "#00C3C0"],
  ["#FFFF00", "#C4A689", "#C7C29D"],
];

const fonts = [
  "https://fonts.google.com/specimen/Roboto",
  "https://fonts.google.com/specimen/Open+Sans",
  "https://fonts.google.com/specimen/Lato",
  "https://fonts.google.com/specimen/Roboto+Condensed",
  "https://fonts.google.com/specimen/Source+Sans+Pro",
  "https://fonts.google.com/noto/specimen/Noto+Sans",
  "https://fonts.google.com/specimen/Roboto+Slab",
  "https://fonts.google.com/specimen/Rubik",
];

const products = [
  {
    name: "Stainless steel watch",
    price: 199,
    images: [
      "https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/81oopJz9BJL._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/7182N164NRL._AC_UX522_.jpg",
      "https://m.media-amazon.com/images/I/81Vflp-UswL._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/81AtD3TZ2rL._AC_UX342_.jpg",
    ],
  },
  {
    name: "Fire HD 8 Tablet",
    price: 329,
    images: [
      "https://m.media-amazon.com/images/I/51t73+gkndS._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/61bvyx+hrJL._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/616Y1+WL4nS._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/611H9jROr9L._AC_SX425_.jpg",
    ],
  },
  {
    name: "Iphone 13",
    price: 899,
    images: [
      "https://m.media-amazon.com/images/I/616dWFinzLL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61ZThdgtSKL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71Is4AhUomL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81aY3PlcHxL._AC_SX466_.jpg",
    ],
  },
  {
    name: "LUENX Sunglasses",
    price: 39,
    images: [
      "https://m.media-amazon.com/images/I/61j55xAQibL._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/I/91uG3RmxH5S._AC_UX466_.jpg",
      "https://m.media-amazon.com/images/I/71RV36GU1eS._AC_UX466_.jpg",
      "https://m.media-amazon.com/images/I/81p+cjOcekS._AC_UX466_.jpg",
    ],
  },
  {
    name: "fit bit",
    price: 199,
    images: [
      "https://m.media-amazon.com/images/I/61wgC+4+TFL._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/815b8CEG6yL._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/718rDXvXdVL._AC_SX425_.jpg",
    ],
  },
  {
    name: "Morphy richards arc 2 toaster",
    price: 49,
    images: [
      "https://m.media-amazon.com/images/I/81gFgTAkYHL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/61v43Qb-udL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/61L1cw0LYTL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/61YElKqyNML._AC_SY355_.jpg",
    ],
  },
  {
    name: "Stella 28 inch bike",
    price: 299,
    images: [
      "https://m.media-amazon.com/images/I/91ygQYVIT2L._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/81vG6dNXORS._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/816RXIW7SDS._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/71EurHIvVxL._AC_SX425_.jpg",
    ],
  },
  {
    name: "Auchentoshan scotch whiskey 70cl",
    price: 29,
    images: [
      "https://m.media-amazon.com/images/I/71Hhz52sLJS._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/61OeXbMG+5S._AC_SY445_.jpg",
      "https://m.media-amazon.com/images/I/61UE+bNHkPS._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51Mt5dbLD9L._AC_SX342_.jpg",
    ],
  },
  {
    name: "Samsung galaxy s20 5g",
    price: 699,
    images: [
      "https://m.media-amazon.com/images/I/71i7sTRGLHL._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/61gkrs+-9AL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/812YNpYwP7L._AC_SY355_.jpg",
      "https://m.media-amazon.com/images/I/713aMqwCsXL._AC_SY355_.jpg",
    ],
  },
  {
    name: "Hisense freestanding retro fridge",
    price: 499,
    images: [
      "https://m.media-amazon.com/images/I/41Gr4LGEC7S._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/61Td1jacPrL._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/716bRmJUtLS._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/61-7dOvaG-S._AC_SX342_.jpg",
      "https://m.media-amazon.com/images/I/61qoXvrYRSS._AC_SX342_.jpg",
    ],
  },
];

const randomOptions = (settings) => {
  const options = {};
  options.palette = palettes[Math.floor(Math.random() * palettes.length)];
  options.font = fonts[Math.floor(Math.random() * fonts.length)];
  options.product = products[Math.floor(Math.random() * products.length)];
  settings.forEach((setting) => {
    if (setting.name === "palette" && !setting.checked) {
      options.palette = undefined;
    } else if (setting.name === "product" && !setting.checked) {
      options.product = undefined;
    } else if (setting.name === "font" && !setting.checked) {
      options.font = undefined;
    }
  });
  return options;
};

export default randomOptions;
