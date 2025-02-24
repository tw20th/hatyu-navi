'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // ここでAPIにリクエストを送信する（仮の処理）
    console.log('送信されたデータ:', formData)
    setSuccess(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#4CAF50] border-b-2 border-[#8B4513] pb-2 mb-4">
        📩 お問い合わせ
      </h2>
      {success && (
        <p className="text-green-600 mb-4">✅ メッセージを送信しました！</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">名前</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#4CAF50]"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#4CAF50]"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">メッセージ</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#4CAF50]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#4CAF50] text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
        >
          送信する
        </button>
      </form>
    </div>
  )
}
