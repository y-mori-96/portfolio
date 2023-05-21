import noImage from '../images/noImg.png';

export type CertificationData = {
  imageSrc: string;
  title: string;
  date: string;
};

export const certificationsData: CertificationData[] = [
  {
    imageSrc: noImage,
    title: "基本情報技術者試験",
    date: "2021(令和3)年 7月",
  },
  {
    imageSrc: noImage,
    title: "3級 ウェブデザイン技能士",
    date: "2022(令和4)年 12月",
  },
  {
    imageSrc: noImage,
    title: "SEO検定1級",
    date: "2022(令和4)年 10月",
  },
  {
    imageSrc: noImage,
    title: "初級 ソフトウェア品質技術者資格試験(JCSQE)",
    date: "2022(令和4)年 1月",
  },
  {
    imageSrc: noImage,
    title: "普通自動車第一種 運転免許",
    date: "2017(平成29)年 1月",
  },
  {
    imageSrc: noImage,
    title: "MOS Excel 2013",
    date: "2015(平成27)年 9月",
  },
  {
    imageSrc: noImage,
    title: "MOS PowerPoint 2013",
    date: "2015(平成27)年 9月",
  },
  {
    imageSrc: noImage,
    title: "MOS Word 2013",
    date: "2015(平成27)年 7月",
  },
];