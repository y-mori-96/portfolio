import noImage from '../images/noImg.png';

export type WorkData = {
  imageSrc: string;
  title: string;
  outline: string;
  data: string;
  skills: string;
  categories: string;
};

export const worksData: WorkData[] = [
  {
    imageSrc: noImage,
    title: "FOREST-CODE",
    outline: "日々の学習を記録するためのサイト",
    data: "日",
    // skills: "TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS ",
    skills: "",
    categories: "",
  },
];