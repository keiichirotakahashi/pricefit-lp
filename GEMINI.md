# PriceFit LP - 開発ガイドライン (for Gemini)

## プロジェクト概要
このプロジェクトは、Next.js 15とReact 19を使用したメディアモニタリングツール「PriceFit」のランディングページです。

## 技術スタック
- **フレームワーク**: Next.js 15.3.5
- **ライブラリ**: React 19, React DOM 19
- **CSS**: Tailwind CSS v4
- **リンター/フォーマッター**: Biome 2.1.1
- **言語**: TypeScript 5
- **パッケージマネージャー**: pnpm

## 開発環境セットアップ
依存関係のインストールは `pnpm install`、開発サーバーの起動は `pnpm dev` で行います。

## 開発ワークフロー

### 修正後の必須検証手順
コードを修正した後は、必ず以下のコマンドを実行して検証してください。

1.  **リンター & フォーマッター実行**:
    ```bash
    pnpm check:fix
    ```
2.  **ビルド確認**:
    ```bash
    pnpm build
    ```

### コミット前のチェックリスト
- [ ] `pnpm check:fix` を実行して、リントとフォーマットのエラーがないことを確認した。
- [ ] `pnpm build` が成功することを確認した。

## コーディング規約
- **スタイリング**: Tailwind CSS v4のユーティリティファーストアプローチに従ってください。
- **TypeScript**: 厳格な型チェックが有効です。`any`型の使用は避け、適切な型定義を行ってください。
- **コードスタイル**: Biomeの規約に従います。`pnpm check:fix`で自動修正してください。
- **ファイル構成**:
    - `src/app/`: Next.js App Routerのページとレイアウト
    - `src/components/`: 再利用可能なUIコンポーネント
    - `public/`: 静的ファイル（画像、SVGなど）

## コミットメッセージ規約
コミットメッセージは以下の形式に従ってください。

### フォーマット
```
<type>: <description>
```

### コミットタイプ
- `feat`: 新機能の追加
- `fix`: バグ修正
- `docs`: ドキュメントの変更
- `style`: コードスタイルの変更（フォーマット、セミコロンなど）
- `refactor`: コードのリファクタリング
- `test`: テストの追加・修正
- `chore`: ビルドプロセスや補助ツールの変更

### 例
```
feat: add contact form validation
fix: resolve mobile navigation menu issue
```

### 注意事項
- コミットメッセージは**英語**で記述してください。
- 説明文（description）は動詞の原形で始めてください。
- 簡潔で分かりやすいメッセージを心がけてください。
