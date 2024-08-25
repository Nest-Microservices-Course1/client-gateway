import { OrderStatus } from '../enum/order.enum';
import { IsEnum } from 'class-validator';

export class ChangeOrderStatusDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
