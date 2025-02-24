'use client'

import Link from 'next/link'
import GlobalSearch from '@/components/GlobalSearch'

export default function Header() {
  return (
    <header className="bg-[#4CAF50] text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
        {/* 🦎 ロゴ */}
        <Link href="/" className="text-2xl font-bold whitespace-nowrap">
          🦎 爬虫類ショップ
        </Link>

        {/* 🔍 検索バー */}
        <div className="w-full md:w-1/3 my-2 md:my-0">
          <GlobalSearch />
        </div>

        {/* 📌 ナビゲーション */}
        <nav className="mt-2 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <Link href="/categories" className="hover:underline">
                カテゴリー
              </Link>
            </li>
            <li>
              <Link href="/sale" className="hover:underline">
                セール
              </Link>
            </li>{' '}
            {/* 🔥 変更部分 */}
            <li>
              <Link href="/ranking" className="hover:underline">
                ランキング
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                ブログ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
