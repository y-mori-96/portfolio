import noImage from '../images/noImg.png';

export type homeData = {
  imageSrc: string;
  title: string;
  url: string;
};

export const homesData: homeData[] = [
  {
    imageSrc: noImage,
    title: "私について",
    url: "/about",
  },
  {
    imageSrc: noImage,
    title: "制作物",
    url: "/works",
  },
  {
    imageSrc: noImage,
    title: "スキル",
    url: "/skills",
  },
  {
    imageSrc: noImage,
    title: "資格",
    url: "/certifications",
  },
  {
    imageSrc: noImage,
    title: "お問い合わせ",
    url: "/contact",
  },
];