import { SkillCategoriesValue } from './SkillCategories';

export type SkillData = {
  title: string;
  experience: string;
  dsescription: string;
  categories: SkillCategoriesValue;
};

const SkillsData: SkillData[] = [
  {
    title: "HTML",
    experience: "個人開発で使用",
    dsescription: `・リストやテーブル、フォームの作成\n・セクションタグの使い分け\n・calc()やvar()など変数の利用`,
    categories: 'フロントエンド',
  },
  {
    title: "CSS",
    experience: "個人開発で使用",
    dsescription: `・アニメーションとトランジションの追加\n・FlexboxやGridを使用したレイアウトの作成\n・Sstyled-componentsやTailwindの使用`,
    categories: 'フロントエンド',
  },
  {
    title: "JavaScript",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'フロントエンド',
  },
  {
    title: "TypeScript",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'フロントエンド',
  },
  {
    title: "jQuery",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'フロントエンド',
  },
  {
    title: "React",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'フロントエンド',
  },
  {
    title: "Three.js",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'フロントエンド',
  },
  {
    title: "C",
    experience: "実務で使用",
    dsescription: `・ビット演算とビットフィールドの利用\n・ポインタの操作\n・構造体と列挙型の定義と使用`,
    categories: 'バックエンド',
  },
  {
    title: "PHP",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'バックエンド',
  },
  {
    title: "Laravel",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'バックエンド',
  },
  {
    title: "WordPress",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'バックエンド',
  },
  {
    title: "Node.js",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'バックエンド',
  },
  {
    title: "MySQL",
    experience: "個人開発で使用",
    dsescription: `・\n・\n・\n`,
    categories: 'バックエンド',
  },
  {
    title: "Illustrator",
    experience: "職業訓練校で基礎的な操作を習得",
    dsescription: `・基本的なツールの使用方法と操作\n・パスと形状の編集と調整\n・テキストの追加と編集`,
    categories: 'ツール',
  },
  {
    title: "Photoshop",
    experience: "職業訓練校で基礎的な操作を習得",
    dsescription: `・基本的なツールの使用方法と操作\n・色調補正\n・画像の修正`,
    categories: 'ツール',
  },
  {
    title: "XD",
    experience: "職業訓練校で基礎的な操作を習得",
    dsescription: `・\n・\n・`,
    categories: 'ツール',
  },
  {
    title: "Git",
    experience: "プログラミングスクールで基礎的な操作を習得",
    dsescription: `・リモートリポジトリへのプッシュとプル\n・コンフリクトの解決\n・Git Flowに基づくブランチ設計`,
    categories: 'ツール',
  },
  {
    title: "VScode",
    experience: "実務で使用",
    dsescription: `・拡張機能の導入と設定\n・Githubとの連携\n・エディタの設定ファイルのカスタマイズ`,
    categories: 'ツール',
  },
  {
    title: "サクラエディタ",
    experience: "実務で使用",
    dsescription: `・基本的なエディタの操作\n・各種設定\n・正規表現を使った検索と置換`,
    categories: 'ツール',
  },
  {
    title: "Excel",
    experience: "実務で使用",
    dsescription: `・VLOOKUPなどの関数の利用\n・ピポットテーブルでの集計\n・VBAによる自動化`,
    categories: 'ツール',
  },
  {
    title: "PowerPoint",
    experience: "実務で使用",
    dsescription: `・スライドマスターの編集\n・スライドショーの実行\n・会議資料の作成`,
    categories: 'ツール',
  },
  {
    title: "Word",
    experience: "実務で使用",
    dsescription: `・画像と図形の挿入と編集\n・目次や索引の作成\n・コメントや変更履歴による文章校正`,
    categories: 'ツール',
  },
  {
    title: "Outlook",
    experience: "実務で使用",
    dsescription: `・会議の設定\n・予定表の共有\n・フィルタリング`,
    categories: 'ツール',
  },
  {
    title: "Slack",
    experience: "プログラミングスクールで基礎的な操作を習得",
    dsescription: `・メッセージの送信\n・スレッドの作成と返信\n・検索と過去のメッセージの閲覧`,
    categories: 'ツール',
  },
];

export default SkillsData;