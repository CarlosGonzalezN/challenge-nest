import { Module } from '@nestjs/common';
import { StatesProductsService } from './states-products.service';
import { StatesProductsController } from './states-products.controller';

@Module({
  controllers: [StatesProductsController],
  providers: [StatesProductsService]
})
export class StatesProductsModule {}
