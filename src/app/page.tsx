'use client'

import Header from '@/components/Header'
import ReptileCategories from '@/components/ReptileCategories'
import SaleSection from '@/components/SaleSection'
import SalesRanking from '@/components/SalesRanking'
import PopularBlog from '@/components/PopularBlog'
import LatestBlog from '@/components/LatestBlog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      {/* ✅ `Header` を元に戻す */}
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* 📂 爬虫類用品カテゴリー */}
        <ReptileCategories />

        {/* 🔥 セール情報 */}
        <SaleSection />

        {/* 🏆 売上ランキング */}
        <SalesRanking />

        {/* 🔥 人気ブログ記事（閲覧数の多い記事） */}
        <PopularBlog />

        {/* 📝 最新ブログ記事 */}
        <LatestBlog />
      </main>

      {/* 📩 フッター */}
      <Footer />
    </div>
  )
}
