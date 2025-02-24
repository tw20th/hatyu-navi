'use client'

import { useState } from 'react'

const blogCategories = [
  { name: 'すべて', slug: 'all' },
  { name: '飼育ガイド', slug: 'guide' },
  { name: '餌・栄養', slug: 'food' },
  { name: '環境・設備', slug: 'equipment' },
  { name: '健康・病気', slug: 'health' },
  { name: '種類・特徴', slug: 'species' },
]

export default function BlogCategoryNavigation({
  onCategoryChange,
}: {
  onCategoryChange: (category: string) => void
}) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-3 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        📂 ブログカテゴリ
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {blogCategories.map((category) => (
          <button
            key={category.slug}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === category.slug
                ? 'bg-[#4CAF50] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleCategoryClick(category.slug)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
