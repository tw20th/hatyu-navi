import Link from 'next/link'
import { useCategories } from '@/hooks/useCategories'

const predefinedCategories = [
  { name: 'ゲージ', slug: 'cage', icon: '🏠' },
  { name: 'ライト', slug: 'light', icon: '💡' },
  { name: '餌', slug: 'food', icon: '🍽️' },
  { name: '床材', slug: 'substrate', icon: '🪵' },
  { name: '温度計', slug: 'thermometer', icon: '🌡️' },
  { name: '水入れ', slug: 'water-dish', icon: '💧' },
]

// 許可する楽天APIのカテゴリー
const allowedCategories = [
  'ゲージ',
  'ライト',
  '餌',
  '床材',
  '温度計',
  '水入れ',
  '爬虫類用シェルター',
  '爬虫類用ヒーター',
  '紫外線ライト',
  '爬虫類用給水器',
]

export default function ReptileCategories() {
  const { categories, loading, error } = useCategories()

  // 楽天APIのデータをフィルタリング
  const filteredCategories = categories
    .filter((category) => allowedCategories.includes(category.genreName))
    .map((category) => ({
      name: category.genreName,
      slug: `genre-${category.genreId}`, // IDをslugに変換
      icon: '📦', // デフォルトアイコン
    }))

  // 事前定義カテゴリとAPI取得カテゴリを結合
  const mergedCategories = [...predefinedCategories, ...filteredCategories]

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        📂 爬虫類用品カテゴリー
      </h2>

      {loading && (
        <p className="text-center text-gray-500">カテゴリーを読み込み中...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {mergedCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition text-center border border-gray-300"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <span className="text-lg font-semibold text-gray-800">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
