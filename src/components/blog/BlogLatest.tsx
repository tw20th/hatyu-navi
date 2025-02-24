'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  image: string
  excerpt: string
  date: string
  category: string
  link: string
}

export default function BlogLatest({ category }: { category: string }) {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // 仮データ（本来はAPIから取得）
    const allPosts: BlogPost[] = [
      {
        id: '1',
        title: '爬虫類の正しい餌の選び方',
        image: '/images/blog-food.jpg',
        excerpt: '栄養価の高い餌の選び方を解説！',
        date: '2025-02-23',
        category: 'food',
        link: '/blog/food-guide',
      },
      {
        id: '2',
        title: '最適なライトの種類とは？',
        image: '/images/blog-light.jpg',
        excerpt: '爬虫類の健康を守るライトの選び方。',
        date: '2025-02-22',
        category: 'light',
        link: '/blog/light-guide',
      },
      {
        id: '3',
        title: '爬虫類ケージのおすすめ',
        image: '/images/blog-cage.jpg',
        excerpt: '環境に合ったケージを選ぶ方法。',
        date: '2025-02-21',
        category: 'cage',
        link: '/blog/cage-guide',
      },
    ]

    // 選択されたカテゴリの記事のみを表示
    const filteredPosts = allPosts.filter((post) => post.category === category)

    setLatestPosts(filteredPosts)
  }, [category])

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        📝 最新ブログ記事
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {latestPosts.length === 0 ? (
          <p className="text-center text-gray-500">
            このカテゴリの最新記事はありません。
          </p>
        ) : (
          latestPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="mt-3 text-md font-semibold text-gray-900">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1">{post.excerpt}</p>
              <p className="text-sm text-gray-500 mt-1">📅 {post.date}</p>
              <Link
                href={post.link}
                className="block mt-3 px-4 py-2 bg-[#4CAF50] text-white text-center rounded-md hover:bg-green-700 transition"
              >
                📖 記事を読む
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
