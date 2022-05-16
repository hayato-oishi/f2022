// エラーハンドラ
export const errorHandler = (error, req, res, next) => {
  // 例外はとにかく500
  res.status(500).json({ error })
}
