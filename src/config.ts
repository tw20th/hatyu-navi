// ✅ サーバーサイド用（バックエンド API 呼び出し）
export const RAKUTEN_APP_ID =
  typeof window === 'undefined' ? process.env.RAKUTEN_APP_ID || '' : ''

// ✅ フロントエンド用（クライアントで使用）
export const NEXT_PUBLIC_RAKUTEN_APP_ID =
  typeof window !== 'undefined'
    ? process.env.NEXT_PUBLIC_RAKUTEN_APP_ID || ''
    : ''

// ✅ 環境変数チェック（サーバーサイドのみで実行）
if (typeof window === 'undefined' && !RAKUTEN_APP_ID) {
  throw new Error('❌ 環境変数 RAKUTEN_APP_ID が設定されていません')
}

// ✅ 楽天APIの基本URL
export const RAKUTEN_API_BASE_URL = 'https://app.rakuten.co.jp/services/api'

// ✅ ISR（Incremental Static Regeneration）の再生成用シークレットキー
export const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || ''

// ✅ 楽天商品検索APIのデフォルトジャンルID
export const DEFAULT_GENRE_ID = '560198'

// ✅ 1ページあたりの取得件数（ページネーション対応）
export const PER_PAGE = 10

// ✅ 楽天APIのソートマッピング
export const SORT_TYPE_MAP: Record<string, string> = {
  sales: 'standard',
  price_asc: '+itemPrice',
  price_desc: '-itemPrice',
  review_desc: '-reviewCount',
}

// ✅ カテゴリーAPIのエンドポイント
export const CATEGORY_API_ENDPOINT = '/api/rakuten/categories'

// ✅ 楽天APIのバージョン設定
export const RAKUTEN_API_VERSION_ITEMS = '20220601' // 商品検索APIのバージョン
export const RAKUTEN_API_VERSION_GENRE = '20140222' // カテゴリ取得APIのバージョン
