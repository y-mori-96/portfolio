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
    experience: "職業訓練校で基礎的な内容を学習",
    dsescription: `・リストやテーブル、フォームの作成\n・セクションタグの使い分け\n・calc()やvar()等変数の利用`,
    categories: 'フロントエンド',
  },
  {
    title: "CSS",
    experience: "職業訓練校で基礎的な内容を学習",
    dsescription: `・アニメーションとトランジションの追加\n・FlexboxやGridを使用したレイアウトの作成\n・Styled-componentsやTailwindの使用`,
    categories: 'フロントエンド',
  },
  {
    title: "JavaScript",
    experience: "プログラミングスクールで基礎的な内容を習得",
    dsescription: `・関数の定義と呼び出し\n・map()やfilter()、分割代入等の配列操作\n・イベントハンドリングとDOMの操作`,
    categories: 'フロントエンド',
  },
  {
    title: "TypeScript",
    experience: "書籍や動画学習サイト等で独学",
    dsescription: `・基本的な文法とデータ型の理解\n・関数の定義、型指定\n・型エイリアスの利用`,
    categories: 'フロントエンド',
  },
  {
    title: "jQuery",
    experience: "職業訓練校で基礎的な内容を学習",
    dsescription: `・イベントの検出と処理\n・プラグインの導入と利用\n・Ajaxを利用した非同期通信の実装`,
    categories: 'フロントエンド',
  },
  {
    title: "React",
    experience: "書籍や動画学習サイト等で独学",
    dsescription: `・JSXの基本的な文法とコンポーネントの作成\n・React Routerを使ったルーティングの実装\n・React Hooksの理解と利用`,
    categories: 'フロントエンド',
  },
  {
    title: "Three.js",
    experience: "書籍や動画学習サイト等で独学",
    dsescription: `・基本的なシーンの作成とカメラの設定\n・マテリアルとテクスチャの適用\n・カメラの操作`,
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
    experience: "プログラミングスクールで基礎的な内容を習得",
    dsescription: `・基本的な文法とデータ型の理解\n・関数の定義と呼び出し\n・フォームデータの処理`,
    categories: 'バックエンド',
  },
  {
    title: "Laravel",
    experience: "プログラミングスクールで基礎的な内容を習得",
    dsescription: `・多対多のリレーションの実装\n・Laravel Breezeを用いた認証機能の実装\n・MVCアーキテクチャの理解と実装`,
    categories: 'バックエンド',
  },
  {
    title: "WordPress",
    experience: "職業訓練校で基礎的な内容を学習",
    dsescription: `・ドメイン取得から公開までの環境構築\n・投稿、固定ページ、カスタム投稿の理解\n・テンプレートファイルの作成`,
    categories: 'バックエンド',
  },
  {
    title: "MySQL",
    experience: "プログラミングスクールで基礎的な内容を習得",
    dsescription: `・LIMITやORDER BY等を用いたデータの検索\n・INSERTやUDDATE等を用いたデータ操作\n・正規化の理解`,
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
    dsescription: `・VLOOKUP等の関数の利用\n・ピポットテーブルでの集計\n・VBAによる自動化`,
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