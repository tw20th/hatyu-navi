'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F5F5DC] text-gray-900 min-h-screen">
      {/* ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#4CAF50] border-b-2 border-[#8B4513] pb-2 mb-4">
            🔒 プライバシーポリシー
          </h2>

          <p className="text-gray-700 leading-relaxed">
            本ウェブサイト（以下、「当サイト」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
            本プライバシーポリシーでは、当サイトが収集する情報、およびその利用方法について説明します。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            📌 第1条（個人情報の収集）
          </h3>
          <p className="text-gray-700 mt-2">
            当サイトでは、以下の方法で個人情報を収集することがあります：
          </p>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-2">
            <li>お問い合わせフォームの送信時に名前・メールアドレスを入力</li>
            <li>コメント投稿時にユーザー情報を入力</li>
            <li>アクセス解析ツールによるデータ収集</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            🔹 第2条（個人情報の利用目的）
          </h3>
          <p className="text-gray-700 mt-2">
            収集した個人情報は、以下の目的で利用されます：
          </p>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-2">
            <li>お問い合わせ対応のため</li>
            <li>ユーザーサポートおよび情報提供のため</li>
            <li>サービス向上のための分析</li>
            <li>法令の遵守および規約違反の防止</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            🍪 第3条（Cookieの使用）
          </h3>
          <p className="text-gray-700 mt-2">
            当サイトでは、ユーザーの利便性向上のために **Cookie（クッキー）**
            を使用することがあります。
            ユーザーはブラウザの設定を変更することで、Cookieの使用を拒否することができます。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            ⚠️ 第4条（個人情報の第三者提供）
          </h3>
          <p className="text-gray-700 mt-2">
            収集した個人情報は、以下の場合を除き、第三者に開示することはありません：
          </p>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-2">
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づき、開示が必要な場合</li>
            <li>不正行為・違反行為の調査が必要な場合</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            🔗 第5条（外部サービスとの連携）
          </h3>
          <p className="text-gray-700 mt-2">
            当サイトは、Google Analytics
            や楽天アフィリエイトなどの外部サービスと連携する場合があります。
            これらのサービスにより、ユーザーの情報が収集されることがありますが、当サイトはそれらのデータを直接管理することはありません。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            📅 第6条（ポリシーの変更）
          </h3>
          <p className="text-gray-700 mt-2">
            当サイトは、必要に応じて本プライバシーポリシーを変更することができます。
            変更後のポリシーは、当サイト上に掲載した時点で効力を生じるものとします。
          </p>

          <h3 className="text-xl font-semibold text-[#8B4513] mt-6">
            📩 お問い合わせ
          </h3>
          <p className="text-gray-700 mt-2">
            プライバシーポリシーに関するお問い合わせは、
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
