import pino from 'express-pino-logger'
import pretty from 'pino-pretty'

export default pino(pretty())