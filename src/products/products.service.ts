import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ErrorFilter } from 'src/utils/errorManager';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const productos = this.productRepository.create(createProductDto);
      return await this.productRepository.save(productos);
    } catch (error) {
      return new ErrorFilter();
    }
  }

  async findAll() {
    try {
      const data = await this.productRepository.find();
      console.log(data);
      return data;
    } catch (error) {
      return new ErrorFilter();
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
