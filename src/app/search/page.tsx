'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface SearchResult {
  type: 'blog' | 'product' | 'sale' | 'ranking'
  name: string
  link: string
  description: string
}

const mockData: SearchResult[] = [
  // ブログ記事
  {
    type: 'blog',
    name: '爬虫類の正しい温度管理',
    link: '/blog/reptile-temperature',
    description: '爬虫類の温度管理の重要性を解説！',
  },
  {
    type: 'blog',
    name: '爬虫類の餌の種類',
    link: '/blog/reptile-food',
    description: '栄養価の高い餌の種類を紹介',
  },

  // 商品
  {
    type: 'product',
    name: '爬虫類ゲージセット',
    link: '/categories/cage',
    description: '爬虫類に最適なゲージセット',
  },
  {
    type: 'product',
    name: 'UVBライト',
    link: '/categories/light',
    description: '爬虫類のためのライト',
  },

  // セール
  {
    type: 'sale',
    name: '特価ゲージセット',
    link: '/sale/cage',
    description: '期間限定20%OFF!',
  },

  // ランキング
  {
    type: 'ranking',
    name: '人気の爬虫類ライト',
    link: '/ranking/light',
    description: '爬虫類飼育者に人気のライト',
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase() || ''
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (query === '') {
      setFilteredResults([])
    } else {
      setFilteredResults(
        mockData.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        )
      )
    }
  }, [query])

  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4CAF50] border-b-2 border-[#8B4513] pb-2 text-center">
          🔍 「{query}」の検索結果
        </h1>

        {filteredResults.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">
            該当する結果が見つかりませんでした。
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {filteredResults.map((result, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="mt-3 text-md font-semibold text-gray-900">
                  {result.name}
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  {result.description}
                </p>
                <a
                  href={result.link}
                  className={`block mt-3 px-4 py-2 text-white text-center rounded-md transition ${
                    result.type === 'blog'
                      ? 'bg-blue-500 hover:bg-blue-700'
                      : result.type === 'product'
                      ? 'bg-green-500 hover:bg-green-700'
                      : result.type === 'sale'
                      ? 'bg-red-500 hover:bg-red-700'
                      : 'bg-yellow-500 hover:bg-yellow-700'
                  }`}
                >
                  詳しく見る
                </a>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
