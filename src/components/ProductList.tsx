'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Product {
  name: string
  image: string
  price: number
  rating: number
  link: string
}

interface ProductListProps {
  sortType: string
}

export default function ProductList({ sortType }: ProductListProps) {
  const pathname = usePathname() // 現在のページのパスを取得
  const categorySlug = pathname.split('/').pop() // URL から現在のカテゴリースラッグを取得
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      // 仮データ（本来はAPIから取得）
      const categoryProducts: Record<string, Product[]> = {
        cage: [
          {
            name: '標準ゲージ',
            image: '/images/cage1.jpg',
            price: 10000,
            rating: 4.5,
            link: '/product/cage1',
          },
          {
            name: '大型ゲージ',
            image: '/images/cage2.jpg',
            price: 18000,
            rating: 4.7,
            link: '/product/cage2',
          },
          {
            name: 'コンパクトゲージ',
            image: '/images/cage3.jpg',
            price: 8000,
            rating: 4.3,
            link: '/product/cage3',
          },
        ],
        light: [
          {
            name: 'UVBライト',
            image: '/images/light1.jpg',
            price: 5000,
            rating: 4.6,
            link: '/product/light1',
          },
          {
            name: '高性能UVBライト',
            image: '/images/light2.jpg',
            price: 7000,
            rating: 4.8,
            link: '/product/light2',
          },
          {
            name: 'LEDライト',
            image: '/images/light3.jpg',
            price: 4500,
            rating: 4.2,
            link: '/product/light3',
          },
        ],
        food: [
          {
            name: '爬虫類専用フード',
            image: '/images/food1.jpg',
            price: 2500,
            rating: 4.4,
            link: '/product/food1',
          },
          {
            name: '高栄養フード',
            image: '/images/food2.jpg',
            price: 3000,
            rating: 4.6,
            link: '/product/food2',
          },
          {
            name: '昆虫ゼリー',
            image: '/images/food3.jpg',
            price: 1200,
            rating: 4.1,
            link: '/product/food3',
          },
        ],
      }

      // 選択されたカテゴリーの商品を取得
      let productList =
        categoryProducts[categorySlug as keyof typeof categoryProducts] || []

      // 並び替え処理
      switch (sortType) {
        case 'price_low':
          productList = [...productList].sort((a, b) => a.price - b.price)
          break
        case 'price_high':
          productList = [...productList].sort((a, b) => b.price - a.price)
          break
        case 'reviews':
          productList = [...productList].sort((a, b) => b.rating - a.rating)
          break
        default:
          // デフォルト（売上順）: ここでは特に並び替えなし（APIなら売上順データを取得）
          break
      }

      setProducts(productList)
    }

    fetchProducts()
  }, [categorySlug, sortType])

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        📦 商品一覧
      </h2>

      {/* 商品リスト */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <p className="text-center text-gray-500">商品が見つかりません。</p>
        ) : (
          products.map((product, index) => (
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
              <p className="text-sm text-gray-700">⭐ {product.rating} / 5</p>
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
