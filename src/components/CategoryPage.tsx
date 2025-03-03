'use client'

import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CategoryNavigation from '@/components/CategoryNavigation'
import SortControls from '@/components/SortControls'
import CategorySalesRanking from '@/components/CategorySalesRanking'
import CategoryList from '@/components/CategoryList'
import CategoryBlog from '@/components/CategoryBlog'

export default function CategoryPage() {
  const { category } = useParams() // ✅ URLの動的パラメータを取得
  console.log('🛠️ 現在のカテゴリースラッグ:', category)

  if (!category) {
    return (
      <p className="text-center text-red-500">カテゴリーが見つかりません</p>
    )
  }

  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      {/* 🦎 ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* 📂 カテゴリーナビゲーション (楽天APIから動的取得) */}
        <CategoryNavigation />

        {/* 🔄 並び替え機能 */}
        <SortControls />

        {/* 🏆 カテゴリーごとの売上ランキング */}
        <CategorySalesRanking category={category} />

        {/* 📦 商品リスト（楽天API対応） */}
        <CategoryList category={category} sortType="sales" page={1} />

        {/* 📝 関連ブログ記事 */}
        <CategoryBlog />
      </main>

      {/* 📩 フッター */}
      <Footer />
    </div>
  )
}
