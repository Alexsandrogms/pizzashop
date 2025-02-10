import { http, HttpResponse } from 'msw'
import type { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  async () => {
    return HttpResponse.json({
      id: '12345',
      role: 'manager',
      name: 'John Doe',
      phone: '1199999999',
      email: 'john.doe@example.com',
      createdAt: new Date().toString(),
      updatedAt: null,
    })
  },
)
