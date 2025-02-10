import { http, HttpResponse } from 'msw'
import type { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', async () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    managerId: 'custom-user-id',
    name: 'Pizza Shop',
    createdAt: new Date().toString(),
    updatedAt: null,
    description: 'A local pizza shop',
  })
})
