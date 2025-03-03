import { categoryMap, DEFAULT_GENRE_ID } from '@/lib/categoryMap'
import {
  RAKUTEN_APP_ID,
  RAKUTEN_API_BASE_URL,
  SORT_TYPE_MAP,
  PER_PAGE,
  RAKUTEN_API_VERSION_ITEMS,
} from '@/config'

export async function fetchRakutenItems(
  category: string,
  sort: string,
  page: number,
  perPage: number
) {
  const genreId = categoryMap[category] || DEFAULT_GENRE_ID
  const mappedSort = SORT_TYPE_MAP[sort] || 'standard'
  const offset = (page - 1) * PER_PAGE

  const apiUrl = `${RAKUTEN_API_BASE_URL}/IchibaItem/Search/${RAKUTEN_API_VERSION_ITEMS}?format=json&applicationId=${RAKUTEN_APP_ID}&genreId=${genreId}&sort=${mappedSort}&hits=${perPage}&page=${offset}`

  try {
    const res = await fetch(apiUrl)
    if (!res.ok) throw new Error(`楽天APIエラー: ${res.status}`)
    const data = await res.json()

    return {
      total: data.count,
      items: data.Items.map((item: { Item: any }) => ({
        id: item.Item.itemCode,
        name: item.Item.itemName,
        price: item.Item.itemPrice,
        image: item.Item.mediumImageUrls?.[0]?.imageUrl || '',
        link: item.Item.itemUrl,
      })),
    }
  } catch (error) {
    console.error('❌ 楽天API取得エラー:', error)
    return { total: 0, items: [] }
  }
}
