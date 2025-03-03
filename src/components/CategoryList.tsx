import { useRakutenItems } from '@/hooks/useRakutenItems'

export default function CategoryList({
  category,
  sortType,
  page,
}: {
  category: string
  sortType: string
  page: number
}) {
  const { products, loading, error } = useRakutenItems(category, sortType, page)

  return (
    <div>
      {loading && <p>📡 商品を読み込み中...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && products.length === 0 && (
        <p>⚠️ 商品が見つかりません。</p>
      )}

      <div>
        {products.map((p) => (
          <div key={p.id}>
            <img src={p.image} alt={p.name} width={100} />
            <p>
              {p.name} - ¥{p.price.toLocaleString()}
            </p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              詳細を見る
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
