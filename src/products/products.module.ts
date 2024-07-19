import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, PRODUCT_SERVICE } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE, // Injection token
        transport: Transport.TCP,
        options: {
          host: envs.hostProductMs,
          port: envs.portProductMs,
        },
      },
    ]),
  ],
})
export class ProductsModule {}
