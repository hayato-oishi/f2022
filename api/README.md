## API機能

header:
  content: application/json

### カレンダーデータ取得

path: /calendar/month
method: GET
query:
  year: String
  month: String

Request example:
http://localhost:3001/calendar/month?year=2022&month=6

### お天気リスト取得

path: /weather
method: GET
query:
  start: String
  end: String

Request example:
http://localhost:3001/weather?start=20220501&end=20220530

### お天気リスト登録

path: /weather
method: POST
body:
  date: String(Date Format YYYY-MM-DD)
  code: Number

Request example:
http://localhost:3001/weather

body {
  date: '2022-05-20'
  code: 0
}

- 会員ログイン
path: /user/login
method: POST
body:
  id: String
  password: String

Request example:
http://localhost:3001/user/login

body {
  id: example@example.com
  password: example
}
