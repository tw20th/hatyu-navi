'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SaleCategoryNavigation from '@/components/SaleCategoryNavigation'
import SaleFilter from '@/components/SaleFilter'
import SaleList from '@/components/SaleList'

export default function SalePage() {
  const [selectedCategory, setSelectedCategory] = useState('all') // ✅ カテゴリ状態を管理
  const [selectedPeriod, setSelectedPeriod] = useState('daily') // ✅ 期間状態を管理

  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      {/* 🦎 ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* 🏷️ セールカテゴリーナビゲーション */}
        <SaleCategoryNavigation onCategoryChange={setSelectedCategory} />

        {/* 🔄 セールフィルター（デイリー・ウィークリー・マンスリー） */}
        <SaleFilter onFilterChange={setSelectedPeriod} />

        {/* 🔥 セール商品一覧 */}
        <SaleList category={selectedCategory} period={selectedPeriod} />
      </main>

      {/* 📩 フッター */}
      <Footer />
    </div>
  )
}
