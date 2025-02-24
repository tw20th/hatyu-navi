import ProductDetail from '@/components/ProductDetail'
import RelatedBlog from '@/components/RelatedBlog'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-[#F5F5DC] text-gray-900">
      {/* 🦎 ヘッダー */}
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* 🛒 商品詳細情報 */}
        <ProductDetail productId={params.id} />

        {/* 📝 関連ブログ記事 */}
        <RelatedBlog productId={params.id} />
      </main>

      {/* 📩 フッター */}
      <Footer />
    </div>
  )
}
