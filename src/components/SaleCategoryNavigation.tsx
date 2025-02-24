'use client'

import { useState } from 'react'

const saleCategories = [
  { name: 'ゲージ', slug: 'cage', icon: '🏠' },
  { name: 'ライト', slug: 'light', icon: '💡' },
  { name: '餌', slug: 'food', icon: '🍽️' },
  { name: '床材', slug: 'substrate', icon: '🪵' },
  { name: '温度計', slug: 'thermometer', icon: '🌡️' },
  { name: '水入れ', slug: 'water-dish', icon: '💧' },
]

interface SaleCategoryNavigationProps {
  onCategoryChange: (category: string) => void // ✅ 親に通知する関数
}

export default function SaleCategoryNavigation({
  onCategoryChange,
}: SaleCategoryNavigationProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category) // ✅ ローカル状態を更新
    onCategoryChange(category) // ✅ 親 (`SalePage.tsx`) にカテゴリを通知
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-3 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        🏷️ セールカテゴリ
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition ${
            selectedCategory === 'all'
              ? 'bg-[#4CAF50] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => handleCategoryChange('all')}
        >
          🔥 全セール
        </button>
        {saleCategories.map((category) => (
          <button
            key={category.slug}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === category.slug
                ? 'bg-[#4CAF50] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleCategoryChange(category.slug)}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
