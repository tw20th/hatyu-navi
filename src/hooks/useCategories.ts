import { useEffect, useState } from 'react'

interface Category {
  genreId: number
  genreName: string
}

export function useCategories(genreId: number = 560198) {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true)
      setError(null)

      try {
        const appId = process.env.NEXT_PUBLIC_RAKUTEN_APP_ID
        if (!appId) {
          throw new Error(
            '❌ 環境変数 NEXT_PUBLIC_RAKUTEN_APP_ID が設定されていません'
          )
        }

        const res = await fetch(
          `/api/rakuten/categories?genreId=${genreId}&appId=${appId}`
        )
        if (!res.ok) throw new Error('楽天APIのカテゴリー取得に失敗')

        const data = await res.json()
        console.log('✅ 取得したカテゴリ:', data)

        if (data.genres) {
          setCategories(data.genres)
        } else {
          throw new Error(
            `❌ 指定されたジャンルID ${genreId} のカテゴリが見つかりませんでした`
          )
        }
      } catch (error) {
        console.error('❌ カテゴリーの取得に失敗:', error)
        setError('カテゴリーの取得に失敗しました。')
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [genreId])

  return { categories, loading, error }
}
