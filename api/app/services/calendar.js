class Calendar {
  month(reqDate) {
    try {
      // 指定月の最終日
      const lastDate = reqDate.clone().endOf('month').date()
      // 前月の最終日
      const prevLastDate = reqDate.clone().add(-1, 'months').date()
      // 前月の表示数
      const prevDay = reqDate.clone().day() - 1
      // 次月の表示数
      const nextDay = 7 - reqDate.clone().endOf('month').day() - 1
      const days = []
      for (let i = prevDay; i > 0; i--) {
        // 指定年月
        const date = reqDate.clone()
        // 日付設定
        date.date(prevLastDate - i)
        days.push(date.format('YYYY-MM-DD'))
      }
      for (let i = 1; lastDate >= i; i++) {
        // 指定年月
        const date = reqDate.clone()
        date.date(i)
        days.push(date.format('YYYY-MM-DD'))
      }
      for (let i = 1; nextDay >= i; i++) {
        const date = reqDate.clone()
        date.add(1, 'months')
        date.date(i)
        days.push(date.format('YYYY-MM-DD'))
      }
      return days
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new Calendar()
