'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim() === '') return
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex items-center bg-white rounded-full shadow-md border border-gray-300"
    >
      {/* 🔍 アイコン */}
      <span className="pl-3 text-gray-500">🔍</span>

      {/* 🔎 入力フォーム */}
      <input
        type="text"
        placeholder="サイト内検索..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-3 py-2 outline-none rounded-l-full text-gray-900"
      />

      {/* 🔎 検索ボタン */}
      <button
        type="submit"
        className="bg-[#4CAF50] text-white px-4 py-2 rounded-r-full hover:bg-green-700 transition"
      >
        検索
      </button>
    </form>
  )
}
