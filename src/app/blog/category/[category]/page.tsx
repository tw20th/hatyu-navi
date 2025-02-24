import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPopular from '@/components/blog/BlogPopular'
import BlogLatest from '@/components/blog/BlogLatest'

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

export default function BlogCategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const categoryPosts = mockBlogPosts.filter(
    (post) => post.category === params.category
  )

  if (categoryPosts.length === 0) return notFound() // 該当カテゴリの記事がない場合は 404 ページ

  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      {/* 🦎 ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* カテゴリタイトル */}
        <div className="bg-[#4CAF50] text-white py-6 px-4 rounded-xl shadow-lg text-center">
          <h1 className="text-3xl font-bold">
            🗂️ {params.category.toUpperCase()} のブログ記事
          </h1>
        </div>

        {/* 📖 記事一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {categoryPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition"
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
          ))}
        </div>

        {/* 🔥 人気ブログ記事 */}
        <section className="mt-12">
          <BlogPopular category={params.category} />
        </section>

        {/* 📝 最新ブログ記事 */}
        <section className="mt-12">
          <BlogLatest category={params.category} />
        </section>
      </main>

      {/* 📩 フッター */}
      <Footer />
    </div>
  )
}
