# Nakame Hub

中目黒での言語交換コミュニティ「Nakame Hub」の公式ウェブサイトです。外国語学習者、地元の方、そして異文化交流を楽しみたいすべての人を対象とした、カジュアルで居心地のよいコミュニティスペースを提供しています。

## 🌟 特徴

- **多言語対応**: 日本語と英語の切り替えが可能
- **レスポンシブデザイン**: モバイルファーストで設計
- **モダンな UI**: Material-UI を使用した美しいインターフェース
- **状態管理**: Redux Toolkit による効率的な状態管理
- **高速開発**: Vite による高速な開発環境

## 🚀 技術スタック

### フロントエンド

- **React 19.1.1** - UI ライブラリ
- **Vite 7.1.7** - ビルドツール
- **Redux Toolkit 2.9.1** - 状態管理
- **Material-UI 7.3.4** - UI コンポーネント
- **Emotion** - CSS-in-JS

### 開発ツール

- **ESLint** - コード品質管理
- **TypeScript** - 型安全性（開発時）

## 📁 プロジェクト構造

```
NakameHub/
├── public/                 # 静的ファイル
├── src/
│   ├── assets/            # 画像・アイコン
│   │   ├── community.jpg
│   │   ├── nakamerRiver.jpg
│   │   └── favicon.ico
│   ├── components/        # Reactコンポーネント
│   │   ├── Header.jsx     # ヘッダー（言語切り替え機能付き）
│   │   ├── Hero.jsx       # ヒーローセクション
│   │   ├── Text.jsx       # テキスト表示コンポーネント
│   │   ├── List.jsx       # リスト表示コンポーネント
│   │   ├── Discover.jsx   # 活動紹介セクション
│   │   └── Footer.jsx     # フッター
│   ├── data/              # コンテンツデータ
│   │   ├── JapContent.js  # 日本語コンテンツ
│   │   └── EngContent.js  # 英語コンテンツ
│   ├── modules/           # Redux関連
│   │   ├── store.js       # Reduxストア設定
│   │   └── langSlice.js   # 言語切り替えスライス
│   ├── App.jsx            # メインアプリケーション
│   └── main.jsx           # エントリーポイント
├── index.html             # HTMLテンプレート
├── index.css              # グローバルスタイル
├── package.json           # 依存関係
└── vite.config.js         # Vite設定
```

## 🎯 主な機能

### 1. 言語切り替え

- ヘッダーのボタンで日本語と英語を切り替え
- Redux Toolkit による状態管理
- 動的コンテンツ読み込み

### 2. イベント情報

- **ランゲージエクスチェンジ**: 週 1 回開催の日本語・英語交流セッション
- **クッキングミキサー**: 文化的背景を共有しながらの料理イベント
- **トレーディングナイト**: 月 1 回の物々交換イベント
- **オープンマイク**: 月 1 回のパフォーマンス発表会
- **ブック＆スタディラウンジ**: 自習と交流の場

### 3. コミュニティ情報

- 対象者とコンセプトの説明
- 活動の流れの紹介
- 最新活動の紹介

## 🛠️ セットアップ

### 前提条件

- Node.js (v16 以上)
- npm または yarn

### インストール

1. リポジトリをクローン

```bash
git clone <repository-url>
cd NakameHub
```

2. 依存関係をインストール

```bash
npm install
```

3. 開発サーバーを起動

```bash
npm run dev
```

4. ブラウザで `http://localhost:5173` を開く

### 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# ESLintによるコードチェック
npm run lint
```

## 🎨 デザインシステム

### カラーパレット

- **背景色**: #d3d3d3 (ライトグレー)
- **テキスト**: #000000 (ブラック)
- **ヘッダー**: #ffffff (ホワイト)

### タイポグラフィ

- **フォント**: Crimson Text (Google Fonts)
- **ウェイト**: 400, 600, 700
- **スタイル**: Regular, Italic

### レイアウト

- **最大幅**: 500px
- **パディング**: 20px
- **レスポンシブ**: モバイルファースト

## 🌐 多言語対応

### コンテンツ管理

- `src/data/JapContent.js`: 日本語コンテンツ
- `src/data/EngContent.js`: 英語コンテンツ
- 動的インポートによる効率的な読み込み

### 言語切り替え

- Redux Toolkit による状態管理
- ヘッダーのボタンで即座に切り替え
- コンテンツの自動再読み込み

## 📱 レスポンシブデザイン

- モバイルファーストのアプローチ
- 固定ヘッダーによるナビゲーション
- 画像の最適化とレスポンシブ対応

## 🚀 デプロイ

### Vite ビルド

```bash
npm run build
```

ビルド結果は `dist/` フォルダに生成されます。

### 静的ホスティング

- Netlify
- Vercel
- GitHub Pages
- その他の静的ホスティングサービス

## 🤝 貢献

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

---

**Nakame Hub** - 中目黒での言語交換コミュニティ
