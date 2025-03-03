import { useEffect, useState } from 'react'
import { PER_PAGE } from '@/config' // ✅ `config.ts` から PER_PAGE を取得

interface Product {
  id: string
  name: string
  price: number
  image: string
  link: string
}

export function useRakutenItems(
  category: string,
  sortType: string,
  page: number
) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(null)

      try {
        // ✅ `config.ts` の PER_PAGE を使用
        const res = await fetch(
          `/api/rakuten?category=${category}&sort=${sortType}&page=${page}&perPage=${PER_PAGE}`
        )

        if (!res.ok) throw new Error('楽天APIの取得に失敗しました')

        const data = await res.json()
        setProducts(data.items)
      } catch (error) {
        console.error('❌ 商品データの取得に失敗:', error)
        setError('データの取得に失敗しました。')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category, sortType, page]) // category, sortType, page が変更されるたびにデータを再取得

  return { products, loading, error }
}
