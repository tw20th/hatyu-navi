'use client'

import { useState, useEffect } from 'react'

interface SaleItem {
  name: string
  price: number
  discount: number
  image: string
  link: string
}

export default function SaleList({
  category,
  period,
}: {
  category: string
  period: string
}) {
  const [saleItems, setSaleItems] = useState<SaleItem[]>([])

  useEffect(() => {
    // 仮データ（本来はAPIから取得）
    const mockData: SaleItem[] = [
      {
        name: '爬虫類ゲージセット',
        price: 12000,
        discount: 20,
        image: '/images/cage-sale.jpg',
        link: '/sale/cage',
      },
      {
        name: 'UVBライト',
        price: 5000,
        discount: 15,
        image: '/images/light-sale.jpg',
        link: '/sale/light',
      },
      {
        name: '高栄養餌セット',
        price: 3000,
        discount: 10,
        image: '/images/food-sale.jpg',
        link: '/sale/food',
      },
    ]

    // フィルタリング（カテゴリ & 期間）
    const filteredItems = mockData.filter(
      (item) => category === 'all' || item.name.includes(category) // カテゴリフィルター
    )

    setSaleItems(filteredItems)
  }, [category, period])

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        🔥 セール商品一覧
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {saleItems.length === 0 ? (
          <p className="text-center text-gray-500">
            現在、セール対象の商品はありません。
          </p>
        ) : (
          saleItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="mt-3 text-md font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-red-500 font-bold">
                {item.discount}% OFF!
              </p>
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
