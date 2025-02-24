'use client'

import { useState } from 'react'

interface SortControlsProps {
  onSortChange: (sortType: string) => void
}

export default function SortControls({ onSortChange }: SortControlsProps) {
  const [selectedSort, setSelectedSort] = useState('sales') // 初期値は「売上順」

  const handleSortChange = (sortType: string) => {
    setSelectedSort(sortType)
    onSortChange(sortType) // 親コンポーネントに選択したソートタイプを渡す
  }

  return (
    <div className="container mx-auto py-4">
      <h3 className="text-lg font-semibold text-[#4CAF50] mb-2">🔄 並び替え</h3>
      <div className="flex flex-wrap gap-3">
        {[
          { label: '売上順', value: 'sales' },
          { label: 'レビュー順', value: 'reviews' },
          { label: '価格の安い順', value: 'price_low' },
          { label: '価格の高い順', value: 'price_high' },
        ].map((option) => (
          <button
            key={option.value}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedSort === option.value
                ? 'bg-[#4CAF50] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleSortChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
