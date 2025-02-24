'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="bg-[#F5F5DC] text-gray-900 min-h-screen">
      {/* ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#4CAF50] border-b-2 border-[#8B4513] pb-2 mb-4">
            📜 利用規約
          </h2>

          <p className="text-gray-700 leading-relaxed">
            本ウェブサイト（以下、「当サイト」）をご利用いただく前に、以下の利用規約（以下、「本規約」）をよくお読みください。
            当サイトを利用することにより、本規約に同意したものとみなします。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            📌 第1条（適用）
          </h3>
          <p className="text-gray-700 mt-2">
            本規約は、当サイトの利用条件を定めるものであり、当サイトの全ての利用者（以下、「ユーザー」）に適用されます。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            🔹 第2条（禁止事項）
          </h3>
          <p className="text-gray-700 mt-2">
            ユーザーは、以下の行為を行ってはなりません。
          </p>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>虚偽の情報を入力する行為</li>
            <li>他のユーザーの個人情報を不正に取得する行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            ⚠️ 第3条（免責事項）
          </h3>
          <p className="text-gray-700 mt-2">
            当サイトは、提供する情報の正確性や完全性を保証するものではありません。
            ユーザーが当サイトの情報を利用したことによる損害について、当サイトは一切責任を負いません。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            🔗 第4条（外部リンクについて）
          </h3>
          <p className="text-gray-700 mt-2">
            当サイトには外部サイトへのリンクが含まれることがありますが、リンク先の内容について当サイトは責任を負いません。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            📅 第5条（規約の変更）
          </h3>
          <p className="text-gray-700 mt-2">
            当サイトは、必要に応じて本規約を変更することができます。変更後の規約は、当サイト上に掲載した時点で効力を生じるものとします。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            📩 お問い合わせ
          </h3>
          <p className="text-gray-700 mt-2">
            本規約に関するお問い合わせは、
            <a
              href="/contact"
              className="text-[#4CAF50] font-medium hover:underline"
            >
              お問い合わせページ
            </a>{' '}
            よりお願いいたします。
          </p>
        </section>
      </main>

      {/* フッター */}
      <Footer />
    </div>
  )
}
