import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    await res.revalidate('/categories') // カテゴリーページを再生成
    return res.json({ revalidated: true })
  } catch (error) {
    return res.status(500).json({ message: 'Error revalidating' })
  }
}
