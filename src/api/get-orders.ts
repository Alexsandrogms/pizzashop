import { api } from '@/lib/axios'

type Status = 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'

export type Order = {
  total: number
  orderId: string
  createdAt: string
  customerName: string
  status: Status
}

type Meta = {
  pageIndex: number
  perPage: number
  totalCount: number
}

export type GetOrdersResponse = {
  orders: Order[]
  meta: Meta
}

export type GetOrdersParams = {
  status?: string | null
  orderId?: string | null
  pageIndex?: number | null
  customerName?: string | null
}

export async function getOrders({
  status,
  orderId,
  pageIndex,
  customerName,
}: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      status,
      orderId,
      pageIndex,
      customerName,
    },
  })

  return response.data
}
