'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="bg-[#F5F5DC] text-gray-900 min-h-screen">
      {/* ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8">
        <ContactForm />
      </main>

      {/* フッター */}
      <Footer />
    </div>
  )
}
