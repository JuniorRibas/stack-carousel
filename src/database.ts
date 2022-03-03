import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
export const DATA = [
  {
    title: "Autogiro",
    location: "Imperatriz MA",
    date: "Março 03/03/2022",
    poster:
      "https://www.10wallpaper.com/wallpaper/medium/1806/2018_Lamborghini_Aventador_S_Roadster_Blue_Series_medium.jpg",
  },
  {
    title: "Milvoltz",
    location: "Imperatriz MA",
    date: "Março 03/03/2022",
    poster:
      "https://wallpapersfull.com/wallpapers/2019/eletricidade-na-agua-wallpaper-18965.jpg",
  },
  {
    title: "MotorDiesel",
    location: "Imperatriz MA",
    date: "Março 03/03/2022",
    poster:
      "https://wallpapersfull.com/wallpapers/2019/wallpaper-ferrari-motor-4180.jpg",
  },
  {
    title: "Arautho",
    location: "Imperatriz MA",
    date: "Março 03/03/2022",
    poster:
      "https://play-lh.googleusercontent.com/BLNViPpGEYB6ASi-xnYl5ukA3guUKiocwaplCIrsF7qRWJBT6iSpCP9dkLLdK6oEXA",
  },
  {
    title: "PlugNorte",
    location: "Imperatriz MA",
    date: "Março 03/03/2022",
    poster:
      "https://i.pinimg.com/originals/4a/b8/95/4ab8958c3ef2514d36b12e625d10154b.jpg",
  },
];

export const OVERFLOW_HEIGHT = 70;
export const SPACING = 10;
export const ITEM_WIDTH = width * 0.76;
export const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
export const VISIBLE_ITEMS = 3;
