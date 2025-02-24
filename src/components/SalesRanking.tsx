import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Product {
  name: string
  image: string
  price: number
  link: string
}

export default function SalesRanking() {
  const [ranking, setRanking] = useState<Product[]>([])
  const [period, setPeriod] = useState('weekly') // 初期値は週間ランキング

  useEffect(() => {
    const fetchRanking = async () => {
      // 仮データ (本来はAPIから取得)
      setRanking([
        {
          name: '爬虫類ゲージセット',
          image: '/images/cage-ranking.jpg',
          price: 12000,
          link: '/ranking/cage',
        },
        {
          name: 'UVBライト',
          image: '/images/light-ranking.jpg',
          price: 5000,
          link: '/ranking/light',
        },
        {
          name: '高栄養餌セット',
          image: '/images/food-ranking.jpg',
          price: 3000,
          link: '/ranking/food',
        },
      ])
    }

    fetchRanking()
  }, [period])

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        🏆 売上ランキング
      </h2>
      <div className="flex justify-center gap-4 mb-4">
        {['weekly', 'monthly', 'yearly'].map((p) => (
          <button
            key={p}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              period === p
                ? 'bg-[#4CAF50] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setPeriod(p)}
          >
            {p === 'weekly' ? '週間' : p === 'monthly' ? '月間' : '年間'}
            ランキング
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ranking.length === 0 ? (
          <p className="text-center text-gray-500">
            ランキングデータがありません。
          </p>
        ) : (
          ranking.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="mt-3 text-md font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-lg font-bold text-[#8B4513] mt-2">
                ¥{product.price.toLocaleString()}
              </p>
              <Link
                href={product.link}
                className="block mt-3 px-4 py-2 bg-[#4CAF50] text-white text-center rounded-md hover:bg-green-700 transition"
              >
                🛒 詳しく見る
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
