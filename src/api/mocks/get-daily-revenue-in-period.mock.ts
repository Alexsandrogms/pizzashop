import { http, HttpResponse } from 'msw'
import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', async () => {
  return HttpResponse.json([
    { date: '01/01/2025', receipt: 100 },
    { date: '01/02/2025', receipt: 150 },
    { date: '01/03/2025', receipt: 120 },
    { date: '01/04/2025', receipt: 200 },
    { date: '01/05/2025', receipt: 180 },
    { date: '01/06/2025', receipt: 160 },
    { date: '01/07/2025', receipt: 140 },
    { date: '01/08/2025', receipt: 220 },
  ])
})
