import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { CategorysModule } from './categorys/categorys.module';
import { StatesProductsModule } from './states-products/states-products.module';
import { States } from './states-products/entities/states-product.entity';
import { Category } from './categorys/entities/categorys.entity';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'challenge',
      entities: [Product, States, Category],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, States, Category]),
    CategorysModule,
    StatesProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
