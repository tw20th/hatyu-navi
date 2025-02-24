'use client'

import { useState } from 'react'

export default function SaleFilter({
  onFilterChange,
}: {
  onFilterChange: (filter: string) => void
}) {
  const [selectedFilter, setSelectedFilter] = useState('daily') // 初期値: デイリーセール

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter)
    onFilterChange(filter) // 親コンポーネントに変更を通知
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-3 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        🔄 セール期間を選択
      </h2>
      <div className="flex justify-center gap-4">
        {[
          { label: 'デイリー', value: 'daily' },
          { label: 'ウィークリー', value: 'weekly' },
          { label: 'マンスリー', value: 'monthly' },
        ].map(({ label, value }) => (
          <button
            key={value}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedFilter === value
                ? 'bg-[#4CAF50] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleFilterChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
