import { http, HttpResponse } from 'msw'
import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-orders-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1199999999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 10000,
    orderItems: [
      {
        id: 'order-item-1',
        quantity: 2,
        priceInCents: 3000,
        product: {
          name: 'Calabresa',
        },
      },
      {
        id: 'order-item-2',
        quantity: 1,
        priceInCents: 4000,
        product: {
          name: 'Margherita',
        },
      },
    ],
  })
})
