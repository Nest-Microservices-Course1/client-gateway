import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '../enum/order.enum';

export class StatusDto {
  @IsEnum(OrderStatus)
  @IsOptional()
  status: OrderStatus = OrderStatus.PENDING;
}
