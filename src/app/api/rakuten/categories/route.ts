import { NextResponse } from 'next/server'
import { RAKUTEN_API_VERSION_GENRE } from '@/config'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const genreId = searchParams.get('genreId') || '0'
  const appId = searchParams.get('appId') // フロントエンドから送られた appId

  console.log('✅ 受け取った appId:', appId)

  try {
    if (!appId) {
      throw new Error('❌ 環境変数 appId が提供されていません')
    }

    const rakutenApiUrl = `https://app.rakuten.co.jp/services/api/IchibaGenre/Search/${RAKUTEN_API_VERSION_GENRE}?applicationId=${appId}&genreId=${genreId}&format=json`

    const res = await fetch(rakutenApiUrl)
    if (!res.ok)
      throw new Error(`楽天APIエラー: ${res.status} ${res.statusText}`)

    const data = await res.json()
    console.log('✅ 取得したデータ:', data)

    if (!data.children) {
      throw new Error('楽天APIのカテゴリーデータが取得できませんでした')
    }

    const categories = data.children.map((c: any) => ({
      genreId: c.child.genreId,
      genreName: c.child.genreName,
    }))

    return NextResponse.json({ genres: categories })
  } catch (error: unknown) {
    console.error('❌ 楽天APIのカテゴリー取得に失敗:', error)

    let errorMessage = '不明なエラー'
    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json(
      {
        error: '楽天APIのカテゴリー取得に失敗しました',
        details: errorMessage,
      },
      { status: 500 }
    )
  }
}
