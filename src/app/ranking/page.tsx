'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RankingCategoryNavigation from '@/components/RankingCategoryNavigation'
import RankingFilter from '@/components/RankingFilter'
import RankingList from '@/components/RankingList'

export default function RankingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all') // ✅ 初期値: 全ランキング
  const [selectedPeriod, setSelectedPeriod] = useState('weekly') // ✅ 初期値: 週間ランキング

  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      {/* 🦎 ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* 🏆 ランキングカテゴリーナビゲーション */}
        <RankingCategoryNavigation onCategoryChange={setSelectedCategory} />

        {/* 🔄 ランキングフィルター（週間・月間・年間） */}
        <RankingFilter onFilterChange={setSelectedPeriod} />

        {/* 🏆 ランキング一覧 */}
        <RankingList category={selectedCategory} period={selectedPeriod} />
      </main>

      {/* 📩 フッター */}
      <Footer />
    </div>
  )
}
