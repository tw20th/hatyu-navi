'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BlogPost {
  title: string
  image: string
  excerpt: string
  date: string
  link: string
}

export default function CategoryBlog() {
  const pathname = usePathname() // 現在のページのパスを取得
  const categorySlug = pathname.split('/').pop() // URL から現在のカテゴリースラッグを取得
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchBlogPosts = async () => {
      // 仮データ（本来はAPIから取得）
      const categoryBlogs: Record<string, BlogPost[]> = {
        cage: [
          {
            title: 'ゲージの選び方',
            image: '/images/blog-cage1.jpg',
            excerpt: '適切なサイズや通気性のポイントを解説！',
            date: '2025-02-20',
            link: '/blog/cage-guide',
          },
          {
            title: '爬虫類ケージの設置方法',
            image: '/images/blog-cage2.jpg',
            excerpt: '初心者でも簡単にできる設置方法を紹介！',
            date: '2025-02-18',
            link: '/blog/cage-setup',
          },
        ],
        light: [
          {
            title: '爬虫類ライトの重要性',
            image: '/images/blog-light1.jpg',
            excerpt: '適切な紫外線ライトの選び方を解説！',
            date: '2025-02-15',
            link: '/blog/light-guide',
          },
          {
            title: 'UVBライトの交換時期',
            image: '/images/blog-light2.jpg',
            excerpt: 'ライトの交換タイミングと選び方！',
            date: '2025-02-10',
            link: '/blog/light-replacement',
          },
        ],
        food: [
          {
            title: '爬虫類の餌の種類と選び方',
            image: '/images/blog-food1.jpg',
            excerpt: '生餌・人工餌・冷凍餌の違いを解説！',
            date: '2025-02-12',
            link: '/blog/food-types',
          },
          {
            title: '栄養バランスの良い爬虫類フード',
            image: '/images/blog-food2.jpg',
            excerpt: '健康を維持するための食事管理とは？',
            date: '2025-02-08',
            link: '/blog/food-nutrition',
          },
        ],
      }

      setRelatedPosts(
        categoryBlogs[categorySlug as keyof typeof categoryBlogs] || []
      )
    }

    fetchBlogPosts()
  }, [categorySlug])

  return (
    <section className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4CAF50] border-b-2 border-[#8B4513] pb-2">
        📝 {categorySlug ? categorySlug.toUpperCase() : 'カテゴリー'}
        に関連する記事
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relatedPosts.length === 0 ? (
          <p className="text-center text-gray-500">
            このカテゴリーに関連する記事がありません。
          </p>
        ) : (
          relatedPosts.map((post, index) => (
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
