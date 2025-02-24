import Link from 'next/link'
import { useEffect, useState } from 'react'

interface SaleItem {
  name: string
  price: number
  discount: number
  image: string
  link: string
}

export default function SaleSection() {
  const [saleItems, setSaleItems] = useState<SaleItem[]>([])

  useEffect(() => {
    // 仮データ: 本来はAPIから取得
    setSaleItems([
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
    ])
  }, [])

  return (
    <section className="bg-[#4CAF50] text-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-white pb-2">
        🔥 最新セール情報
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {saleItems.map((item, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-red-500 font-bold">
              {item.discount}% OFF!
            </p>
            <p className="text-lg font-bold">¥{item.price.toLocaleString()}</p>
            <Link
              href={item.link}
              className="block mt-2 px-4 py-2 bg-[#4CAF50] text-white text-center rounded-md hover:bg-green-700 transition"
            >
              🛒 セール商品を見る
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
