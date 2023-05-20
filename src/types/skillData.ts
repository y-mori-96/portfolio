import noImage from '../images/noImg.png';
import { SkillCategoriesValue } from './skillCategories';

export type SkillData = {
  imageSrc: string;
  title: string;
  level: string;
  categories: SkillCategoriesValue;
};

export const skillsData: SkillData[] = [
  {
    imageSrc: noImage,
    title: "HTML",
    level: "個人開発",
    categories: 'フロントエンド',
  },
  {
    imageSrc: noImage,
    title: "CSS",
    level: "個人開発",
    categories: 'フロントエンド',
  },
  {
    imageSrc: noImage,
    title: "PHP",
    level: "業務",
    categories: 'バックエンド',
  },
  {
    imageSrc: noImage,
    title: "Illustrator",
    level: "個人開発",
    categories: 'ツール',
  },
  {
    imageSrc: noImage,
    title: "Excel",
    level: "業務",
    categories: 'ツール',
  },
];