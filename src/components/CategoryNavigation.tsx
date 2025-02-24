'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const categories = [
  { name: 'ゲージ', slug: 'cage', icon: '🏠' },
  { name: 'ライト', slug: 'light', icon: '💡' },
  { name: '餌', slug: 'food', icon: '🍽️' },
  { name: '床材', slug: 'substrate', icon: '🪵' },
  { name: '温度計', slug: 'thermometer', icon: '🌡️' },
  { name: '水入れ', slug: 'water-dish', icon: '💧' },
]

export default function CategoryNavigation() {
  const pathname = usePathname() // 現在のページのパスを取得
  const currentCategory = pathname.split('/').pop() // URL から現在のカテゴリースラッグを取得

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        📂 カテゴリー一覧
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className={`block p-4 rounded-lg shadow-md text-center transition ${
              currentCategory === category.slug
                ? 'bg-[#4CAF50] text-white font-bold' // 現在のカテゴリを強調
                : 'bg-white text-gray-900 hover:shadow-lg'
            }`}
          >
            <div className="text-3xl">{category.icon}</div>
            <span className="text-lg">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
