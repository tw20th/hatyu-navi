'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogSearch from '@/components/BlogSearch'

interface BlogPost {
  slug: string
  title: string
  image: string
  excerpt: string
  date: string
  category: string
}

const mockBlogPosts: BlogPost[] = [
  {
    slug: 'reptile-temperature',
    title: '爬虫類の正しい温度管理とは？',
    image: '/images/blog4.jpg',
    excerpt: '爬虫類の温度管理はとても重要です。',
    date: '2025-02-23',
    category: 'care',
  },
  {
    slug: 'reptile-food',
    title: '爬虫類の餌の種類と特徴',
    image: '/images/blog5.jpg',
    excerpt: '爬虫類に適した餌の種類と特徴を詳しく解説します。',
    date: '2025-02-22',
    category: 'food',
  },
  {
    slug: 'reptile-environment',
    title: '爬虫類の理想的な環境作り',
    image: '/images/blog6.jpg',
    excerpt: '爬虫類の生息環境を整えるためのポイントを紹介！',
    date: '2025-02-21',
    category: 'environment',
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(mockBlogPosts)

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredPosts(mockBlogPosts)
    } else {
      setFilteredPosts(
        mockBlogPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }
  }, [searchQuery])

  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      {/* 🦎 ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* 🔍 検索バー */}
        <BlogSearch onSearch={setSearchQuery} />

        {/* 📖 記事一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-500">
              該当する記事が見つかりません。
            </p>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mt-1">📅 {post.date}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="block mt-3 px-4 py-2 bg-[#4CAF50] text-white text-center rounded-lg hover:bg-green-700 transition"
                >
                  📖 記事を読む
                </a>
              </div>
            ))
          )}
        </div>
      </main>

      {/* 📩 フッター */}
      <Footer />
    </div>
  )
}
