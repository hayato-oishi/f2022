import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'
import routers from './routers/index.js'
import { errorHandler } from './middlewares/error-handler.js'
import logger from './modules/logger.js'

const port = 3001

const application = express()

// 基本・共通
application.use(express.json())
application.use(express.urlencoded({ extended: false }))
application.use(cookieParser())

// ログ
application.use(logger)

// エラーハンドリング
application.use(errorHandler)

// ルーターリスト
routers.forEach((router) => application.use(router))

// 起動
application.listen(port)

export default application
