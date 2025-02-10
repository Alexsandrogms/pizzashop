import { http, HttpResponse } from 'msw'

import type { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', async () => {
  return HttpResponse.json([
    { amount: 10, product: 'Pizza Margherita' },
    { amount: 8, product: 'Pizza Calzone' },
    { amount: 6, product: 'Pizza Diavola' },
    { amount: 4, product: 'Pizza Quattro Formaggi' },
    { amount: 2, product: 'Pizza Carbonara' },
  ])
})
