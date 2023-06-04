type careerData = {
  inDate: Date;
  inState: string;
  outDate: Date;
  outState: string;
  period: string;
  title: string;
  text: string;
};

// 月は0から始まる。例）4月は3と指定する
export const careersData: careerData[] = [
  {
    inDate: new Date(2023, 3, 4),
    inState: "入校",
    outDate: new Date(2023, 6, 31),
    outState: "修了",
    period: "4ヶ月",
    title: "職業訓練校\n\nWebデザインコース",
    text: `家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品家電製品 \nソフトウェア開発`,
  },
  {
    inDate: new Date(2022, 11, 6),
    inState: "入校",
    outDate: new Date(2023, 3, 5),
    outState: "修了",
    period: "4ヶ月",
    title: "プログラミングスクール\nCodeCamp\n\nエンジニア転職コース",
    text: `家電製品 \nソフトウェア開発`,
  },
  {
    inDate: new Date(2019, 3, 1),
    inState: "入社",
    outDate: new Date(2023, 0, 31),
    outState: "退職",
    period: "3年10ヶ月",
    title: "三菱電機ホーム機器株式会社\n\nソフトウェア開発",
    text: `家電製品 \nソフトウェア開発`,
  },
  {
    inDate: new Date(2015, 3, 1),
    inState: "入学",
    outDate: new Date(2019, 2, 31),
    outState: "卒業",
    period: "4年",
    title: "大阪工業大学\n\n工学部\n電子情報通信工学科\n（現：電子情報システム工学科）",
    text: `家電製品 \nソフトウェア開発`,
  },
];