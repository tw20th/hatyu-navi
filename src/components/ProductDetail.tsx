'use client'

import { useState, useEffect } from 'react'

interface Product {
  id: string
  name: string
  image: string
  price: number
  description: string
  rating: number
  link: string
}

export default function ProductDetail({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    // 仮データ（本来は楽天APIから取得）
    const mockProduct: Product = {
      id: productId,
      name: '爬虫類ゲージセット',
      image: '/images/cage-product.jpg',
      price: 12000,
      description: 'このゲージセットは、初心者にも最適な設計になっています。',
      rating: 4.5,
      link: 'https://example.com/product/cage',
    }

    setProduct(mockProduct)
  }, [productId])

  if (!product) {
    return (
      <p className="text-center text-gray-500">商品情報を読み込んでいます...</p>
    )
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 商品画像 */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />

        {/* 商品詳細 */}
        <div>
          <h2 className="text-2xl font-bold text-[#4CAF50]">{product.name}</h2>
          <p className="text-lg font-semibold text-[#8B4513] mt-2">
            ¥{product.price.toLocaleString()}
          </p>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-2 text-yellow-500">⭐ {product.rating} / 5</p>

          {/* 購入ボタン */}
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 px-6 py-3 bg-[#4CAF50] text-white text-center rounded-md hover:bg-green-700 transition"
          >
            🛒 購入する
          </a>
        </div>
      </div>
    </section>
  )
}
