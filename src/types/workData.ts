import noImage from '../images/noImg.png';

export type WorkData = {
  imageSrc: string;
  title: string;
  genre: string;
  dsescription: string;
  siteImage: string;
  siteLink: string;
  release: string;
  period: string;
  technology: string;
  device: string;
  categories: string;
  modal: string;
};

export const worksData: WorkData[] = [
  {
    imageSrc: noImage,
    title: "森のポートフォリオ",
    genre: "ポートフォリオサイト",
    dsescription: "自身の経歴や作品などをご紹介するサイト",
    siteImage: noImage,
    siteLink: "#",
    release: "2023年7月1日",
    period: "1ヶ月",
    technology: "HTML / CSS(styled-components) / TypeScript / React",
    device: "PC / タブレット / モバイル",
    categories: "",
    modal: "portfolio",
  },
  {
    imageSrc: noImage,
    title: "FOREST-CODE",
    genre: "学習記録サイト",
    dsescription: "学習記録サイト",
    siteImage: noImage,
    siteLink: "#",
    release: "2023年7月1日",
    period: "1ヶ月",
    technology: "HTML / CSS / PHP / WordPress",
    device: "PC / タブレット / モバイル",
    categories: "",
    modal: "forestCode",
  },
];