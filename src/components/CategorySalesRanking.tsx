'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Product {
  name: string
  image: string
  price: number
  link: string
}

export default function CategorySalesRanking() {
  const pathname = usePathname() // 現在のページのパスを取得
  const categorySlug = pathname.split('/').pop() // URL から現在のカテゴリースラッグを取得
  const [ranking, setRanking] = useState<Product[]>([])
  const [period, setPeriod] = useState('weekly') // 初期値は週間ランキング

  useEffect(() => {
    const fetchRanking = async () => {
      // 仮データ（本来はAPIから取得）
      const rankingData: Record<string, Record<string, Product[]>> = {
        cage: {
          weekly: [
            {
              name: '基本ゲージセット',
              image: '/images/cage1.jpg',
              price: 10000,
              link: '/ranking/cage1',
            },
            {
              name: 'プレミアムゲージ',
              image: '/images/cage2.jpg',
              price: 18000,
              link: '/ranking/cage2',
            },
            {
              name: 'コンパクトゲージ',
              image: '/images/cage3.jpg',
              price: 8000,
              link: '/ranking/cage3',
            },
          ],
          monthly: [
            {
              name: '大型ゲージ',
              image: '/images/cage-large.jpg',
              price: 25000,
              link: '/ranking/cage-large',
            },
            {
              name: '高耐久ゲージ',
              image: '/images/cage-durable.jpg',
              price: 20000,
              link: '/ranking/cage-durable',
            },
            {
              name: 'モジュール式ゲージ',
              image: '/images/cage-modular.jpg',
              price: 15000,
              link: '/ranking/cage-modular',
            },
          ],
          yearly: [
            {
              name: 'プロ仕様ゲージ',
              image: '/images/cage-pro.jpg',
              price: 30000,
              link: '/ranking/cage-pro',
            },
            {
              name: 'オールインワンゲージ',
              image: '/images/cage-allinone.jpg',
              price: 28000,
              link: '/ranking/cage-allinone',
            },
            {
              name: 'スタイリッシュゲージ',
              image: '/images/cage-stylish.jpg',
              price: 22000,
              link: '/ranking/cage-stylish',
            },
          ],
        },
        light: {
          weekly: [
            {
              name: '標準UVBライト',
              image: '/images/light1.jpg',
              price: 5000,
              link: '/ranking/light1',
            },
            {
              name: '高性能UVBライト',
              image: '/images/light2.jpg',
              price: 7000,
              link: '/ranking/light2',
            },
            {
              name: 'エコUVBライト',
              image: '/images/light3.jpg',
              price: 4500,
              link: '/ranking/light3',
            },
          ],
          monthly: [
            {
              name: 'LEDライト',
              image: '/images/light-led.jpg',
              price: 6000,
              link: '/ranking/light-led',
            },
            {
              name: 'プレミアムUVBライト',
              image: '/images/light-premium.jpg',
              price: 8000,
              link: '/ranking/light-premium',
            },
            {
              name: '長寿命UVBライト',
              image: '/images/light-longlife.jpg',
              price: 7500,
              link: '/ranking/light-longlife',
            },
          ],
          yearly: [
            {
              name: 'プロ仕様UVBライト',
              image: '/images/light-pro.jpg',
              price: 10000,
              link: '/ranking/light-pro',
            },
            {
              name: '究極のUVBライト',
              image: '/images/light-ultimate.jpg',
              price: 12000,
              link: '/ranking/light-ultimate',
            },
            {
              name: '最高級UVBライト',
              image: '/images/light-luxury.jpg',
              price: 14000,
              link: '/ranking/light-luxury',
            },
          ],
        },
      }

      // 現在のカテゴリに応じたデータをセット
      if (rankingData[categorySlug as keyof typeof rankingData]) {
        setRanking(
          rankingData[categorySlug as keyof typeof rankingData][period]
        )
      } else {
        setRanking([]) // データがない場合は空配列
      }
    }

    fetchRanking()
  }, [categorySlug, period])

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        🏆 {categorySlug ? categorySlug.toUpperCase() : 'カテゴリー'}
        の売上ランキング
      </h2>

      {/* ランキング切り替えボタン */}
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

      {/* ランキングリスト */}
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
