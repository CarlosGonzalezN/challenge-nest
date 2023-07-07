import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from 'src/categorys/entities/categorys.entity';
import { States } from 'src/states-products/entities/states-product.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, States])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
