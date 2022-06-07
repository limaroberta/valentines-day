import pic01 from "./assets/pic01.jpg";
import pic02 from "./assets/pic02.jpg";
import pic03 from "./assets/pic03.jpg";
import pic04 from "./assets/pic04.jpg";
import pic05 from "./assets/pic05.jpg";
import pic06 from "./assets/pic06.jpg";
import pic07 from "./assets/pic07.jpg";
import pic08 from "./assets/pic08.jpg";
import pic09 from "./assets/pic09.jpg";
import pic10 from "./assets/pic10.jpg";
import pic11 from "./assets/pic11.jpg";
import gif01 from "./assets/gif01.gif";
import gif02 from "./assets/gif02.gif";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const itemData = [
  {
    img: pic01,
    title: "Foto",
    rows: 4,
    cols: 2,
  },
  {
    img: pic02,
    title: "Foto",
    rows: 2,
    cols: 2,
  },
  {
    img: gif01,
    title: "Gif",
    rows: 2,
  },
  {
    img: pic03,
    title: "Foto",
  },
  {
    img: pic04,
    title: "Hats",
    cols: `${getWindowDimensions().width > 1000 ? 2 : 1} `,
  },
  {
    img: pic05,
    title: "Foto",
    rows: 3,
    cols: 2,
  },
  {
    img: pic06,
    title: "Foto",
    cols: 2,
    rows: 2,
  },
  {
    img: pic09,
    title: "Foto",
  },

  {
    img: gif02,
    title: "Gif",
    rows: `${getWindowDimensions().width > 1000 ? 2 : 3} `,
    cols: 1,
  },
  {
    img: pic07,
    title: "Foto",
    rows: 2,
    cols: 2,
  },
  {
    img: pic10,
    title: "Foto",
    rows: 2,
  },

  {
    img: pic08,
    title: "Foto",
    cols: 2,
  },
  {
    img: pic11,
    title: "Foto",
    cols: 2,
  },
];
