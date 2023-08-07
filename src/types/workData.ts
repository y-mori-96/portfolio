import noImage from '../images/noImg.png';
import workPortfolio from '../images/work_portfolio.png';
import workForestCode from '../images/work_forestCode.png';
import workApplianceOnline from '../images/work_applianceOnline.png';
import workBackpacktourism from '../images/work_backpacktourism.png';
import workBoardgameCafe from '../images/work_boardgameCafe.png';

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

  howto: string;

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
    technology: "HTML / CSS(Styled-Components) / TypeScript / React",
    device: "PC / タブレット / モバイル",

    howto: `各コンテンツの閲覧`,

    problem:
    `1.転職に必要な自身のポートフォリオサイトがない
    2.最新の技術を取り入れたい
    3.ページ数が多いため、画面遷移の負荷を軽減させたい
    4.実装負荷が大きいお問い合わせページは外部サービスを利用したい`,
    solution:
    `1.ポートフォリオサイトを制作する
    2.React、TypeScriptで実装を行う
    3.SPAの導入
    4.お問い合わせページには「Emailjs」を利用`,
    technologySelection:
    `1.React
    ・Reactでの開発経験がないため、経験を積みたい
    ・SPAの実現を容易にできる
    ・SEO対策は不要のため、Next.jsまでは不要
    ・「npm trends」でDL数が一番多い
    2.Styled-Components
    ・クラス名を考える手間を減らす
    ・スタイルの衝突を軽減できる
    ・コンポーネントに対応したファイルに記述しているため、修正が容易
    3.TypeScript
    ・可読性と保守性を高める
    4.Emailjs
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

    howto: `各記事の閲覧`,

    problem:
    `1.学習した内容を一元管理したい
    2.容易にコンテンツを追加できるようにしたい
    3.自分でカスタマイズしたサイトを運用したい
    4.レンタルサーバの契約、ドメイン取得、サイト公開までの経験を積みたい`,
    solution:
    `1.技術ブログを立ち上げ、運用していく
    2.WordPressを利用する
    3.PHPを用いて独自でテーマを開発する
    4.Xserverを契約し、公開する`,

    target: "自分",
    goal: "機能実装の手順やポイントをまとめ、今後の開発効率を高める",
    technologySelection:
    `1.WordPress
    ・シェア率が高い
    ・ネット上に情報が豊富にある
    ・自由なカスタマイズ
    2.PHP
    ・WordPressに用いられる言語
    3.Xserver
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
    // siteLink: "https://appliance.y-mori-96.com/",
    siteLink: "http://isp6000114.starfree.jp/online-appliance/",

    release: "2023年7月17日",
    period: "2023年6月~7月(1ヶ月)",
    responsible: "企画 / デザイン / コーディング / バナー制作",
    technology: "HTML / CSS / jQuery / Illustrator / Photoshop",
    device: "PC / タブレット / モバイル",

    howto:
    `カテゴリ検索
    ・炊飯器`,

    problem:
    `1.Illustrator / Photoshopを用いて多くのバナーを作成できるサイトを制作したい
    2.jQueryでの開発を経験したい`,
    solution:
    `1.最新情報や、おすすめ商品など多くのバナーが張られる通販サイトを制作
    2.JSON形式のデータをAjaxで取得し、表示する機能を実装する
    2.プラグインを使用せず、スライダーの実装をする`,
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
  {
    modal: "backpacktourism",
    imageSrc: workBackpacktourism,

    title: "バックパックツーリズム",
    genre: "コーポレートサイト/航空券予約サイト",
    dsescription: "架空の旅行代理店",
    siteImage: workBackpacktourism,
    // siteLink: "https://backpacktourism.y-mori-96.com/",
    siteLink: "http://isp6000114.starfree.jp/backpacktourism/",

    release: "2023年7月30日",
    period: "2023年7月(3週間)",
    responsible: "企画 / デザイン / コーディング / バナー制作",
    technology: "HTML / CSS / Sass / jQuery / Three.js / Illustrator / Photoshop / XD",
    device: "PC / タブレット / モバイル",

    howto:
    `航空券検索方法
    ・出発地：関西国際空港
    ・目的地：仁川国際空港
    ・往路出発日：2023年7月27日
    ・復路出発日：2023年8月3日
    ・大人：1人以上`,

    problem:
    `海外旅行する際に以下の悩みがある。
    1.一緒に行ってくれる友人がいない
    2.一人で行くのが不安
    3.行きたいところが見つからない
    `,
    solution:
    `サイト内で行きたいところを探し、その場で予約。
    思い立ったら即行動が出来るサイトを目指す

    1.ツアー情報の掲載
    2.お役立ち情報の掲載
    3.お祭り/世界遺産情報の掲載`,
    technologySelection:
    `1.Sass
    ・コードの記述量を減らす
    ・ファイル分割ができる
    2.jQuery
    ・学習コストが低く、素早く実装できるjQureyを採用
    ・JavaScriptよりも簡潔なコ―ディングができる
    ・Ajaxのサポート
    3.Three.js
    ・3Dオブジェクトの実装
    ・見ていて飽きないデザインを実現させる`,
    target: "就活後の男子大学4年生",
    goal: "航空券を予約",

    emotion:
    `・世界に飛び出したい気持ちを搔き立てる
    ・堅実
    ・安心安全`,
    composition:
    `1カラム
    ・シンプルなデザイン
    ・一つひとつの要素を大きく見せる`,
    color:
    `・ベースカラー：
    シンプルな白を採用
    ・メインカラー：
    堅実な印象を与える緑を採用
    ・アクセントカラー：
    メインカラーの補色のである赤系を採用`,
    siteColor: ['#ffffff', '#000', '#1d916e', '#fff', '#d49426', '#fff'],
    font:
    `・視認性を高めるためゴシック体を採用
    ・キャッチコピーは強調させるべくフォント変更。しっぽりアンチックを採用`,
  },
  {
    modal: "boardgameCafe",
    imageSrc: workBoardgameCafe,

    title: "ボードゲームカフェ　あきこま",
    genre: "SHS / 通販 / レンタル",
    dsescription: "架空のボードゲームカフェ",
    siteImage: workBoardgameCafe,
    siteLink: "https://boardgame-mori.com/boardgame-cafe/public/",

    release: "2023/8/8",
    period: "2023年3月(1ヶ月)",
    responsible: "企画 / サイト設計 / コーディング / ロゴ制作",
    technology: "HTML / CSS(Tailwind) / PHP8 / Laravel10",
    device: "PC / タブレット / モバイル",

    howto:
    `<テストユーザー>
    メールアドレス：testuser1@test.com
    パスワード：password

    <機能>
    ・投稿
    ・フォロー
    ・レビュー
    ・通販
    ・レンタル

    <通販での購入方法>
    メールアドレス：testuser1@test.com
    カード情報(カード番号)：4242 4242 4242 4242
    カード情報(有効期限)：06/26
    カード情報(セキュリティコード)：111
    カード所有者名：test
    国または地域：日本
    次回の購入：なし`,

    problem:
    `・ボードゲーム人口を増やしたい。
    ・ボードゲームは1度遊ぶと楽しさが伝わるが、
    気軽に試せる機会がなく購入してまで遊ぶことが少ない`,
    solution:
    `ボードゲームに気軽に触れることができるサービスをつくる。
    ・低価格なボードゲームカフェ
    ・レンタルサービス
    ・通販サイト
    ・SNS`,
    technologySelection:
    `1.Laravel
    ・認証機能がある
    ・MVCパターンで実装。保守性や拡張性が高い
    ・学習コストが低い`,
    target: "大学生",
    goal: "来店や通販、レンタルサービスを通して手軽にボードゲームに触れていただく",

    emotion:
    `柔らかく落ち着いた印象を与える`,
    composition:
    `1カラム
    ・シンプルなデザイン
    ・一つひとつの要素を大きく見せる`,
    color:
    `・ベースカラー：
    柔らかい印象を与える淡い緑を採用
    ・メインカラー：
    落ち着いた印象を与える濃い青を採用
    ・アクセントカラー：
    メインカラーの補色のである赤系を採用`,
    siteColor: ['#dcfce7', '#000', '#6366f1', '#fff', '#B91C1C', '#fff'],
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

  //   howto:
  //   ``,

  //   problem: ``,
  //   solution: "",
  //   technologySelection: ``,
  //   target: "",
  //   goal: "",

  //   emotion: ``,
  //   composition: ``,
  //   color: ``,
  //   siteColor: ['#', '#', '#', '#', '#', '#'],
  //   font: "",
  // },
];