import { Module } from '@nestjs/common';
import { StatesProductsService } from './states-products.service';
import { StatesProductsController } from './states-products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { States } from './entities/states-product.entity';
@Module({
  imports: [TypeOrmModule.forFeature([States])],
  controllers: [StatesProductsController],
  providers: [StatesProductsService],
})
export class StatesProductsModule {}
