'use client'

import { useState } from 'react'

interface RankingFilterProps {
  onFilterChange: (filter: string) => void // ✅ 親に通知する関数
}

export default function RankingFilter({ onFilterChange }: RankingFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState('weekly') // 初期値: 週間ランキング

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter)
    onFilterChange(filter) // ✅ 親コンポーネントへ通知
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-3 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        🔄 ランキング期間を選択
      </h2>
      <div className="flex justify-center gap-4">
        {[
          { label: '週間', value: 'weekly' },
          { label: '月間', value: 'monthly' },
          { label: '年間', value: 'yearly' },
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
