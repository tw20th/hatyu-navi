'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  image: string
  excerpt: string
  link: string
}

export default function RelatedBlog({ productId }: { productId: string }) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // 仮データ（本来はAPIから取得）
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: '爬虫類ゲージの選び方',
        image: '/images/blog-cage.jpg',
        excerpt: '最適な爬虫類ゲージの選び方を解説！',
        link: '/blog/reptile-cage-guide',
      },
      {
        id: '2',
        title: '爬虫類の理想的な環境作り',
        image: '/images/blog-environment.jpg',
        excerpt: '爬虫類の生息環境を整えるためのポイントを紹介！',
        link: '/blog/reptile-environment',
      },
    ]

    // 商品に関連するブログ記事をフィルタリング（仮データでは全記事表示）
    const filteredPosts = mockPosts.filter((post) =>
      post.id.includes(productId)
    )

    setRelatedPosts(filteredPosts)
  }, [productId])

  return (
    <section className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        📝 関連ブログ記事
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {relatedPosts.length === 0 ? (
          <p className="text-center text-gray-500">
            関連する記事が見つかりませんでした。
          </p>
        ) : (
          relatedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
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
