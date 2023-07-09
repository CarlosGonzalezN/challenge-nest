import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ErrorFilter } from '../utils/errorManager';
import { Category } from '../categorys/entities/categorys.entity';
import { States } from '../states-products/entities/states-product.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(States)
    private stateRepository: Repository<States>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = new Product();
      product.sku = createProductDto.sku;
      product.nombre_producto = createProductDto.nombre_producto;
      product.descripcion = createProductDto.descripcion;
      product.precio = createProductDto.precio;
      product.id_categoria = createProductDto.id_categoria;
      product.id_estado = createProductDto.id_estado;
      return await this.productRepository.save(product);
    } catch (error) {
      return new ErrorFilter();
    }
  }
  async findAll() {
    try {
      const products = await this.productRepository.find();

      const result = products;
      console.log(result);

      return result;
    } catch (error) {
      return new ErrorFilter();
    }
  }

  async findOne(id: number) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      return product;
    } catch (error) {
      // Manejo del error
      return new ErrorFilter();
    }
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    try {
      const product = await this.productRepository.findOne({ where: { id } });

      // Aplicar los cambios del DTO al objeto del producto
      Object.assign(product, updateProductDto);

      // Guardar el producto actualizado en la base de datos
      const updatedProduct = await this.productRepository.save(product);

      return updatedProduct;
    } catch (error) {
      return;
    }
  }

  async remove(id: number) {
    try {
      const deleteResult = await this.productRepository.delete(id);
      return { deleted: true };
    } catch (error) {
      // Manejo del error
      return new ErrorFilter();
    }
  }
}
