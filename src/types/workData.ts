import noImage from '../images/noImg.png';

export type WorkData = {
  imageSrc: string;
  title: string;
  outline: string;
  data: string;
  skills: string;
  categories: string;
  modal: string;
};

export const worksData: WorkData[] = [
  {
    imageSrc: noImage,
    title: "森のポートフォリオ",
    outline: "ポートフォリオサイト",
    data: "日",
    // skills: "TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS ",
    skills: "",
    categories: "",
    modal: "portfolio",
  },
  {
    imageSrc: noImage,
    title: "FOREST-CODE",
    outline: "学習記録サイト",
    data: "日",
    // skills: "TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS TypeScript React HTML CSS ",
    skills: "",
    categories: "",
    modal: "forestCode",
  },
];