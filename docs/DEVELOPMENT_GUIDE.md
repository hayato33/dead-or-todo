# タスク管理アプリ開発手順書

## プロジェクト概要

シンプルなTODOアプリから始まり、自動アーカイブ機能を持つタスク管理アプリを段階的に開発する。

### 主要機能

- タスク管理（CRUD操作）
- 自動アーカイブ機能（12時間経過後、ページリロード時）
- ログイン機能（AWS Cognito）
- クラウドデプロイ（AWS）

### 技術スタック

- **フロントエンド**: Vue 3 + TypeScript + Pinia
- **UI**: TailwindCSS + Radix Vue
- **デプロイ**: AWS Amplify（早期デプロイ、CI/CD活用）
- **バックエンド**: FastAPI（将来実装）
- **データベース**: AWS RDS/DynamoDB（将来実装）
- **認証**: AWS Cognito（将来実装）
- **インフラ最適化**: S3 + CloudFront（将来実装）

## 🎯 開発戦略

### 段階的開発アプローチ

1. **🚀 最優先**: 3時間で実用最小限TODO完成
2. **📋 段階拡張**: 必要に応じて機能追加
3. **🔮 将来構想**: API・認証・インフラ最適化

## Issue・ブランチ一覧

### 🚀 最優先実装（まずはこれだけ）

| Issue    | ブランチ名 | 内容                                                | 期間        |
| -------- | ---------- | --------------------------------------------------- | ----------- |
| **#000** | `feat/mvp` | **3時間版MVP: 実用最小限TODO + Amplifyデプロイ** 🎯 | **[3時間]** |

**詳細:**

- 環境セットアップ（TailwindCSS導入）
- 基本TODO機能（追加・表示・完了切替）
- localStorage保存
- Amplifyデプロイ・GitHub連携

---

### 📋 段階拡張（MVP完成後に必要に応じて）

#### 基本機能拡張

| Issue    | ブランチ名                 | 内容                                         | 期間    |
| -------- | -------------------------- | -------------------------------------------- | ------- |
| **#001** | `feat/task-edit-delete`    | タスク編集・削除機能                         | [1日]   |
| **#002** | `feat/category-management` | カテゴリ管理機能                             | [2日]   |
| **#003** | `feat/task-filtering`      | フィルタリング機能（ステータス・カテゴリ別） | [2日]   |
| **#004** | `feat/auto-archive`        | 自動アーカイブ機能（12時間経過）             | [2-3日] |
| **#005** | `feat/responsive-design`   | レスポンシブデザイン対応                     | [2日]   |

#### 開発環境改善

| Issue    | ブランチ名                    | 内容                         | 期間  |
| -------- | ----------------------------- | ---------------------------- | ----- |
| **#006** | `feat/pinia-integration`      | Pinia状態管理導入            | [2日] |
| **#007** | `feat/radix-vue`              | Radix Vue コンポーネント導入 | [2日] |
| **#008** | `feat/typescript-enhancement` | TypeScript設定強化           | [1日] |

#### 品質向上

| Issue    | ブランチ名                      | 内容                 | 期間  |
| -------- | ------------------------------- | -------------------- | ----- |
| **#009** | `feat/unit-tests`               | 単体テスト実装       | [3日] |
| **#010** | `feat/e2e-tests`                | E2Eテスト実装        | [2日] |
| **#011** | `feat/performance-optimization` | パフォーマンス最適化 | [1日] |
| **#012** | `feat/accessibility`            | アクセシビリティ対応 | [1日] |

#### 追加機能

| Issue    | ブランチ名                   | 内容                      | 期間  |
| -------- | ---------------------------- | ------------------------- | ----- |
| **#013** | `feat/task-search`           | タスク検索機能            | [2日] |
| **#014** | `feat/data-export`           | データエクスポート機能    | [1日] |
| **#015** | `feat/keyboard-shortcuts`    | キーボードショートカット  | [1日] |
| **#016** | `feat/browser-notifications` | 通知機能（ブラウザ通知）  | [1日] |
| **#017** | `feat/dark-mode`             | ダークモード実装          | [1日] |
| **#018** | `feat/pwa`                   | Progressive Web App (PWA) | [2日] |

---

### 🔮 将来構想（本格的な拡張時）

#### API統合

