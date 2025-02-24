'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CategoryNavigation from '@/components/CategoryNavigation'
import SortControls from '@/components/SortControls'
import CategorySalesRanking from '@/components/CategorySalesRanking'
import ProductList from '@/components/ProductList'

export default function CategoryPage() {
  const pathname = usePathname()
  const categorySlug = pathname.split('/').pop() // URLから現在のカテゴリースラッグを取得
  const [sortType, setSortType] = useState('sales') // 初期値は売上順

  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      {/* 🦎 ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* 📂 カテゴリーナビゲーション */}
        <CategoryNavigation />

        {/* 🔄 並び替え機能 */}
        <SortControls onSortChange={setSortType} />

        {/* 🏆 カテゴリーごとの売上ランキング */}
        <CategorySalesRanking />

        {/* 📦 商品リスト */}
        <ProductList sortType={sortType} />
      </main>

      {/* 📩 フッター */}
      <Footer />
    </div>
  )
}
