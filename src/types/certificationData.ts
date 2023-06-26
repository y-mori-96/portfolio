export type CertificationData = {
  title: string;
  date: string;
  comment: string;
};

const CertificationsData: CertificationData[] = [
  {
    title: "基本情報技術者試験",
    date: "2021(令和3)年 7月",
    comment: `ソフトウエア開発者に必要な知識を得ることを目的に取得\n\nレビューやテストなど開発に必要な知識を習得できた`,
  },
  {
    title: "3級 ウェブデザイン技能士",
    date: "2022(令和4)年 12月",
    comment: `Web制作に必要な知識を学習することを目的に取得\n\nHTML/CSSで簡単な実装ができた`,
  },
  {
    title: "SEO検定1級",
    date: "2022(令和4)年 10月",
    comment: `Webの知識を深めることを目的に取得\n\nドメインやサイトマップなど\n設計段階で必要な知識を得ることができた`,
  },
  {
    title: `初級 ソフトウェア品質技術者資格試験(JCSQE)`,
    date: "2022(令和4)年 1月",
    comment: `ソースコードの品質向上を目的に取得\n品質を意識して実装に取り組む`,
  },
  {
    title: "家電製品アドバイザー",
    date: "2019(平成31)年 1月",
    comment: `家電エンジニア時代に取得\n\n家電量販店での販売実習や、\n展覧会で製品紹介時に役立った`,
  },
  {
    title: "普通自動車第一種 運転免許",
    date: "2017(平成29)年 1月",
    comment: `年間10,000km程度走行`,
  },
  {
    title: "MOS Excel 2013",
    date: "2015(平成27)年 12月",
    comment: `PCスキルが乏しかった大学1年次に取得`,
  },
  {
    title: "MOS PowerPoint 2013",
    date: "2015(平成27)年 9月",
    comment: `PCスキルが乏しかった大学1年次に取得`,
  },
  {
    title: "MOS Word 2013",
    date: "2015(平成27)年 7月",
    comment: `PCスキルが乏しかった大学1年次に取得`,
  },
];

export default CertificationsData;