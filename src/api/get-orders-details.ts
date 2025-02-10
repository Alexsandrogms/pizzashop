import { api } from '@/lib/axios'

type OrderStatus =
  | 'pending'
  | 'processing'
  | 'delivering'
  | 'delivered'
  | 'canceled'

type Customer = {
  name: string
  email: string
  phone: string | null
}

type OrderItem = {
  id: string
  quantity: number
  priceInCents: number
  product: {
    name: string
  }
}

export type GetOrderDetailsResponse = {
  id: string
  createdAt: string
  status: OrderStatus
  totalInCents: number
  orderItems: OrderItem[]
  customer: Customer | null
}

export type GetOrderDetailsParams = {
  orderId: string
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
