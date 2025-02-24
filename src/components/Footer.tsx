'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* サイト情報 */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">🦎 爬虫類ショップ比較</h2>
          <p className="text-sm text-gray-200">
            © 2025 爬虫類ショップ比較 All Rights Reserved.
          </p>
        </div>

        {/* ナビゲーションリンク */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
            <li>
              <Link href="/about" className="hover:underline">
                サイトについて
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                プライバシーポリシー
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
    </footer>
  )
}
