import type { Order } from '@/api/get-orders'
import { cn } from '@/lib/utils'

type OrderStatus = Pick<Order, 'status'>['status']

type OrderStatusProps = {
  status: OrderStatus
  animate?: boolean
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

export function OrderStatus({ status, animate = true }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid='badge'
        className={cn('rounded-full size-2 bg-slate-400', {
          'bg-slate-500': status === 'pending',
          'bg-rose-500': status === 'canceled',
          'bg-emerald-500': status === 'delivered',
          'bg-amber-500': ['processing', 'delivering'].includes(status),
          'animate-pulse':
            ['processing', 'delivering', 'pending'].includes(status) && animate,
        })}
      />

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
