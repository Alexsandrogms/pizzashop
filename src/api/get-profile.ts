import { api } from '@/lib/axios'

export type GetProfileResponse = {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer' | null
  createdAt: string
  updatedAt: string | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
