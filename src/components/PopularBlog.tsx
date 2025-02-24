import { useEffect, useState } from 'react'
import Link from 'next/link'

interface BlogPost {
  title: string
  image: string
  excerpt: string
  views: number
  link: string
}

export default function PopularBlog() {
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // 仮データ（本来はAPIから取得）
    setPopularPosts([
      {
        title: '初心者向け爬虫類飼育ガイド',
        image: '/images/blog1.jpg',
        excerpt: '爬虫類を飼育するための基本を学ぼう！',
        views: 1200,
        link: '/blog/reptile-guide',
      },
      {
        title: '最適な爬虫類ライトの選び方',
        image: '/images/blog2.jpg',
        excerpt: '紫外線ライトの重要性と選び方を解説！',
        views: 980,
        link: '/blog/reptile-lighting',
      },
      {
        title: '爬虫類用ケージの種類と特徴',
        image: '/images/blog3.jpg',
        excerpt: '適切なケージ選びのポイントを紹介！',
        views: 750,
        link: '/blog/reptile-cages',
      },
    ])
  }, [])

  return (
    <section className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        🔥 人気ブログ記事
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {popularPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
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
            <p className="text-sm text-gray-500 mt-1">👀 {post.views} views</p>
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
