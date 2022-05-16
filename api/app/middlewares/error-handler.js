// エラーハンドラ
export const errorHandler = (error, req, res, next) => {
  // Todo:ログ出力処理追加予定
  res.status(500).json({ error })
}
