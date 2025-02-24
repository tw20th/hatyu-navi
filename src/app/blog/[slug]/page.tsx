import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogRelated from '@/components/BlogRelated'

interface BlogPost {
  slug: string
  title: string
  image: string
  content: string
  date: string
  category: string
}

const mockBlogPosts: BlogPost[] = [
  {
    slug: 'reptile-temperature',
    title: '爬虫類の正しい温度管理とは？',
    image: '/images/blog4.jpg',
    content:
      '爬虫類の温度管理はとても重要です。適切な温度を維持することで健康を守ることができます。',
    date: '2025-02-23',
    category: 'care',
  },
  {
    slug: 'reptile-food',
    title: '爬虫類の餌の種類と特徴',
    image: '/images/blog5.jpg',
    content: '爬虫類に適した餌の種類と特徴を詳しく解説します。',
    date: '2025-02-22',
    category: 'food',
  },
]

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const blogPost = mockBlogPosts.find((post) => post.slug === params.slug)

  if (!blogPost) return notFound() // 記事が見つからない場合は 404 ページを表示

  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      {/* 🦎 ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8">
        <article className="bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-[#4CAF50]">
            {blogPost.title}
          </h1>
          <p className="text-sm text-gray-500">📅 {blogPost.date}</p>
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 object-cover rounded-md my-4"
          />
          <p className="text-lg text-gray-800">{blogPost.content}</p>
        </article>

        {/* 📝 関連ブログ記事 */}
        <section className="mt-12">
          <BlogRelated category={blogPost.category} />
        </section>
      </main>

      {/* 📩 フッター */}
      <Footer />
    </div>
  )
}