| Issue    | ブランチ名                | 内容                                 | 期間  |
| -------- | ------------------------- | ------------------------------------ | ----- |
| **#019** | `feat/fastapi-setup`      | FastAPIプロジェクト初期化            | [1日] |
| **#020** | `feat/database-design`    | データベース設計・実装               | [5日] |
| **#021** | `feat/task-api`           | タスクAPI開発（CRUD）                | [5日] |
| **#022** | `feat/api-client`         | API クライアント実装                 | [3日] |
| **#023** | `feat/api-migration`      | ローカルストレージからAPI移行        | [2日] |
| **#024** | `feat/error-handling`     | エラーハンドリング・ローディング状態 | [2日] |
| **#025** | `feat/aws-database-setup` | AWS RDS/DynamoDB設定                 | [3日] |
| **#026** | `feat/fastapi-deploy`     | FastAPI デプロイ設定（EC2/Lambda）   | [3日] |

#### 認証機能

| Issue    | ブランチ名                  | 内容                      | 期間    |
| -------- | --------------------------- | ------------------------- | ------- |
| **#027** | `feat/cognito-auth`         | Cognito設定・認証機能実装 | [1週間] |
| **#028** | `feat/multi-user`           | マルチユーザー対応        | [1週間] |
| **#029** | `feat/security-enhancement` | セキュリティ強化          | [2日]   |

#### インフラ最適化

| Issue    | ブランチ名                     | 内容                | 期間         |
| -------- | ------------------------------ | ------------------- | ------------ |
| **#030** | `feat/s3-cloudfront-migration` | S3 + CloudFront移行 | [1週間]      |
| **#031** | `feat/monitoring-optimization` | 監視・最適化        | [2日+継続的] |

## ブランチ戦略

### シンプル構成

- `main`: 本番環境用の安定版（Amplifyデプロイ先）
- `develop`: 開発統合ブランチ
- `feat/*`: 各機能開発ブランチ（上記テーブル参照）
- `docs/*`: ドキュメント専用更新ブランチ

### 基本的な開発フロー

#### 機能開発の場合

```bash
# 機能開発開始
git checkout develop
git checkout -b feat/mvp

# 開発・コミット
git add .
git commit -m "feat: 基本TODO機能実装"

# developにマージ
git checkout develop
git merge feat/mvp

# mainにマージ（本番デプロイ）
git checkout main
git merge develop
git push origin main  # → Amplify自動デプロイ
```

#### ドキュメント更新の場合

```bash
# ドキュメント更新開始
git checkout develop
git checkout -b docs/update-readme

# ドキュメント編集・コミット
git add README.md docs/
git commit -m "docs: Amplifyデプロイ手順をREADMEに追加"

# developにマージ
git checkout develop
git merge docs/update-readme

# mainにマージ（ドキュメント更新デプロイ）
git checkout main
git merge develop
git push origin main
```

> **💡 シンプルルール**: 複雑なブランチ管理は後回し。まずは動くものを作る！

## 開発ガイドライン

### コーディング規約

- **言語**: TypeScript
- **フォーマッター**: Prettier
- **リンター**: ESLint
- **コミット**: Conventional Commits

### ドキュメント要件

- TSDoc形式でコメント記載
- README更新（各フェーズ完了時）
- API仕様書作成（フェーズ2）

#### `docs/` ブランチの使用例

| ブランチ名                  | 対象ファイル            | 内容                                   |
| --------------------------- | ----------------------- | -------------------------------------- |
| `docs/update-readme`        | README.md               | プロジェクト概要・セットアップ手順更新 |
| `docs/amplify-deploy-guide` | docs/DEPLOY_GUIDE.md    | Amplifyデプロイ手順書作成              |
| `docs/api-specification`    | docs/API_SPEC.md        | API仕様書更新                          |
| `docs/component-usage`      | docs/COMPONENT_GUIDE.md | コンポーネント使用例追加               |
| `docs/troubleshooting`      | docs/TROUBLESHOOTING.md | トラブルシューティングガイド           |

**ドキュメント更新のガイドライン:**

- コード変更を含まない、説明文書のみの更新
- README、手順書、API仕様書、コメント等
- 軽微な修正でも専用ブランチを作成
- `docs:` プレフィックスでコミット

### テスト戦略

- **単体テスト**: Vitest
- **E2Eテスト**: Playwright
- **カバレッジ**: 80%以上目標

### 参考資料

- [Vue 3公式ドキュメント](https://vuejs.org/)
- [Pinia公式ドキュメント](https://pinia.vuejs.org/)
- [Radix Vue公式ドキュメント](https://radix-vue.com/)
- [TailwindCSS公式ドキュメント](https://tailwindcss.com/)
- [FastAPI公式ドキュメント](https://fastapi.tiangolo.com/)
- [AWS Cognito開発者ガイド](https://docs.aws.amazon.com/cognito/)
- [AWS Amplify公式ドキュメント](https://docs.amplify.aws/)

---

**更新日**: 2025年7月8日現在  
**バージョン**: 1.0.0  
**担当者**: 國分颯人
