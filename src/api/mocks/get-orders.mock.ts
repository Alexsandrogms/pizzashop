import { http, HttpResponse } from 'msw'
import type { GetOrdersResponse, Order } from '../get-orders'

type OrderStatus = Order['status']

const statusMap: OrderStatus[] = [
  'pending',
  'canceled',
  'delivered',
  'delivering',
  'processing',
]

const orders: Order[] = Array.from({ length: 20 }).map((_, idx) => ({
  total: 240,
  status: statusMap[idx % 5],
  orderId: `order-${idx + 1}`,
  customerName: `Customer ${idx + 1}`,
  createdAt: new Date().toISOString(),
}))

interface SearchParams {
  status?: string
  orderId?: string
  customerName?: string
}

const getSearchParams = (searchParams: URLSearchParams): SearchParams => ({
  status: searchParams.get('status') || undefined,
  orderId: searchParams.get('orderId') || undefined,
  customerName: searchParams.get('customerName') || undefined,
})

const filterOrders = (orders: Order[], param: SearchParams): Order[] => {
  return orders.filter((order) => {
    if (param.customerName && !order.customerName.includes(param.customerName))
      return false

    if (param.orderId && !order.orderId.includes(param.orderId)) return false

    if (param.status && order.status !== param.status) return false

    return true
  })
}

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)
    const pageIndex = Number(searchParams.get('pageIndex') || 0)

    const params = getSearchParams(searchParams)

    console.log(params)

    const filteredOrders = filterOrders(orders, params)

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    })
  },
)
