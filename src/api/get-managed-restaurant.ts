import { api } from '@/lib/axios'

export type GetManagedRestaurantResponse = {
  id: string
  name: string
  managerId: string | null
  createdAt: string | null
  updatedAt: string | null
  description: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
