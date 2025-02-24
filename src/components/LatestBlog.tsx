'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface BlogPost {
  title: string
  image: string
  excerpt: string
  date: string
  link: string
}

export default function LatestBlog() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // 仮データ（本来はAPIから取得）
    setLatestPosts([
      {
        title: '爬虫類の正しい温度管理とは？',
        image: '/images/blog4.jpg',
        excerpt: '温度管理の重要性と方法を解説！',
        date: '2025-02-23',
        link: '/blog/reptile-temperature',
      },
      {
        title: '爬虫類の餌の種類と特徴',
        image: '/images/blog5.jpg',
        excerpt: '各種餌のメリットと適切な与え方！',
        date: '2025-02-22',
        link: '/blog/reptile-food',
      },
      {
        title: '初心者が知るべき爬虫類飼育の注意点',
        image: '/images/blog6.jpg',
        excerpt: 'これから飼育を始める人向けの必須情報！',
        date: '2025-02-21',
        link: '/blog/reptile-care',
      },
    ])
  }, [])

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        📝 最新ブログ記事
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {latestPosts.map((post, index) => (
          <div
            key={index}
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
        ))}
      </div>
    </section>
  )
}
