'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="bg-[#F5F5DC] text-gray-900 min-h-screen">
      {/* ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#4CAF50] border-b-2 border-[#8B4513] pb-2 mb-4">
            🦎 サイトについて
          </h2>

          <p className="text-gray-700 leading-relaxed">
            「爬虫類ショップ比較」は、爬虫類用品の
            **価格比較・レビュー・ランキング** を提供する情報サイトです。
            初心者から上級者まで、爬虫類を飼育するすべての方が
            **最適な商品を選ぶためのサポート** を行います。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            🎯 サイトの目的
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-2">
            <li>爬虫類用品の **価格比較** を簡単に行える</li>
            <li>実際の飼育者による **レビュー記事** を掲載</li>
            <li>人気商品や最新情報を **ランキング形式** で紹介</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            🛠 サイトの特徴
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-2">
            <li>楽天APIを活用した **最新の価格情報** を提供</li>
            <li>カテゴリ別の **詳細な商品情報** を掲載</li>
            <li>爬虫類の飼育に役立つ **ブログ記事** を更新</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            👨‍💻 運営者情報
          </h3>
          <p className="text-gray-700 mt-2">
            本サイトは爬虫類飼育を愛するメンバーによって運営されています。
            **正確で役立つ情報を提供する**
            ことを目的とし、日々コンテンツを更新しています。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            📩 お問い合わせ
          </h3>
          <p className="text-gray-700 mt-2">
            ご質問・ご意見は{' '}
            <a
              href="/contact"
              className="text-[#4CAF50] font-medium hover:underline"
            >
              お問い合わせページ
            </a>{' '}
            からお気軽にどうぞ！
          </p>
        </section>
      </main>

      {/* フッター */}
      <Footer />
    </div>
  )
}
