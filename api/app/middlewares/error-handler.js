// エラーハンドラ
export const errorHandler = (error, req, res, next) => {
  // 失敗したらとにかく500
  res.status(500).json({ error })
}
