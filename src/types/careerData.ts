import pbl from '../images/pbl.jpg';

type CareerData = {
  inDate: Date;
  inState: string;
  outDate: Date;
  outState: string;
  period: string;
  title: string;
  text: string;
  image?: string;
  imageTitle?: string;
};

// 月は0から始まる。例）4月は3と指定する
const CareersData: CareerData[] = [
  {
    inDate: new Date(2023, 3, 4),
    inState: "入校",
    outDate: new Date(2023, 6, 31),
    outState: "修了",
    period: "4ヶ月",
    title: "職業訓練校\n\nWebデザインコース",
    text: `プログラミングスクロールでは学べなかった\nAdobe製デザインツールの操作、WordPressの構築経験を積みたく入校。\n\nIllustrator / Photoshop / XD / Excel / Word / PowerPoint / \nHTML / CSS / Sass / jQuery / WordPress を学習。\n\nWeb制作に必要な知識を習得。\n在学中にレンタルサーバの契約、ドメイン取得を経験。\n3つのサイトを制作・公開。\n授業外の知識も積極的に学習を行った。`,
  },
  {
    inDate: new Date(2022, 11, 6),
    inState: "入校",
    outDate: new Date(2023, 3, 5),
    outState: "修了",
    period: "4ヶ月",
    title: "プログラミングスクール\nCodeCamp\n\nエンジニア転職コース",
    text: `組込みからフロントエンドにキャリアチェンジすることを決意し、\nWeb制作に必要な知識を学ぶべくスクールに入校。\n\nHTML / CSS / JavaScript / PHP / Laravel / MySQL / Git を学習。\n\nカリキュラムを進めていき、\n不明点があれば講師にアポイントをとり質問をする形式。\n各言語の知識を身に着けたほか、自走力を養う事ができた。`
  },
  {
    inDate: new Date(2019, 3, 1),
    inState: "入社",
    outDate: new Date(2023, 0, 31),
    outState: "退職",
    period: "3年10ヶ月",
    title: "三菱電機ホーム機器株式会社\n\nソフトウェア開発",
    text: `多くの方の生活を豊かにしたいという想いで家電業界に就職。\n\nC言語を用いて、\n「炊飯器」「掃除機」のソフトウエア開発、「アプリ」の保守を担当。\n\n発売日が決まっているため納期厳守が求められる。\n変更量の負荷や緊急度などを考慮し、優先度を立て、スケジュール管理を徹底し業務遂行することができた。\n\n組込み開発では品質が最重要。\n外部の振る舞い以外にも、不具合を生み出さないようソースコードの品質にもこだわった実装をすることを心がける。`,
  },
  {
    inDate: new Date(2015, 3, 1),
    inState: "入学",
    outDate: new Date(2019, 2, 31),
    outState: "卒業",
    period: "4年",
    title: "大阪工業大学\n\n工学部　電子情報通信工学科",
    text: `電子工学を軸とし、通信工学、情報工学の各専門分野の要素技術を学ぶ。\n\n課外活動として、国際ものづくりプロジェクトに参加。\n台湾・中国の学生と混成チームを作り、7日間で自動走行ロボットを制作。\n障害物のあるコースを一周するタイムレース。\n\nC言語を用いて、自動走行するプログラム実装を担当。\n6チームある中、優勝に輝く。`,
    image: pbl,
    imageTitle: "国際ものづくりプロジェクト",
  },
];

export default CareersData;