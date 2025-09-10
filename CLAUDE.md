# PriceFit LP - 開発ガイドライン

## プロジェクト概要
Next.js 15とReact 19を使用した「PriceFit」のランディングページ開発プロジェクト

## 技術スタック
- **フレームワーク**: Next.js 15.3.5
- **ライブラリ**: React 19, React DOM 19
- **CSS**: Tailwind CSS v4
- **リンター/フォーマッター**: Biome 2.1.1
- **言語**: TypeScript 5
- **パッケージマネージャー**: pnpm

## 開発環境セットアップ

### 依存関係のインストール
```bash
pnpm install
```

### 開発サーバーの起動
```bash
pnpm dev
```

## 利用可能なコマンド

### 開発関連
- `pnpm dev` - 開発サーバーを起動
- `pnpm build` - 本番用ビルドを作成
- `pnpm start` - 本番サーバーを起動

### コード品質管理
- `pnpm lint` - Next.jsの標準リントを実行
- `pnpm lint:biome` - Biomeでリントチェック
- `pnpm lint:biome:fix` - Biomeでリント問題を自動修正
- `pnpm format` - Biomeでコードフォーマットを実行
- `pnpm format:check` - フォーマットチェックのみ実行
- `pnpm check` - Biomeで全体チェック（リント + フォーマット）
- `pnpm check:fix` - Biomeで全体チェック + 自動修正

## 開発ワークフロー

### 修正後の必須検証手順
1. **リンター実行**: `pnpm check:fix`
2. **ビルド確認**: `pnpm build`

### コミット前のチェックリスト
- [ ] `pnpm check:fix` でリント/フォーマットエラーを解決
- [ ] `pnpm build` が成功することを確認

## ファイル構成
- `src/app/` - Next.js App Routerのページとレイアウト
- `src/components/` - 再利用可能なコンポーネント
- `public/` - 静的ファイル（画像、SVGなど）

## コーディング規約
- Tailwind CSS v4を使用（ユーティリティファーストアプローチ）
- TypeScriptの厳格な型チェックを使用
- any型の使用は避ける
- Biomeの設定に従ってコードスタイルを統一

## コミットメッセージ規約

### フォーマット
```
<type>: <description>
```

### コミットタイプ
- `feat` - 新機能の追加
- `fix` - バグ修正
- `docs` - ドキュメントの変更
- `style` - コードスタイルの変更（機能に影響しない）
- `refactor` - リファクタリング
- `test` - テストの追加または修正
- `chore` - ビルドプロセスやツールの変更

### 例
```bash
feat: add contact form validation
fix: resolve mobile navigation menu issue
docs: update installation instructions
style: format code with biome
refactor: optimize component structure
```

### 注意事項
- コミットメッセージは英語で記述
- 説明文は動詞の原形で開始
- 簡潔で分かりやすい説明を心がける

## 注意事項
- パッケージマネージャーはpnpmを使用
- 新しい依存関係追加前はチームと相談
- 開発サーバーはlocalhost:3000で起動
