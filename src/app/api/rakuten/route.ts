import { NextResponse } from 'next/server'
import { fetchRakutenItems } from '@/lib/fetchRakuten'
import { PER_PAGE } from '@/config'

export async function GET(req: Request) {
  const searchParams = new URL(req.url).searchParams

  // ✅ クエリパラメータ取得 (デフォルト値は `config.ts` から取得)
  const category = searchParams.get('category') || '爬虫類'
  const sort = searchParams.get('sort') || 'standard'
  const page = Number(searchParams.get('page')) || 1
  const perPage = Number(searchParams.get('perPage')) || PER_PAGE // ✅ `config.ts` から取得

  try {
    // ✅ 楽天APIからデータを取得
    const data = await fetchRakutenItems(category, sort, page, perPage)
    return NextResponse.json(data)
  } catch (error) {
    console.error('❌ 楽天APIの取得に失敗:', error)

    return NextResponse.json(
      {
        error: '楽天APIの取得に失敗しました',
        details: error instanceof Error ? error.message : '不明なエラー',
      },
      { status: 500 }
    )
  }
}
