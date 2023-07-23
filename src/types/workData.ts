import noImage from '../images/noImg.png';
import workPortfolio from '../images/work_portfolio.png';
import workForestCode from '../images/work_forestCode.png';
import workApplianceOnline from '../images/work_applianceOnline.png';

export type WorkData = {
  modal: string;
  imageSrc: string;
  title: string;
  genre: string;
  dsescription: string;
  siteImage: string;
  siteLink: string;
  release: string;
  period: string;
  responsible: string;
  technology: string;
  device: string;

  problem: string;
  solution: string;
  target: string;
  goal: string;
  technologySelection: string;

  emotion: string;
  composition: string;
  color : string;
  siteColor: string[];
  font : string;
};

export const WorksData: WorkData[] = [
  {
    modal: "portfolio",
    imageSrc: workPortfolio,

    title: "森のポートフォリオ",
    genre: "ポートフォリオサイト",
    dsescription: "経歴や制作物など自身を紹介するサイト",
    siteImage: workPortfolio,
    siteLink: "https://y-mori-96.com/",

    release: "2023年7月13日",
    period: "2023年5月~7月(2ヶ月)",
    responsible: "企画 / サイト設計 / コーディング / ロゴ制作",
    technology: "HTML / CSS(Styled-Components) / TypeScript / React / PowerPoint",
    device: "PC / タブレット / モバイル",

    problem:
    `1、転職に必要な自身のポートフォリオサイトがない
    2、最新の技術を取り入れたい
    3、ページ数が多いため、画面遷移の負荷を軽減させたい
    4、実装負荷が大きいお問い合わせページは外部サービスを利用したい`,
    solution:
    `1、ポートフォリオサイトを制作する
    2、React、TypeScriptで実装を行う
    3、SPAの導入
    4、お問い合わせページには「Emailjs」を利用`,
    technologySelection:
    `1、React
    ・Reactでの開発経験がないため、経験を積みたい
    ・SPAの実現を容易にできる
    ・SEO対策は不要のため、Next.jsまでは不要
    ・「npm trends」でDL数が一番多い
    2、Styled-Components
    ・クラス名を考える手間を減らす
    ・スタイルの衝突を軽減できる
    ・コンポーネントに対応したファイルに記述しているため、修正が容易
    3、TypeScript
    ・可読性と保守性を高める
    4、Emailjs
    ・Reactに対応している
    ・カスタムが自由
    ・月200通まで無料`,
    target: "Web制作会社の採用担当者",
    goal: "自身の経歴やスキルに興味を持っていただき一次面接に進む",

    emotion:
    `堅実な中にも砕けた感じのある印象を与える
    ・角を丸める
    ・ロゴを可愛らしく
    ・趣味の写真を載せる`,
    composition:
    `1カラム
    ・シンプルなデザイン
    ・一つひとつの要素を大きく見せる`,
    color:
    `・ベースカラー：
    メインカラーに近い色相から選択、メインカラーを強調させるため明度を高くする
    ・メインカラー：
    堅実な印象を与える緑を採用
    ・アクセントカラー：
    メインカラーの補色のである赤系を採用`,
    siteColor: ['#efffe7', '#000', '#85A389', '#fff', '#ff8100', '#fff'],
    font: `視認性を高めるためゴシック体を採用`,
  },
  {
    modal: "forestCode",
    imageSrc: workForestCode,

    title: "FOREST-CODE",
    genre: "学習記録サイト",
    dsescription: "日々の学習内容をアウトプットするためのサイト",
    siteImage: workForestCode,
    siteLink: "https://forest-code.com/",

    release: "2023年7月1日",
    period: "2023年4月~5月(1ヶ月)",
    responsible: "企画 / デザイン / コーディング",
    technology: "HTML / CSS / PHP / WordPress",
    device: "PC / タブレット / モバイル",

    problem:
    `1、学習した内容を一元管理したい
    2、容易にコンテンツを追加できるようにしたい
    3、自分でカスタマイズしたサイトを運用したい
    4、レンタルサーバの契約、ドメイン取得、サイト公開までの経験を積みたい`,
    solution:
    `1、技術ブログを立ち上げ、運用していく
    2、WordPressを利用する
    3、PHPを用いて独自でテーマを開発する
    4、Xserverを契約し、公開する`,

    target: "自分",
    goal: "機能実装の手順やポイントをまとめ、今後の開発効率を高める",
    technologySelection:
    `1、WordPress
    ・シェア率が高い
    ・ネット上に情報が豊富にある
    ・自由なカスタマイズ
    2、PHP
    ・WordPressに用いられる言語
    3、Xserver
    ・WordPressが使える
    ・ネット上に情報が豊富にある
    ・運営の信頼性`,

    emotion:
    `堅実な印象を与える
    ・暗めの色をメインカラーに設定
    ・箇条書きで記事を記述する`,
    composition:
    `2カラム
    ・階層化された情報の整理がしやすい
    ・サイト内の回遊率を高める`,
    color:
    `・ベースカラー：
    メインカラーを強調させるため明度を高くする
    ・メインカラー：
    堅実な印象を与える緑を採用
    ・アクセントカラー：
    各カテゴリに与えた色を強調させるため1つに絞らない`,
    siteColor: ['#f3f3f2', '#000', '#7bba93', '#fff', '', ''],
    font: `視認性を高めるためゴシック体を採用`,
  },
  {
    modal: "applianceOnline",
    imageSrc: workApplianceOnline,

    title: "家電通販サイト",
    genre: "通販サイト",
    dsescription: "架空の家電通販サイト",
    siteImage: workApplianceOnline,
    siteLink: "https://appliance.y-mori-96.com/",

    release: "2023年7月17日",
    period: "2023年6月~7月(1ヶ月)",
    responsible: "企画 / デザイン / コーディング / バナー制作",
    technology: "HTML / CSS / jQuery / Illustrator / Photoshop",
    device: "PC / タブレット / モバイル",

    problem:
    `1、Illustrator / Photoshopを用いて多くのバナーを作成できるサイトを制作したい
    2、jQueryでの開発を経験したい`,
    solution:
    `1、最新情報や、おすすめ商品など多くのバナーが張られる通販サイトを制作
    2、JSON形式のデータをAjaxで取得し、表示する機能を実装する
    2、プラグインを使用せず、スライダーの実装をする`,
    technologySelection:
    `jQuery
    ・近年のトレンドではないものの、現場で使用されているため学習は必要と判断
    ・複雑なサイトでないため、学習コストの低いjQureyを採用
    ・JavaScriptよりも簡潔なコ―ディングができる
    ・Ajaxのサポート`,
    target: "家電の買い替えを検討している主婦",
    goal: "検索速度を高め、見やすいデザインにすることでUXを向上させる",

    emotion:
    `信頼性や清潔感がある印象を与える
    ・明るめの色を採用する`,
    composition:
    `1カラム
    ・家電は、あらかじめ購入したい製品のカテゴリのみを検索することが多い
    ・閲覧中に他の製品への誘導は不要と判断
    ・サイドバーを無くし、一つひとつの要素を大きく見せる`,
    color:
    `・ベースカラー：
    メインカラーに近い色相から選択、メインカラーを強調させるため明度を高くする
    ・メインカラー：
    信頼性や清潔な印象を与える水色を採用
    ・アクセントカラー：
    メインカラーの補色のである赤を採用、価格や送料無料を強調させる`,
    siteColor: ['#8daab6', '#fff', '#b0c7d1', '#000', '#ff0000', '#000'],
    font: "視認性を高めるためゴシック体を採用",
  },
  // {
  //   modal: "",
  //   imageSrc: noImage,

  //   title: "",
  //   genre: "",
  //   dsescription: "",
  //   siteImage: noImage,
  //   siteLink: "",

  //   release: "",
  //   period: "",
  //   responsible: "",
  //   technology: "",
  //   device: "PC / タブレット / モバイル",

  //   problem: ``,
  //   solution: "",
  //   target: "",
  //   goal: "",
  //   technologySelection: "",

  //   emotion: "",
  //   composition: "",
  //   color: ``,
  //   siteColor: ['#', '#', '#', '#', '#', '#'],
  //   font: "",
  // },
];