'use client'

import { useState } from 'react'

export default function BlogSearch({
  onSearch,
}: {
  onSearch: (query: string) => void
}) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query) // 検索結果を更新
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="🔍 記事を検索"
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-[#4CAF50]"
      />
    </div>
  )
}
