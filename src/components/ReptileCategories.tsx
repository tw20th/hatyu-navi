import Link from 'next/link'

const categories = [
  { name: 'ゲージ', slug: 'cage', icon: '🏠' },
  { name: 'ライト', slug: 'light', icon: '💡' },
  { name: '餌', slug: 'food', icon: '🍽️' },
  { name: '床材', slug: 'substrate', icon: '🪵' },
  { name: '温度計', slug: 'thermometer', icon: '🌡️' },
  { name: '水入れ', slug: 'water-dish', icon: '💧' },
]

export default function ReptileCategories() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        📂 爬虫類用品カテゴリー
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition text-center"
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <span className="text-lg font-semibold text-gray-800">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
