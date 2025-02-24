'use client'

import { useState, useEffect } from 'react'

interface RankingItem {
  rank: number
  name: string
  price: number
  image: string
  link: string
}

export default function RankingList({
  category,
  period,
}: {
  category: string
  period: string
}) {
  const [ranking, setRanking] = useState<RankingItem[]>([])

  useEffect(() => {
    // 仮データ（本来はAPIから取得）
    const mockData: RankingItem[] = [
      {
        rank: 1,
        name: '爬虫類ゲージセット',
        price: 12000,
        image: '/images/cage-ranking.jpg',
        link: '/ranking/cage',
      },
      {
        rank: 2,
        name: 'UVBライト',
        price: 5000,
        image: '/images/light-ranking.jpg',
        link: '/ranking/light',
      },
      {
        rank: 3,
        name: '高栄養餌セット',
        price: 3000,
        image: '/images/food-ranking.jpg',
        link: '/ranking/food',
      },
    ]

    // フィルタリング（カテゴリ & 期間）
    const filteredRanking = mockData.filter(
      (item) => category === 'all' || item.name.includes(category) // カテゴリフィルター
    )

    setRanking(filteredRanking)
  }, [category, period])

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        🏆 ランキング一覧
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ranking.length === 0 ? (
          <p className="text-center text-gray-500">
            現在、ランキングデータがありません。
          </p>
        ) : (
          ranking.map((item) => (
            <div
              key={item.rank}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="mt-3 text-md font-semibold text-gray-900">
                #{item.rank} {item.name}
              </h3>
              <p className="text-lg font-bold text-[#8B4513] mt-2">
                ¥{item.price.toLocaleString()}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 px-4 py-2 bg-[#4CAF50] text-white text-center rounded-md hover:bg-green-700 transition"
              >
                🛒 詳しく見る
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
