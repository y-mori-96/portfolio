# このサイトについて
ポートフォリオサイト

# 要件
|  分類  |  ｻｲｽﾞ(w_h)  |
| ---- | ---- |
|  ﾁｪｯｸﾎﾞｯｸｽ  |  50px_50px  |

## マージン
|  分類  |  上(rem)  |  右(rem)  |  下(rem)  |  左(rem)  |
| ---- | ---- | ---- | ---- | ---- |
|  見出し1  |  -  |  -  |  -  |  -  |
|  見出し2  |  2  |  -  |  2  |  -  |
|  ﾁｪｯｸﾎﾞｯｸｽ  |  -  |  -  |  1.5  |  -  |
## フォントサイズ
|  ページ      |  活用  |  ｻｲｽﾞ(rem)  |  タグ  |
| ---- | ---- | ---- | ---- |
|  共通        |  ﾛｺﾞ           |  -   |  h1  |
|  共通        |  ﾍﾟｰｼﾞﾀｲﾄﾙ     |  3    |  h2  |
|  共通        |  ﾚｽﾎﾟﾝｼﾌﾞﾅﾋﾞ   |  3    |  a  |
|  私について  |  ﾌﾟﾗｲﾍﾞｰﾄﾀｲﾄﾙ  |  2    |  h3  |
|  私について  |  ﾀﾌﾞﾀｲﾄﾙ       |  1.5    |  li  |
|  私について  |  経歴ﾀｲﾄﾙ      |  2    |  h3  |
|  私について  |  経歴ﾘｽﾄ        |  1.25 |  li  |
|  制作物      |  開発種類      |  2    |  h3  |
|  スキル      |  ｽｷﾙ検索       |  1.5  |  checkbox  |

## ブレイクポイント
### デスクトップ
```typescript
@media (min-width: 1201px) {
}
```
### ノートPC
```typescript
@media (max-width: 1200px) and (min-width: 769px) {
}
```
### タブレット
```typescript
@media (max-width: 768px) and (min-width: 601px) {
}
```
### PC半分
```typescript
@media (max-width: 600px) and (min-width: 376px) {
  grid-template-columns: repeat(1, 1fr);
}
```
### モバイル
```typescript
@media (max-width: 375px) {
  grid-template-columns: repeat(1, 1fr);
}
```

## スキル
### カテゴリ
* デザイン
* フロントエンド
* バックエンド
* ツール

### 要件
* 初期値「すべて」。
* 「すべて」が選択されたとき、「すべて」以外のカテゴリのチェックを付ける。
* 「すべて」が選択解除されたとき、カテゴリのチェックを外す。
* 「すべて」が選択されている状態、かつ、「すべて」以外のカテゴリがクリックされたとき以下の処理を行う。
  - 「すべて」のチェックを外す。
  - クリックされたカテゴリのチェックを付ける。
* 「すべて」が選択されていない状態、かつ、「すべて」以外のカテゴリがクリックされたとき以下の処理を行う。
  - クリックされたカテゴリのチェックを付ける。
  - 複数選択可