export type CertificationData = {
  title: string;
  date: string;
  comment: string;
};

const CertificationsData: CertificationData[] = [
  {
    title: "基本情報技術者試験",
    date: "2021(令和3)年 7月　合格",
    comment: `ソフトウエア開発者として何も知識がないことを実感したため受験を決意\n\n基礎的なIT用語を習得したほか、モジュール設計は実務でも役立った`,
  },
  {
    title: "2級 ウェブデザイン技能士",
    date: "2023(令和5)年 6月　合格",
    comment: `ウェブデザインの基礎的なスキルと知識を習得したいと思い受験を決意\n\nHTML/CSSで簡単なサイトの構築ができる`,
  },
  {
    title: "3級 ウェブデザイン技能士",
    date: "2022(令和4)年 12月　合格",
    comment: `ウェブデザインの基礎的なスキルと知識を習得したいと思い受験を決意\n\nHTML/CSSでサイトの簡単な修正ができる`,
  },
  {
    title: "PHP8技術者認定初級試験",
    date: "2023(令和5)年 7月　合格",
    comment: `PHPの基礎的な知識を習得したいと思い受験を決意\n\n制御構文や関数、オブジェクト指向の知識が身についた`,
  },
  {
    title: "Webクリエイター能力認定試験 エキスパート",
    date: "2023(令和5)年 7月　合格",
    comment: `HTML/CSSの知識を深めるため受験を決意\n\n作業指示に従い、要望に合ったウェブサイトを構築できる`,
  },
  {
    title: "Photoshopクリエイター能力認定試験 エキスパート",
    date: "2023(令和5)年 7月　合格",
    comment: `Photoshopで表現できる幅を広げたく受験を決意\n\n作業指示に従い、要望に合ったデザインを表現できる`,
  },
  {
    title: "SEO検定1級",
    date: "2022(令和4)年 10月　合格",
    comment: `サイト設計に必要な知識を学びたいと思い受験を決意\n\nドメインやサイトマップなど\n設計段階で必要な知識を得ることができた`,
  },
  {
    title: `初級 ソフトウェア品質技術者資格試験(JCSQE)`,
    date: "2022(令和4)年 1月　合格",
    comment: `コードの品質を高めたいと思い受験を決意\n品質を意識して実装に取り組むことを心がけている`,
  },
  {
    title: "家電製品アドバイザー",
    date: "2019(平成31)年 1月　合格",
    comment: `家電に関する知識を深めるため受験を決意\n\n家電量販店での販売実習や、\n展覧会で製品紹介時に役立った`,
  },
  {
    title: "普通自動車第一種 運転免許",
    date: "2017(平成29)年 1月　取得",
    comment: `年間10,000km程度走行`,
  },
  {
    title: "MOS Excel 2013",
    date: "2015(平成27)年 12月　取得",
    comment: `PCスキルが乏しかった大学1年次に取得`,
  },
  {
    title: "MOS PowerPoint 2013",
    date: "2015(平成27)年 9月　取得",
    comment: `PCスキルが乏しかった大学1年次に取得`,
  },
  {
    title: "MOS Word 2013",
    date: "2015(平成27)年 7月　取得",
    comment: `PCスキルが乏しかった大学1年次に取得`,
  },
];

export default CertificationsData;